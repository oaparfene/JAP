'use client'

import { Inter } from '@next/font/google'
import { Box, Typography } from '@mui/material';
import { Chart } from "react-google-charts"
import { JAPContext } from '../context';
import { useContext } from 'react';
import { PlanSelector } from '@/components/PlanSelector';


function Home() {

  const { plans, activePlanIndex, setActivePlanIndex, newPlan } = useContext(JAPContext)


  const data: any = [
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
      data.push(["CR" + task.Requirement_to_Collect, task.Asset_Used, task.Start, task.End])
    })

    plans[activePlanIndex].allocation.forEach((task, i) => {
      data_inv.push([task.Asset_Used, "CR" + task.Requirement_to_Collect, task.Start, task.End])
    })
  }

  const data_availability = [
    [
      { type: "string", id: "Asset" },
      { type: "date", id: "Start" },
      { type: "date", id: "End" },
    ],
    ["RQ-1A Predator", new Date(2023, 4, 1, 4), new Date(2023, 4, 1, 20)],
    ["U-2 Dragon Lady", new Date(2023, 4, 1, 12), new Date(2023, 4, 1, 23)],
    ["F-16", new Date(2023, 4, 1, 14), new Date(2023, 4, 1, 18)],
    ["MQ-9 Reaper", new Date(2023, 4, 1, 16), new Date(2023, 4, 1, 22)],
    ["E-8 JSTARS", new Date(2023, 4, 1, 8), new Date(2023, 4, 1, 22)],
    ["RC-135 Rivet Joint", new Date(2023, 4, 1, 18), new Date(2023, 4, 1, 23)]
  ];

  return (
    <Box sx={{ p: 8 }}>
      <Typography
        variant="h4"
        component="h4"
        sx={{ textAlign: 'left', mt: 0, mb: 3 }}
      >Allocations:</Typography>

      <PlanSelector plans={plans} newPlan={newPlan} activePlanIndex={activePlanIndex} setActivePlanIndex={setActivePlanIndex} />
      <Box sx={{ display: "flex", flexDirection: "column", m: 3, alignItems: "center" }}>

        <Typography
          variant="h5"
          component="h5"
          sx={{ textAlign: 'center', mt: 0, mb: 3 }}
        >
          Temporal View:
        </Typography>
        <Chart chartType="Timeline" data={data} width="100%" height="500px" options={{ timeline: { groupByRowLabel: true } }} />
        <Chart chartType="Timeline" data={data_inv} width="100%" height="300px" options={{ timeline: { groupByRowLabel: true } }} />
        {/* <Typography variant="h6" sx={{ textAlign: 'left', mt: 0, mb: 3 }}>Asset availability:</Typography>
        <Chart chartType="Timeline" data={data_availability} width="100%" height="800px" options={{ timeline: { groupByRowLabel: true }}} /> */}
      </Box>
    </Box>
  )
}

export default Home;