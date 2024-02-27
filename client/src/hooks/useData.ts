import { EventAssets, EventRequirements } from "@/5gConstants";
import { JAPContext, SettingsContext } from "@/app/context";
import { crs, generateDataFromORBAT } from "@/constants";
import { useContext, useEffect, useState } from "react";
import { Asset, FlightPlan, Plan, Requirement, Task } from "./usePlan";
import PocketBase from 'pocketbase';

export interface PrePlan {
    name: string,
    assets: Asset[],
    requirements: Requirement[],
    allocation: Task[]
    flightPlans: FlightPlan[]
}

export interface PreTask {
    ID: number,
    Asset_Used: string,
    Requirement_to_Collect: string,
    Coordinates: string,
    Start: Date,
    End: Date
}

export interface PreFlightPlan {
    ID: number,
    Asset_Used: string,
    Flight_Path: string[],
}

export interface PreAsset {
    ID: number,
    UniquePlatformID: string,
    Description: string,
    AvailableFrom: Date,
    AvailableUntil?: Date,
    Sensor: string,
    Unit: string,
    Location: string,
    Capacity: string
    To_Collect?: string[],
    Plans_containing_self?: string[],
}

export interface PreRequirement {
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
    Plans_containing_self?: string,
    To_Be_Collected_By?: string,
}


