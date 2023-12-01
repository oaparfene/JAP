'use client'

import { Modal, Box, Stack, Typography, TextField, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useState } from "react"
import { Plan, usePlan } from "../hooks/usePlan"
import AssignmentIcon from '@mui/icons-material/Assignment';

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

interface PlanSelectorProps {
    plans: Plan[],
    newPlan: (name: string) => void,
    activePlanIndex: number,
    setActivePlanIndex: (index: number) => void
}

export const PlanSelector = (props: PlanSelectorProps) => {

    const [openPlan, setOpenPlan] = useState(false);
    const [openNewPlan, setOpenNewPlan] = useState(false);
    const [newPlanName, setNewPlanName] = useState('');

    const handleNewPlan = (name: string) => {
        props.newPlan(name)
    }

    return (
        <>
            <Box sx={{ p: 2, display: 'flex', flexDir: 'row', justifyContent: 'space-between', bgcolor: 'lightgray', borderRadius: 2, alignItems: 'center', mb: 2 }}>
                <Typography>
                    Active Plan: {props.plans[props.activePlanIndex]?.name ? props.plans[props.activePlanIndex].name : 'No Plan selected'}
                </Typography>
                <Box sx={{ display: 'flex', flexDir: 'row', gap: 2 }}>
                    <Button variant='contained' sx={{ mb: 0 }} onClick={() => setOpenPlan(true)}>Open Plan</Button>
                    {/* <Button variant='contained' sx={{ mb: 0 }} onClick={() => setOpenNewPlan(true)}>New Plan</Button> */}
                </Box>
            </Box>
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

            <Modal
                open={openPlan}
                onClose={() => setOpenPlan(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Select Plan:
                    </Typography>

                    <List>
                        {props.plans.map((plan, index) => (
                            <ListItem key={plan.name} disablePadding>
                                <ListItemButton onClick={() => { props.setActivePlanIndex(index); setOpenPlan(false) }}>
                                    <ListItemIcon>
                                        <AssignmentIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={plan.name} />
                                </ListItemButton>
                            </ListItem>))
                        }
                    </List>
                    <Button variant='contained' sx={{ mb: 0 }} onClick={() => {
                        setOpenPlan(false)
                        setOpenNewPlan(true)
                    }}>New Plan</Button>

                </Box>
            </Modal>
        </>
    )
}