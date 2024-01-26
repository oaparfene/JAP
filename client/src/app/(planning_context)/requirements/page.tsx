'use client'

import { PlanSelector } from "@/components/PlanSelector"
import { useContext } from "react"
import { JAPContext } from "../../context"
import { Alert, Box, Button, Snackbar, Tab, Tabs, Typography } from "@mui/material"
import { DataGrid, GridColDef, GridRowId } from "@mui/x-data-grid"
import { useState } from "react"
import MapView from "@/components/MapView"
import SynchMatrixView from "@/components/SynchMatrixView"
import MapIcon from '@mui/icons-material/Map';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import TableChartIcon from '@mui/icons-material/TableChart';
import { CustomReqsToolbar } from "@/components/ExcelExport"
import dynamic from 'next/dynamic';
import EXCELReqUpload from "@/components/EXCELReqUpload"

const ClientSideMapView = dynamic(() => import('../../../components/MapView'), {
    ssr: false,
});

const columns: GridColDef[] = [
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
    const { allRequirements, addCRsToPlan, allPlans: plans, newPlan, activePlanIndex, setActivePlanIndex } = useContext(JAPContext)
    const [pageSize, setPageSize] = useState(10);
    const [selectedRows, setSelectedRows] = useState<string[]>([])
    const [amountOfAssetsAdded, setAmountOfAssetsAdded] = useState<number>(0)
    const [open, setOpen] = useState(false);

    const rows = allRequirements.filter((cr) => !plans[activePlanIndex]?.requirements?.find(req => req.ID === cr.ID))

    //console.log(allRequirements)

    const data_main: any = [
        [
            { type: "string", id: "Requirement" },
            { type: "string", id: "Asset" },
            { type: "date", id: "Start" },
            { type: "date", id: "End" },
        ]
    ];

    const today = new Date();

    if (plans[activePlanIndex]) {
        plans[activePlanIndex].requirements?.forEach((req, i) => {
            data_main.push(["CR" + req.ID, '', new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                Number(req.Coll_Start_Time.split("T")[1].split(":")[0]),
                Number(req.Coll_Start_Time.split("T")[1].split(":")[1]),
            ), new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                Number(req.Coll_End_Time.split("T")[1].split(":")[0]),
                Number(req.Coll_End_Time.split("T")[1].split(":")[1]),
            )])
        })
    }

    const location_data = [] as [string, [number, number]][]

    if (plans[activePlanIndex]) {
        plans[activePlanIndex].requirements?.forEach((req, i) => {
            location_data.push(['CR' + req.ID, [Number(req.Coordinates.split("N")[0]), Number(req.Coordinates.split(" ")[1].split("E")[0])]])
        })
    }

    const addToPlanHandler = () => {
        addCRsToPlan(selectedRows.map((id) => rows.find(asset => asset.ID.toString() === id)!))
        console.log('plans', plans)
        setAmountOfAssetsAdded(selectedRows.length)
        setOpen(true);
        setSelectedRows([])
    }

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

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
                <Typography
                    variant="h5"
                    component="h5"
                    sx={{ textAlign: 'left', mt: 0, mb: 3 }}
                >Collection Requirements:</Typography>

                <Box sx={{ display: 'flex', justifyContent: "space-between", width: 'full' }}>
                    <Button variant='contained' sx={{ mb: 2 }} onClick={addToPlanHandler}>Add Selection to Plan</Button>
                    <EXCELReqUpload />
                </Box>

                <Box sx={{ height: 650, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        getRowId={(row) => row.ID}
                        columns={columns}
                        onSelectionModelChange={(newSelectedRows) => {
                            console.log("new selection:", newSelectedRows)
                            setSelectedRows(newSelectedRows.map((e) => e.toString()))
                            console.log("selectedRows: ", selectedRows)
                            //setSelectedRows(newSelectedRows);
                        }}
                        selectionModel={selectedRows}
                        rowsPerPageOptions={[5, 10, 20]}
                        pageSize={pageSize}
                        checkboxSelection
                        components={{ Toolbar: CustomReqsToolbar }}
                    />
                </Box>
            </CustomTabPanel>

            <CustomTabPanel value={tabValue} index={1}>
                <SynchMatrixView title="Requirement Collection Time View" data={[data_main]}></SynchMatrixView>
            </CustomTabPanel>

            <CustomTabPanel value={tabValue} index={2}>
                <ClientSideMapView title="Requirement Location View" locationData={location_data} pathData={[]}></ClientSideMapView>
            </CustomTabPanel>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Added {amountOfAssetsAdded} Requirements to Plan {plans[activePlanIndex]?.name}
                </Alert>
            </Snackbar>
        </Box>
    )
}