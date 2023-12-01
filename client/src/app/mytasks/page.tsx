'use client'

import React, { useEffect, useMemo, useState } from 'react';
import { Avatar, Box, Typography, Stack, Button, Divider, Tooltip } from '@mui/material';
import { DataGrid, GridActionsCellItem, gridClasses, GridRowParams, GridValueSetterParams } from '@mui/x-data-grid';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RefreshIcon from '@mui/icons-material/Refresh';
import DownloadIcon from '@mui/icons-material/Download';
//import JCAPContext from '../context';
import { InformationRequirementType } from '@/types/main/informationRequirementType';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { uuid } from 'uuidv4';
import { CollectionExploitationPlanType } from '@/types/main/collectionExploitationPlanType';
import { addTasksToCMPlan } from '@/lib/helpers';

function Home() {
  //const { requirements } = React.useContext(JCAPContext)
  const [pageSize, setPageSize] = useState(10);
  const [rowId, setRowId] = useState('0');

  // const columns = useMemo(
  //   () => [
  //     {
  //       field: 'status',
  //       type: 'actions',
  //       headerName: 'Status',
  //       getActions: (params: GridRowParams) => [
  //         <GridActionsCellItem icon={
  //           <Tooltip title={params.row.resourceAvailable === 'not planned' ? 'Collect Not Planned' : params.row.resourceAvailable === 'not planned' ? 'Collect Planned' : 'Collect Available'}>
  //             <FiberManualRecordIcon
  //               sx={params.row.resourceAvailable === 'not planned' ? { color: 'gray' } : params.row.resourceAvailable === 'planned' ? { color: 'yellow' } : { color: 'green' }} />
  //           </Tooltip>
  //         } label="Status" />]
  //     },
  //     {
  //       field: 'ReportedProduct',
  //       headerName: 'ReportedProduct',
  //       editable: true,
  //       width: 300
  //     },
  //     { field: 'Name', headerName: 'Name', width: 150 },
  //     { field: 'Priority', headerName: 'Priority', width: 100 },
  //     {
  //       field: 'RequiredInformation',
  //       headerName: 'Description',
  //       width: 300,
  //     },
  //     {
  //       field: 'IntelCollectionDiscipline',
  //       headerName: 'Intel Type',
  //       width: 100,
  //     },
  //     {
  //       field: 'RequiredProduct',
  //       headerName: 'Product',
  //       width: 100,
  //       valueGetter: (params: any) => {
  //         return params.value[0].Product.ProductTypeType;
  //       }
  //     },
  //     {
  //       field: 'GeographicAreaOfInterestReference',
  //       headerName: 'GAOI',
  //       width: 300,
  //       valueGetter: (params: any) => {
  //         if (!params.value) return
  //         return params.value[0].GeographicAreaOfInterest.Identifier;
  //       }
  //     },
  //     {
  //       field: 'Status',
  //       headerName: 'Status',
  //       width: 150,
  //     },
  //     {
  //       field: 'Originator',
  //       headername: 'Requestor',
  //       width: 100,
  //       valueGetter: (params: any) => {
  //         if (!params.value) return
  //         return params.value.Requestor;
  //       }
  //     },
  //     {
  //       field: 'LatestDateTimeZuluOfInformationValue',
  //       headerName: 'LTIOV',
  //       width: 200,
  //       valueGetter: (params: any) => {
  //         if (!params.value) return
  //         return params.value.EndDateTimeZulu.Value;
  //       }
  //     },
  //     { field: 'Identifier', headerName: 'Id', width: 300 },
  //   ],
  //   [rowId]
  // );

  const addToPlanHandler = () => {
    // setReqsInPlan(requirements.filter((entry) => {
    //   entry.active == true
    // }))
    // console.log(reqsInPlan)
  }

  return (
    <>
      {/* <Stack sx={{ p: 3 }}>
          <>
            <Box
              sx={{
                height: 730,
                width: '100%',
                overflow: 'hidden'
              }}
            >
              <Stack direction='row' justifyContent='space-between'>
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{ textAlign: 'left', mt: 0, mb: 3 }}
                >
                  My Assigned Tasks
                </Typography>
                <Stack direction='row' spacing={2}>
                  <RefreshIcon></RefreshIcon>
                  <DownloadIcon></DownloadIcon>
                  <MoreHorizIcon></MoreHorizIcon>
                </Stack>
              </Stack>
              <Button variant='contained' sx={{ mb: 2 }} onClick={addToPlanHandler}>Add Selection to Plan</Button>
              <Box sx={{ height: 630, width: '100%', overflow: 'auto' }}>

                <DataGrid
                  // @ts-ignore
                  columns={columns}
                  rows={[]}
                  getRowId={(row) => row.Identifier}
                  rowsPerPageOptions={[5, 10, 20]}
                  pageSize={pageSize}
                  onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                  getRowSpacing={(params) => ({
                    top: params.isFirstVisible ? 0 : 5,
                    bottom: params.isLastVisible ? 0 : 5,
                  })}
                  onCellEditCommit={(params) => setRowId(params.id.toString())}
                />
              </Box>
            </Box>
            <Stack direction='row' justifyContent='end'>
              <Button variant='contained' sx={{ mr: 2 }} onClick={addToPlanHandler}>Save</Button>
            </Stack>
          </>
      </Stack> */}
    </>
  )
}
export default Home;