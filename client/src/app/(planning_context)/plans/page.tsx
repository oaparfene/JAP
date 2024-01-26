'use client'

import { PlanSelector } from "@/components/PlanSelector"
import * as XLSX from 'xlsx';
import { generateDataFromORBAT, crs } from "@/constants"
import { useContext, useEffect } from "react"
import { JAPContext } from "../../context"
import { Alert, Box, Button, CircularProgress, MenuItem, Snackbar, Stack, Tab, Tabs, Typography } from "@mui/material"
import { DataGrid, GridColDef, gridFilteredSortedRowIdsSelector, GridRowId, GridToolbar, GridToolbarContainer, GridToolbarExportContainer, gridVisibleColumnFieldsSelector, useGridApiContext } from "@mui/x-data-grid"
import { useState } from "react"
import { Asset, Requirement } from "@/hooks/usePlan"
import { useMiniZinc } from "@/hooks/useMiniZinc"
import MapView from "@/components/MapView"
import SynchMatrixView from "@/components/SynchMatrixView"
import MapIcon from '@mui/icons-material/Map';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import TableChartIcon from '@mui/icons-material/TableChart';
import { CustomReqsToolbar, CustomAssetsToolbar, handleExportPlan } from "@/components/ExcelExport";
import dynamic from 'next/dynamic';
import { toPng } from "html-to-image";
import { useData } from "@/hooks/useData";

const ClientSideMapView = dynamic(() => import('../../../components/MapView'), {
    ssr: false,
});


