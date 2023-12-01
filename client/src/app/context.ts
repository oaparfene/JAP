import { createContext } from "react";
import { CollectionExploitationPlanType } from "@/types/main/collectionExploitationPlanType";
import { InformationRequirementType } from "@/types/main/informationRequirementType";
import { GeographicAreaOfInterestType } from "@/types/main/geographicAreaOfInterestType";
import { Plan, Asset, Requirement, Task, FlightPlan } from "@/hooks/usePlan";

export type JAPContextType = {
    mainDrawerWidth: number,
    setMainDrawerWidth: (width: number) => void,
    plans: Plan[],
    getPlan: () => Plan,
    allAssets: Asset[],
    allRequirements: Requirement[],
    addAssets: (assetsToAdd: Asset[]) => void,
    removeAssets: (assetsToRemove: Asset[]) => void,
    addCRs: (CRsToAdd: Requirement[]) => void,
    removeCRs: (CRsToRemove: Requirement[]) => void,
    addAssetsToPlan: (assetsToAdd: Asset[]) => void,
    removeAssetsFromPlan: (assetsToRemove: Asset[]) => void,
    addCRsToPlan: (CRsToAdd: Requirement[]) => void,
    removeCRsFromPlan: (CRsToRemove: Requirement[]) => void,
    addTasksToPlan: (tasksToAdd: Task[]) => void,
    addFlightPlansToPlan: (flightPlansToAdd: FlightPlan[]) => void,
    newPlan: (name: string) => void,
    activePlanIndex: number,
    setActivePlanIndex: (index: number) => void
}

export type JCAPContextType = {
    CMPlans: Array<CollectionExploitationPlanType>,
    PEDPlans: Array<CollectionExploitationPlanType>,
    activePlan: CollectionExploitationPlanType | null,
    requirements: InformationRequirementType[],
    GAOIs: GeographicAreaOfInterestType[],
    setGAOIs: (gaois: GeographicAreaOfInterestType[]) => void,
    setRequirements: (requirements: InformationRequirementType[]) => void,
    setActivePlan: (plan: CollectionExploitationPlanType) => void,
    setCMPlans: (plans: Array<CollectionExploitationPlanType>) => void
    setPEDPlans: (plans: Array<CollectionExploitationPlanType>) => void
}

export type SettingsContextType = {
    BackendAPIURL: string,
    setBackendAPIURL: (url: string) => void,
    MZNAPIURL: string,
    setMZNAPIURL: (url: string) => void,
    MZNSolverEngine: string,
    setMZNSolverEngine: (engine: string) => void,
}

export const JAPContext = createContext<JAPContextType>({
    mainDrawerWidth: 240,
    setMainDrawerWidth: (width: number) => { },
    plans: [],
    getPlan: () => { return { db_id: "", name: 'No Plan', assets: [], requirements: [], allocation: [], flightPlans: [] } },
    allAssets: [],
    allRequirements: [],
    addAssets: (assetsToAdd: Asset[]) => { },
    removeAssets: (assetsToRemove: Asset[]) => { },
    addCRs: (CRsToAdd: Requirement[]) => { },
    removeCRs: (CRsToRemove: Requirement[]) => { },
    addAssetsToPlan: (assetsToAdd: Asset[]) => { },
    removeAssetsFromPlan: (assetsToRemove: Asset[]) => { },
    addCRsToPlan: (CRsToAdd: Requirement[]) => { },
    removeCRsFromPlan: (CRsToRemove: Requirement[]) => { },
    addTasksToPlan: (tasksToAdd: Task[]) => { },
    addFlightPlansToPlan: (flightPlansToAdd: FlightPlan[]) => { },
    newPlan: (name: string) => { },
    activePlanIndex: 0,
    setActivePlanIndex: (index: number) => { }
})

export const JCAPContext =  createContext<JCAPContextType>({
    CMPlans: [],
    PEDPlans: [],
    activePlan: null,
    requirements: [],
    GAOIs: [],
    setGAOIs: (gaois: GeographicAreaOfInterestType[]) => gaois,
    setRequirements: (requirements: InformationRequirementType[]) => requirements,
    setActivePlan: (plan: CollectionExploitationPlanType) => plan,
    setCMPlans: (plans: Array<CollectionExploitationPlanType>) => plans,
    setPEDPlans: (plans: Array<CollectionExploitationPlanType>) => plans
})

export const SettingsContext = createContext<SettingsContextType>({
    BackendAPIURL: 'http://localhost:8090',
    setBackendAPIURL: (url: string) => { },
    MZNAPIURL: 'http://localhost:5000',
    setMZNAPIURL: (url: string) => { },
    MZNSolverEngine: 'gecode',
    setMZNSolverEngine: (engine: string) => { }
})