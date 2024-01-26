'use client'

import { PlanSelector } from "@/components/PlanSelector"
import { generateDataFromORBAT } from "@/constants"
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
import { Asset } from "@/hooks/usePlan"
import { CustomAssetsToolbar } from "@/components/ExcelExport"
import dynamic from 'next/dynamic';

const ClientSideMapView = dynamic(() => import('../../../components/MapView'), {
    ssr: false,
});

const columns: GridColDef[] = [
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
    const { allAssets, addAssetsToPlan, allPlans, newPlan, activePlanIndex, setActivePlanIndex } = useContext(JAPContext)
    const [pageSize, setPageSize] = useState(10);
    const [selectedRows, setSelectedRows] = useState<any[]>([])
    const [amountOfAssetsAdded, setAmountOfAssetsAdded] = useState<number>(0)
    const [open, setOpen] = useState(false);

    console.log('allAssets', allAssets)

    const allRows = allAssets
    const rows = allRows.filter((asset) => !allPlans[activePlanIndex]?.assets?.find(el => el.ID === asset.ID))

    const data_main: any = [
        [
            { type: "string", id: "Requirement" },
            { type: "string", id: "Asset" },
            { type: "date", id: "Start" },
            { type: "date", id: "End" },
        ]
    ];

    if (allPlans[activePlanIndex]) {
        allPlans[activePlanIndex].assets?.forEach((asset, i) => {
            data_main.push([asset.UniquePlatformID, '',
            new Date(asset.AvailableFrom),
            new Date(
            )])
        })
    }

    const location_data = [] as [string, [number, number]][]

    if (allPlans[activePlanIndex]) {
        allPlans[activePlanIndex].assets?.forEach((asset, i) => {
            location_data.push([asset.UniquePlatformID, [Number(asset.Location.split("N")[0]), Number(asset.Location.split(" ")[1].split("E")[0])]])
        })
    }

    const addToPlanHandler = () => {
        if (!allPlans[activePlanIndex]) return
        console.log('selectedRows', selectedRows)
        if (selectedRows.length === 0) return
        const assetsToAdd = selectedRows.map((id) => rows.find(asset => asset.ID === id)) as Asset[]
        console.log('assetsToAdd', assetsToAdd)
        addAssetsToPlan(assetsToAdd)
        console.log('plans', allPlans)
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

            <Box sx={{ mt: 2 }}>
                <PlanSelector plans={allPlans} newPlan={newPlan} activePlanIndex={activePlanIndex} setActivePlanIndex={setActivePlanIndex} />
            </Box>

            <CustomTabPanel value={tabValue} index={0}>
                <Typography
                    variant="h5"
                    component="h5"
                    sx={{ textAlign: 'left', mt: 0, mb: 3 }}
                >Collection Assets:</Typography>

                <Button variant='contained' sx={{ mb: 2 }} onClick={addToPlanHandler}>Add Selection to Plan</Button>

                <Box sx={{ height: 650, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        getRowId={(row) => row.ID}
                        columns={columns}
                        onSelectionModelChange={(newSelectedRows) => {
                            console.log(newSelectedRows)
                            setSelectedRows(newSelectedRows)
                            console.log(selectedRows)
                            //setSelectedRows(newSelectedRows);
                        }}
                        selectionModel={selectedRows}
                        rowsPerPageOptions={[5, 10, 20]}
                        pageSize={pageSize}
                        checkboxSelection
                        components={{ Toolbar: CustomAssetsToolbar }}
                    />
                </Box>
            </CustomTabPanel>

            <CustomTabPanel value={tabValue} index={1}>
                <SynchMatrixView title="Asset Availability View" data={[data_main]}></SynchMatrixView>
            </CustomTabPanel>

            <CustomTabPanel value={tabValue} index={2}>
                <ClientSideMapView title="Asset Location View" locationData={location_data} pathData={[]}></ClientSideMapView>
            </CustomTabPanel>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Added {amountOfAssetsAdded} Assets to Plan {allPlans[activePlanIndex]?.name}
                </Alert>
            </Snackbar>
        </Box>
    )
}