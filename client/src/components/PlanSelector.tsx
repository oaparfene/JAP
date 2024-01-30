'use client'

import { Modal, Box, Stack, Typography, TextField, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, IconButton } from "@mui/material"
import { useContext, useState } from "react"
import { Plan, usePlan } from "../hooks/usePlan"
import AssignmentIcon from '@mui/icons-material/Assignment';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import { JAPContext } from "@/app/context";
import RefreshIcon from '@mui/icons-material/Refresh';
import { useData } from "@/hooks/useData";


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

export const PlanSelector = () => {
    const { newPlan, activePlanIndex, setActivePlanIndex, allPlans } = useContext(JAPContext);
    const [openNewPlan, setOpenNewPlan] = useState(false);
    const [newPlanName, setNewPlanName] = useState('');
    const { fetchPlansFromBackend } = useData();

    const handleNewPlan = (name: string) => {
        newPlan(name)
    }

    const handleChange = (event: SelectChangeEvent) => {
        const selectedPlanName = event.target.value as string;
        const selectedPlanIndex = allPlans.findIndex(plan => plan.name === selectedPlanName);
        setActivePlanIndex(selectedPlanIndex);
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            alignItems: 'center',
            gap: 2,
        }}>



            <FormControl sx={{
                minWidth: 120,
            }}>
                <InputLabel id="demo-simple-select-label">Plan</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={allPlans[activePlanIndex]?.name || ''}
                    label="Plan"
                    onChange={handleChange}
                >
                    {allPlans.map((plan, index) => (
                        <MenuItem key={index} value={plan?.name}>{plan?.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <IconButton onClick={() => {
                fetchPlansFromBackend();
            }}>
                <RefreshIcon />
            </IconButton>

            <Button variant="contained" onClick={() => {
                setOpenNewPlan(true)
            }}>
                + New
            </Button>

            <Modal
                open={openNewPlan}
                onClose={() => setOpenNewPlan(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Stack gap={2}>

                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Type a Name for the new Plan:
                        </Typography>

                        <TextField
                            id="outlined-basic"
                            label="Plan Name"
                            variant="outlined"
                            onChange={(e) => { setNewPlanName(e.target.value) }}
                        />
                        <Button variant='contained' sx={{ mb: 2 }} onClick={() => {
                            handleNewPlan(newPlanName)
                            setOpenNewPlan(false)
                        }}>Create Plan</Button>
                    </Stack>


                </Box>
            </Modal>
        </Box>
    )
}