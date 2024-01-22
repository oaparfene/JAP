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
import FolderIcon from '@mui/icons-material/Folder';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Button } from '@mui/material';
import next from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { JCAPContext, SettingsContext } from './context'
import { JAPContext } from './context';
import { CollectionExploitationPlanType } from '@/types/main/collectionExploitationPlanType';
import { createCMPlan, generateRandomTasks, addTasksToPEDPlan, generateRandomGAOIs, generateRandomTasksWithGAOI } from '@/lib/helpers';
import { GeographicAreaOfInterestType } from '@/types/main/geographicAreaOfInterestType';
import { InformationRequirementType } from '@/types/main/informationRequirementType';
import { generateDataFromORBAT } from '@/constants';
import { usePlan } from '@/hooks/usePlan';
import { useData } from '@/hooks/useData';
import SettingsIcon from '@mui/icons-material/Settings';
import css from 'styled-jsx/css'
import { useRouter } from 'next/navigation';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const router = useRouter()

  const { getPlan, addCRsToPlan, removeCRsFromPlan, addAssetsToPlan, removeAssetsFromPlan, addTasksToPlan, addFlightPlansToPlan, plans, newPlan, activePlanIndex, setActivePlanIndex, setPlans } = usePlan()
  const { allAssets, allRequirements, addAssets, addCRs, removeAssets, removeCRs, allPlans } = useData()
  const [drawerWidth, setDrawerWidth] = React.useState<number>(240)
  const [open, setOpen] = React.useState(true);

  const [MZNSolverEngine, setMZNSolverEngine] = React.useState<string>("Gecode");
  const [BackendAPIURL, setBackendAPIURL] = React.useState<string>("http://localhost:8090");
  const [MZNAPIURL, setMZNAPIURL] = React.useState<string>("http://localhost:5000");

  React.useEffect(() => {
    setPlans(allPlans)
  }, [allPlans])
  

  const handleToggleDrawer = () => {
    setDrawerWidth(drawerWidth === 240 ? 40 : 240)
    setOpen(!open)
  }

  const drawer = (
    <div>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <IconButton onClick={handleToggleDrawer} sx={{ p: 1 }}>
          {!open ? <MenuIcon /> : <MenuOpenIcon></MenuOpenIcon>}
        </IconButton>
      </Box>
      {open && <>
        {/* <Toolbar /> */}
        <Box sx={{ p: 2, width: "100%" }}>

          <Avatar sx={{ mb: 2 }}>JD</Avatar>

          <Typography variant='h5'>John Doe</Typography>
          <Typography>john.doe@email.com</Typography>
        </Box>

        <Divider />
        <Typography
          variant="h6"
          component="h6"
          sx={{ textAlign: 'left', mt: 1, ml: 2 }}
        >Planning Context:</Typography>
        <List>
          {['Requirements', 'Assets', 'Plans'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <Link href={text.toLowerCase()} style={{ textDecoration: 'none', color: 'black', width: '100%' }}>
                <ListItemButton>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        {/* <Divider />
        <Typography
          variant="h6"
          component="h6"
          sx={{ textAlign: 'left', mt: 1, ml: 2 }}
        >Allocation:</Typography>
        <List>
          {['Assesment', 'Map'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <Link href={text.toLowerCase()} style={{ textDecoration: 'none', color: 'black', width: '100%' }}>
                <ListItemButton>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List> */}
        <Divider />
        <Typography
          variant="h6"
          component="h6"
          sx={{ textAlign: 'left', mt: 1, ml: 2 }}
        >Generation:</Typography>
        <List>
          {['Create Requirement', 'Create Asset'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <Link href={text.toLowerCase().replaceAll(" ", "")} style={{ textDecoration: 'none', color: 'black', width: '100%' }}>
                <ListItemButton>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </>}
    </div>
  );

  // const [CMPlans, setCMPlans] = React.useState<Array<CollectionExploitationPlanType>>([])
  // const [PEDPlans, setPEDPlans] = React.useState<Array<CollectionExploitationPlanType>>([])
  // const [activePlan, setActivePlan] = React.useState<CollectionExploitationPlanType | null>(null)
  // const [requirements, setRequirements] = React.useState<Array<InformationRequirementType>>([])
  // const [GAOIs, setGAOIs] = React.useState<Array<GeographicAreaOfInterestType>>([])

  // React.useEffect(() => {
  //   const gaois = generateRandomGAOIs(10)
  //   setGAOIs(gaois)
  //   setRequirements(generateRandomTasksWithGAOI(gaois))
  //   setCMPlans([addTasksToPEDPlan(createCMPlan('AAA'), requirements.slice(0, 10))])
  //   setActivePlan(CMPlans[0])
  //   console.log(generateDataFromORBAT())
  // }, [])

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />
        <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
          integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
          crossOrigin="" defer></script>
      </Head>
      <body>
        {/* <JCAPContext.Provider
        value={{
          CMPlans,
          PEDPlans,
          activePlan,
          requirements,
          GAOIs,
          setGAOIs,
          setRequirements,
          setActivePlan,
          setCMPlans,
          setPEDPlans,
        }}
        > */}
        <SettingsContext.Provider
          value={{
            MZNSolverEngine,
            setMZNSolverEngine,
            BackendAPIURL,
            setBackendAPIURL,
            MZNAPIURL,
            setMZNAPIURL,

          }}>
          <JAPContext.Provider
            value={{
              getPlan,
              plans,
              newPlan,
              activePlanIndex,
              setActivePlanIndex,
              addCRsToPlan,
              addAssetsToPlan,
              removeCRsFromPlan,
              removeAssetsFromPlan,
              addTasksToPlan,
              addFlightPlansToPlan,
              allAssets,
              allRequirements,
              addAssets,
              addCRs,
              removeAssets,
              removeCRs,
              mainDrawerWidth: drawerWidth,
              setMainDrawerWidth: setDrawerWidth,
            }}
          >

            <Box sx={{ display: 'flex' }}>
              <CssBaseline />
              <AppBar
                position="fixed"
                sx={{
                  width: { sm: `calc(100% - ${drawerWidth}px)` },
                  ml: { sm: `${drawerWidth}px` },
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Toolbar>
                  <IconButton
                    color="inherit"
                    edge="start"
                    sx={{ mr: 2, display: { sm: 'none' } }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" noWrap component="div">
                    JCAP
                  </Typography>
                </Toolbar>
                <IconButton
                  color="inherit"
                  edge="start"
                  onClick={() => {
                    router.push("/settings")
                  }
                  }
                >
                  <SettingsIcon />
                </IconButton>
              </AppBar>
              <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
              >
                <Drawer
                  variant="permanent"
                  sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
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
                {/* <Toolbar /> */}
                {children}
              </Box>
            </Box>
          </JAPContext.Provider>
        </SettingsContext.Provider>
        {/* </JCAPContext.Provider> */}
      </body>
    </html>
  )
}
