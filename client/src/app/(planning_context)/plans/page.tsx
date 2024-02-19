'use client'

import { PlanSelector } from "@/components/PlanSelector"
import * as XLSX from 'xlsx';
import { generateDataFromORBAT, crs } from "@/constants"
import { useContext, useEffect } from "react"
import { JAPContext } from "../../context"
import { Alert, Box, Button, Chip, CircularProgress, FormControl, IconButton, MenuItem, OutlinedInput, Select, Snackbar, Stack, Tab, Tabs, Typography } from "@mui/material"
import { DataGrid, GridColDef, gridFilteredSortedRowIdsSelector, GridRowId, GridSelectionModel, GridToolbar, GridToolbarContainer, GridToolbarExportContainer, gridVisibleColumnFieldsSelector, useGridApiContext } from "@mui/x-data-grid"
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
import RefreshIcon from '@mui/icons-material/Refresh';
import { Console } from "console";

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
    const { addFlightPlansToPlan, addTasksToPlan, allPlans, activePlanIndex, allRequirements, allAssets, removeAssetsFromPlan, removeCRsFromPlan, setActivePlanIndex, newPlan } = useContext(JAPContext)
    const { prepareAllocation, loading, allocation, flightPlans } = useMiniZinc()
    const [pageSize, setPageSize] = useState(10);
    const [selectedCRRows, setSelectedCRRows] = useState<GridSelectionModel>([])
    const [selectedAssetRows, setSelectedAssetRows] = useState<GridSelectionModel>([])
    const [amountOfAssetsRemoved, setAmountOfAssetsRemoved] = useState<number>(0)
    const [amountOfCRsRemoved, setAmountOfCRsRemoved] = useState<number>(0)
    const [openCR, setOpenCR] = useState(false);
    const [openAsset, setOpenAsset] = useState(false);
    const [openAllocation, setOpenAllocation] = useState(false);
    const { savePlan, fetchPlansFromBackend, fetchAssetsFromBackend, fetchCRsFromBackend } = useData()

    console.log('activePlanIndex', activePlanIndex)
    console.log('plans', allPlans)

    const [planReqs, setPlanReqs] = useState<Requirement[]>([])
    const [planAssets, setPlanAssets] = useState<Asset[]>([])

    //const planReqs = allPlans[activePlanIndex] ? allPlans[activePlanIndex].requirements : []
    //const planAssets = allPlans[activePlanIndex] ? allPlans[activePlanIndex].assets : []

    useEffect(() => {
        if (allPlans[activePlanIndex]) {
            setPlanReqs(allRequirements.filter((req: Requirement) => req.Plans_containing_self?.includes(allPlans[activePlanIndex].db_id)))
            setPlanAssets(allAssets.filter((asset: Asset) => asset.Plans_containing_self?.includes(allPlans[activePlanIndex].db_id)))
        } else {
            setPlanReqs([])
            setPlanAssets([])
        }
    }, [allRequirements, allPlans, activePlanIndex, allAssets])

    console.log('planReqs', planReqs)
    console.log('planAssets', planAssets)

    const AssetSelectComponent = ({ param, value, options }: any) => {

        const handleAssetSelectionChange = (rowId: any, _assetID: any) => {
            console.log('rowId', rowId)
            console.log('_assetID', _assetID)
            setPlanReqs(planReqs.map((req) => {
                if (req.ID === rowId) {
                    setPlanAssets(planAssets.map((asset) => {
                        if (asset.db_id === _assetID) {
                            return {
                                ...asset,
                                To_Collect: [...asset.To_Collect as string[], req.db_id]
                            }
                            //return asset
                        }
                        return asset
                    }))
                    return {
                        ...req,
                        To_Be_Collected_By: _assetID
                    }
                }
                return req
            }
            ))
        };

        return (
            <FormControl fullWidth>
                <Select
                    value={param.value || ''} // Use the current value or an empty string if undefined
                    onChange={(e) => {
                        handleAssetSelectionChange(param.id, e?.target.value)
                    }}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {options.map((option: Asset) => (
                        <MenuItem key={option.db_id} value={option.db_id}>
                            {option.UniquePlatformID}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        );
    }

    const RequirementSelectComponent = ({ param, value, options }: any) => {
    
        const handleRequirementSelectionChange = (rowId: any, _reqID: any) => {
            console.log('rowId', rowId)
            console.log('_reqID', _reqID)
            setPlanAssets((assetRows: any) =>
            assetRows.map((row: any) =>
                row.ID === rowId ? { ...row, To_Collect: _reqID } : row
            )
        );
        }

        return (
            <Select
                multiple
                value={value}
                onChange={(e) => {
                    handleRequirementSelectionChange(param.id, e?.target.value)
                }}
                input={<OutlinedInput id="select-multiple-chip" sx={{ w: '200px' }} />}
                renderValue={(selected) => (
                    <div>
                        {selected.map((value: any) => (
                            <Chip key={value} label={allRequirements.find(req => req.db_id === value)?.ID} />
                        ))}
                    </div>
                )}
            >
                {options.map((option: Requirement) => (
                    <MenuItem key={option.db_id} value={option.db_id}>
                        {option.ID}
                    </MenuItem>
                ))}
            </Select>
        )

    }

    const reqColumns: GridColDef[] = [
        {
            field: 'ID',
            headerName: 'ID',
            width: 20,
        },
        {
            field: 'To_Be_Collected_By',
            headerName: 'To be Collected by',
            width: 150,
            renderCell: (params) => <AssetSelectComponent param={params}
                value={params.value}
                options={planAssets} />
        },
        {
            field: 'Intel_Discipline',
            headerName: 'Intel Discipline',
            width: 100,
        },
        {
            field: 'Coordinates',
            headerName: 'Coordinates',
            width: 200,
        },
        {
            field: 'Required_Information',
            headerName: 'Required Information',
            width: 700,
        },
        {
            field: 'Required_Product',
            headerName: 'Required Product',
            width: 200,
        },
        {
            field: 'Coll_Start_Time',
            headerName: 'Coll Start Time',
            width: 150,
        },
        {
            field: 'Coll_End_Time',
            headerName: 'Coll End Time',
            width: 150,
        },
        {
            field: 'LTIOV',
            headerName: 'LTIOV',
            width: 200,
        },
    ];

    const assetColumns: GridColDef[] = [
        {
            field: 'UniquePlatformID',
            headerName: 'ID',
            width: 150,
        },
        {
            field: 'To_Collect',
            headerName: 'To Collect',
            width: 150,
            renderCell: (params) => <RequirementSelectComponent param={params}
                value={params.value}
                options={planReqs} />
        },
        {
            field: 'Sensor',
            headerName: 'Sensor',
            width: 100,
        },
        {
            field: 'Location',
            headerName: 'Coordinates',
            width: 200,
        },
        {
            field: 'AvailableFrom',
            headerName: 'AvailableFrom',
            width: 200,
        },
    ]

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

    if (allPlans[activePlanIndex]) {
        allPlans[activePlanIndex].allocation?.forEach((task, i) => {
            data_main.push(["CR" + task.Requirement_to_Collect, task.Asset_Used, new Date(task.Start), new Date(task.End)])
        })

        allPlans[activePlanIndex].allocation?.forEach((task, i) => {
            data_inv.push([task.Asset_Used, "CR" + task.Requirement_to_Collect, new Date(task.Start), new Date(task.End)])
        })
    }

    // console.log('data_main', data_main)
    // console.log('data_inv', data_inv)

    const location_data = [] as [string, [number, number]][]
    const flight_data = [] as [string, [number, number][]][]

    if (allPlans[activePlanIndex]) {
        allPlans[activePlanIndex].allocation?.forEach((task, i) => {
            location_data.push(['CR' + allPlans[activePlanIndex].requirements?.find(e => e.db_id === task.Requirement_to_Collect)?.ID /*+ " " + plans[activePlanIndex].requirements.find(e => e.db_id === task.Requirement_to_Collect)?.Intel_Discipline + " " + task.Asset_Used + " at " + task.Start.getHours() + ":" + (task.Start.getMinutes() === 0 ? '00' : task.Start.getMinutes().toString()) + " - " + task.End.getHours() + ":" + (task.End.getMinutes() === 0 ? '00' : task.End.getMinutes().toString())*/, [Number(task.Coordinates.split("N")[0]), Number(task.Coordinates.split(" ")[1].split("E")[0])]])
        })

        allPlans[activePlanIndex].flightPlans?.forEach((flight, i) => {
            if (flight.Flight_Path.length > 0) {
                flight_data.push([flight.Asset_Used, flight.Flight_Path.map((e) => {
                    return [Number(e.split("N")[0]), Number(e.split(" ")[1].split("E")[0])]
                }
                )])
            }
        })
    }

    // console.log('location_data', location_data)
    // console.log('flight_data', flight_data)

    // const removeReqsFromPlanHandler = () => {
    //     if (!allPlans[activePlanIndex]) return
    //     if (selectedCRRows.length === 0) return
    //     const CRsToRemove = selectedCRRows.map((id) => planReqs.find(asset => asset.ID.toString() === id)) as Requirement[]
    //     console.log('CRsToRemove', CRsToRemove)
    //     removeCRsFromPlan(CRsToRemove)
    //     setAmountOfCRsRemoved(selectedCRRows.length)
    //     setOpenCR(true);
    //     setSelectedCRRows([])
    // }

    // const removeAssetsFromPlanHandler = () => {
    //     if (!allPlans[activePlanIndex]) return
    //     if (selectedAssetRows.length === 0) return
    //     const assetsToRemove = selectedAssetRows.map((id) => planAssets.find(asset => asset.ID.toString() === id)) as Asset[]
    //     console.log('assetsToRemove', assetsToRemove)
    //     removeAssetsFromPlan(assetsToRemove)
    //     setAmountOfAssetsRemoved(selectedAssetRows.length)
    //     setOpenAsset(true);
    //     setSelectedAssetRows([])
    // }

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
        if (!allPlans[activePlanIndex]) return
        prepareAllocation(allPlans[activePlanIndex]).then(() => {
            setOpenAllocation(true)
        }
        )
    }

    const handleSavePlan = () => {
        console.log('handleSavePlan')
        if (!allPlans[activePlanIndex]) return
        savePlan(allPlans[activePlanIndex])
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

            <Box sx={{ mt: 2 }}>
                <PlanSelector />
            </Box>

            <CustomTabPanel value={tabValue} index={0}>

                <Box sx={{ display: 'flex', flexDir: 'row', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', justifyContent: "begin", alignItems: "center", width: 'full', mb: 3 }}>

                        <Typography
                            variant="h5"
                            component="h5"
                            sx={{ textAlign: 'left', mt: 0 }}
                        >Collection Plans</Typography>

                        <IconButton onClick={() => {
                            fetchPlansFromBackend();
                            fetchAssetsFromBackend();
                            fetchCRsFromBackend();
                        }}>
                            <RefreshIcon />
                        </IconButton>

                    </Box>
                    <Button variant="contained" sx={{ m: 1 }} onClick={() => {
                        handleExportPlan(allPlans[activePlanIndex])
                    }}>Download Plan</Button>
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDir: 'row',
                    justifyContent: 'space-between',
                    mb: 3
                }}>
                    <Box sx={{
                        width: '47%',
                    }}>

                        <Box sx={{ display: 'flex', flexDir: 'row', justifyContent: 'space-between' }}>

                            <Typography
                                variant="h6"
                                component="h6"
                                sx={{ textAlign: 'left', mt: 0, mb: 3 }}
                            >Plan Requirements:</Typography>

                            {/* <Button variant='contained' sx={{ mb: 2 }} onClick={removeReqsFromPlanHandler}>Remove Selected Requirements</Button> */}

                        </Box>

                        <Box sx={{ height: 650, width: '100%', mb: 8 }}>
                            <DataGrid
                                rows={planReqs}
                                getRowId={(row) => row.ID}
                                columns={reqColumns}
                                onSelectionModelChange={(newSelectedRows) => {
                                    setSelectedCRRows(newSelectedRows)
                                }}
                                selectionModel={selectedCRRows}
                                rowsPerPageOptions={[5, 10, 20]}
                                pageSize={pageSize}
                                checkboxSelection={false}
                                components={{ Toolbar: CustomReqsToolbar }}
                            />
                        </Box>
                    </Box>

                    <Box sx={{
                        width: '47%',
                    }}>

                        <Box sx={{ display: 'flex', flexDir: 'row', justifyContent: 'space-between' }}>

                            <Typography
                                variant="h6"
                                component="h6"
                                sx={{ textAlign: 'left', mt: 0, mb: 3 }}
                            >Plan Assets:</Typography>

                            {/* <Button variant='contained' sx={{ mb: 2 }} onClick={removeAssetsFromPlanHandler}>Remove Selected Assets</Button> */}

                        </Box>

                        <Box sx={{ height: 650, width: '100%' }}>
                            <DataGrid
                                rows={planAssets}
                                getRowId={(row) => row.ID}
                                columns={assetColumns}
                                onSelectionModelChange={(newSelectedRows) => {
                                    setSelectedAssetRows(newSelectedRows)
                                }}
                                selectionModel={selectedAssetRows}
                                rowsPerPageOptions={[5, 10, 20]}
                                pageSize={pageSize}
                                checkboxSelection={false}
                                components={{ Toolbar: CustomAssetsToolbar }}
                            />
                        </Box>
                    </Box>
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
                <SynchMatrixView title="Allocation Gantt View" data={[data_main]} crsCollected={allPlans[activePlanIndex]?.allocation?.length} totalCRs={allPlans[activePlanIndex]?.requirements?.length}></SynchMatrixView>
                <SynchMatrixView title="" data={[data_inv]} colorByRowLabel></SynchMatrixView>
            </CustomTabPanel>

            <CustomTabPanel value={tabValue} index={2}>
                <Box sx={{ display: 'flex', flexDir: 'row', justifyContent: 'end' }}>
                    <Button variant="contained" sx={{ m: 1 }} onClick={() => {
                        toPng(document.getElementById('map')!)
                            .then(dataUrl => {
                                console.log(dataUrl)
                                handleExportPlan(allPlans[activePlanIndex], dataUrl)
                            })
                    }}>Download Plan</Button>
                </Box>
                <ClientSideMapView title="Flight Path View" locationData={location_data} pathData={flight_data}></ClientSideMapView>
            </CustomTabPanel>

            <Snackbar open={openCR} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Removed {amountOfCRsRemoved} Requirements from Plan {allPlans[activePlanIndex]?.name}
                </Alert>
            </Snackbar>
            <Snackbar open={openAsset} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Removed {amountOfAssetsRemoved} Assets from Plan {allPlans[activePlanIndex]?.name}
                </Alert>
            </Snackbar>
            <Snackbar open={openAllocation} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Received Allocation for Plan {allPlans[activePlanIndex]?.name}
                </Alert>
            </Snackbar>
        </Box>
    )
}