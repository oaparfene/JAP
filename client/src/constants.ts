import { PreAsset } from "./hooks/useData";
import { Asset } from "./hooks/usePlan";

const today = new Date();

export const crs = [
    {
        ID: 1,
        Operation: 'TestOpSouth',
        Requester: 'ACC',
        CR_Rank: '',
        Justification: 'Supports PIR 1',
        Status: 'APPROVED',
        Location: 'Target 1 - Point Location',
        Shape: 'POINT',
        Location_Type: 'LOCATION',
        Coordinates: '47.111261N 27.674561E',
        Circle_Radius: null,
        Target_ID: '1234AA0001',
        Location_Category: 'CAT 01 - AIRFIELDS',
        Coll_Start_Date: '01/11/2017',
        Coll_End_Date: '01/12/2017',
        Coll_Start_Time: '07:00',
        Coll_End_Time: '08:00',
        Recurrance: '',
        ISR_Role: 'TGT DEV',
        Sensor_Visibility: 'LOW',
        Required_Information:
            '(1) What are the locations, intent and capabilities of the OF Air Forces? Air line of communications.',
        Intel_Discipline: 'IMINT',
        Exploitation_Requirement: 'ANNOTATED STILL IMAGE',
        ER_Remarks: 'Include runway status',
        ER_Report_Frequency: 'POST MISSION',
        Required_Product: 'ISREXREP',
        RP_Remarks: 'Max classification NU',
        RP_Report_Frequency: 'POST MISSION',
        LTIOV: '01/12/2017 00:00',
        Latest_Report_Time: '01/12/2017 00:00',
        Reporting_Instructions:
            'Send copy of report to originator at originator@acc.nato.int',
    },
    {
        ID: 2,
        Operation: 'TestOpSouth',
        Requester: 'ACC',
        CR_Rank: '',
        Justification: 'Supports PIR 2',
        Status: 'APPROVED',
        Location: 'Target 2 - Circle Location',
        Shape: 'CIRCLE',
        Location_Type: 'TAI',
        Coordinates: '46.494611N 24.576416E',
        Circle_Radius: 3000,
        Target_ID: '1234AA0002',
        Location_Category: 'CAT 02 - ANTI-AIRCRAFT ARTILLERY AND MISSILE SYSTEMS',
        Coll_Start_Date: '01/11/2017',
        Coll_End_Date: '01/12/2017',
        Coll_Start_Time: '08:00',
        Coll_End_Time: '10:00',
        Recurrance: '',
        ISR_Role: 'TGT DEV',
        Sensor_Visibility: 'LOW',
        Required_Information:
            '(2) Which indications exist of OF hostile activities? Air defence installations.',
        Intel_Discipline: 'IMINT',
        Exploitation_Requirement: 'ANNOTATED STILL IMAGE',
        ER_Remarks: 'Include installation classification',
        ER_Report_Frequency: 'POST MISSION',
        Required_Product: 'ISREXREP',
        RP_Remarks: 'Max classification NU',
        RP_Report_Frequency: 'POST MISSION',
        LTIOV: '01/12/2017 00:00',
        Latest_Report_Time: '01/12/2017 00:00',
        Reporting_Instructions:
            'Send copy of report to originator at originator@acc.nato.int',
    },
    {
        ID: 3,
        Operation: 'TestOpSouth',
        Requester: 'ACC',
        CR_Rank: '',
        Justification: 'Supports PIR 3',
        Status: 'APPROVED',
        Location: 'Target 3 - Circle Location',
        Shape: 'AREA',
        Location_Type: 'NAI',
        Coordinates:
            '46.494611N 24.576416E; 46.314494N 24.296908E; 46.306728N 24.296308E;46.305364N 24.286351E',
        Circle_Radius: null,
        Target_ID: '1234AA0003',
        Location_Category: 'CAT 06 - GROUND ACTIVITY',
        Coll_Start_Date: '01/11/2017',
        Coll_End_Date: '01/12/2017',
        Coll_Start_Time: '08:00',
        Coll_End_Time: '09:00',
        Recurrance: '',
        ISR_Role: 'TGT DEV',
        Sensor_Visibility: 'LOW',
        Required_Information:
            '(3) What are the locations, intent and capabilities of the OF Ground Forces?',
        Intel_Discipline: 'HUMINT',
        Exploitation_Requirement: 'HUMINT',
        ER_Remarks: 'Include details',
        ER_Report_Frequency: 'IMMEDIATELY',
        Required_Product: 'HUMINTREP',
        RP_Remarks: 'Max classification NU',
        RP_Report_Frequency: 'IMMEDIATELY',
        LTIOV: '01/12/2017 00:00',
        Latest_Report_Time: '01/12/2017 00:00',
        Reporting_Instructions:
            'Send copy of report to originator at originator@acc.nato.int',
    },
    {
        ID: 4,
        Operation: 'TestOpSouth',
        Requester: 'ACC',
        CR_Rank: '',
        Justification: 'Supports PIR 4',
        Status: 'APPROVED',
        Location: 'Target 4 - Area Location',
        Shape: 'ROUTE',
        Location_Type: 'LOCATION',
        Coordinates:
            '46.323920N 24.219489E; 46.324038N 24.215541E; 46.324098N 24.210992E; 46.325164N 24.194598E; 46.329491N 24.178548E; 46.330913N 24.167047E; 46.331091N 24.159064E',
        Circle_Radius: null,
        Target_ID: '1234AA0004',
        Location_Category: 'CAT 09 - ROUTE RECONNAISSANCE',
        Coll_Start_Date: '01/11/2017',
        Coll_End_Date: '01/12/2017',
        Coll_Start_Time: '09:00',
        Coll_End_Time: '10:00',
        Recurrance: '',
        ISR_Role: 'TGT DEV',
        Sensor_Visibility: 'LOW',
        Required_Information:
            '(4) What are the lines of communication of the OF Ground Forces?',
        Intel_Discipline: 'IMINT',
        Exploitation_Requirement: 'FULL MOTION VIDEO LIVE FEED',
        ER_Remarks: 'Include details',
        ER_Report_Frequency: 'HOURLY',
        Required_Product: 'INTSUM',
        RP_Remarks: 'Max classification NU',
        RP_Report_Frequency: 'IMMEDIATELY',
        LTIOV: '01/12/2017 00:00',
        Latest_Report_Time: '01/12/2017 00:00',
        Reporting_Instructions:
            'Send copy of report to originator at originator@acc.nato.int',
    },
    {
        ID: 5,
        Operation: 'TestOpSouth',
        Requester: 'ACC',
        CR_Rank: '',
        Justification: 'Supports PIR 5',
        Status: 'APPROVED',
        Location: 'Target 5 - Point Location',
        Shape: 'POINT',
        Location_Type: 'LOCATION',
        Coordinates: '46.220588N 24.108810E',
        Circle_Radius: null,
        Target_ID: '1234AA0005',
        Location_Category: 'CAT 01 - AIRFIELDS',
        Coll_Start_Date: '01/11/2017',
        Coll_End_Date: '01/12/2017',
        Coll_Start_Time: '11:00',
        Coll_End_Time: '13:00',
        Recurrance: '',
        ISR_Role: 'TGT DEV',
        Sensor_Visibility: 'LOW',
        Required_Information:
            '(1) What are the locations, intent and capabilities of the OF Air Forces? Air line of communications.',
        Intel_Discipline: 'IMINT',
        Exploitation_Requirement: 'ANNOTATED STILL IMAGE',
        ER_Remarks: 'Include runway status',
        ER_Report_Frequency: 'POST MISSION',
        Required_Product: 'ISREXREP',
        RP_Remarks: 'Max classification NU',
        RP_Report_Frequency: 'IMMEDIATELY',
        LTIOV: '01/12/2017 00:00',
        Latest_Report_Time: '01/12/2017 00:00',
        Reporting_Instructions:
            'Send copy of report to originator at originator@acc.nato.int',
    },
    {
        ID: 6,
        Operation: 'TestOpSouth',
        Requester: 'ACC',
        CR_Rank: '',
        Justification: 'Supports PIR 1',
        Status: 'APPROVED',
        Location: 'Target 6 - Point Location',
        Shape: 'POINT',
        Location_Type: 'LOCATION',
        Coordinates: '46.331847N 24.149972E',
        Circle_Radius: null,
        Target_ID: '1234AA0007',
        Location_Category: 'CAT 01 - AIRFIELDS',
        Coll_Start_Date: '01/11/2017',
        Coll_End_Date: '01/12/2017',
        Coll_Start_Time: '12:00',
        Coll_End_Time: '13:00',
        Recurrance: '',
        ISR_Role: 'TGT DEV',
        Sensor_Visibility: 'LOW',
        Required_Information:
            '(1) What are the locations, intent and capabilities of the OF Air Forces? Air line of communications.',
        Intel_Discipline: 'IMINT',
        Exploitation_Requirement: 'ANNOTATED STILL IMAGE',
        ER_Remarks: 'Include runway status',
        ER_Report_Frequency: 'POST MISSION',
        Required_Product: 'ISREXREP',
        RP_Remarks: 'Max classification NU',
        RP_Report_Frequency: 'POST MISSION',
        LTIOV: '01/12/2017 00:00',
        Latest_Report_Time: '01/12/2017 00:00',
        Reporting_Instructions:
            'Send copy of report to originator at originator@acc.nato.int',
    },
    {
        ID: 7,
        Operation: 'TestOpSouth',
        Requester: 'ACC',
        CR_Rank: '',
        Justification: 'Supports PIR 2',
        Status: 'APPROVED',
        Location: 'Target 7 - Circle Location',
        Shape: 'AREA',
        Location_Type: 'TAI',
        Coordinates: '46.395266N 24.352594E',
        Circle_Radius: 3000,
        Target_ID: '1234AA0007',
        Location_Category: 'CAT 02 - ANTI-AIRCRAFT ARTILLERY AND MISSILE SYSTEMS',
        Coll_Start_Date: '01/11/2017',
        Coll_End_Date: '01/12/2017',
        Coll_Start_Time: '13:00',
        Coll_End_Time: '15:00',
        Recurrance: '',
        ISR_Role: 'TGT DEV',
        Sensor_Visibility: 'LOW',
        Required_Information:
            '(2) Which indications exist of OF hostile activities? Air defence installations.',
        Intel_Discipline: 'IMINT',
        Exploitation_Requirement: 'ANNOTATED STILL IMAGE',
        ER_Remarks: 'Include installation classification',
        ER_Report_Frequency: 'POST MISSION',
        Required_Product: 'ISREXREP',
        RP_Remarks: 'Max classification NU',
        RP_Report_Frequency: 'POST MISSION',
        LTIOV: '01/12/2017 00:00',
        Latest_Report_Time: '01/12/2017 00:00',
        Reporting_Instructions:
            'Send copy of report to originator at originator@acc.nato.int',
    },
    {
        ID: 8,
        Operation: 'TestOpSouth',
        Requester: 'ACC',
        CR_Rank: '',
        Justification: 'Supports PIR 3',
        Status: 'APPROVED',
        Location: 'Target 8 - Area Location',
        Shape: 'AREA',
        Location_Type: 'NAI',
        Coordinates:
            '46.340485N 24.273863E; 46.342973N 24.290171E; 46.333729N 24.306307E; 46.319979N 24.315233E; 46.313695N 24.301672E; 46.313813N 24.288454E; 46.324602N 24.270086E',
        Circle_Radius: null,
        Target_ID: '1234AA0008',
        Location_Category: 'CAT 06 - GROUND ACTIVITY',
        Coll_Start_Date: '01/11/2017',
        Coll_End_Date: '01/12/2017',
        Coll_Start_Time: '10:00',
        Coll_End_Time: '11:00',
        Recurrance: '',
        ISR_Role: 'TGT DEV',
        Sensor_Visibility: 'LOW',
        Required_Information:
            '(3) What are the locations, intent and capabilities of the OF Ground Forces?',
        Intel_Discipline: 'HUMINT',
        Exploitation_Requirement: 'HUMINT',
        ER_Remarks: 'Include details',
        ER_Report_Frequency: 'IMMEDIATELY',
        Required_Product: 'HUMINTREP',
        RP_Remarks: 'Max classification NU',
        RP_Report_Frequency: 'IMMEDIATELY',
        LTIOV: '01/12/2017 00:00',
        Latest_Report_Time: '01/12/2017 00:00',
        Reporting_Instructions:
            'Send copy of report to originator at originator@acc.nato.int',
    },
    {
        ID: 9,
        Operation: 'TestOpSouth',
        Requester: 'ACC',
        CR_Rank: '',
        Justification: 'Supports PIR 4',
        Status: 'APPROVED',
        Location: 'Target 9 - Area Location',
        Shape: 'ROUTE',
        Location_Type: 'LOCATION',
        Coordinates:
            '46.329537N 24.306393E; 46.333804N 24.357548E; 46.357504N 24.379520E; 46.375509N 24.365444E; 46.389245N 24.356174E',
        Circle_Radius: null,
        Target_ID: '1234AA0009',
        Location_Category: 'CAT 09 - ROUTE RECONNAISSANCE',
        Coll_Start_Date: '01/11/2017',
        Coll_End_Date: '01/12/2017',
        Coll_Start_Time: '15:00',
        Coll_End_Time: '17:00',
        Recurrance: '',
        ISR_Role: 'TGT DEV',
        Sensor_Visibility: 'LOW',
        Required_Information:
            '(4) What are the lines of communication of the OF Ground Forces?',
        Intel_Discipline: 'SIGINT',
        Exploitation_Requirement: 'ELINT',
        ER_Remarks: 'Include details',
        ER_Report_Frequency: 'POST MISSION',
        Required_Product: 'AEW MISREP',
        RP_Remarks: 'Max classification NU',
        RP_Report_Frequency: 'USER DEFINED',
        LTIOV: '01/12/2017 00:00',
        Latest_Report_Time: '01/12/2017 00:00',
        Reporting_Instructions:
            'Send copy of report to originator at originator@acc.nato.int',
    },
    {
        ID: 10,
        Operation: 'TestOpSouth',
        Requester: 'ACC',
        CR_Rank: '',
        Justification: 'Supports PIR 5',
        Status: 'APPROVED',
        Location: 'Target 10 - Area Location',
        Shape: 'ROUTE',
        Location_Type: 'LOCATION',
        Coordinates:
            '46.337746N 24.273949E; 46.399339N 24.265022E; 46.442887N 24.254036E; 46.445726N 24.294548E;46.397533N 24.354115E',
        Circle_Radius: null,
        Target_ID: '1234AA0010',
        Location_Category: 'CAT 09 - ROUTE RECONNAISSANCE',
        Coll_Start_Date: '01/11/2017',
        Coll_End_Date: '01/12/2017',
        Coll_Start_Time: '13:00',
        Coll_End_Time: '15:00',
        Recurrance: '',
        ISR_Role: 'TGT DEV',
        Sensor_Visibility: 'LOW',
        Required_Information:
            '(4) What are the lines of communication of the OF Ground Forces?',
        Intel_Discipline: 'SIGINT',
        Exploitation_Requirement: 'ELINT',
        ER_Remarks: 'Include details',
        ER_Report_Frequency: 'POST MISSION',
        Required_Product: 'AEW MISREP',
        RP_Remarks: 'Max classification NU',
        RP_Report_Frequency: 'USER DEFINED',
        LTIOV: '01/12/2017 00:00',
        Latest_Report_Time: '01/12/2017 00:00',
        Reporting_Instructions:
            'Send copy of report to originator at originator@acc.nato.int',
    },
];