const reqColumns: GridColDef[] = [
    {
        field: 'ID',
        headerName: 'ID',
        width: 20,
    },
    {
        field: 'Operation',
        headerName: 'Operation',
        width: 200,
    },
    // {
    //     field: 'Requester',
    //     headerName: 'Requester',
    //     width: 100,
    // },
    // {
    //     field: 'CR_Rank',
    //     headerName: 'CR Rank',
    //     width: 20,
    // },
    // {
    //     field: 'Justification',
    //     headerName: 'Justification',
    //     width: 200,
    // },
    // {
    //     field: 'Status',
    //     headerName: 'Status',
    //     width: 120,
    // },
    {
        field: 'Location',
        headerName: 'Location',
        width: 200,
    },
    // {
    //     field: 'Shape',
    //     headerName: 'Shape',
    //     width: 100,
    // },
    // {
    //     field: 'Location_Type',
    //     headerName: 'Location Type',
    //     width: 150,
    // },
    {
        field: 'Coordinates',
        headerName: 'Coordinates',
        width: 200,
    },
    // {
    //     field: 'Circle_Radius',
    //     headerName: 'Circle Radius',
    //     width: 100,
    // },
    // {
    //     field: 'Target_ID',
    //     headerName: 'Target ID',
    //     width: 150,
    // },
    // {
    //     field: 'Location_Category',
    //     headerName: 'Location Category',
    //     width: 200,
    // },
    // {
    //     field: 'Coll_Start_Date',
    //     headerName: 'Coll Start Date',
    //     width: 100,
    // },
    // {
    //     field: 'Coll_End_Date',
    //     headerName: 'Coll End Date',
    //     width: 100,
    // },
    {
        field: 'Coll_Start_Time',
        headerName: 'Coll Start Time',
        width: 100,
    },
    {
        field: 'Coll_End_Time',
        headerName: 'Coll End Time',
        width: 100,
    },
    // {
    //     field: 'Recurrance',
    //     headerName: 'Recurrance',
    //     width: 100,
    // },
    // {
    //     field: 'ISR_Role',
    //     headerName: 'ISR Role',
    //     width: 100,
    // },
    // {
    //     field: 'Sensor_Visibility',
    //     headerName: 'Sensor Visibility',
    //     width: 100,
    // },
    {
        field: 'Required_Information',
        headerName: 'Required Information',
        width: 700,
    },
    {
        field: 'Intel_Discipline',
        headerName: 'Intel Discipline',
        width: 100,
    },
    // {
    //     field: 'Exploitation_Requirement',
    //     headerName: 'Exploitation Requirement',
    //     width: 200,
    // },
    // {
    //     field: 'ER_Remarks',
    //     headerName: 'ER Remarks',
    //     width: 200,
    // },
    // {
    //     field: 'ER_Report_Frequency',
    //     headerName: 'ER Report Frequency',
    //     width: 200,
    // },
    {
        field: 'Required_Product',
        headerName: 'Required Product',
        width: 200,
    },
    // {
    //     field: 'RP_Remarks',
    //     headerName: 'RP Remarks',
    //     width: 200,
    // },
    // {
    //     field: 'RP_Report_Frequency',
    //     headerName: 'RP Report Frequency',
    //     width: 200,
    // },
    {
        field: 'LTIOV',
        headerName: 'LTIOV',
        width: 200,
    },
    // {
    //     field: 'Latest_Report_Time',
    //     headerName: 'Latest Report Time',
    //     width: 200,
    // },
    // {
    //     field: 'Reporting_Instructions',
    //     headerName: 'Reporting Instructions',
    //     width: 200,
    // },
];
const assetColumns: GridColDef[] = [
    {
        field: 'UniquePlatformID',
        headerName: 'ID',
        width: 200,
    },
    {
        field: 'Description',
        headerName: 'Description',
        width: 200,
    },
    {
        field: 'Capacity',
        headerName: 'Capacity',
        width: 100,
    },
    {
        field: 'Location',
        headerName: 'Location',
        width: 200,
    },
    {
        field: 'Sensor',
        headerName: 'Sensor',
        width: 100,
    },
    {
        field: 'Unit',
        headerName: 'Unit',
        width: 200,
    },
    {
        field: 'AvailableFrom',
        headerName: 'AvailableFrom',
        width: 200,
    },
]

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 0 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Home() {
    const { addFlightPlansToPlan, addTasksToPlan, allPlans: plans, activePlanIndex, removeAssetsFromPlan, removeCRsFromPlan } = useContext(JAPContext)
    const { prepareAllocation, loading, allocation, flightPlans } = useMiniZinc()
    const [pageSize, setPageSize] = useState(10);
    const [selectedCRRows, setSelectedCRRows] = useState<string[]>([])
    const [selectedAssetRows, setSelectedAssetRows] = useState<string[]>([])
    const [amountOfAssetsRemoved, setAmountOfAssetsRemoved] = useState<number>(0)
    const [amountOfCRsRemoved, setAmountOfCRsRemoved] = useState<number>(0)
    const [openCR, setOpenCR] = useState(false);
    const [openAsset, setOpenAsset] = useState(false);
    const [openAllocation, setOpenAllocation] = useState(false);
    const { savePlan } = useData()

    console.log('activePlanIndex', activePlanIndex)
    console.log('plans', plans)

    const planReqs = plans[activePlanIndex] ? plans[activePlanIndex].requirements : []
    const planAssets = plans[activePlanIndex] ? plans[activePlanIndex].assets : []

    console.log('planReqs', planReqs)
    console.log('planAssets', planAssets)

    const data_main: any = [
        [
            { type: "string", id: "Requirement" },
            { type: "string", id: "Asset" },
            { type: "date", id: "Start" },
            { type: "date", id: "End" },
        ]
    ];

    const data_inv: any = [
        [
            { type: "string", id: "Asset" },
            { type: "string", id: "Requirement" },
            { type: "date", id: "Start" },
            { type: "date", id: "End" },
        ]
    ];

    if (plans[activePlanIndex]) {
        plans[activePlanIndex].allocation.forEach((task, i) => {
            data_main.push(["CR" + task.Requirement_to_Collect, task.Asset_Used, new Date(task.Start), new Date(task.End)])
        })

        plans[activePlanIndex].allocation.forEach((task, i) => {
            data_inv.push([task.Asset_Used, "CR" + task.Requirement_to_Collect, new Date(task.Start), new Date(task.End)])
        })
    }

    console.log('data_main', data_main)
    console.log('data_inv', data_inv)

    const location_data = [] as [string, [number, number]][]
    const flight_data = [] as [string, [number, number][]][]

    if (plans[activePlanIndex]) {
        plans[activePlanIndex].allocation.forEach((task, i) => {
            location_data.push(['CR' + plans[activePlanIndex].requirements.find(e => e.db_id === task.Requirement_to_Collect)?.ID /*+ " " + plans[activePlanIndex].requirements.find(e => e.db_id === task.Requirement_to_Collect)?.Intel_Discipline + " " + task.Asset_Used + " at " + task.Start.getHours() + ":" + (task.Start.getMinutes() === 0 ? '00' : task.Start.getMinutes().toString()) + " - " + task.End.getHours() + ":" + (task.End.getMinutes() === 0 ? '00' : task.End.getMinutes().toString())*/, [Number(task.Coordinates.split("N")[0]), Number(task.Coordinates.split(" ")[1].split("E")[0])]])
        })

        plans[activePlanIndex].flightPlans.forEach((flight, i) => {
            if (flight.Flight_Path.length > 0) {
                flight_data.push([flight.Asset_Used, flight.Flight_Path.map((e) => {
                    return [Number(e.split("N")[0]), Number(e.split(" ")[1].split("E")[0])]
                }
                )])
            }
        })
    }

    console.log('location_data', location_data)
    console.log('flight_data', flight_data)

    const removeReqsFromPlanHandler = () => {
        if (!plans[activePlanIndex]) return
        if (selectedCRRows.length === 0) return
        const CRsToRemove = selectedCRRows.map((id) => planReqs.find(asset => asset.ID.toString() === id)) as Requirement[]
        console.log('CRsToRemove', CRsToRemove)
        removeCRsFromPlan(CRsToRemove)
        setAmountOfCRsRemoved(selectedCRRows.length)
        setOpenCR(true);
        setSelectedCRRows([])
    }

    const removeAssetsFromPlanHandler = () => {
        if (!plans[activePlanIndex]) return
        if (selectedAssetRows.length === 0) return
        const assetsToRemove = selectedAssetRows.map((id) => planAssets.find(asset => asset.ID.toString() === id)) as Asset[]
        console.log('assetsToRemove', assetsToRemove)
        removeAssetsFromPlan(assetsToRemove)
        setAmountOfAssetsRemoved(selectedAssetRows.length)
        setOpenAsset(true);
        setSelectedAssetRows([])
    }

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenCR(false);
        setOpenAsset(false);
        setOpenAllocation(false);
    };

    const handleRequestAllocation = () => {
        console.log('handleRequestAllocation')
        if (!plans[activePlanIndex]) return
        prepareAllocation(plans[activePlanIndex]).then(() => {
            setOpenAllocation(true)
        }
        )
    }

    const handleSavePlan = () => {
        console.log('handleSavePlan')
        if (!plans[activePlanIndex]) return
        savePlan(plans[activePlanIndex])
    }

    useEffect(() => {
        if (allocation.length > 0) {
            console.log('allocation', allocation)
            addTasksToPlan(allocation)
        }
    }, [allocation])

    useEffect(() => {
        if (flightPlans.length > 0) {
            console.log('flightPlans', flightPlans)
            addFlightPlansToPlan(flightPlans)
        }
    }, [flightPlans])

    const [tabValue, setTabValue] = useState<number>(0)

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <Box sx={{ px: 8, pb: 8, pt: 1 }}>

            <Tabs value={tabValue} onChange={handleTabChange} centered>
                <Tab icon={<TableChartIcon />} label="" {...a11yProps(0)} />
                <Tab icon={<ViewTimelineIcon />} label="" {...a11yProps(1)} />
                <Tab icon={<MapIcon />} label="" {...a11yProps(2)} />
            </Tabs>

            <CustomTabPanel value={tabValue} index={0}>

                <Box sx={{ display: 'flex', flexDir: 'row', justifyContent: 'space-between' }}>
                    <Typography
                        variant="h5"
                        component="h5"
                        sx={{ textAlign: 'left', mt: 0, mb: 3 }}
                    >Collection Plans:</Typography>
                    <Button variant="contained" sx={{ m: 1 }} onClick={() => {
                        handleExportPlan(plans[activePlanIndex])
                    }}>Download Plan</Button>
                </Box>


                <Box sx={{ display: 'flex', flexDir: 'row', justifyContent: 'space-between' }}>

                    <Typography
                        variant="h6"
                        component="h6"
                        sx={{ textAlign: 'left', mt: 0, mb: 3 }}
                    >Plan Requirements:</Typography>

                    <Button variant='contained' sx={{ mb: 2 }} onClick={removeReqsFromPlanHandler}>Remove Selected Requirements</Button>

                </Box>

                <Box sx={{ height: 650, width: '100%', mb: 8 }}>
                    <DataGrid
                        rows={planReqs}
                        getRowId={(row) => row.ID}
                        columns={reqColumns}
                        onSelectionModelChange={(newSelectedRows) => {
                            console.log(newSelectedRows)
                            setSelectedCRRows(newSelectedRows.map((e) => e.toString()))
                            console.log(selectedCRRows)
                            //setSelectedRows(newSelectedRows);
                        }}
                        selectionModel={selectedCRRows}
                        rowsPerPageOptions={[5, 10, 20]}
                        pageSize={pageSize}
                        checkboxSelection
                        components={{ Toolbar: CustomReqsToolbar }}
                    />
                </Box>

                <Box sx={{ display: 'flex', flexDir: 'row', justifyContent: 'space-between' }}>

                    <Typography
                        variant="h6"
                        component="h6"
                        sx={{ textAlign: 'left', mt: 0, mb: 3 }}
                    >Plan Assets:</Typography>

                    <Button variant='contained' sx={{ mb: 2 }} onClick={removeAssetsFromPlanHandler}>Remove Selected Assets</Button>

                </Box>

                <Box sx={{ height: 650, width: '100%' }}>
                    <DataGrid
                        rows={planAssets}
                        getRowId={(row) => row.ID}
                        columns={assetColumns}
                        onSelectionModelChange={(newSelectedRows) => {
                            console.log(newSelectedRows)
                            setSelectedAssetRows(newSelectedRows.map((e) => e.toString()))
                            console.log(selectedAssetRows)
                            //setSelectedRows(newSelectedRows);
                        }}
                        selectionModel={selectedAssetRows}
                        rowsPerPageOptions={[5, 10, 20]}
                        pageSize={pageSize}
                        checkboxSelection
                        components={{ Toolbar: CustomAssetsToolbar }}
                    />
                </Box>

                <Stack direction='row' justifyContent='end' sx={{ mt: 2 }}>
                    <Button variant='outlined' sx={{ mr: 2 }} onClick={handleRequestAllocation}>Generate Plan{loading && <CircularProgress sx={{ p: 1 }} />}</Button>
                    <Button variant='outlined' sx={{ mr: 2 }} onClick={() => {
                        handleSavePlan()
                     }}>Save Draft Plan</Button>
                    <Button variant='contained' sx={{ mr: 2 }} onClick={() => { }}>Publish Plan</Button>
                </Stack>
            </CustomTabPanel>

            <CustomTabPanel value={tabValue} index={1}>
                <SynchMatrixView title="Allocation Gantt View" data={[data_main]} crsCollected={plans[activePlanIndex]?.allocation.length} totalCRs={plans[activePlanIndex]?.requirements.length}></SynchMatrixView>
                <SynchMatrixView title="" data={[data_inv]} colorByRowLabel></SynchMatrixView>
            </CustomTabPanel>

            <CustomTabPanel value={tabValue} index={2}>
                <Box sx={{ display: 'flex', flexDir: 'row', justifyContent: 'end' }}>
                    <Button variant="contained" sx={{ m: 1 }} onClick={() => {
                        toPng(document.getElementById('map')!)
                            .then(dataUrl => {
                                console.log(dataUrl)
                                handleExportPlan(plans[activePlanIndex], dataUrl)
                            })
                    }}>Download Plan</Button>
                </Box>
                <ClientSideMapView title="Flight Path View" locationData={location_data} pathData={flight_data}></ClientSideMapView>
            </CustomTabPanel>

            <Snackbar open={openCR} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Removed {amountOfCRsRemoved} Requirements from Plan {plans[activePlanIndex]?.name}
                </Alert>
            </Snackbar>
            <Snackbar open={openAsset} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Removed {amountOfAssetsRemoved} Assets from Plan {plans[activePlanIndex]?.name}
                </Alert>
            </Snackbar>
            <Snackbar open={openAllocation} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Received Allocation for Plan {plans[activePlanIndex]?.name}
                </Alert>
            </Snackbar>
        </Box>
    )
}