export const useData = () => {


    const { allAssets, allRequirements, setAllAssets, setAllRequirements, allPlans, setAllPlans } = useContext(JAPContext)
    const { BackendAPIURL } = useContext(SettingsContext)
    const pb = new PocketBase(BackendAPIURL);


    const fetchPlansFromBackend = async () => {
        fetch(`${BackendAPIURL}/api/collections/Plans/records?expand=assets,requirements,allocation,flightPlans`).then(res => res.json().then(data => {
            const plans_from_data = data.items.map((item: any, index: number) => {
                return {
                    db_id: item.id,
                    name: item.name,
                    assets: item.expand?.assets?.map((asset: any, _index: number) => {
                        return {
                            ID: _index,
                            AvailableFrom: new Date(asset.AvailableFrom),
                            ...asset
                        }
                    }) || [],
                    requirements: item.expand?.requirements?.map((cr: any, _index: number) => {
                        return {
                            ID: _index,
                            ...cr
                        }
                    }) || [],
                    allocation: item.expand?.allocation || [],
                    flightPlans: item.expand?.flightPlans || []
                }
            })
            console.log("fetching Plans:", data)
            setAllPlans(plans_from_data)
        }
        )).catch(err => {
            console.log(err)
            setAllPlans([])
        })
    }

    const fetchAssetsFromBackend = async () => {
        fetch(`${BackendAPIURL}/api/collections/Assets/records`).then(res => res.json().then(data => {
            const assets_from_data = data.items.map((item: any, index: number) => {
                return {
                    db_id: item.id,
                    ID: index,
                    UniquePlatformID: item.UniquePlatformID,
                    Description: item.Description,
                    AvailableFrom: new Date(item.AvailableFrom),
                    AvailableUntil: new Date(item.AvailableUntil),
                    Sensor: item.Sensor,
                    Unit: item.Unit,
                    Location: item.Location,
                    Capacity: item.Capacity,
                    Plans_containing_self: item.Plans_containing_self,
                    To_Collect: item.To_Collect
                }
            })
            //console.log(data)
            setAllAssets(assets_from_data)
        })).catch(err => {
            console.log(err)
            setAllAssets(EventAssets.map((item: any, index: number) => {
                return {
                    db_id: "",
                    ID: index,
                    UniquePlatformID: item.UniquePlatformID,
                    Description: item.Description,
                    AvailableFrom: new Date(item.AvailableFrom),
                    Sensor: item.Sensor,
                    Unit: item.Unit,
                    Location: item.Location,
                    Capacity: item.Capacity
                }
            }
            ))
        })
    }

    const fetchCRsFromBackend = async () => {
        //console.log("fetching CRs from backend")
        try {
            const res = await pb.collection('Requirements').getFullList()
            //console.log("through sdk: ", res)
            const reqs_from_data = res.map((item: any, index: number) => {
                return {
                    db_id: item.id,
                    ID: index,
                    Operation: item.Operation,
                    Requester: item.Requester,
                    CR_Rank: item.CR_Rank,
                    Justification: item.Justification,
                    Location: item.Location,
                    Coordinates: item.Coordinates,
                    Target_ID: item.Target_ID,
                    Location_Category: item.Location_Category,
                    Coll_Start_Time: item.Coll_Start_Time,
                    Coll_End_Time: item.Coll_End_Time,
                    Sensor_Visibility: item.Sensor_Visibility,
                    LTIOV: item.LTIOV,
                    Required_Information: item.Required_Information,
                    Intel_Discipline: item.Intel_Discipline,
                    Required_Product: item.Required_Product,
                    ER_Report_Frequency: item.ER_Report_Frequency,
                    Recurrance: item.Recurrance,
                    RP_Remarks: item.RP_Remarks,
                    Reporting_Instructions: item.Reporting_Instructions,
                    ER_Remarks: item.ER_Remarks,
                    Plans_containing_self: item.Plans_containing_self,
                    To_Be_Collected_By: item.To_Be_Collected_By
                }
            })
            setAllRequirements(reqs_from_data)
        } catch (err) {
            console.log(err)
        }
    }

    const uploadCRtoBackend = async (crs: PreRequirement[] | Requirement[]) => {

        const newcrs: Requirement[] = []

        crs.forEach(async (cr) => {
            if ('db_id' in cr) {
                const res = await pb.collection('Requirements').update(cr.db_id as string, {
                    Operation: cr.Operation,
                    Requester: cr.Requester,
                    CR_Rank: cr.CR_Rank,
                    Justification: cr.Justification,
                    Location: cr.Location,
                    Coordinates: cr.Coordinates,
                    Target_ID: cr.Target_ID,
                    Location_Category: cr.Location_Category,
                    Coll_Start_Time: cr.Coll_Start_Time,
                    Coll_End_Time: cr.Coll_End_Time,
                    Sensor_Visibility: cr.Sensor_Visibility,
                    LTIOV: cr.LTIOV,
                    Status: cr.Status,
                    Required_Information: cr.Required_Information,
                    Intel_Discipline: cr.Intel_Discipline,
                    Required_Product: cr.Required_Product,
                    ER_Report_Frequency: cr.ER_Report_Frequency,
                    Recurrance: cr.Recurrance,
                    RP_Remarks: cr.RP_Remarks,
                    Reporting_Instructions: cr.Reporting_Instructions,
                    ER_Remarks: cr.ER_Remarks,
                    Plans_containing_self: cr.Plans_containing_self,
                    To_Be_Collected_By: cr.To_Be_Collected_By
                });
                console.log(res)
                newcrs.push(cr as Requirement)
            } else {
                const res = await pb.collection('Requirements').create({
                    Operation: cr.Operation,
                    Requester: cr.Requester,
                    CR_Rank: cr.CR_Rank,
                    Justification: cr.Justification,
                    Location: cr.Location,
                    Coordinates: cr.Coordinates,
                    Target_ID: cr.Target_ID,
                    Location_Category: cr.Location_Category,
                    Coll_Start_Time: cr.Coll_Start_Time,
                    Coll_End_Time: cr.Coll_End_Time,
                    Sensor_Visibility: cr.Sensor_Visibility,
                    LTIOV: cr.LTIOV,
                    Status: cr.Status,
                    Required_Information: cr.Required_Information,
                    Intel_Discipline: cr.Intel_Discipline,
                    Required_Product: cr.Required_Product,
                    ER_Report_Frequency: cr.ER_Report_Frequency,
                    Recurrance: cr.Recurrance,
                    RP_Remarks: cr.RP_Remarks,
                    Reporting_Instructions: cr.Reporting_Instructions,
                    ER_Remarks: cr.ER_Remarks,
                    Plans_containing_self: cr.Plans_containing_self,
                    To_Be_Collected_By: cr.To_Be_Collected_By
                }, {
                    requestKey: null
                });
                console.log(res)
                const newCR = {
                    db_id: res.id,
                    ...cr
                } as Requirement
                newcrs.push(newCR)
            }
        })
        return newcrs
    }

    //

    const uploadAssetToBackend = async (assets: PreAsset[] | Asset[]) => {

        const newAssets: Asset[] = []

        assets.forEach(async (asset: Asset | PreAsset) => {
            if ('db_id' in asset) {
                const res = await pb.collection('Assets').update(asset.db_id as string, {
                    UniquePlatformID: asset.UniquePlatformID,
                    Description: asset.Description,
                    AvailableFrom: asset.AvailableFrom,
                    AvailableUntil: asset.AvailableUntil,
                    Sensor: asset.Sensor,
                    Unit: asset.Unit,
                    Location: asset.Location,
                    Capacity: asset.Capacity,
                    Plans_containing_self: asset.Plans_containing_self,
                    To_Collect: asset.To_Collect
                });
                console.log(res)
                newAssets.push(asset as Asset)
            } else {
                const res = await pb.collection('Assets').create({
                    UniquePlatformID: asset.UniquePlatformID,
                    Description: asset.Description,
                    AvailableFrom: asset.AvailableFrom,
                    AvailableUntil: asset.AvailableUntil,
                    Sensor: asset.Sensor,
                    Unit: asset.Unit,
                    Location: asset.Location,
                    Capacity: asset.Capacity,
                    Plans_containing_self: asset.Plans_containing_self,
                    To_Collect: asset.To_Collect
                }, {
                    requestKey: null
                });
                console.log(res)
                const newCR = {
                    db_id: res.id,
                    ...asset
                } as Asset
                newAssets.push(newCR)
            }
        })
        return newAssets
    }

    const savePlan = async (plan: PrePlan | Plan) => {
        const res = await pb.collection('Plans').create({
            name: plan.name,
            'assets+': plan.assets.map(asset => asset.db_id),
            'requirements+': plan.requirements.map(cr => cr.db_id),
            'allocation+': plan.allocation.map(task => task.db_id),
            'flightPlans+': plan.flightPlans.map(flightPlan => flightPlan.db_id),
        });
        console.log(res)
        return res.id
    }

    const saveTask = async (task: PreTask | Task) => {
        console.log("task: ", task)
        const res = await pb.collection('Tasks').create({
            Asset_Used: task.Asset_Used,
            Requirement_to_Collect: task.Requirement_to_Collect,
            Coordinates: task.Coordinates,
            Start: task.Start,
            End: task.End,
        });
        //console.log(res)
        return res.id
    }

    const saveFlightPlan = async (flightpPlan: PreFlightPlan | FlightPlan) => {
        const res = await pb.collection('FlightPlans').create({
            Asset_Used: flightpPlan.Asset_Used,
            Flight_Path: flightpPlan.Flight_Path,
        });
        //console.log(res)
        return res.id
    }

    const addAssets = (assetsToAdd: Asset[]) => {
        console.log(assetsToAdd)
        setAllAssets([...allAssets, ...assetsToAdd])
        console.log(allAssets)
    }

    const removeAssets = (assetsToRemove: Asset[]) => {
        setAllAssets(allAssets.filter(asset => !assetsToRemove.includes(asset)))
    }

    const addCRs = (CRsToAdd: Requirement[]) => {
        setAllRequirements([...allRequirements, ...CRsToAdd])
    }

    const removeCRs = (CRsToRemove: Requirement[]) => {
        setAllRequirements(allRequirements.filter(cr => !CRsToRemove.includes(cr)))
    }

    return {
        addAssets,
        removeAssets,
        addCRs,
        removeCRs,
        fetchAssetsFromBackend,
        fetchCRsFromBackend,
        fetchPlansFromBackend,
        uploadCRtoBackend,
        uploadAssetToBackend,
        savePlan,
        saveTask,
        saveFlightPlan
    }

}