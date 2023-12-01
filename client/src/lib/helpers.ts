import { ContentType } from "@/types/contentType";
import { CountryCodeType } from "@/types/countryCodeType";
import { FunctionalCategoryCodeType } from "@/types/functionalCategoryCodeType";
import { GeographicAreaCategoryType } from "@/types/geographicAreaCategoryType";
import { InformationRequirementStatusType } from "@/types/informationRequirementStatusType";
import { IntelligenceDisciplineType } from "@/types/intelligenceDisciplineType";
import { CollectionExploitationPlanType } from "@/types/main/collectionExploitationPlanType";
import { GeographicAreaOfInterestType } from "@/types/main/geographicAreaOfInterestType";
import { InformationRequirementType } from "@/types/main/informationRequirementType";
import { MissionType } from "@/types/missionType";
import { ProductTypeType } from "@/types/productTypeType";
import { PublishedStatusType } from "@/types/publishedStatusType";
import { SecurityClassificationType } from "@/types/securityClassificationType";
import { ISRSystemType } from "@/types/main/ISRSystemType";
import { uuid } from 'uuidv4';

export const addTasksToCMPlan = (plan: CollectionExploitationPlanType, tasks: InformationRequirementType[]): CollectionExploitationPlanType => {
    if (!plan.InformationRequirements)
        plan.InformationRequirements = [];
    for (let i = 0; i < tasks.length; i++) {
        plan.InformationRequirements?.push({
            id: i,
            InformationRequirement: tasks[i]
        });
    }
    return plan;
}

export const removeTasksFromCMPlan = (plan: CollectionExploitationPlanType, tasks: InformationRequirementType[]): CollectionExploitationPlanType => {
    plan?.InformationRequirements?.filter((e) => {
        !tasks.includes(e.InformationRequirement!)
    })
    return plan;
}

export const getReqsFromPlan = (plan: CollectionExploitationPlanType): InformationRequirementType[] => {
    return plan.InformationRequirements.map((e) => e.InformationRequirement)
}

export const addTasksToPEDPlan = (plan: CollectionExploitationPlanType, tasks: InformationRequirementType[]): CollectionExploitationPlanType => {
    plan.InformationRequirements = [];
    for (let i = 0; i < tasks.length; i++) {
        plan.InformationRequirements?.push({
            id: i,
            InformationRequirement: tasks[i]
        });
    }
    return plan;
}

export const generateRandomTasks = (amount: number): InformationRequirementType[] => {
    const tasks: InformationRequirementType[] = [];
    for (let i = 0; i < amount; i++) {
        tasks.push(createCollectionTask(`Task ${i}`));
    }
    return tasks;
}

export const generateRandomTasksWithGAOI = (gaois: GeographicAreaOfInterestType[]): InformationRequirementType[] => {
    const tasks: InformationRequirementType[] = [];
    for (let i = 0; i < gaois.length; i++) {
        tasks.push(createCollectionTask(`Task ${i}`, gaois[i]));
    }
    return tasks;
}

export const generateRandomGAOIs = (amount: number): GeographicAreaOfInterestType[] => {
    const gaois: GeographicAreaOfInterestType[] = [];
    for (let i = 0; i < amount; i++) {
        gaois.push(createGAOI(`GAOI ${i}`));
    }
    return gaois;
}

export const createGAOI = (name: string): GeographicAreaOfInterestType => {
    const gaoi: GeographicAreaOfInterestType = {
        Identifier: uuid(),
        GeographicAreaCategory: GeographicAreaCategoryType.NAI,
        SerialNumber: uuid(),
        CountryCode: CountryCodeType.NLD,
        Description: "Example GAOI Description",
        Name: name,
        FunctionalCategoryCode: FunctionalCategoryCodeType.GROUNDACTIVITY,
        CreationDateTime: {
            Value: new Date()
        },
        Creator: {
            MilitaryUnit: {
                UnitIdentifier: "1",
                Nation: CountryCodeType.NLD
            },
            UniquePlatformIdentification: {
                CountryCode: CountryCodeType.NLD,
                PlatformID: "1"
            },
            Author: "admin"
        },
        Security: {
            Policy: "NATO",
            Classification: SecurityClassificationType.UNCLASSIFIED,
        },
        Deleted: false
    }
    return gaoi
}

export const createCMPlan = (name: string): CollectionExploitationPlanType => {
    return {
        Identifier: uuid(),
        Content: ContentType.CollectionTaskList,
        Name: name,
        SerialNumber: uuid(),
        OpenEndedTimeInterval: {
            Start: {
                Value: new Date()
            }
        },
        PublishedStatus: PublishedStatusType.Draft,
        MissionName: "Testing...",
        MissionType: MissionType.ExerciseName,
        ExerciseIndicator: true,
        schemaVersion: 1,
        CreationDateTime: {
            Value: new Date()
        },
        Creator: {
            MilitaryUnit: {
                UnitIdentifier: "1",
                Nation: CountryCodeType.NLD
            },
            UniquePlatformIdentification: {
                CountryCode: CountryCodeType.NLD,
                PlatformID: "1"
            },
            Author: "admin"
        },
        Security: {
            Policy: "NATO",
            Classification: SecurityClassificationType.UNCLASSIFIED,
        },
        Deleted: false,
        InformationRequirements: [],
    }
}

