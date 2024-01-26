'use client'


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Button, Modal, Stack, TextField } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';

import { JAPContext } from '../context';

import { useContext, useState } from 'react';


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

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const { mainDrawerWidth, getPlan, addCRsToPlan, removeCRsFromPlan, addAssetsToPlan, removeAssetsFromPlan, addTasksToPlan, addFlightPlansToPlan, allPlans: plans, newPlan, activePlanIndex, setActivePlanIndex } = useContext(JAPContext)
    const [drawerWidth, setDrawerWidth] = React.useState<number>(240)
    const [open, setOpen] = useState(true);

    const [openNewPlan, setOpenNewPlan] = useState(false);
    const [newPlanName, setNewPlanName] = useState('');

    const handleToggleDrawer = () => {
        setDrawerWidth(drawerWidth === 240 ? 40 : 240)
        setOpen(!open)
    }

    const handleNewPlan = (name: string) => {
        newPlan(name)
    }

    // React.useEffect(() => {
    //     if (plans.length === 0)
    //         newPlan("5G Defence")
    // }, [])

    const drawer = (
        <div>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
                <IconButton onClick={handleToggleDrawer} sx={{ p: 1 }}>
                    {!open ? <MenuIcon /> : <MenuOpenIcon></MenuOpenIcon>}
                </IconButton>
            </Box>
            {open && <>

                <Divider />
                <Box sx={{ display: "flex", justifyContent: "space-between", p: 1}}>
                    <Typography
                        variant="h6"
                        component="h6"
                        sx={{ textAlign: 'left', mt: 1, ml: 2 }}
                    >Plans:</Typography>
                    <Button variant="contained" sx={{ m: 0 }} onClick={
                        () => {
                            setOpenNewPlan(true)
                        }
                    }>New Plan</Button>
                </Box>
                <List>
                    {plans.map((plan, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton onClick={
                                () => {
                                    setActivePlanIndex(index)
                                }
                            }>
                                <ListItemIcon>
                                    <AssignmentIcon sx={{ color: index === activePlanIndex ? "#1976d2" : "" }} />
                                </ListItemIcon>
                                <ListItemText primary={plan.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </>}
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
        </div>
    );


    return (
        <Box sx={{ display: "flex" }}>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, ml: `${mainDrawerWidth}px`, mt: "64px" },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 0, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    )
}
