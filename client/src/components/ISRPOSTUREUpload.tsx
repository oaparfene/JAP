import React, { useContext, useState } from 'react'
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

interface AssetDetail {
    asset: string;
    availabilityStart: string;
    availabilityEnd: string;
    dayColumn: string;
    area: string | null;
}

function stringToDate(dateStr: string): Date | null {
    try {
        // Regular expression to match the "DD-MMM" format
        const regex = /^(\d{2})-([a-zA-Z]{3})$/;

        // Check if the string matches the "DD-MMM" format
        if (!regex.test(dateStr)) {
            return null; // Does not match the basic pattern
        }

        // Extract the day and month from the string
        const [, day, month] = dateStr.match(regex) || [];

        // Convert the month abbreviation to a full month name for reliable parsing
        const monthNames = {
            Jan: 'January', Feb: 'February', Mar: 'March', Apr: 'April', May: 'May', Jun: 'June',
            Jul: 'July', Aug: 'August', Sep: 'September', Oct: 'October', Nov: 'November', Dec: 'December'
        };

        // @ts-ignore
        const fullMonthName: string = monthNames[month.charAt(0).toUpperCase() + month.slice(1).toLowerCase()];

        // Get the current year
        const currentYear = new Date().getFullYear();

        // Attempt to parse the date using the full month name and the current year
        const parsedDate = new Date(`${currentYear}-${fullMonthName}-${day}`);

        // Check if the parsed date is valid and the month matches
        if (parsedDate.toString() !== 'Invalid Date' &&
            parsedDate.getMonth() === new Date(`${currentYear}-${fullMonthName}-01`).getMonth()) {
            return parsedDate; // Return the valid Date object
        } else {
            return null; // The date is invalid
        }
    } catch (error) {
        return null; // An error occurred
    }
}

function ISRPOSTUREUpload() {
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

                const worksheet = workbook.Sheets["POSTURE"];
                var PostureData: any = xlsx.utils.sheet_to_json(workbook.Sheets["POSTURE"]);
                console.log("XL_row_object: ", PostureData)
                var assetList: AssetDetail[] = []

                const headerDateToProperDate = (headerDate: string) => {
                }

                var currentArea: string = ""
                for (let i = 0; i < PostureData.length; i++) {
                    if ('AREA' in PostureData[i]) {
                        currentArea = PostureData[i].AREA
                        if (currentArea === "ATO") {
                            continue
                        }
                    }

                    const row = Object.keys(PostureData[i])
                    row.forEach((key: string, index: number) => {
                        if (key === "AREA") {
                            return
                        }
                        const date = stringToDate(key)
                        if (date === null) {
                            return
                        }
                        const availabilityStart = row[index + 1] ? PostureData[i][row[index + 1].toString()] : '';
                        const availabilityEnd = row[index + 2] ? PostureData[i][row[index + 2].toString()] : '';
                        assetList.push({
                            asset: PostureData[i][key],
                            availabilityStart: availabilityStart,
                            availabilityEnd: availabilityEnd,
                            dayColumn: key,
                            area: currentArea
                        })
                    })

                }
                console.log("assetList: ", assetList)

                // XL_row_object = XL_row_object.filter((row: any) => {
                //     return Object.keys(row).length > 3
                // })
                // console.log("XL_row_object: ", XL_row_object)
                // XL_row_object.shift()
                // console.log("XL_row_object: ", XL_row_object)
                // const columnObject = XL_row_object.shift()
                // console.log("columnObject: ", columnObject)
                // const finalRows = XL_row_object.map((row: any) => {
                //     const newRow: any = {}
                //     Object.keys(row).forEach((key: string) => {
                //         // @ts-ignore
                //         newRow[columnObject[key]] = row[key].toString()
                //     })
                //     return mapToPreRequirement(newRow)
                // }
                // )
                // console.log("finalRows: ", finalRows)
                // setCRsToUpload(finalRows)
                // setOpenNewCRL(true)
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
                Upload ISR Posture
                <VisuallyHiddenInput type="file" onChange={processExcelUpload} accept={".csv, application/vnd.ms-excel.sheet.macroEnabled.12, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"} />
            </Button>
        </div>
    )
}

export default ISRPOSTUREUpload