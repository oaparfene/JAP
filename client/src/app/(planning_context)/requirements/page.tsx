'use client'

import { PlanSelector } from "@/components/PlanSelector"
import { useContext, useEffect } from "react"
import { JAPContext } from "../../context"
import { Alert, Box, Button, Chip, IconButton, MenuItem, Modal, OutlinedInput, Select, Snackbar, Stack, Tab, Tabs, Typography } from "@mui/material"
import { DataGrid, GridColDef, GridRowId, GridSelectionModel } from "@mui/x-data-grid"
import { useState } from "react"
import MapView from "@/components/MapView"
import SynchMatrixView from "@/components/SynchMatrixView"
import MapIcon from '@mui/icons-material/Map';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import TableChartIcon from '@mui/icons-material/TableChart';
import RefreshIcon from '@mui/icons-material/Refresh';
import { CustomReqsToolbar } from "@/components/ExcelExport"
import dynamic from 'next/dynamic';
import EXCELReqUpload from "@/components/EXCELReqUpload"
import { useData } from "@/hooks/useData"
import { Requirement } from "@/hooks/usePlan"

const ClientSideMapView = dynamic(() => import('../../../components/MapView'), {
    ssr: false,
});

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

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
    const { allRequirements, addCRsToPlan, removeCRsFromPlan, allPlans, newPlan, activePlanIndex, setActivePlanIndex } = useContext(JAPContext)
    const [pageSize, setPageSize] = useState(10);
    const [selectedRows, setSelectedRows] = useState<GridSelectionModel>([])
    const [amountOfAssetsAdded, setAmountOfAssetsAdded] = useState<number>(0)
    const [open, setOpen] = useState(false);
    const { fetchCRsFromBackend, uploadCRtoBackend } = useData();
    const [rows, setRows] = useState<Requirement[]>([])
    const [openSelectPlan, setOpenSelectPlan] = useState(false)
    const [selectedPlanName, setSelectedPlanName] = useState(allPlans[activePlanIndex]?.name || '')

    useEffect(() => {
        setRows(allRequirements)
    }, [allRequirements])

    console.log('rows', rows)

    //const rows = allRequirements.filter((cr) => !allPlans[activePlanIndex]?.requirements?.find(req => req.ID === cr.ID))

    const handlePlanSelectionChange = (rowId: any, _planID: any) => {
        setRows((prevRows: any) =>
            prevRows.map((row: any) =>
                row.ID === rowId ? { ...row, Plans_containing_self: _planID } : row
            )
        );
    };

    const PlanSelectComponent = ({ param, value, options }: any) => {
        return (
            <Select
                sx={{ w: '200px', bgcolor: value.includes(allPlans[activePlanIndex]?.db_id) ? '#238823' : value.length > 0 ? '#ffbf00' : 'white' }}
                multiple
                value={value}
                onChange={(e) => {
                    handlePlanSelectionChange(param.id, e?.target.value)
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

    const columns: GridColDef[] = [
        {
            field: 'ID',
            headerName: 'ID',
            width: 20,
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
            field: 'Operation',
            headerName: 'Operation',
            width: 100,
        },
        {
            field: 'Coordinates',
            headerName: 'Coordinates',
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

    if (allPlans[activePlanIndex]) {
        allPlans[activePlanIndex].requirements?.forEach((req, i) => {
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

    if (allPlans[activePlanIndex]) {
        allPlans[activePlanIndex].requirements?.forEach((req, i) => {
            location_data.push(['CR' + req.ID, [Number(req.Coordinates.split("N")[0]), Number(req.Coordinates.split(" ")[1].split("E")[0])]])
        })
    }

    const saveRequirementsHandler = () => {
        console.log('rows', rows)
        //addCRsToPlan(selectedRows.map((id) => rows.find(asset => asset.ID.toString() === id)!))
        rows.map((row) => {
            // loop over all requirements that have been edited
            if (!allRequirements.includes(row)) {
                console.log('row changed: ', row)

                // loop over all plans that contain the edited requirement
                row.Plans_containing_self?.map((planId) => {
                    // if the plan already contains the requirement, do nothing
                    if (allPlans.find(plan => plan.db_id === planId)?.requirements?.find(req => req.ID === row.ID)) {
                        console.log('plan already contains req')
                    }
                    // if the plan does not contain the requirement, add it
                    else {
                        //addCRsToPlan([row], planId)
                    }
                })

                // loop over all the plan ids the requirement was removed from
                allPlans.map((plan) => {
                    if (!row.Plans_containing_self?.includes(plan.db_id) && plan.requirements?.find(req => req.ID === row.ID)) {
                        console.log('req removed from plan')
                        //removeCRsFromPlan([row], plan.db_id)
                    }
                })

                uploadCRtoBackend([row])
            }

        })
        setOpen(true);
        setSelectedRows([])

    }

    const addToPlanHandler = () => {
        addCRsToPlan(selectedRows.map((id) => rows.find(asset => asset.ID.toString() === id)!))
        console.log('plans', allPlans)
        setAmountOfAssetsAdded(selectedRows.length)
        setOpen(true);
        setSelectedRows([])
    }

    const addMultipleSelectionToPlanHandler = () => {
        if (selectedRows.length === 0) {
            return
        }
        setOpenSelectPlan(true)
        // console.log('plans', allPlans)
        // setAmountOfAssetsAdded(selectedRows.length)
        // setOpen(true);
        // setSelectedRows([])
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
                    >Collection Requirements</Typography>

                    <IconButton onClick={() => {
                        fetchCRsFromBackend();
                    }}>
                        <RefreshIcon />
                    </IconButton>

                </Box>

                <Box sx={{ display: 'flex', justifyContent: "space-between", width: 'full' }}>
                    {/* <Button variant='contained' sx={{ mb: 2 }} onClick={addToPlanHandler}>Add Selection to Plan</Button> */}
                    <Box sx={{ display: 'flex', justifyContent: "start", width: 'full' }}>

                        <Button variant='contained' sx={{ mb: 2, mr: 2 }} onClick={saveRequirementsHandler}>Save</Button>
                        <Button variant='contained' sx={{ mb: 2, ml: 2 }} onClick={addMultipleSelectionToPlanHandler}>Add to</Button>
                    </Box>
                    <EXCELReqUpload />
                </Box>

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
                    Your changes have been Saved!
                </Alert>
            </Snackbar>

            <Modal
                open={openSelectPlan}
                onClose={() => setOpenSelectPlan(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Stack gap={2}>

                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Choose which Plan to add selection to:
                        </Typography>

                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedPlanName}
                            label="Plan"
                            onChange={(e) => {
                                setSelectedPlanName(e.target.value)
                                //selectedRows.map((rowId) => handlePlanSelectionChange(rowId, allPlans.find(plan => plan.name === e.target.value)!.db_id))
                                //setOpenSelectPlan(false)
                                //setOpen(true)
                            }}
                        >
                            {allPlans.map((plan, index) => (
                                <MenuItem key={index} value={plan?.name}>{plan?.name}</MenuItem>
                            ))}
                                <MenuItem value={"[REMOVE FROM ALL PLANS]"}>{"[REMOVE FROM ALL PLANS]"}</MenuItem>
                        </Select>
                        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: "8px"}}>

                            <Button variant='outlined' onClick={
                                () => {
                                    setOpenSelectPlan(false)
                                }
                            }>
                                Cancel
                            </Button>
                            <Button variant='contained'
                            onClick={() => {
                                if (selectedPlanName === "[REMOVE FROM ALL PLANS]") {
                                    selectedRows.map((rowId) => handlePlanSelectionChange(rowId, ""))

                                } else {
                                    selectedRows.map((rowId) => handlePlanSelectionChange(rowId, allPlans.find(plan => plan.name === selectedPlanName)!.db_id))
                                }
                                setOpenSelectPlan(false)
                                setSelectedRows([])
                                //setOpen(true)
                            }}>
                                Confirm
                            </Button>
                        </Box>

                    </Stack>


                </Box>
            </Modal>
        </Box>
    )
}

// add multiple requirements to plan after filtering
// identify best place to modify
// in the application or in the minizinc model?
// dropdown with text search in plans view to fix allocations