const getResourceAvailableInitData = () => {
    const temp = Math.floor(Math.random()*3)
    if (temp == 0)
        return 'not planned'
    if (temp == 1)
        return 'planned'
    if (temp == 2)
        return 'collected'
    return 'collected'
}

export const createCollectionTask = (name: string, gaoi?: GeographicAreaOfInterestType): InformationRequirementType => {
    return {
        active: false,
        assignedUnit: '',
        id: uuid(),
        resourceAvailable: getResourceAvailableInitData(),
        Identifier: uuid(),
        RequiredInformation: "Example Required Information",
        LatestDateTimeZuluOfInformationValue: {
            Continuously: false,
            EndDateTimeZulu: {
                Value: new Date('December 17, 2023 03:24:00')
            }
        },
        Name: name,
        Priority: "1",
        Status: InformationRequirementStatusType.APPROVED,
        SerialNumber: uuid(),
        RequiredProduct: [
            {
                MaximumAllowedClassificationLevel: {
                    Policy: "NATO",
                    Classification: SecurityClassificationType.UNCLASSIFIED,
                },
                Product: {
                    Product: {},
                    ProductTypeType: ProductTypeType.StillImage,
                }
            }
        ],
        Originator: {
            Requestor: "ACO"
        },
        IntelCollectionDiscipline: [IntelligenceDisciplineType.ELINT],
        CreationDateTime: {
            Value: new Date()
        },
        Creator: {
            MilitaryUnit: {
                UnitIdentifier: "1",
                Nation: CountryCodeType.NLD
            },
            Author: "admin",
        },
        Security: {
            Policy: "NATO",
            Classification: SecurityClassificationType.UNCLASSIFIED,
        },
        Deleted: false,
        GeographicAreaOfInterestReference: gaoi ? [{
            ownedId: 0,
            GeographicAreaOfInterest: gaoi
        }] : undefined
    }
}


export const createPEDPlan = (name: string): CollectionExploitationPlanType => {
    return {
        Identifier: uuid(),
        Content: ContentType.CollectionExploitationPlan,
        Name: name,
        SerialNumber: uuid(),
        OpenEndedTimeInterval: {
            Start: {
                Value: new Date()
            }
        },
        PublishedStatus: PublishedStatusType.Draft,
        MissionName: "Testing...",
        MissionType: MissionType.ExerciseName,
        ExerciseIndicator: true,
        schemaVersion: 1,
        CreationDateTime: {
            Value: new Date()
        },
        Creator: {
            MilitaryUnit: {
                UnitIdentifier: "1",
                Nation: CountryCodeType.NLD
            },
            UniquePlatformIdentification: {
                CountryCode: CountryCodeType.NLD,
                PlatformID: "1"
            },
            Author: "admin"
        },
        Security: {
            Policy: "NATO",
            Classification: SecurityClassificationType.UNCLASSIFIED,
        },
        Deleted: false,
        InformationRequirements: [],
    }
}

export const createISRSystemType = (params: any): ISRSystemType => {
    const temp: ISRSystemType = {
        Identifier: uuid(),
        Identifiers: {
            UniquePlatformIdentification: {
                CountryCode: CountryCodeType.NLD,
                PlatformID: uuid()
            },
            NIC: '',
            RIC: ''
        },
        SystemDescription: 'Sample Description',
        Capability: {
            Exploitation: {
                GMTIAnalysis: params.gmti,
                ImageAnalysis: params.image,
                VideoAnalysis: params.video,
                ESMAnalysis: params.esm,
                HUMINT: params.humint,
                Reporting: {
                    RECCEXREP: true
                },
            }
        },
        PresenceAtLocation: {
            GeographicLocation: {
                AreaDescription: 'area description'
            },
            StartDateTimeZulu: {
                Value: new Date()
            }
        },
        ContactInfo: {
            LastName: params.lastName,
            FirstName: params.firstName,
            Mail: params.email,
            PhoneNumbers: [params.phoneNumber]
        },
        EnglishName: params.name,
        Name: params.name,
        CreationDateTime: {
            Value: new Date()
        },
        Creator: {
            MilitaryUnit: {
                UnitIdentifier: "1",
                Nation: CountryCodeType.NLD
            },
            UniquePlatformIdentification: {
                CountryCode: CountryCodeType.NLD,
                PlatformID: "1"
            },
            Author: "admin"
        },
        Security: {
            Policy: "NATO",
            Classification: SecurityClassificationType.UNCLASSIFIED,
        },
        Deleted: false,
    }
    return temp
}