export const orbat = {
    "OrbatDocument": {
        "$": {
            "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
            "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
            "xmlns": "urn:nato:majiic:organization:orbat"
        },
        "Locations": [
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:LocationType/99e12e13-80f9-467f-93fb-42e22cc2e53b"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-05-18T16:29:29.9838175Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "FreeFormLocation": [
                    {
                        "LocationName": [
                            "Daugavpils, LAT"
                        ],
                        "GeoPosition2D": [
                            {
                                "Latitude": [
                                    {
                                        "_": "55.8830452",
                                        "$": {
                                            "d5p1:units": "degrees",
                                            "xmlns:d5p1": "urn:nato:majiic:common:isrcommon",
                                            "xmlns": "urn:nato:majiic:common:isrcommon"
                                        }
                                    }
                                ],
                                "Longitude": [
                                    {
                                        "_": "26.5385132",
                                        "$": {
                                            "d5p1:units": "degrees",
                                            "xmlns:d5p1": "urn:nato:majiic:common:isrcommon",
                                            "xmlns": "urn:nato:majiic:common:isrcommon"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:LocationType/648a388a-480a-46a9-a187-0c255e3f9eb1"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-05-18T16:31:59.8122816Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "FreeFormLocation": [
                    {
                        "LocationName": [
                            "Gulbene, ALT"
                        ],
                        "GeoPosition2D": [
                            {
                                "Latitude": [
                                    {
                                        "_": "57.17731",
                                        "$": {
                                            "d5p1:units": "degrees",
                                            "xmlns:d5p1": "urn:nato:majiic:common:isrcommon",
                                            "xmlns": "urn:nato:majiic:common:isrcommon"
                                        }
                                    }
                                ],
                                "Longitude": [
                                    {
                                        "_": "26.765379",
                                        "$": {
                                            "d5p1:units": "degrees",
                                            "xmlns:d5p1": "urn:nato:majiic:common:isrcommon",
                                            "xmlns": "urn:nato:majiic:common:isrcommon"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:LocationType/de0589a6-3872-4e86-b2cb-e0a1d60cbb4e"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-05-18T16:34:39.3511937Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "FreeFormLocation": [
                    {
                        "LocationName": [
                            "Paide, EST"
                        ],
                        "GeoPosition2D": [
                            {
                                "Latitude": [
                                    {
                                        "_": "58.9013672",
                                        "$": {
                                            "d5p1:units": "degrees",
                                            "xmlns:d5p1": "urn:nato:majiic:common:isrcommon",
                                            "xmlns": "urn:nato:majiic:common:isrcommon"
                                        }
                                    }
                                ],
                                "Longitude": [
                                    {
                                        "_": "25.6063023",
                                        "$": {
                                            "d5p1:units": "degrees",
                                            "xmlns:d5p1": "urn:nato:majiic:common:isrcommon",
                                            "xmlns": "urn:nato:majiic:common:isrcommon"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:LocationType/2a261e0e-1165-40b4-9b0b-54f76e643378"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-05-18T16:37:58.6071537Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "FreeFormLocation": [
                    {
                        "LocationName": [
                            "Valle, LAT"
                        ],
                        "GeoPosition2D": [
                            {
                                "Latitude": [
                                    {
                                        "_": "56.5110779",
                                        "$": {
                                            "d5p1:units": "degrees",
                                            "xmlns:d5p1": "urn:nato:majiic:common:isrcommon",
                                            "xmlns": "urn:nato:majiic:common:isrcommon"
                                        }
                                    }
                                ],
                                "Longitude": [
                                    {
                                        "_": "24.7258854",
                                        "$": {
                                            "d5p1:units": "degrees",
                                            "xmlns:d5p1": "urn:nato:majiic:common:isrcommon",
                                            "xmlns": "urn:nato:majiic:common:isrcommon"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:LocationType/4438bca3-460b-4c61-a1e6-2cbd8895d726"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-08T19:03:16.938542Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "FreeFormLocation": [
                    {
                        "LocationName": [
                            "Brussels"
                        ],
                        "GeoPosition2D": [
                            {
                                "Latitude": [
                                    {
                                        "_": "50.87185",
                                        "$": {
                                            "d5p1:units": "degrees",
                                            "xmlns:d5p1": "urn:nato:majiic:common:isrcommon",
                                            "xmlns": "urn:nato:majiic:common:isrcommon"
                                        }
                                    }
                                ],
                                "Longitude": [
                                    {
                                        "_": "4.42122",
                                        "$": {
                                            "d5p1:units": "degrees",
                                            "xmlns:d5p1": "urn:nato:majiic:common:isrcommon",
                                            "xmlns": "urn:nato:majiic:common:isrcommon"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:LocationType/e1b517fe-38f6-4255-a6ba-e589ec342069"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-08T18:55:52.1382366Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "FreeFormLocation": [
                    {
                        "LocationName": [
                            "SHAPE HQ, Mons, BEL"
                        ],
                        "GeoPosition2D": [
                            {
                                "Latitude": [
                                    {
                                        "_": "50.4942",
                                        "$": {
                                            "d5p1:units": "degrees",
                                            "xmlns:d5p1": "urn:nato:majiic:common:isrcommon",
                                            "xmlns": "urn:nato:majiic:common:isrcommon"
                                        }
                                    }
                                ],
                                "Longitude": [
                                    {
                                        "_": "3.98202",
                                        "$": {
                                            "d5p1:units": "degrees",
                                            "xmlns:d5p1": "urn:nato:majiic:common:isrcommon",
                                            "xmlns": "urn:nato:majiic:common:isrcommon"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:LocationType/37fbcdac-8b90-4e98-aa4c-40df0c82f8ba"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-05-18T16:40:28.1142628Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "FreeFormLocation": [
                    {
                        "LocationName": [
                            "Teenuse, EST"
                        ],
                        "GeoPosition2D": [
                            {
                                "Latitude": [
                                    {
                                        "_": "58.8222923",
                                        "$": {
                                            "d5p1:units": "degrees",
                                            "xmlns:d5p1": "urn:nato:majiic:common:isrcommon",
                                            "xmlns": "urn:nato:majiic:common:isrcommon"
                                        }
                                    }
                                ],
                                "Longitude": [
                                    {
                                        "_": "24.2187443",
                                        "$": {
                                            "d5p1:units": "degrees",
                                            "xmlns:d5p1": "urn:nato:majiic:common:isrcommon",
                                            "xmlns": "urn:nato:majiic:common:isrcommon"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "UnitHierarchy": [
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitC2RelationshipType/042eed6f-fe04-4fb7-8975-f3945f057a97"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T15:20:59.8462685Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "SuperiorUnit": [
                    "urn:nato:majiic:organization:orbat:UnitType/7914c12c-4a61-4f25-bcd1-b6c4770e32cd"
                ],
                "SubordinateUnit": [
                    "urn:nato:majiic:organization:orbat:UnitType/a3d8012b-8833-4a73-8aa8-2ed95fbe6f4c"
                ],
                "C2Type": [
                    "FULLCOMMAND"
                ],
                "C2Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ],
                "Status": [
                    ""
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitC2RelationshipType/a4959b7a-78dd-4b1e-a937-b5e6a8e71e56"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T15:21:59.0732598Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "SuperiorUnit": [
                    "urn:nato:majiic:organization:orbat:UnitType/7914c12c-4a61-4f25-bcd1-b6c4770e32cd"
                ],
                "SubordinateUnit": [
                    "urn:nato:majiic:organization:orbat:UnitType/91be2ba2-2e0a-4cc8-8fd8-0da482ff5220"
                ],
                "C2Type": [
                    "FULLCOMMAND"
                ],
                "C2Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ],
                "Status": [
                    ""
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitC2RelationshipType/7d4c8b6c-59f9-4ac6-a994-7fcc6c7b88d0"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T15:23:32.9787439Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "SuperiorUnit": [
                    "urn:nato:majiic:organization:orbat:UnitType/7914c12c-4a61-4f25-bcd1-b6c4770e32cd"
                ],
                "SubordinateUnit": [
                    "urn:nato:majiic:organization:orbat:UnitType/b404df8b-3622-430f-b71d-aa0d8a855d1b"
                ],
                "C2Type": [
                    "FULLCOMMAND"
                ],
                "C2Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ],
                "Status": [
                    ""
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitC2RelationshipType/5509c3a6-1f6c-4eaf-8cae-9fd49609dcdf"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T16:31:17.8343147Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "SuperiorUnit": [
                    "urn:nato:majiic:organization:orbat:UnitType/a3d8012b-8833-4a73-8aa8-2ed95fbe6f4c"
                ],
                "SubordinateUnit": [
                    "urn:nato:majiic:organization:orbat:UnitType/fdd49496-19aa-45c3-97b5-ed52af9973c3"
                ],
                "C2Type": [
                    "OPCON"
                ],
                "C2Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ],
                "Status": [
                    ""
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitC2RelationshipType/677de555-6d78-42d6-b761-99cca94d185a"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T16:47:04.1237317Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "SuperiorUnit": [
                    "urn:nato:majiic:organization:orbat:UnitType/a3d8012b-8833-4a73-8aa8-2ed95fbe6f4c"
                ],
                "SubordinateUnit": [
                    "urn:nato:majiic:organization:orbat:UnitType/bcf352b3-4e95-42ef-ba6e-159721445275"
                ],
                "C2Type": [
                    "OPCON"
                ],
                "C2Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ],
                "Status": [
                    ""
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitC2RelationshipType/49f680bb-28ca-4704-ae70-5bf7af31b232"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:26:28.7511685Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "SuperiorUnit": [
                    "urn:nato:majiic:organization:orbat:UnitType/84f89353-e504-4de6-b752-fee47695e8fc"
                ],
                "SubordinateUnit": [
                    "urn:nato:majiic:organization:orbat:UnitType/fe0dff4b-181b-4fc2-ade0-2665c29eb045"
                ],
                "C2Type": [
                    "OPCON"
                ],
                "C2Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ],
                "Status": [
                    ""
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitC2RelationshipType/3498bdf0-0612-44f7-a26f-a6b8228cb987"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:31:06.9233436Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "SuperiorUnit": [
                    "urn:nato:majiic:organization:orbat:UnitType/84f89353-e504-4de6-b752-fee47695e8fc"
                ],
                "SubordinateUnit": [
                    "urn:nato:majiic:organization:orbat:UnitType/fe2e8f3d-486d-42d3-b5d4-d780753d40c2"
                ],
                "C2Type": [
                    "NOS"
                ],
                "C2Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T18:31:06.9233436Z"
                        ],
                        "EndDateTimeZulu": [
                            "2022-04-01T18:31:06.9233436Z"
                        ]
                    }
                ],
                "Status": [
                    ""
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitC2RelationshipType/5f8a142d-106f-4511-8be9-ba452d869f79"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:31:06.9233436Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "SuperiorUnit": [
                    "urn:nato:majiic:organization:orbat:UnitType/84f89353-e504-4de6-b752-fee47695e8fc"
                ],
                "SubordinateUnit": [
                    "urn:nato:majiic:organization:orbat:UnitType/4ca76859-8518-4ff4-a448-26798d9da259"
                ],
                "C2Type": [
                    "NOS"
                ],
                "C2Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T18:31:06.9233436Z"
                        ],
                        "EndDateTimeZulu": [
                            "2022-04-01T18:31:06.9233436Z"
                        ]
                    }
                ],
                "Status": [
                    ""
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitC2RelationshipType/e912b10b-c02b-47d9-90e9-9a24a0edc09e"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:37:20.1125126Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "SuperiorUnit": [
                    "urn:nato:majiic:organization:orbat:UnitType/84f89353-e504-4de6-b752-fee47695e8fc"
                ],
                "SubordinateUnit": [
                    "urn:nato:majiic:organization:orbat:UnitType/c64bd224-b9ff-45f7-b08a-b1cadbc9ebb5"
                ],
                "C2Type": [
                    "NOS"
                ],
                "C2Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T18:37:20.1125126Z"
                        ],
                        "EndDateTimeZulu": [
                            "2022-04-01T18:37:20.1125126Z"
                        ]
                    }
                ],
                "Status": [
                    ""
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitC2RelationshipType/18f71fa3-540a-4460-a1b8-74031de056fc"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T19:19:40.0146521Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "SuperiorUnit": [
                    "urn:nato:majiic:organization:orbat:UnitType/84f89353-e504-4de6-b752-fee47695e8fc"
                ],
                "SubordinateUnit": [
                    "urn:nato:majiic:organization:orbat:UnitType/68582a33-641f-4ede-b104-01b568e73a8b"
                ],
                "C2Type": [
                    "FULLCOMMAND"
                ],
                "C2Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ],
                "Status": [
                    ""
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitC2RelationshipType/cd90499d-fdb3-43b3-96f5-c0bc740b8e70"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-04T14:39:17.9348854Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "SuperiorUnit": [
                    "urn:nato:majiic:organization:orbat:UnitType/fdd49496-19aa-45c3-97b5-ed52af9973c3"
                ],
                "SubordinateUnit": [
                    "urn:nato:majiic:organization:orbat:UnitType/2df31a90-c9d5-44b2-a651-edb6b83c31db"
                ],
                "C2Type": [
                    "FULLCOMMAND"
                ],
                "C2Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ],
                "Status": [
                    ""
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitC2RelationshipType/c46503ac-ec99-42f1-87e9-72b0c2d110cf"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-05-17T16:39:05.6286211Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "SuperiorUnit": [
                    "urn:nato:majiic:organization:orbat:UnitType/fdd49496-19aa-45c3-97b5-ed52af9973c3"
                ],
                "SubordinateUnit": [
                    "urn:nato:majiic:organization:orbat:UnitType/83c1596d-7c90-4f15-84f9-7b0d6e291fa3"
                ],
                "C2Type": [
                    "FULLCOMMAND"
                ],
                "C2Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ],
                "Status": [
                    ""
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ]
            }
        ],
        "SystemAssignments": [
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitISRSystemRelationshipType/d8b78c07-76f2-45d3-a1ef-2460f0415e5a"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:41:09.1991187Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Unit": [
                    "urn:nato:majiic:organization:orbat:UnitType/fe0dff4b-181b-4fc2-ade0-2665c29eb045"
                ],
                "ISRSystem": [
                    "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/5fe1b806-98a7-4996-9b25-547978a66f66"
                ],
                "Quantity": [
                    "1"
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ],
                "Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitISRSystemRelationshipType/00b5c810-8217-4576-8c14-b1a572b6dba3"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:42:50.7197037Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Unit": [
                    "urn:nato:majiic:organization:orbat:UnitType/fe0dff4b-181b-4fc2-ade0-2665c29eb045"
                ],
                "ISRSystem": [
                    "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/b5df899e-7c86-45f6-84e7-da0a4523005d"
                ],
                "Quantity": [
                    "1"
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ],
                "Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitISRSystemRelationshipType/3d94ac3b-154b-4fab-902d-4c5e645e9b5c"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:43:58.9894881Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Unit": [
                    "urn:nato:majiic:organization:orbat:UnitType/fe0dff4b-181b-4fc2-ade0-2665c29eb045"
                ],
                "ISRSystem": [
                    "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/dc0f5345-03bf-4a8e-8e54-5faa270834c2"
                ],
                "Quantity": [
                    "1"
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ],
                "Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitISRSystemRelationshipType/6333fc44-0520-48e1-bd30-87417c0725ae"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:44:49.0575087Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Unit": [
                    "urn:nato:majiic:organization:orbat:UnitType/fe0dff4b-181b-4fc2-ade0-2665c29eb045"
                ],
                "ISRSystem": [
                    "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/66b50e4b-1e1e-4ea5-a080-28f62048952b"
                ],
                "Quantity": [
                    "1"
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ],
                "Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitISRSystemRelationshipType/27fbb597-6772-479d-947d-f5eade61214d"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:45:46.1578074Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Unit": [
                    "urn:nato:majiic:organization:orbat:UnitType/fe0dff4b-181b-4fc2-ade0-2665c29eb045"
                ],
                "ISRSystem": [
                    "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/2ba7cd74-b465-4728-8785-7b8a53cf3835"
                ],
                "Quantity": [
                    "1"
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ],
                "Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitISRSystemRelationshipType/605c36fe-3ffc-46c4-b42c-e0153b7d0ed4"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:47:21.5626099Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Unit": [
                    "urn:nato:majiic:organization:orbat:UnitType/68582a33-641f-4ede-b104-01b568e73a8b"
                ],
                "ISRSystem": [
                    "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/11501fc5-80d1-4c34-8f36-0426d97c1628"
                ],
                "Quantity": [
                    "1"
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ],
                "Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitISRSystemRelationshipType/c25ac975-d8fc-4642-bd41-6c805d72fcab"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:48:21.1303016Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Unit": [
                    "urn:nato:majiic:organization:orbat:UnitType/91be2ba2-2e0a-4cc8-8fd8-0da482ff5220"
                ],
                "ISRSystem": [
                    "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/d83271d2-2b94-46e3-832b-619c798d0540"
                ],
                "Quantity": [
                    "1"
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ],
                "Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitISRSystemRelationshipType/5badefa4-15d9-47c3-8a1c-fc5d1bd4b208"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:51:50.6899441Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Unit": [
                    "urn:nato:majiic:organization:orbat:UnitType/68582a33-641f-4ede-b104-01b568e73a8b"
                ],
                "ISRSystem": [
                    "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/2d1bfab6-2ca7-42e5-9689-cdfeac841e9e"
                ],
                "Quantity": [
                    "1"
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ],
                "Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T18:37:20.1125126Z"
                        ],
                        "EndDateTimeZulu": [
                            "2022-04-01T18:37:20.1125126Z"
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitISRSystemRelationshipType/78fd6bc1-4e82-4b55-ad16-627126760495"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:52:34.7770985Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Unit": [
                    "urn:nato:majiic:organization:orbat:UnitType/7914c12c-4a61-4f25-bcd1-b6c4770e32cd"
                ],
                "ISRSystem": [
                    "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/0269c074-c911-479d-a035-cae35a122de6"
                ],
                "Quantity": [
                    "1"
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ],
                "Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T18:37:20.1125126Z"
                        ],
                        "EndDateTimeZulu": [
                            "2022-04-01T18:37:20.1125126Z"
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitISRSystemRelationshipType/c6359ef3-ed1f-4d17-9171-cb4f57438515"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:53:23.2072749Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Unit": [
                    "urn:nato:majiic:organization:orbat:UnitType/7914c12c-4a61-4f25-bcd1-b6c4770e32cd"
                ],
                "ISRSystem": [
                    "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/d8735d05-4ae7-41cf-a81e-c04b6c51b2bb"
                ],
                "Quantity": [
                    "1"
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ],
                "Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T18:37:20.1125126Z"
                        ],
                        "EndDateTimeZulu": [
                            "2022-04-01T18:37:20.1125126Z"
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitISRSystemRelationshipType/82e10277-23fb-4765-a86a-ed6949a7008e"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:56:41.5658627Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Unit": [
                    "urn:nato:majiic:organization:orbat:UnitType/91be2ba2-2e0a-4cc8-8fd8-0da482ff5220"
                ],
                "ISRSystem": [
                    "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/dd9f4d3c-d833-4c7b-bb4b-e0ccdd603eab"
                ],
                "Quantity": [
                    "1"
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ],
                "Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitISRSystemRelationshipType/a9e5a2d0-771d-41a2-a688-25cc7fec2d40"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:57:39.1184855Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Unit": [
                    "urn:nato:majiic:organization:orbat:UnitType/91be2ba2-2e0a-4cc8-8fd8-0da482ff5220"
                ],
                "ISRSystem": [
                    "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/5360c83e-9f44-49da-901d-4a4a106d777a"
                ],
                "Quantity": [
                    "1"
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ],
                "Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitISRSystemRelationshipType/04fb50cb-316d-4cda-8aca-ed2f4865d21a"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-04T14:41:40.2722436Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Unit": [
                    "urn:nato:majiic:organization:orbat:UnitType/b404df8b-3622-430f-b71d-aa0d8a855d1b"
                ],
                "ISRSystem": [
                    "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/497455d9-8feb-4a46-aa5b-2153ff0ad107"
                ],
                "Quantity": [
                    "1"
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ],
                "Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitISRSystemRelationshipType/c343b390-4624-4abb-a725-d0568cbf5190"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-08T13:45:31.6831093Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Unit": [
                    "urn:nato:majiic:organization:orbat:UnitType/91be2ba2-2e0a-4cc8-8fd8-0da482ff5220"
                ],
                "ISRSystem": [
                    "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/dc9376ed-2520-457e-8c93-344e712f7092"
                ],
                "Quantity": [
                    "1"
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ],
                "Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitISRSystemRelationshipType/59dbb7ff-ff4a-4da7-9069-ec40ba5535d3"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-08T13:49:43.9563819Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Unit": [
                    "urn:nato:majiic:organization:orbat:UnitType/91be2ba2-2e0a-4cc8-8fd8-0da482ff5220"
                ],
                "ISRSystem": [
                    "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/0379f053-ce2e-48ee-8ff1-1841ab836549"
                ],
                "Quantity": [
                    "1"
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ],
                "Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitISRSystemRelationshipType/85db75ab-7b96-43d7-8ca4-cacaafa8827e"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-08T14:16:18.6460165Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Unit": [
                    "urn:nato:majiic:organization:orbat:UnitType/91be2ba2-2e0a-4cc8-8fd8-0da482ff5220"
                ],
                "ISRSystem": [
                    "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/ac59b3fa-df8f-405d-849b-f98ea06c72f6"
                ],
                "Quantity": [
                    "1"
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ],
                "Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitISRSystemRelationshipType/1135f272-fa1a-4ee8-a498-c24612718e27"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-08T14:40:28.3478903Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Unit": [
                    "urn:nato:majiic:organization:orbat:UnitType/68582a33-641f-4ede-b104-01b568e73a8b"
                ],
                "ISRSystem": [
                    "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/7430171a-b3e2-4df9-b8dd-08cbdd835d92"
                ],
                "Quantity": [
                    "1"
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ],
                "Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitISRSystemRelationshipType/a17048d8-405a-48c9-aecb-0975efe8e2a9"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-08T15:15:42.3202628Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Unit": [
                    "urn:nato:majiic:organization:orbat:UnitType/fdd49496-19aa-45c3-97b5-ed52af9973c3"
                ],
                "ISRSystem": [
                    "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/f5a16d0c-4e67-434c-879f-a4b0be6cd09c"
                ],
                "Quantity": [
                    "1"
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ],
                "Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitISRSystemRelationshipType/12989012-eb46-4a88-bce7-66ea95acad65"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-08T15:17:23.4178692Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Unit": [
                    "urn:nato:majiic:organization:orbat:UnitType/bcf352b3-4e95-42ef-ba6e-159721445275"
                ],
                "ISRSystem": [
                    "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/42d7804e-5824-4fed-b388-4bdc431cabde"
                ],
                "Quantity": [
                    "1"
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ],
                "Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitISRSystemRelationshipType/c9abbda2-7f44-4e96-98d4-cd4b9099fdfa"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-08T15:30:35.709795Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Unit": [
                    "urn:nato:majiic:organization:orbat:UnitType/2df31a90-c9d5-44b2-a651-edb6b83c31db"
                ],
                "ISRSystem": [
                    "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/78f0fb96-9f7f-4e46-924e-d6c50091c549"
                ],
                "Quantity": [
                    "1"
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ],
                "Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitISRSystemRelationshipType/8cf52fdc-c25d-4880-829a-231d09f86cc4"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-08T15:40:50.1414966Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Unit": [
                    "urn:nato:majiic:organization:orbat:UnitType/2df31a90-c9d5-44b2-a651-edb6b83c31db"
                ],
                "ISRSystem": [
                    "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/8e05cacf-3525-4518-9f21-b46bacd922a3"
                ],
                "Quantity": [
                    "1"
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ],
                "Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitISRSystemRelationshipType/c0ad71a3-a2a8-47fb-96f8-8846de958948"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-14T17:56:27.1806108Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Unit": [
                    "urn:nato:majiic:organization:orbat:UnitType/91be2ba2-2e0a-4cc8-8fd8-0da482ff5220"
                ],
                "ISRSystem": [
                    "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/44a26541-f1b1-4d9b-b3a9-73309204b243"
                ],
                "Quantity": [
                    "1"
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ],
                "Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitISRSystemRelationshipType/080e342d-dad7-4883-89d6-93cc0c63d6ff"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-14T17:58:41.583452Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Unit": [
                    "urn:nato:majiic:organization:orbat:UnitType/91be2ba2-2e0a-4cc8-8fd8-0da482ff5220"
                ],
                "ISRSystem": [
                    "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/5218f1ff-c344-435d-8799-e86121f8fcbb"
                ],
                "Quantity": [
                    "1"
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ],
                "Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitISRSystemRelationshipType/a509a2d1-7d62-46c0-a0ca-11b40059614c"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-14T18:04:02.4749719Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Unit": [
                    "urn:nato:majiic:organization:orbat:UnitType/91be2ba2-2e0a-4cc8-8fd8-0da482ff5220"
                ],
                "ISRSystem": [
                    "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/aabf58e2-16bd-4892-9c02-c1a8e9e13f72"
                ],
                "Quantity": [
                    "1"
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ],
                "Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitISRSystemRelationshipType/0c7deb3f-9f7a-4a29-8dcb-d77f3d696159"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-14T18:07:21.6255323Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Unit": [
                    "urn:nato:majiic:organization:orbat:UnitType/fe0dff4b-181b-4fc2-ade0-2665c29eb045"
                ],
                "ISRSystem": [
                    "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/704c05d8-d4cb-44e5-a2ca-8053df3d64cf"
                ],
                "Quantity": [
                    "1"
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ],
                "Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitISRSystemRelationshipType/e873dc12-1f6a-4d15-8424-03ced20d84e4"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-14T18:14:38.4603884Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Unit": [
                    "urn:nato:majiic:organization:orbat:UnitType/91be2ba2-2e0a-4cc8-8fd8-0da482ff5220"
                ],
                "ISRSystem": [
                    "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/7e4c1932-6104-4dd2-933d-2f65b3313dba"
                ],
                "Quantity": [
                    "1"
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ],
                "Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitISRSystemRelationshipType/bde14086-35af-4b64-9f4a-411dbb5abfb8"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-14T18:20:31.1101436Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Unit": [
                    "urn:nato:majiic:organization:orbat:UnitType/91be2ba2-2e0a-4cc8-8fd8-0da482ff5220"
                ],
                "ISRSystem": [
                    "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/d1f4b92c-86d6-4a19-9b0a-da347052dca0"
                ],
                "Quantity": [
                    "1"
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ],
                "Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitISRSystemRelationshipType/bc5f79e4-e0da-4396-b882-94a53f285a60"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-14T18:25:10.1589985Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Unit": [
                    "urn:nato:majiic:organization:orbat:UnitType/91be2ba2-2e0a-4cc8-8fd8-0da482ff5220"
                ],
                "ISRSystem": [
                    "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/486d57ae-f12b-4d93-854f-8d44ef2427b1"
                ],
                "Quantity": [
                    "1"
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ],
                "Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitISRSystemRelationshipType/afab979d-200a-4643-8ef7-05d478fbd926"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-05-17T16:45:41.9503715Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Unit": [
                    "urn:nato:majiic:organization:orbat:UnitType/83c1596d-7c90-4f15-84f9-7b0d6e291fa3"
                ],
                "ISRSystem": [
                    "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/5e2d5308-3a6f-4046-a889-600e8165caf8"
                ],
                "Quantity": [
                    "1"
                ],
                "ORBAT": [
                    "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2"
                ],
                "Duration": [
                    {
                        "StartDateTimeZulu": [
                            "2022-04-01T15:18:51.2257634Z"
                        ]
                    }
                ]
            }
        ],
        "ORBAT": [
            {
                "$": {
                    "d2p1:schemaVersion": "4.4",
                    "Identifier": "urn:nato:majiic:organization:orbat:ORBATType/6ab3bb63-0e2f-45b3-8c4c-fab6c513b4d2",
                    "xmlns:d2p1": "urn:nato:majiic:organization:orbat"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T15:17:44.2740283Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "d2p1:Operation": [
                    "urn:nato:majiic:organization:organizationcommontypes:OperationType/7cbee0ac-d6a1-4883-8952-a31361331294"
                ],
                "d2p1:CourseOfActionIdentifier": [
                    ""
                ],
                "d2p1:OperationPlanIdentifier": [
                    ""
                ],
                "d2p1:ORBATName": [
                    "CWIX 22 ORBAT"
                ]
            }
        ],
        "Units": [
            {
                "$": {
                    "d2p1:schemaVersion": "4.4",
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitType/7914c12c-4a61-4f25-bcd1-b6c4770e32cd",
                    "xmlns:d2p1": "urn:nato:majiic:organization:orbat"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T15:18:51.2248246Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "d2p1:MilitaryUnitName": [
                    {
                        "Name": [
                            {
                                "_": "CJTF-040",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ],
                        "ShortName": [
                            {
                                "_": "CJTF-040",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ]
                    }
                ],
                "d2p1:ServiceType": [
                    "JOINT"
                ],
                "d2p1:UnitTypeCode": [
                    "GROUND"
                ],
                "d2p1:UnitSize": [
                    "ARMY"
                ],
                "d2p1:APP6BSymbolIDCodingReference": [
                    "SFGPUC-----K--G"
                ],
                "d2p1:C2CategoryCode": [
                    "NOS"
                ],
                "d2p1:UnitLocatedAt": [
                    {
                        "d2p1:EffectiveDate": [
                            "2022-05-18"
                        ],
                        "d2p1:LocationReference": [
                            "urn:nato:majiic:organization:orbat:LocationType/99e12e13-80f9-467f-93fb-42e22cc2e53b"
                        ]
                    }
                ],
                "d2p1:Identification": [
                    {
                        "UnitIdentifier": [
                            {
                                "_": "CJTF",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ],
                        "Nation": [
                            {
                                "_": "XXN",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "$": {
                    "d2p1:schemaVersion": "4.4",
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitType/a3d8012b-8833-4a73-8aa8-2ed95fbe6f4c",
                    "xmlns:d2p1": "urn:nato:majiic:organization:orbat"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T15:20:59.7370752Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "d2p1:MilitaryUnitName": [
                    {
                        "Name": [
                            {
                                "_": "LCC-345",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ],
                        "ShortName": [
                            {
                                "_": "LCC-345",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ]
                    }
                ],
                "d2p1:ServiceType": [
                    "ARMY"
                ],
                "d2p1:UnitTypeCode": [
                    "GROUND"
                ],
                "d2p1:UnitSize": [
                    "CORPS"
                ],
                "d2p1:APP6BSymbolIDCodingReference": [
                    "SFGPUCIZ---J--G"
                ],
                "d2p1:C2CategoryCode": [
                    "NOS"
                ],
                "d2p1:UnitLocatedAt": [
                    {
                        "d2p1:EffectiveDate": [
                            "2022-05-18"
                        ],
                        "d2p1:LocationReference": [
                            "urn:nato:majiic:organization:orbat:LocationType/648a388a-480a-46a9-a187-0c255e3f9eb1"
                        ]
                    }
                ],
                "d2p1:Identification": [
                    {
                        "UnitIdentifier": [
                            {
                                "_": "LCC-345",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ],
                        "Nation": [
                            {
                                "_": "XXN",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "$": {
                    "d2p1:schemaVersion": "4.4",
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitType/91be2ba2-2e0a-4cc8-8fd8-0da482ff5220",
                    "xmlns:d2p1": "urn:nato:majiic:organization:orbat"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T15:21:59.0732598Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "d2p1:MilitaryUnitName": [
                    {
                        "Name": [
                            {
                                "_": "JAFC-216",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ],
                        "ShortName": [
                            {
                                "_": "JAFC-216",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ]
                    }
                ],
                "d2p1:ServiceType": [
                    "AIRFRC"
                ],
                "d2p1:UnitTypeCode": [
                    "GROUND"
                ],
                "d2p1:UnitSize": [
                    "CORPS"
                ],
                "d2p1:APP6BSymbolIDCodingReference": [
                    "SFGPUCV----J--A"
                ],
                "d2p1:C2CategoryCode": [
                    "NOS"
                ],
                "d2p1:IntelCollectionDiscipline": [
                    "SIGINT"
                ],
                "d2p1:Identification": [
                    {
                        "UnitIdentifier": [
                            {
                                "_": "JAFC-216",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ],
                        "Nation": [
                            {
                                "_": "XXN",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "$": {
                    "d2p1:schemaVersion": "4.4",
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitType/b404df8b-3622-430f-b71d-aa0d8a855d1b",
                    "xmlns:d2p1": "urn:nato:majiic:organization:orbat"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T15:23:32.9787439Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "d2p1:MilitaryUnitName": [
                    {
                        "Name": [
                            {
                                "_": "MCC-378",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ],
                        "ShortName": [
                            {
                                "_": "MCC-378",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ]
                    }
                ],
                "d2p1:ServiceType": [
                    "NAVY"
                ],
                "d2p1:UnitTypeCode": [
                    "GROUND"
                ],
                "d2p1:UnitSize": [
                    "NTF"
                ],
                "d2p1:APP6BSymbolIDCodingReference": [
                    "SFGPGT--------N"
                ],
                "d2p1:C2CategoryCode": [
                    "NOS"
                ],
                "d2p1:IntelCollectionDiscipline": [
                    "IMINT"
                ],
                "d2p1:Identification": [
                    {
                        "UnitIdentifier": [
                            {
                                "_": "MCC-378",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ],
                        "Nation": [
                            {
                                "_": "XXN",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "$": {
                    "d2p1:schemaVersion": "4.4",
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitType/fdd49496-19aa-45c3-97b5-ed52af9973c3",
                    "xmlns:d2p1": "urn:nato:majiic:organization:orbat"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T16:31:17.8343147Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "d2p1:MilitaryUnitName": [
                    {
                        "Name": [
                            {
                                "_": "1st  ROU Inf Div-267",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ],
                        "ShortName": [
                            {
                                "_": "1st  ROU Inf Div-267",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ]
                    }
                ],
                "d2p1:ServiceType": [
                    "ARMY"
                ],
                "d2p1:UnitTypeCode": [
                    "GROUND"
                ],
                "d2p1:UnitSize": [
                    "DIV"
                ],
                "d2p1:APP6BSymbolIDCodingReference": [
                    "SFGPUCIZ---IROG"
                ],
                "d2p1:C2CategoryCode": [
                    "NOS"
                ],
                "d2p1:UnitLocatedAt": [
                    {
                        "d2p1:EffectiveDate": [
                            "2022-05-18"
                        ],
                        "d2p1:LocationReference": [
                            "urn:nato:majiic:organization:orbat:LocationType/de0589a6-3872-4e86-b2cb-e0a1d60cbb4e"
                        ]
                    }
                ],
                "d2p1:IntelCollectionDiscipline": [
                    "IMINT"
                ],
                "d2p1:Identification": [
                    {
                        "UnitIdentifier": [
                            {
                                "_": "1st  ROU Inf Div-267",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ],
                        "Nation": [
                            {
                                "_": "ROU",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "$": {
                    "d2p1:schemaVersion": "4.4",
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitType/bcf352b3-4e95-42ef-ba6e-159721445275",
                    "xmlns:d2p1": "urn:nato:majiic:organization:orbat"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T16:47:04.1237317Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "d2p1:MilitaryUnitName": [
                    {
                        "Name": [
                            {
                                "_": "ESP Castillejos Div-261",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ],
                        "ShortName": [
                            {
                                "_": "ESP Castillejos Div-261",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ]
                    }
                ],
                "d2p1:ServiceType": [
                    "ARMY"
                ],
                "d2p1:UnitTypeCode": [
                    "GROUND"
                ],
                "d2p1:UnitSize": [
                    "DIV"
                ],
                "d2p1:APP6BSymbolIDCodingReference": [
                    "SFGPUCIZ---ISPG"
                ],
                "d2p1:C2CategoryCode": [
                    "NOS"
                ],
                "d2p1:UnitLocatedAt": [
                    {
                        "d2p1:EffectiveDate": [
                            "2022-05-18"
                        ],
                        "d2p1:LocationReference": [
                            "urn:nato:majiic:organization:orbat:LocationType/2a261e0e-1165-40b4-9b0b-54f76e643378"
                        ]
                    }
                ],
                "d2p1:IntelCollectionDiscipline": [
                    "MASINT"
                ],
                "d2p1:Identification": [
                    {
                        "UnitIdentifier": [
                            {
                                "_": "ESP Castillejos Div-261",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ],
                        "Nation": [
                            {
                                "_": "ESP",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "$": {
                    "d2p1:schemaVersion": "4.4",
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitType/fe0dff4b-181b-4fc2-ade0-2665c29eb045",
                    "xmlns:d2p1": "urn:nato:majiic:organization:orbat"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:26:28.7511685Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "d2p1:MilitaryUnitName": [
                    {
                        "Name": [
                            {
                                "_": "FRA 1/33rd Surv Recce and Atk Sqn-359",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ],
                        "ShortName": [
                            {
                                "_": "FRA 1/33rd Surv Recce and Atk Sqn-359",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ]
                    }
                ],
                "d2p1:ServiceType": [
                    "AIRFRC"
                ],
                "d2p1:UnitTypeCode": [
                    "GROUND"
                ],
                "d2p1:UnitSize": [
                    "SQDRNA"
                ],
                "d2p1:APP6BSymbolIDCodingReference": [
                    "SFGPUCV-----FRA"
                ],
                "d2p1:C2CategoryCode": [
                    "NOS"
                ],
                "d2p1:IntelCollectionDiscipline": [
                    "IMINT"
                ],
                "d2p1:Identification": [
                    {
                        "UnitIdentifier": [
                            {
                                "_": "FRA 1/33rd Surv Recce and Atk Sqn-359",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ],
                        "Nation": [
                            {
                                "_": "FRA",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "$": {
                    "d2p1:schemaVersion": "4.4",
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitType/fe2e8f3d-486d-42d3-b5d4-d780753d40c2",
                    "xmlns:d2p1": "urn:nato:majiic:organization:orbat"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:28:02.454561Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "d2p1:MilitaryUnitName": [
                    {
                        "Name": [
                            {
                                "_": "FIN HQ-348",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ],
                        "ShortName": [
                            {
                                "_": "FIN HQ-348",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ]
                    }
                ],
                "d2p1:ServiceType": [
                    "JOINT"
                ],
                "d2p1:UnitTypeCode": [
                    "GROUND"
                ],
                "d2p1:UnitSize": [
                    "NOS"
                ],
                "d2p1:APP6BSymbolIDCodingReference": [
                    "SFGPUC------FIG"
                ],
                "d2p1:C2CategoryCode": [
                    "NOS"
                ],
                "d2p1:Identification": [
                    {
                        "UnitIdentifier": [
                            {
                                "_": "FIN HQ-348",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ],
                        "Nation": [
                            {
                                "_": "FIN",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "$": {
                    "d2p1:schemaVersion": "4.4",
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitType/4ca76859-8518-4ff4-a448-26798d9da259",
                    "xmlns:d2p1": "urn:nato:majiic:organization:orbat"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:29:17.7070556Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "d2p1:MilitaryUnitName": [
                    {
                        "Name": [
                            {
                                "_": "NOR HQ-348",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ],
                        "ShortName": [
                            {
                                "_": "NOR HQ-348",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ]
                    }
                ],
                "d2p1:ServiceType": [
                    "JOINT"
                ],
                "d2p1:UnitTypeCode": [
                    "GROUND"
                ],
                "d2p1:UnitSize": [
                    "NOS"
                ],
                "d2p1:APP6BSymbolIDCodingReference": [
                    "SFGPUC------NOG"
                ],
                "d2p1:C2CategoryCode": [
                    "NOS"
                ],
                "d2p1:Identification": [
                    {
                        "UnitIdentifier": [
                            {
                                "_": "NOR HQ-345",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ],
                        "Nation": [
                            {
                                "_": "NOR",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "$": {
                    "d2p1:schemaVersion": "4.4",
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitType/c64bd224-b9ff-45f7-b08a-b1cadbc9ebb5",
                    "xmlns:d2p1": "urn:nato:majiic:organization:orbat"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:34:22.5348495Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "d2p1:MilitaryUnitName": [
                    {
                        "Name": [
                            {
                                "_": "Belgian HQ-216",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ],
                        "ShortName": [
                            {
                                "_": "Belgian HQ-216",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ]
                    }
                ],
                "d2p1:ServiceType": [
                    "JOINT"
                ],
                "d2p1:UnitTypeCode": [
                    "GROUND"
                ],
                "d2p1:UnitSize": [
                    "NOS"
                ],
                "d2p1:APP6BSymbolIDCodingReference": [
                    "SFGPUC------BEG"
                ],
                "d2p1:C2CategoryCode": [
                    "NOS"
                ],
                "d2p1:UnitLocatedAt": [
                    {
                        "d2p1:EffectiveDate": [
                            "2022-04-08"
                        ],
                        "d2p1:LocationReference": [
                            "urn:nato:majiic:organization:orbat:LocationType/4438bca3-460b-4c61-a1e6-2cbd8895d726"
                        ]
                    }
                ],
                "d2p1:Identification": [
                    {
                        "UnitIdentifier": [
                            {
                                "_": "Belgian HQ-216",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ],
                        "Nation": [
                            {
                                "_": "BEL",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "$": {
                    "d2p1:schemaVersion": "4.4",
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitType/84f89353-e504-4de6-b752-fee47695e8fc",
                    "xmlns:d2p1": "urn:nato:majiic:organization:orbat"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:35:38.5377518Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "d2p1:MilitaryUnitName": [
                    {
                        "Name": [
                            {
                                "_": "National Forces",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ],
                        "ShortName": [
                            {
                                "_": "National Forces",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ]
                    }
                ],
                "d2p1:ServiceType": [
                    "NOS"
                ],
                "d2p1:UnitTypeCode": [
                    "GROUND"
                ],
                "d2p1:UnitSize": [
                    "NOS"
                ],
                "d2p1:APP6BSymbolIDCodingReference": [
                    "SFGPUC--------G"
                ],
                "d2p1:C2CategoryCode": [
                    "NOS"
                ],
                "d2p1:Identification": [
                    {
                        "UnitIdentifier": [
                            {
                                "_": "National Forces",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ],
                        "Nation": [
                            {
                                "_": "XXN",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "$": {
                    "d2p1:schemaVersion": "4.4",
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitType/68582a33-641f-4ede-b104-01b568e73a8b",
                    "xmlns:d2p1": "urn:nato:majiic:organization:orbat"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T19:19:40.0146521Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "d2p1:MilitaryUnitName": [
                    {
                        "Name": [
                            {
                                "_": "SHAPE-259",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ],
                        "ShortName": [
                            {
                                "_": "SHAPE-259",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ]
                    }
                ],
                "d2p1:ServiceType": [
                    "NOS"
                ],
                "d2p1:UnitTypeCode": [
                    "GROUND"
                ],
                "d2p1:UnitSize": [
                    "NOS"
                ],
                "d2p1:APP6BSymbolIDCodingReference": [
                    "SFGPUC--------G"
                ],
                "d2p1:C2CategoryCode": [
                    "NOS"
                ],
                "d2p1:UnitLocatedAt": [
                    {
                        "d2p1:EffectiveDate": [
                            "2022-04-08"
                        ],
                        "d2p1:LocationReference": [
                            "urn:nato:majiic:organization:orbat:LocationType/e1b517fe-38f6-4255-a6ba-e589ec342069"
                        ]
                    }
                ],
                "d2p1:Identification": [
                    {
                        "UnitIdentifier": [
                            {
                                "_": "SHAPE-259",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ],
                        "Nation": [
                            {
                                "_": "XXN",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "$": {
                    "d2p1:schemaVersion": "4.4",
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitType/2df31a90-c9d5-44b2-a651-edb6b83c31db",
                    "xmlns:d2p1": "urn:nato:majiic:organization:orbat"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-04T14:39:17.8308742Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "d2p1:MilitaryUnitName": [
                    {
                        "Name": [
                            {
                                "_": "11th (POL) Mech Bde-348",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ],
                        "ShortName": [
                            {
                                "_": "11th (POL) Mech Bde-348",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ]
                    }
                ],
                "d2p1:ServiceType": [
                    "ARMY"
                ],
                "d2p1:UnitTypeCode": [
                    "GROUND"
                ],
                "d2p1:UnitSize": [
                    "BDE"
                ],
                "d2p1:APP6BSymbolIDCodingReference": [
                    "SFGPUCIZ---HPOG"
                ],
                "d2p1:C2CategoryCode": [
                    "NOS"
                ],
                "d2p1:UnitLocatedAt": [
                    {
                        "d2p1:EffectiveDate": [
                            "2022-05-18"
                        ],
                        "d2p1:LocationReference": [
                            "urn:nato:majiic:organization:orbat:LocationType/37fbcdac-8b90-4e98-aa4c-40df0c82f8ba"
                        ]
                    }
                ],
                "d2p1:IntelCollectionDiscipline": [
                    "ELINT"
                ],
                "d2p1:Identification": [
                    {
                        "UnitIdentifier": [
                            {
                                "_": "11th (POL) Mech Bde-348",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ],
                        "Nation": [
                            {
                                "_": "POL",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "$": {
                    "d2p1:schemaVersion": "4.4",
                    "Identifier": "urn:nato:majiic:organization:orbat:UnitType/83c1596d-7c90-4f15-84f9-7b0d6e291fa3",
                    "xmlns:d2p1": "urn:nato:majiic:organization:orbat"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-05-17T16:39:05.5187217Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "d2p1:MilitaryUnitName": [
                    {
                        "Name": [
                            {
                                "_": "FRA Inf Bde-216",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ],
                        "ShortName": [
                            {
                                "_": "FRA Inf Bde-216",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ]
                    }
                ],
                "d2p1:ServiceType": [
                    "ARMY"
                ],
                "d2p1:UnitTypeCode": [
                    "GROUND"
                ],
                "d2p1:UnitSize": [
                    "BDE"
                ],
                "d2p1:APP6BSymbolIDCodingReference": [
                    "SFGPUCIZ---HFRG"
                ],
                "d2p1:C2CategoryCode": [
                    "NOS"
                ],
                "d2p1:IntelCollectionDiscipline": [
                    "MASINT"
                ],
                "d2p1:Identification": [
                    {
                        "UnitIdentifier": [
                            {
                                "_": "FRA Inf Bde-216",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ],
                        "Nation": [
                            {
                                "_": "FRA",
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                }
                            }
                        ]
                    }
                ]
            }
        ],
        "ISRSystems": [
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/5fe1b806-98a7-4996-9b25-547978a66f66"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:41:09.1881219Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Identifiers": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "UniquePlatformIdentification": [
                            {
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                },
                                "CountryCode": [
                                    "FRA"
                                ],
                                "PlatformID": [
                                    "DOPEC Fortion"
                                ]
                            }
                        ],
                        "NIC": [
                            "ABC123456789012"
                        ],
                        "RIC": [
                            "AB12CD"
                        ]
                    }
                ],
                "SystemDescription": [
                    {
                        "_": "IRM&CM System",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Capability": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "CCIRM": [
                            "true"
                        ]
                    }
                ],
                "ContactInfo": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "APP6BSymbolIDCodingReference": [
                    {
                        "_": "SFGPE----------",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "EnglishName": [
                    {
                        "_": "DOPEC Fortion",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Name": [
                    {
                        "_": "DOPEC Fortion",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/b5df899e-7c86-45f6-84e7-da0a4523005d"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:42:50.7197037Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Identifiers": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "UniquePlatformIdentification": [
                            {
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                },
                                "CountryCode": [
                                    "FRA"
                                ],
                                "PlatformID": [
                                    "FRA MQ-9 001"
                                ]
                            }
                        ],
                        "NIC": [
                            "ABC123456789012"
                        ],
                        "RIC": [
                            "AB12CD"
                        ]
                    }
                ],
                "SystemDescription": [
                    {
                        "_": "MQ-9 MALE UAV",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Capability": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "Sensor": [
                            {
                                "GMTIUDPPort": [
                                    "0"
                                ],
                                "MaximumEndurance": [
                                    {
                                        "TimeIntervalHours": [
                                            {
                                                "_": "14",
                                                "$": {
                                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "ContactInfo": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "APP6BSymbolIDCodingReference": [
                    {
                        "_": "SFGPE----------",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "EnglishName": [
                    {
                        "_": "FRA MQ-9 001",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Name": [
                    {
                        "_": "FRA MQ-9 001",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/dc0f5345-03bf-4a8e-8e54-5faa270834c2"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:43:58.9894881Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Identifiers": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "UniquePlatformIdentification": [
                            {
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                },
                                "CountryCode": [
                                    "FRA"
                                ],
                                "PlatformID": [
                                    "FRA King Air 350 ALSR 001"
                                ]
                            }
                        ],
                        "NIC": [
                            "ABC123456789012"
                        ],
                        "RIC": [
                            "AB12CD"
                        ]
                    }
                ],
                "SystemDescription": [
                    {
                        "_": "King Air 350 ALSR SIGINT, IMINT",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Capability": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "Sensor": [
                            {
                                "GMTIUDPPort": [
                                    "0"
                                ],
                                "MaximumEndurance": [
                                    {
                                        "TimeIntervalHours": [
                                            {
                                                "_": "5",
                                                "$": {
                                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "ContactInfo": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "APP6BSymbolIDCodingReference": [
                    {
                        "_": "SFGPE----------",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "EnglishName": [
                    {
                        "_": "FRA Super King Air 001",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Name": [
                    {
                        "_": "FRA King Air 350 ALSR  001",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/66b50e4b-1e1e-4ea5-a080-28f62048952b"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:44:49.0565459Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Identifiers": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "UniquePlatformIdentification": [
                            {
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                },
                                "CountryCode": [
                                    "FRA"
                                ],
                                "PlatformID": [
                                    "FRA Exploitation System 1"
                                ]
                            }
                        ],
                        "NIC": [
                            "ABC123456789012"
                        ],
                        "RIC": [
                            "AB12CD"
                        ]
                    }
                ],
                "SystemDescription": [
                    {
                        "_": "FRA Exploitation System",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Capability": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "Sensor": [
                            {
                                "GMTIUDPPort": [
                                    "0"
                                ],
                                "MaximumEndurance": [
                                    {
                                        "TimeIntervalHours": [
                                            {
                                                "_": "6",
                                                "$": {
                                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "ContactInfo": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "APP6BSymbolIDCodingReference": [
                    {
                        "_": "SFGPE----------",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "EnglishName": [
                    {
                        "_": "FRA Exploitation System 1",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Name": [
                    {
                        "_": "FRA Exploitation System 1",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/2ba7cd74-b465-4728-8785-7b8a53cf3835"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:45:46.1578074Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Identifiers": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "UniquePlatformIdentification": [
                            {
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                },
                                "CountryCode": [
                                    "FRA"
                                ],
                                "PlatformID": [
                                    "FRA Exploitation System 2"
                                ]
                            }
                        ],
                        "NIC": [
                            "ABC123456789012"
                        ],
                        "RIC": [
                            "AB12CD"
                        ]
                    }
                ],
                "SystemDescription": [
                    {
                        "_": "FRA Exploitation System",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "ContactInfo": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "APP6BSymbolIDCodingReference": [
                    {
                        "_": "SFGPE----------",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "EnglishName": [
                    {
                        "_": "FRA Exploitation System 2",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Name": [
                    {
                        "_": "FRA Exploitation System 2",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/11501fc5-80d1-4c34-8f36-0426d97c1628"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:47:21.5626099Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Identifiers": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "UniquePlatformIdentification": [
                            {
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                },
                                "CountryCode": [
                                    "XXN"
                                ],
                                "PlatformID": [
                                    "NATO E3"
                                ]
                            }
                        ],
                        "NIC": [
                            "ABC123456789012"
                        ],
                        "RIC": [
                            "AB12CD"
                        ]
                    }
                ],
                "SystemDescription": [
                    {
                        "_": "NATO E3 Airborne C3",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Capability": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "Sensor": [
                            {
                                "GMTIUDPPort": [
                                    "0"
                                ],
                                "MaximumEndurance": [
                                    {
                                        "TimeIntervalHours": [
                                            {
                                                "_": "30",
                                                "$": {
                                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "ContactInfo": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "APP6BSymbolIDCodingReference": [
                    {
                        "_": "SFGPE----------",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "EnglishName": [
                    {
                        "_": "NATO E3",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Name": [
                    {
                        "_": "NATO E3",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/d83271d2-2b94-46e3-832b-619c798d0540"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:48:21.1303016Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Identifiers": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "UniquePlatformIdentification": [
                            {
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                },
                                "CountryCode": [
                                    "GBR"
                                ],
                                "PlatformID": [
                                    "P8_UKF0120"
                                ]
                            }
                        ],
                        "NIC": [
                            "ABC123456789012"
                        ],
                        "RIC": [
                            "AB12CD"
                        ]
                    }
                ],
                "SystemDescription": [
                    {
                        "_": "P8 Posiedon MPA",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Capability": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "Sensor": [
                            {
                                "GMTIUDPPort": [
                                    "0"
                                ],
                                "MaximumEndurance": [
                                    {
                                        "TimeIntervalHours": [
                                            {
                                                "_": "9",
                                                "$": {
                                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "ContactInfo": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "APP6BSymbolIDCodingReference": [
                    {
                        "_": "SFGPE----------",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "EnglishName": [
                    {
                        "_": "P8_UKF0120",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Name": [
                    {
                        "_": "P8_UKF0120",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/2d1bfab6-2ca7-42e5-9689-cdfeac841e9e"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:51:50.6899441Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Identifiers": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "UniquePlatformIdentification": [
                            {
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                },
                                "CountryCode": [
                                    "XXN"
                                ],
                                "PlatformID": [
                                    "NATO RQ-4D 01"
                                ]
                            }
                        ],
                        "NIC": [
                            "ABC123456789012"
                        ],
                        "RIC": [
                            "AB12CD"
                        ]
                    }
                ],
                "SystemDescription": [
                    {
                        "_": "RQ-4D Global Hawk HALE",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Capability": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "Sensor": [
                            {
                                "GMTIUDPPort": [
                                    "0"
                                ],
                                "MaximumEndurance": [
                                    {
                                        "TimeIntervalHours": [
                                            {
                                                "_": "30",
                                                "$": {
                                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "ContactInfo": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "APP6BSymbolIDCodingReference": [
                    {
                        "_": "SFGPE----------",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "EnglishName": [
                    {
                        "_": "NATO RQ-4D 01",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Name": [
                    {
                        "_": "NATO RQ-4D 01",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/0269c074-c911-479d-a035-cae35a122de6"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:52:34.7761113Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Identifiers": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "UniquePlatformIdentification": [
                            {
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                },
                                "CountryCode": [
                                    "XXN"
                                ],
                                "PlatformID": [
                                    "NATO CSI ISR"
                                ]
                            }
                        ],
                        "NIC": [
                            "ABC123456789012"
                        ],
                        "RIC": [
                            "AB12CD"
                        ]
                    }
                ],
                "SystemDescription": [
                    {
                        "_": "Commercial Satellite Imagery",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "ContactInfo": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "APP6BSymbolIDCodingReference": [
                    {
                        "_": "SFGPE----------",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "EnglishName": [
                    {
                        "_": "NATO CSI ISR",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Name": [
                    {
                        "_": "NATO CSI ISR",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/d8735d05-4ae7-41cf-a81e-c04b6c51b2bb"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:53:23.2072749Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Identifiers": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "UniquePlatformIdentification": [
                            {
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                },
                                "CountryCode": [
                                    "XXN"
                                ],
                                "PlatformID": [
                                    "NATO Cyber Intelligence Cell"
                                ]
                            }
                        ],
                        "NIC": [
                            "ABC123456789012"
                        ],
                        "RIC": [
                            "AB12CD"
                        ]
                    }
                ],
                "SystemDescription": [
                    {
                        "_": "Cyber Intelligence Cell",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "ContactInfo": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "APP6BSymbolIDCodingReference": [
                    {
                        "_": "SFGPE----------",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "EnglishName": [
                    {
                        "_": "Cyber Intelligence",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Name": [
                    {
                        "_": "NATO Cyber Intelligence Cell",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/dd9f4d3c-d833-4c7b-bb4b-e0ccdd603eab"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:56:41.5658627Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Identifiers": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "UniquePlatformIdentification": [
                            {
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                },
                                "CountryCode": [
                                    "USA"
                                ],
                                "PlatformID": [
                                    "VISTA IA System 1"
                                ]
                            }
                        ],
                        "NIC": [
                            "ABC123456789012"
                        ],
                        "RIC": [
                            "AB12CD"
                        ]
                    }
                ],
                "SystemDescription": [
                    {
                        "_": "Socket GXP",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "ContactInfo": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "APP6BSymbolIDCodingReference": [
                    {
                        "_": "SFGPE----------",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "EnglishName": [
                    {
                        "_": "VISTA IA System 1",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Name": [
                    {
                        "_": "VISTA IA System 1",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/5360c83e-9f44-49da-901d-4a4a106d777a"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-01T18:57:39.1174556Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Identifiers": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "UniquePlatformIdentification": [
                            {
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                },
                                "CountryCode": [
                                    "USA"
                                ],
                                "PlatformID": [
                                    "VISTA IA System 2"
                                ]
                            }
                        ],
                        "NIC": [
                            "ABC123456789012"
                        ],
                        "RIC": [
                            "AB12CD"
                        ]
                    }
                ],
                "SystemDescription": [
                    {
                        "_": "Socket GXP",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "ContactInfo": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "APP6BSymbolIDCodingReference": [
                    {
                        "_": "SFGPE----------",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "EnglishName": [
                    {
                        "_": "VISTA IA System 2",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Name": [
                    {
                        "_": "VISTA IA System 2",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/497455d9-8feb-4a46-aa5b-2153ff0ad107"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-04T14:41:40.2622157Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Identifiers": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "UniquePlatformIdentification": [
                            {
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                },
                                "CountryCode": [
                                    "XXN"
                                ],
                                "PlatformID": [
                                    "Shipborne UAV 1"
                                ]
                            }
                        ],
                        "NIC": [
                            "ABC123456789012"
                        ],
                        "RIC": [
                            "AB12CD"
                        ]
                    }
                ],
                "SystemDescription": [
                    {
                        "_": "ScanEagle type UAV",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Capability": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "Sensor": [
                            {
                                "GMTIUDPPort": [
                                    "0"
                                ],
                                "MaximumEndurance": [
                                    {
                                        "TimeIntervalHours": [
                                            {
                                                "_": "20",
                                                "$": {
                                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "ContactInfo": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "APP6BSymbolIDCodingReference": [
                    {
                        "_": "SFGPE----------",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "EnglishName": [
                    {
                        "_": "Shipborne UAV",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Name": [
                    {
                        "_": "Shipborne UAV 1",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/dc9376ed-2520-457e-8c93-344e712f7092"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-08T13:45:31.6821713Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Identifiers": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "UniquePlatformIdentification": [
                            {
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                },
                                "CountryCode": [
                                    "NOR"
                                ],
                                "PlatformID": [
                                    "P3_NOF2510"
                                ]
                            }
                        ],
                        "NIC": [
                            "ABC123456789012"
                        ],
                        "RIC": [
                            "AB12CD"
                        ]
                    }
                ],
                "SystemDescription": [
                    {
                        "_": "P3 Orion MPA",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Capability": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "Sensor": [
                            {
                                "GMTIUDPPort": [
                                    "0"
                                ],
                                "MaximumEndurance": [
                                    {
                                        "TimeIntervalHours": [
                                            {
                                                "_": "9",
                                                "$": {
                                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "ContactInfo": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "APP6BSymbolIDCodingReference": [
                    {
                        "_": "SFGPE----------",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "EnglishName": [
                    {
                        "_": "P3_NOF2510",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Name": [
                    {
                        "_": "P3_NOF2510",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/0379f053-ce2e-48ee-8ff1-1841ab836549"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-08T13:49:43.9563819Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Identifiers": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "UniquePlatformIdentification": [
                            {
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                },
                                "CountryCode": [
                                    "USA"
                                ],
                                "PlatformID": [
                                    "F18_USN8010"
                                ]
                            }
                        ],
                        "NIC": [
                            "ABC123456789012"
                        ],
                        "RIC": [
                            "AB12CD"
                        ]
                    }
                ],
                "SystemDescription": [
                    {
                        "_": "F/A 18 Hornet",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Capability": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "Sensor": [
                            {
                                "GMTIUDPPort": [
                                    "0"
                                ],
                                "MaximumEndurance": [
                                    {
                                        "TimeIntervalHours": [
                                            {
                                                "_": "12",
                                                "$": {
                                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "ContactInfo": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "APP6BSymbolIDCodingReference": [
                    {
                        "_": "SFGPE----------",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "EnglishName": [
                    {
                        "_": "F18_USN8010",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Name": [
                    {
                        "_": "F18_USN8010",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/ac59b3fa-df8f-405d-849b-f98ea06c72f6"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-08T14:16:18.6460165Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Identifiers": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "UniquePlatformIdentification": [
                            {
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                },
                                "CountryCode": [
                                    "XXN"
                                ],
                                "PlatformID": [
                                    "RQ4_XEF3914"
                                ]
                            }
                        ],
                        "NIC": [
                            "ABC123456789012"
                        ],
                        "RIC": [
                            "AB12CD"
                        ]
                    }
                ],
                "SystemDescription": [
                    {
                        "_": "RQ 4 Global Hawk NATO AGS",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Capability": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "Sensor": [
                            {
                                "GMTIUDPPort": [
                                    "0"
                                ],
                                "MaximumEndurance": [
                                    {
                                        "TimeIntervalHours": [
                                            {
                                                "_": "14",
                                                "$": {
                                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "ContactInfo": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "APP6BSymbolIDCodingReference": [
                    {
                        "_": "SFGPE----------",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "EnglishName": [
                    {
                        "_": "RQ4_XEF3914",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Name": [
                    {
                        "_": "RQ4_XEF3914",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/7430171a-b3e2-4df9-b8dd-08cbdd835d92"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-08T14:40:28.3478903Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Identifiers": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "UniquePlatformIdentification": [
                            {
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                },
                                "CountryCode": [
                                    "XXN"
                                ],
                                "PlatformID": [
                                    "NIFC"
                                ]
                            }
                        ],
                        "NIC": [
                            "ABC123456789012"
                        ],
                        "RIC": [
                            "AB12CD"
                        ]
                    }
                ],
                "SystemDescription": [
                    {
                        "_": "NATO Intelligence Fusion Centre",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Capability": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "Sensor": [
                            {
                                "GMTIUDPPort": [
                                    "0"
                                ],
                                "MaximumEndurance": [
                                    {
                                        "TimeIntervalHours": [
                                            {
                                                "_": "24",
                                                "$": {
                                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "ContactInfo": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "APP6BSymbolIDCodingReference": [
                    {
                        "_": "SFGPE----------",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "EnglishName": [
                    {
                        "_": "NIFC",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Name": [
                    {
                        "_": "NIFC",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/f5a16d0c-4e67-434c-879f-a4b0be6cd09c"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-08T15:15:42.3202628Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Identifiers": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "UniquePlatformIdentification": [
                            {
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                },
                                "CountryCode": [
                                    "ROU"
                                ],
                                "PlatformID": [
                                    "ROU ScanEagle 01"
                                ]
                            }
                        ],
                        "NIC": [
                            "ABC123456789012"
                        ],
                        "RIC": [
                            "AB12CD"
                        ]
                    }
                ],
                "SystemDescription": [
                    {
                        "_": "ScanEagle UAV",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Capability": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "Sensor": [
                            {
                                "GMTIUDPPort": [
                                    "0"
                                ],
                                "MaximumEndurance": [
                                    {
                                        "TimeIntervalHours": [
                                            {
                                                "_": "20",
                                                "$": {
                                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "ContactInfo": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "APP6BSymbolIDCodingReference": [
                    {
                        "_": "SFGPE----------",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "EnglishName": [
                    {
                        "_": "ROU ScanEagle 01",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Name": [
                    {
                        "_": "ROU ScanEagle 01",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/42d7804e-5824-4fed-b388-4bdc431cabde"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-08T15:17:23.4178692Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Identifiers": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "UniquePlatformIdentification": [
                            {
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                },
                                "CountryCode": [
                                    "ESP"
                                ],
                                "PlatformID": [
                                    "ARTHUR 01"
                                ]
                            }
                        ],
                        "NIC": [
                            "ABC123456789012"
                        ],
                        "RIC": [
                            "AB12CD"
                        ]
                    }
                ],
                "SystemDescription": [
                    {
                        "_": "ARTHUR WL Radar",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Capability": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "Sensor": [
                            {
                                "GMTIUDPPort": [
                                    "0"
                                ],
                                "MaximumEndurance": [
                                    {
                                        "TimeIntervalHours": [
                                            {
                                                "_": "24",
                                                "$": {
                                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "ContactInfo": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "APP6BSymbolIDCodingReference": [
                    {
                        "_": "SFGPE----------",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "EnglishName": [
                    {
                        "_": "ARTHUR 01",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Name": [
                    {
                        "_": "ARTHUR 01",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/78f0fb96-9f7f-4e46-924e-d6c50091c549"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-08T15:30:35.7087921Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Identifiers": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "UniquePlatformIdentification": [
                            {
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                },
                                "CountryCode": [
                                    "POL"
                                ],
                                "PlatformID": [
                                    "MUR-20 (BREN-2) 01"
                                ]
                            }
                        ],
                        "NIC": [
                            "ABC123456789012"
                        ],
                        "RIC": [
                            "AB12CD"
                        ]
                    }
                ],
                "SystemDescription": [
                    {
                        "_": "Tactical ES/ELINT system",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Capability": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "Sensor": [
                            {
                                "GMTIUDPPort": [
                                    "0"
                                ],
                                "MaximumEndurance": [
                                    {
                                        "TimeIntervalHours": [
                                            {
                                                "_": "24",
                                                "$": {
                                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "ContactInfo": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "APP6BSymbolIDCodingReference": [
                    {
                        "_": "SFGPE----------",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "EnglishName": [
                    {
                        "_": "MUR-20 (BREN-2)",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Name": [
                    {
                        "_": "MUR-20 (BREN-2) 01",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/8e05cacf-3525-4518-9f21-b46bacd922a3"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-08T15:40:50.1405445Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Identifiers": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "UniquePlatformIdentification": [
                            {
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                },
                                "CountryCode": [
                                    "POL"
                                ],
                                "PlatformID": [
                                    "RZRA-201 - LIWIEC 01"
                                ]
                            }
                        ],
                        "NIC": [
                            "ABC123456789012"
                        ],
                        "RIC": [
                            "AB12CD"
                        ]
                    }
                ],
                "SystemDescription": [
                    {
                        "_": "RZRA-201 - LIWIEC 3D mobile  WL radar",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Capability": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "Sensor": [
                            {
                                "GMTIUDPPort": [
                                    "0"
                                ],
                                "MaximumEndurance": [
                                    {
                                        "TimeIntervalHours": [
                                            {
                                                "_": "24",
                                                "$": {
                                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "ContactInfo": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "APP6BSymbolIDCodingReference": [
                    {
                        "_": "SFGPE----------",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "EnglishName": [
                    {
                        "_": "Liwiec 01",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Name": [
                    {
                        "_": "RZRA-201 - LIWIEC 01",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/44a26541-f1b1-4d9b-b3a9-73309204b243"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-14T17:56:27.1665472Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Identifiers": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "UniquePlatformIdentification": [
                            {
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                },
                                "CountryCode": [
                                    "XXN"
                                ],
                                "PlatformID": [
                                    "E3A_XEF2010"
                                ]
                            }
                        ],
                        "NIC": [
                            "ABC123456789012"
                        ],
                        "RIC": [
                            "AB12CD"
                        ]
                    }
                ],
                "SystemDescription": [
                    {
                        "_": "E3A - AWACS",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Capability": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "Sensor": [
                            {
                                "GMTIUDPPort": [
                                    "0"
                                ],
                                "MaximumEndurance": [
                                    {
                                        "TimeIntervalHours": [
                                            {
                                                "_": "9",
                                                "$": {
                                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "ContactInfo": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "APP6BSymbolIDCodingReference": [
                    {
                        "_": "SFGPE----------",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "EnglishName": [
                    {
                        "_": "E3A_XEF2010",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Name": [
                    {
                        "_": "E3A_XEF2010",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/5218f1ff-c344-435d-8799-e86121f8fcbb"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-14T17:58:41.5824882Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Identifiers": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "UniquePlatformIdentification": [
                            {
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                },
                                "CountryCode": [
                                    "NOR"
                                ],
                                "PlatformID": [
                                    "F35A_NOF2120"
                                ]
                            }
                        ],
                        "NIC": [
                            "ABC123456789012"
                        ],
                        "RIC": [
                            "AB12CD"
                        ]
                    }
                ],
                "SystemDescription": [
                    {
                        "_": "F35A multirole fighter",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Capability": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "Sensor": [
                            {
                                "GMTIUDPPort": [
                                    "0"
                                ],
                                "MaximumEndurance": [
                                    {
                                        "TimeIntervalHours": [
                                            {
                                                "_": "4",
                                                "$": {
                                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "ContactInfo": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "APP6BSymbolIDCodingReference": [
                    {
                        "_": "SFGPE----------",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "EnglishName": [
                    {
                        "_": "F35A_NOF2120",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Name": [
                    {
                        "_": "F35A_NOF2120",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/aabf58e2-16bd-4892-9c02-c1a8e9e13f72"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-14T18:04:02.4739583Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Identifiers": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "UniquePlatformIdentification": [
                            {
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                },
                                "CountryCode": [
                                    "USA"
                                ],
                                "PlatformID": [
                                    "F18_USM0312"
                                ]
                            }
                        ],
                        "NIC": [
                            "ABC123456789012"
                        ],
                        "RIC": [
                            "AB12CD"
                        ]
                    }
                ],
                "SystemDescription": [
                    {
                        "_": "F/A 18 Hornet",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Capability": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "Sensor": [
                            {
                                "GMTIUDPPort": [
                                    "0"
                                ],
                                "MaximumEndurance": [
                                    {
                                        "TimeIntervalHours": [
                                            {
                                                "_": "4",
                                                "$": {
                                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "ContactInfo": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "APP6BSymbolIDCodingReference": [
                    {
                        "_": "SFGPE----------",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "EnglishName": [
                    {
                        "_": "F18_USM0312",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Name": [
                    {
                        "_": "F18_USM0312",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/704c05d8-d4cb-44e5-a2ca-8053df3d64cf"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-14T18:07:21.6255323Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Identifiers": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "UniquePlatformIdentification": [
                            {
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                },
                                "CountryCode": [
                                    "FRA"
                                ],
                                "PlatformID": [
                                    "E3F_FRA0001"
                                ]
                            }
                        ],
                        "NIC": [
                            "ABC123456789012"
                        ],
                        "RIC": [
                            "AB12CD"
                        ]
                    }
                ],
                "SystemDescription": [
                    {
                        "_": "E3F Sentry AWACS France",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Capability": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "Sensor": [
                            {
                                "GMTIUDPPort": [
                                    "0"
                                ],
                                "MaximumEndurance": [
                                    {
                                        "TimeIntervalHours": [
                                            {
                                                "_": "2",
                                                "$": {
                                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "ContactInfo": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "APP6BSymbolIDCodingReference": [
                    {
                        "_": "SFGPE----------",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "EnglishName": [
                    {
                        "_": "E3F_FRA0001",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Name": [
                    {
                        "_": "E3F_FRA0001",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/7e4c1932-6104-4dd2-933d-2f65b3313dba"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-14T18:14:38.4603884Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Identifiers": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "UniquePlatformIdentification": [
                            {
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                },
                                "CountryCode": [
                                    "USA"
                                ],
                                "PlatformID": [
                                    "R80D_USN0006"
                                ]
                            }
                        ],
                        "NIC": [
                            "ABC123456789012"
                        ],
                        "RIC": [
                            "AB12CD"
                        ]
                    }
                ],
                "SystemDescription": [
                    {
                        "_": "R80D mini UAV",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Capability": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "Sensor": [
                            {
                                "GMTIUDPPort": [
                                    "0"
                                ],
                                "MaximumEndurance": [
                                    {
                                        "TimeIntervalHours": [
                                            {
                                                "_": "2",
                                                "$": {
                                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "ContactInfo": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "APP6BSymbolIDCodingReference": [
                    {
                        "_": "SFGPE----------",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "EnglishName": [
                    {
                        "_": "R80D_USN0006",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Name": [
                    {
                        "_": "R80D_USN0006",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/d1f4b92c-86d6-4a19-9b0a-da347052dca0"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-14T18:20:31.1091784Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Identifiers": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "UniquePlatformIdentification": [
                            {
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                },
                                "CountryCode": [
                                    "NOR"
                                ],
                                "PlatformID": [
                                    "DJIM3_NOF7005"
                                ]
                            }
                        ],
                        "NIC": [
                            "ABC123456789012"
                        ],
                        "RIC": [
                            "AB12CD"
                        ]
                    }
                ],
                "SystemDescription": [
                    {
                        "_": "DJI Mavic 3 mini UAV",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Capability": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "Sensor": [
                            {
                                "GMTIUDPPort": [
                                    "0"
                                ],
                                "MaximumEndurance": [
                                    {
                                        "TimeIntervalHours": [
                                            {
                                                "_": "1",
                                                "$": {
                                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "ContactInfo": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "APP6BSymbolIDCodingReference": [
                    {
                        "_": "SFGPE----------",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "EnglishName": [
                    {
                        "_": "DJIM3_NOF7005",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Name": [
                    {
                        "_": "DJIM3_NOF7005",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/486d57ae-f12b-4d93-854f-8d44ef2427b1"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-04-14T18:25:10.1589985Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Identifiers": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "UniquePlatformIdentification": [
                            {
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                },
                                "CountryCode": [
                                    "GBR"
                                ],
                                "PlatformID": [
                                    "F35B_UKF2900"
                                ]
                            }
                        ],
                        "NIC": [
                            "ABC123456789012"
                        ],
                        "RIC": [
                            "AB12CD"
                        ]
                    }
                ],
                "SystemDescription": [
                    {
                        "_": "F35B Multirole fighter",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Capability": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "Sensor": [
                            {
                                "GMTIUDPPort": [
                                    "0"
                                ],
                                "MaximumEndurance": [
                                    {
                                        "TimeIntervalHours": [
                                            {
                                                "_": "2",
                                                "$": {
                                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "ContactInfo": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "APP6BSymbolIDCodingReference": [
                    {
                        "_": "SFGPE----------",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "EnglishName": [
                    {
                        "_": "F35B_UKF2900",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Name": [
                    {
                        "_": "F35B_UKF2900",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ]
            },
            {
                "$": {
                    "Identifier": "urn:nato:majiic:organization:SystemSpecifications:ISRSystemType/5e2d5308-3a6f-4046-a889-600e8165caf8"
                },
                "CreationDateTime": [
                    {
                        "_": "2022-05-17T16:45:41.9503715Z",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Creator": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Author": [
                            "Marston"
                        ],
                        "MilitaryUnit": [
                            {
                                "UnitIdentifier": [
                                    "DLCSPM"
                                ],
                                "Nation": [
                                    "CAN"
                                ]
                            }
                        ]
                    }
                ],
                "Security": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        },
                        "Policy": [
                            "NATO"
                        ],
                        "Classification": [
                            "UNCLASSIFIED"
                        ],
                        "Releasability": [
                            "NATO"
                        ]
                    }
                ],
                "Deleted": [
                    {
                        "_": "false",
                        "$": {
                            "xmlns": "urn:nato:majiic:common:isrcommon"
                        }
                    }
                ],
                "Identifiers": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "UniquePlatformIdentification": [
                            {
                                "$": {
                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                },
                                "CountryCode": [
                                    "FRA"
                                ],
                                "PlatformID": [
                                    "COBRA 001"
                                ]
                            }
                        ],
                        "NIC": [
                            "ABC123456789012"
                        ],
                        "RIC": [
                            "AB12CD"
                        ]
                    }
                ],
                "SystemDescription": [
                    {
                        "_": "COBRA WL Radar",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Capability": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        },
                        "Sensor": [
                            {
                                "GMTIUDPPort": [
                                    "0"
                                ],
                                "MaximumEndurance": [
                                    {
                                        "TimeIntervalHours": [
                                            {
                                                "_": "24",
                                                "$": {
                                                    "xmlns": "urn:nato:majiic:common:isrcommon"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "ContactInfo": [
                    {
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "APP6BSymbolIDCodingReference": [
                    {
                        "_": "SFGPE----------",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "EnglishName": [
                    {
                        "_": "COBRA WL Radar",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ],
                "Name": [
                    {
                        "_": "COBRA 001",
                        "$": {
                            "xmlns": "urn:nato:majiic:organization:SystemSpecifications"
                        }
                    }
                ]
            }
        ]
    }
}

export interface tempSystem {
    UniquePlatformID: string,
    Description: string,
    Capacity: string
}


export const generateDataFromORBAT = (_orbat = orbat) => {
    if (!_orbat) return;
    var data: PreAsset[] = [];
    for (let entry of _orbat.OrbatDocument.Units) {
        if (entry['d2p1:UnitLocatedAt']) {
            var location_id =
                entry['d2p1:UnitLocatedAt'][0]['d2p1:LocationReference'][0];
            var location = getLocationByID(location_id, _orbat);
            var start_time =
                entry['d2p1:UnitLocatedAt'][0]['d2p1:EffectiveDate'][0];
            var unit_id = entry.$.Identifier;
            //console.log(getSystemsOfUnit(unit_id));
            var systems = getSystemsOfUnit(unit_id, _orbat);
            if (systems) {
                for (let system of systems) {
                    data.push({
                        ID: data.length,
                        ...system,
                        Unit: entry['d2p1:MilitaryUnitName'][0].Name[0]._,
                        AvailableFrom: new Date(Number(start_time.split("-")[0]), Number(start_time.split("-")[1]), Number(start_time.split("-")[2])),
                        Location:
                            location.Latitude[0]._ + 'N ' + location.Longitude[0]._ + 'E;',
                        Sensor: 'FMV'
                    });
                }
            }
        } else {
            var unit_id = entry.$.Identifier;
            var systems = getSystemsOfUnit(unit_id, _orbat);
            if (systems) {
                for (let system of systems) {
                    data.push({
                        ID: data.length,
                        ...system,
                        Unit: entry['d2p1:MilitaryUnitName'][0].Name[0]._,
                        AvailableFrom: new Date(
                            today.getFullYear(),
                            today.getMonth(),
                            today.getDate(),
                        ),
                        Location: '53.120918N 17.978779E',
                        Sensor: 'GMTI'
                    });
                }
            }
        }
    }
    return data;
}

const getSystemsOfUnit = (_unit_id: string, _orbat: { OrbatDocument: any; }): tempSystem[] => {
    var systems: tempSystem[] = [];
    for (let entry of _orbat.OrbatDocument.SystemAssignments.filter(
        (myObj: any) => myObj.Unit[0] === _unit_id
    )) {
        var isr_system_id = entry.ISRSystem[0];
        var isr_system = getISRSystemByID(isr_system_id, _orbat);
        if (isr_system.hasOwnProperty('Capability')) {
            if (isr_system.Capability[0].hasOwnProperty('Sensor')) {
                systems.push({
                    UniquePlatformID:
                        isr_system.Identifiers[0].UniquePlatformIdentification[0]
                            .PlatformID[0],
                    Description: isr_system.SystemDescription[0]._,
                    Capacity: getISRSystemCapacity(isr_system),
                });
            }
        } else {
            systems.push({
                UniquePlatformID:
                    isr_system.Identifiers[0].UniquePlatformIdentification[0]
                        .PlatformID[0],
                Description: isr_system.SystemDescription[0]._,
                Capacity: '24',
            });
        }
    }
    return systems;
}

const getLocationByID = (_location_id: string, _orbat: any) => {
    return _orbat.OrbatDocument.Locations.find(
        (myObj: any) => myObj.$.Identifier === _location_id
    ).FreeFormLocation[0].GeoPosition2D[0];
}

const getISRSystemByID = (_isr_system_id: string, _orbat: any) => {
    return _orbat.OrbatDocument.ISRSystems.find(
        (myObj: any) => myObj.$.Identifier === _isr_system_id
    );
}

const getLocation = (_unit: any, _orbat: any): string => {
    var unit: any = _orbat['OrbatDocument']['Units'].find(
        (myObj: any) => myObj.$.Identifier === _unit
    );
    if (unit.hasOwnProperty('d2p1:UnitLocatedAt')) {
        return unit['d2p1:UnitLocatedAt'][0]['d2p1:LocationReference'][0];
    } else return 'none';
}

//

const getISRSystemIdentifier = (ISRSystem: any): string => {
    return ISRSystem['$']['Identifier'];
}

const getISRSystemDescription = (ISRSystem: any): string => {
    return ISRSystem['SystemDescription'][0]['_'];
}

const getISRSystemSensor = (ISRSystem: any): string => {
    return ISRSystem['Capability'][0]['Sensor'][0];
}

const getISRSystemCapacity = (ISRSystem: any): string => {
    return ISRSystem['Capability'][0]['Sensor'][0]['MaximumEndurance'][0][
        'TimeIntervalHours'
    ][0]['_'];
}