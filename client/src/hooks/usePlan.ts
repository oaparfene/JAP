import { useContext, useEffect, useState } from "react";
import { useData } from "./useData";
import { JAPContext } from "@/app/context";

export interface Plan {
    db_id: string,
    name: string,
    assets: Asset[],
    requirements: Requirement[],
    allocation: Task[]
    flightPlans: FlightPlan[]
}

export interface Task {
    db_id: string,
    ID: number,
    Asset_Used: string,
    Requirement_to_Collect: string,
    Coordinates: string,
    Start: Date,
    End: Date
}

export interface FlightPlan {
    db_id: string,
    ID: number,
    Asset_Used: string,
    Flight_Path: string[],
}

export interface Asset {
    db_id: string,
    ID: number,
    UniquePlatformID: string,
    Description: string,
    AvailableFrom: Date,
    AvailableUntil?: Date,
    Sensor: string,
    Unit: string,
    Location: string,
    Capacity: string,
    Plans_containing_self?: string[],
    To_Collect?: string[],

}

export interface Requirement {
    db_id: string,
    ID: number,
    Operation: string,
    Requester: string,
    CR_Rank?: string,
    Justification?: string,
    Status?: string,
    Location: string,
    Shape?: string,
    Location_Type?: string,
    Coordinates: string,
    Circle_Radius?: number | null | string,
    Target_ID?: string,
    Location_Category?: string,
    Coll_Start_Date?: string,
    Coll_End_Date?: string,
    Coll_Start_Time: string,
    Coll_End_Time: string,
    Recurrance?: string,
    ISR_Role?: string,
    Sensor_Visibility?: string,
    Required_Information:
    string,
    Intel_Discipline: string,
    Exploitation_Requirement?: string,
    ER_Remarks?: string,
    ER_Report_Frequency?: string,
    Required_Product: string,
    RP_Remarks?: string,
    RP_Report_Frequency?: string,
    LTIOV: string,
    Latest_Report_Time?: string,
    Reporting_Instructions?:
    string,
    Plans_containing_self?: string[],
    To_Be_Collected_By?: string,
}

