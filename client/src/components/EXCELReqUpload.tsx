import React, { useContext, useState } from 'react'
var parseString = require('xml2js').parseString;
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Requirement } from '../hooks/usePlan';
import { JAPContext } from '../app/context';
import { Modal, Box, Stack, Typography, TextField, IconButton } from '@mui/material';
import { PreRequirement, useData } from '../hooks/useData';
import * as xlsx from 'xlsx';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
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

type SpreadsheetRow = { [key: string]: any };

function EXCELReqUpload() {
    const { allRequirements, addCRs } = useContext(JAPContext)
    const [openNewCRL, setOpenNewCRL] = useState(false);
    const [activeCR, setActiveCR] = useState<Requirement | null>(null);
    const { uploadCRtoBackend } = useData()
    const [CRsToUpload, setCRsToUpload] = useState<PreRequirement[]>([])
    const [reviewIndex, setReviewIndex] = useState(0)


    function mapToPreRequirement(data: any): PreRequirement {
        return {
            ID: parseInt(data['#']),
            Operation: data.Operation,
            Requester: data.Requester,
            Coordinates: data.Coordinates,
            Shape: data.Shape,
            Status: data.Status,
            Justification: data.Justification,
            Location: data['Location (Target Name)'],
            Coll_Start_Time: data['Coll Start Time'].toString(),
            Coll_End_Time: data['Coll End Time'].toString(),
            Coll_End_Date: data['Coll End Date'].toString(),
            Coll_Start_Date: data['Coll Start Date'].toString(),
            ER_Remarks: data['ER Remarks'],
            ER_Report_Frequency: data['ER Report Frequency'],
            Exploitation_Requirement: data['Exploitation Requirement (ER)'],
            ISR_Role: data['ISR Role'],
            Intel_Discipline: data['Intel Discipline'],
            Latest_Report_Time: data['Latest Report Time'],
            Location_Category: data['Location Category'],
            Location_Type: data['Location Type'],
            RP_Remarks: data['RP Remarks'],
            RP_Report_Frequency: data['RP Report Frequency'],
            Reporting_Instructions: data['Reporting Instructions'],
            Required_Information: data['Required Information'],
            Required_Product: data['Required Product (RP)'],
            Sensor_Visibility: data['Sensor Visibility'],
            Target_ID: data['Target ID/ BE #'],
            LTIOV: data.LTIOV.toString(),
        };
    }

    const processExcelUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            const reader = new FileReader()
            reader.onload = async (e) => {
                const data = e.target?.result
                const workbook = xlsx.read(data, { type: 'binary' });

                workbook.SheetNames.forEach(function (sheetName) {
                    console.log("sheetName: ", sheetName)
                    // Here is your object
                    // var XL_row_object = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
                    // var json_object = JSON.stringify(XL_row_object);
                    // console.log(json_object);
                })

                const worksheet = workbook.Sheets["Collection Requirements"];
                var XL_row_object = xlsx.utils.sheet_to_json(workbook.Sheets["Collection Requirements"]);
                XL_row_object = XL_row_object.filter((row: any) => {
                    return Object.keys(row).length > 3
                })
                XL_row_object.shift()
                const columnObject = XL_row_object.shift()
                const finalRows = XL_row_object.map((row: any) => {
                    const newRow: any = {}
                    Object.keys(row).forEach((key: string) => {
                        // @ts-ignore
                        newRow[columnObject[key]] = row[key].toString()
                    })
                    return mapToPreRequirement(newRow)
                }
                )
                console.log("finalRows: ", finalRows)
                setCRsToUpload(finalRows)
                setOpenNewCRL(true)
                //const added_CRs = await uploadCRtoBackend(finalRows)

            }
            reader.onerror = (error) => {
                console.error('Error reading the Excel file:', error);
            };

            reader.readAsArrayBuffer(file);
        }
    }
    return (
        <div>
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                Upload CRL Spreadsheet
                <VisuallyHiddenInput type="file" onChange={processExcelUpload} accept={".csv, application/vnd.ms-excel.sheet.macroEnabled.12, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"} />
            </Button>
            {/* todo: add confirmation with amount of reqs detected */}
            <Modal
                open={openNewCRL}
                onClose={() => setOpenNewCRL(false)}
            >
                <Box sx={style}>

                    <Typography variant="h5" component="h5">
                        Review CRL:
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <IconButton disabled={reviewIndex === 0} onClick={() => {
                            if (reviewIndex > 0) setReviewIndex(reviewIndex - 1)
                        }}>
                            <ChevronLeftIcon />
                        </IconButton>
                        <Typography variant="h6" component="h2" sx={{ textAlign: "center" }}>
                            {reviewIndex + 1} / {CRsToUpload.length}
                        </Typography>
                        <IconButton disabled={reviewIndex + 1 === CRsToUpload.length} onClick={() => {
                            if (reviewIndex + 1 < CRsToUpload.length) setReviewIndex(reviewIndex + 1)
                        }}>
                            <ChevronRightIcon />
                        </IconButton>
                    </Box>
                    <Divider sx={{ mb: 2 }} />

                    <Stack gap={2}>

                        <Typography variant="body1" component="p">
                            Operation: {CRsToUpload[reviewIndex]?.Operation}
                        </Typography>
                        <Typography variant="body1" component="p">
                            Requester: {CRsToUpload[reviewIndex]?.Requester}
                        </Typography>
                        <Typography variant="body1" component="p">
                            Location: {CRsToUpload[reviewIndex]?.Location}
                        </Typography>
                        <Typography variant="body1" component="p">
                            Coords: {CRsToUpload[reviewIndex]?.Coordinates}
                        </Typography>
                        <Typography variant="body1" component="p">
                            Start Time: {CRsToUpload[reviewIndex]?.Coll_Start_Time}
                        </Typography>
                        <Typography variant="body1" component="p">
                            End Time: {CRsToUpload[reviewIndex]?.Coll_End_Time}
                        </Typography>
                        <Typography variant="body1" component="p">
                            LTIOV: {CRsToUpload[reviewIndex]?.LTIOV}
                        </Typography>
                        <Typography variant="body1" component="p">
                            Required Info: {CRsToUpload[reviewIndex]?.Required_Information}
                        </Typography>
                        <Typography variant="body1" component="p">
                            Intel: {CRsToUpload[reviewIndex]?.Intel_Discipline}
                        </Typography>
                        <Typography variant="body1" component="p">
                            Required Product: {CRsToUpload[reviewIndex]?.Required_Product}
                        </Typography>

                    </Stack>

                    <Divider sx={{ mt: 2, mb: 2 }} />


                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',

                    }}>
                        <Button variant='outlined' sx={{ mb: 2 }} onClick={() => {
                            setOpenNewCRL(false)
                        }}>Cancel</Button>
                        <Button variant='contained' sx={{ mb: 2 }} onClick={() => {
                            if (CRsToUpload.length === 0) return
                            uploadCRtoBackend(CRsToUpload)
                            setOpenNewCRL(false)
                        }}>Upload CR</Button>

                    </Box>


                </Box>
            </Modal>
        </div>
    )
}

export default EXCELReqUpload