'use client'

import { Box, Typography } from '@mui/material';
import { Chart } from "react-google-charts"

interface SynchMatrixViewProps {
    title: string
    data: ((string | Date)[] | {
        type: string
        id: string
    }[])[][]
    colorByRowLabel?: boolean
    crsCollected?: number
    totalCRs?: number
}

function SynchMatrixView({ title, data, crsCollected, totalCRs, colorByRowLabel }: SynchMatrixViewProps) {

  console.log("from Synchmatrix: ", data, crsCollected, totalCRs)

  return (
    <Box sx={{ p: 0 }}>

      <Box sx={{ display: "flex", flexDirection: "column", m: 3, alignItems: "center" }}>

        <Typography
          variant="h5"
          component="h5"
          sx={{ textAlign: 'center', mt: 0, mb: 3 }}
        >
          {title}
        </Typography>
        {!!crsCollected && <Typography
          variant="h6"
          component="h6"
          sx={{ textAlign: 'left', mt: 0, mb: 3 }}
        >
          {crsCollected + "/" + totalCRs + " CRs collected"}
        </Typography>}
        {data.map((e, i) => {
            return (
                <Chart key={i} chartType="Timeline" data={e} width="100%" height={(e.length * 41 + 30).toString() + "px"} options={{ timeline: { groupByRowLabel: true,
                colorByRowLabel: colorByRowLabel } }} />
            )
        })}
      </Box>
    </Box>
  )
}

export default SynchMatrixView;