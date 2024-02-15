'use client'

import { PlanSelector } from "@/components/PlanSelector"
import { generateDataFromORBAT } from "@/constants"
import { useContext, useEffect } from "react"
import { JAPContext } from "../../context"
import { Alert, Box, Button, Chip, IconButton, MenuItem, OutlinedInput, Select, Snackbar, Tab, Tabs, Typography } from "@mui/material"
import { DataGrid, GridColDef, GridRowId, GridSelectionModel } from "@mui/x-data-grid"
import { useState } from "react"
import MapView from "@/components/MapView"
import SynchMatrixView from "@/components/SynchMatrixView"
import MapIcon from '@mui/icons-material/Map';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import TableChartIcon from '@mui/icons-material/TableChart';
import { Asset } from "@/hooks/usePlan"
import { CustomAssetsToolbar } from "@/components/ExcelExport"
import dynamic from 'next/dynamic';
import { useData } from "@/hooks/useData"
import RefreshIcon from '@mui/icons-material/Refresh';

const ClientSideMapView = dynamic(() => import('../../../components/MapView'), {
    ssr: false,
});



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
    const [selectedRows, setSelectedRows] = useState<GridSelectionModel>([])
    const [amountOfAssetsAdded, setAmountOfAssetsAdded] = useState<number>(0)
    const [open, setOpen] = useState(false);
    const { fetchAssetsFromBackend, uploadAssetToBackend } = useData();
    const [rows, setRows] = useState<Asset[]>([])

    useEffect(() => {
        setRows(allAssets)
    }, [allAssets])

    const handlePlanSelectionChange = (rowId: any, event: any) => {
        setRows((prevRows: any) =>
            prevRows.map((row: any) =>
                row.ID === rowId ? { ...row, Plans_containing_self: event?.target.value } : row
            )
        );
    };

    const PlanSelectComponent = ({ param, value, options }: any) => {
        return (
            <Select
                sx={{ w: '200px', bgcolor: value.includes(allPlans[activePlanIndex]?.db_id) ? '#238823' : value.length > 0 ? '#ffbf00' : 'white' }}
                multiple
                value={value}
                onChange={(e, node) => {
                    handlePlanSelectionChange(param.id, e)
                }}
                input={<OutlinedInput id="select-multiple-chip" sx={{ w: '200px' }} />}
                renderValue={(selected) => (
                    <div>
                        {selected.map((value: any) => (
                            <Chip key={value} label={allPlans.find(plan => plan.db_id === value)?.name} />
                        ))}
                    </div>
                )}
            >
                {options.map((option: any) => (
                    <MenuItem key={option} value={option}>
                        {allPlans.find(plan => plan.db_id === option)?.name}
                    </MenuItem>
                ))}
            </Select>
        )
    }

    // console.log('allAssets', allAssets)

    const columns: GridColDef[] = [
        {
            field: 'UniquePlatformID',
            headerName: 'ID',
            width: 200,
        },
        {
            field: 'Plans_containing_self',
            headerName: 'Plans',
            width: 250,
            renderCell: (params) => <PlanSelectComponent param={params} value={allPlans.filter(plan => params.value.includes(plan.db_id)).map(plan => plan.db_id)}
                options={allPlans.map(plan => plan.db_id)} // Replace with your options
            />
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

    //const rows = allAssets.filter((asset) => !allPlans[activePlanIndex]?.assets?.find(el => el.ID === asset.ID))

    const saveAssetsHandler = () => {
        console.log('rows', rows)
        //addCRsToPlan(selectedRows.map((id) => rows.find(asset => asset.ID.toString() === id)!))
        rows.map((row) => {
            // loop over all requirements that have been edited
            if (!allAssets.includes(row)) {
                console.log('row changed: ', row)
                
                uploadAssetToBackend([row])
            }

        })
        setOpen(true);
        setSelectedRows([])

    }

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
                <PlanSelector />
            </Box>

            <CustomTabPanel value={tabValue} index={0}>
                <Box sx={{ display: 'flex', justifyContent: "begin", alignItems: "center", width: 'full', mb: 3 }}>

                    <Typography
                        variant="h5"
                        component="h5"
                        sx={{ textAlign: 'left', mt: 0 }}
                    >Collection Assets</Typography>

                    <IconButton onClick={() => {
                        fetchAssetsFromBackend();
                    }}>
                        <RefreshIcon />
                    </IconButton>

                </Box>

                <Button variant='contained' sx={{ mb: 2 }} onClick={saveAssetsHandler}>Save</Button>

                {/* <Button variant='contained' sx={{ mb: 2 }} onClick={addToPlanHandler}>Add Selection to Plan</Button> */}

                <Box sx={{ height: 650, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        getRowId={(row) => row.ID}
                        columns={columns}
                        onSelectionModelChange={(newSelectedRows) => {
                            setSelectedRows(newSelectedRows)
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