export const usePlan = () => {
    const { allPlans, setAllPlans, activePlanIndex, setActivePlanIndex } = useContext(JAPContext)
    const { savePlan, fetchPlansFromBackend } = useData()

    console.log('allPlans: ', allPlans)

    const getPlan = () => {
        if (allPlans)
            return allPlans[activePlanIndex]
        return { db_id: "", name: 'No Plan', assets: [], requirements: [], allocation: [], flightPlans: [] }
    }

    const newPlan = async (name: string) => {
        console.log("all current plan: ", allPlans)
        const plan = {
            name: name,
            assets: [],
            requirements: [],
            allocation: [],
            flightPlans: []
        }
        const planId = await savePlan(plan)
        console.log('plan saved with planId: ', planId)
        const savedPlan = {
            db_id: planId,
            name: name,
            assets: [],
            requirements: [],
            allocation: [],
            flightPlans: []
        }
        var tempPlans = allPlans
        console.log('tempPlans: ', tempPlans)
        tempPlans.push(savedPlan)
        console.log('pushed: ', savedPlan)
        setAllPlans(tempPlans)
        setActivePlanIndex(tempPlans.length - 1)
        console.log('set active plan index to: ', tempPlans.length - 1)
        fetchPlansFromBackend()
        //console.log('plans: ', plans)
        //console.log('activePlanIndex: ', activePlanIndex)
    }

    const addCRsToPlan = (CRsToAdd: Requirement[], plan_id?: string) => {
        if (!plan_id) {
            plan_id = allPlans[activePlanIndex].db_id

            var tempPlans = allPlans
            var plan = tempPlans[activePlanIndex]
            const updatedPlan = {
                db_id: plan.db_id,
                name: plan.name,
                assets: plan.assets,
                requirements: [...new Set(plan.requirements.concat(CRsToAdd))],
                allocation: plan.allocation,
                flightPlans: plan.flightPlans
            }
            tempPlans[activePlanIndex] = updatedPlan
            //setPlans(tempPlans)
        } else if (!!plan_id) {
            var tempPlans = allPlans
            // @ts-ignore
            var plan = tempPlans.find(el => el.db_id === plan_id)
            if (!plan) return
            const updatedPlan = {
                db_id: plan.db_id,
                name: plan.name,
                assets: plan.assets,
                requirements: [...new Set(plan.requirements.concat(CRsToAdd))],
                allocation: plan.allocation,
                flightPlans: plan.flightPlans
            }
            const index = tempPlans.findIndex(el => el.db_id === plan_id)
            tempPlans[index] = updatedPlan
            //setPlans(tempPlans)
        }
    }

    const removeCRsFromPlan = (CRsToRemove: Requirement[], plan_id?: string) => {
        if (!plan_id) {
            plan_id = allPlans[activePlanIndex].db_id

        var tempPlans = allPlans
        var plan = tempPlans[activePlanIndex]
        const updatedPlan = {
            db_id: plan.db_id,
            name: plan.name,
            assets: plan.assets,
            requirements: plan.requirements.filter(el => !CRsToRemove.find(el2 => el2.db_id === el.db_id)),
            allocation: plan.allocation,
            flightPlans: plan.flightPlans
        }
        tempPlans[activePlanIndex] = updatedPlan
        //setPlans(tempPlans)
    } else if (!!plan_id) {
        var tempPlans = allPlans
        // @ts-ignore
        var plan = tempPlans.find(el => el.db_id === plan_id)
        if (!plan) return
        const updatedPlan = {
            db_id: plan.db_id,
            name: plan.name,
            assets: plan.assets,
            requirements: plan.requirements.filter(el => !CRsToRemove.find(el2 => el2.db_id === el.db_id)),
            allocation: plan.allocation,
            flightPlans: plan.flightPlans
        }
        const index = tempPlans.findIndex(el => el.db_id === plan_id)
        tempPlans[index] = updatedPlan
        //setPlans(tempPlans)
    }
    }

    const addAssetsToPlan = (assetsToAdd: Asset[]) => {
        var tempPlans = allPlans
        var plan = tempPlans[activePlanIndex]
        console.log('plan', plan)
        const updatedPlan = {
            db_id: plan.db_id,
            name: plan.name,
            assets: addAssetsWithNoDuplicates(plan.assets, assetsToAdd),
            requirements: plan.requirements,
            allocation: plan.allocation,
            flightPlans: plan.flightPlans
        }
        tempPlans[activePlanIndex] = updatedPlan
        //setPlans(tempPlans)
    }

    const removeAssetsFromPlan = (assetsToRemove: Asset[]) => {
        var tempPlans = allPlans
        var plan = tempPlans[activePlanIndex]
        const updatedPlan = {
            db_id: plan.db_id,
            name: plan.name,
            assets: plan.assets.filter(el => !assetsToRemove.includes(el)),
            requirements: plan.requirements,
            allocation: plan.allocation,
            flightPlans: plan.flightPlans
        }
        tempPlans[activePlanIndex] = updatedPlan
        //setPlans(tempPlans)
    }

    const addTasksToPlan = (tasksToAdd: Task[]) => {
        var tempPlans = allPlans
        var plan = tempPlans[activePlanIndex]
        const updatedPlan = {
            db_id: plan?.db_id || "temp",
            name: plan.name,
            assets: plan.assets,
            requirements: plan.requirements,
            allocation: tasksToAdd,
            flightPlans: plan.flightPlans
        }
        tempPlans[activePlanIndex] = updatedPlan
        //setPlans(tempPlans)
    }

    const addFlightPlansToPlan = (flightPlansToAdd: FlightPlan[]) => {
        var tempPlans = allPlans
        var plan = tempPlans[activePlanIndex]
        const updatedPlan = {
            db_id: plan?.db_id || "temp",
            name: plan.name,
            assets: plan.assets,
            requirements: plan.requirements,
            allocation: plan.allocation,
            flightPlans: flightPlansToAdd
        }
        tempPlans[activePlanIndex] = updatedPlan
        //setPlans(tempPlans)
    }

    const addAssetsWithNoDuplicates = (array: Asset[], items: Asset[]) => {
        var tempArray = array
        console.log('existing items', tempArray)
        items.forEach(item => {
            console.log('item to add:', item)
            if (!tempArray.find(el => el.ID === item.ID))
                tempArray = [...tempArray, item]
        })
        return tempArray
    }

    useEffect(() => {
        //newPlan('AAA')
    }, [])

    return {
        plans: allPlans,
        setPlans: setAllPlans,
        getPlan,
        addAssetsToPlan,
        removeAssetsFromPlan,
        addCRsToPlan,
        removeCRsFromPlan,
        addTasksToPlan,
        addFlightPlansToPlan,
        newPlan,
        activePlanIndex,
        setActivePlanIndex
    }
}