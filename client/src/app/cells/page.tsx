'use client'

import { useEffect, useMemo, useState } from 'react';
import { Avatar, Box, Typography, Stack, Button, Divider } from '@mui/material';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RefreshIcon from '@mui/icons-material/Refresh';
import DownloadIcon from '@mui/icons-material/Download';

interface Cell {
    active: boolean,
    name: string,
    systemDescription: string,
    capability: 'EO' | 'IR' | 'SAR' | 'GMTI',
    battlespaceDimension: "AIR" | "GROUND" | "SUBSURFACE" | "SURFACE" | "SPACE" | "SOF" | "OTHER" | "TASKS" | "CONTROLMEASURES" | "OPERATIONSOTHERTHANWAR",
    contactInfo: string,
    presenceAtLocation: string,
    _id: number
}

let cells: Cell[] = []

for (let i = 1; i <= 47; i++) {
    cells.push({
        active: false,
        name: `generic cell ${i}`,
        systemDescription: 'Asset description',
        capability: 'EO',
        battlespaceDimension: 'AIR',
        contactInfo: 'john@doe.com',
        presenceAtLocation: 'Europe',
        _id: i
    })
}


function Home() {
    const [pageSize, setPageSize] = useState(10);
    const [rowId, setRowId] = useState('0');

    const columns = useMemo(
        () => [
            { field: 'name', headerName: 'Name', width: 200, editable: true, },
            {
                field: 'systemDescription',
                headerName: "Description",
                width: 200,
                editable: true,
            },
            {
                field: 'capability',
                headerName: 'Capability',
                width: 100,
                type: 'singleSelect',
                valueOptions: ['EO', 'IR', 'SAR', 'GMTI'],
                editable: true,
            },
            {
                field: 'battlespaceDimension',
                headerName: 'Dimension',
                width: 100,
                type: 'singleSelect',
                valueOptions: ["AIR" , "GROUND" , "SUBSURFACE" , "SURFACE" , "SPACE" , "SOF" , "OTHER" , "TASKS" , "CONTROLMEASURES" , "OPERATIONSOTHERTHANWAR"],
                editable: true,
            },
            {
                field: 'contactInfo',
                headerName: 'Contact Info',
                width: 150,
                editable: true,
            },
            {
                field: 'presenceAtLocation',
                headerName: 'Location',
                width: 150,
            },
            { field: '_id', headerName: 'Id', width: 200 },
        ],
        [rowId]
    );

    return (
        <>
            <Stack sx={{ p: 5 }}>
                <Box
                    sx={{
                        height: 850,
                        width: '100%',
                        overflow: 'hidden',
                        px: 8
                    }}
                >
                    <Stack direction='row' justifyContent='space-between'>
                        <Typography
                            variant="h5"
                            component="h5"
                            sx={{ textAlign: 'left', mt: 0, mb: 3 }}
                        >
                            PED Cell Overview
                        </Typography>
                        <Stack direction='row' spacing={2}>
                            <RefreshIcon></RefreshIcon>
                            <DownloadIcon></DownloadIcon>
                            <MoreHorizIcon></MoreHorizIcon>
                        </Stack>
                    </Stack>
                    {/* <Button variant='contained' sx={{ mb: 2 }}>Add Selection to Plan</Button> */}
                    <Box sx={{ height: 740, width: 'auto', overflow: 'auto' }}>

                        <DataGrid
                            columns={columns}
                            rows={cells}
                            getRowId={(row) => row._id}
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

            </Stack>
        </>
    )
}
export default Home;