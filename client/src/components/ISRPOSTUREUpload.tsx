import React, { useContext, useState } from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Asset, Requirement } from '../hooks/usePlan';
import { JAPContext } from '../app/context';
import { Modal, Box, Stack, Typography, TextField, IconButton } from '@mui/material';
import { PreAsset, PreRequirement, useData } from '../hooks/useData';
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

function transformAssetDetails(assetDetail: AssetDetail) {
    // Use the stringToDate function to convert the dayColumn to a Date object
    const date = stringToDate(assetDetail.dayColumn);
    if (!date) {
        return null; // If the date is invalid, return null
    }

    try {
        // Parse the availability start and end times
        const startTime = parseTime(assetDetail.availabilityStart, new Date(date));
        const endTime = parseTime(assetDetail.availabilityEnd, new Date(date));

        // Return a new object with the modified availability start and end times as Date objects
        return {
            ...assetDetail,
            availabilityStart: startTime,
            availabilityEnd: endTime,
        };
    } catch (error) {
        console.error("Error transforming AssetDetails:", error);
        return null;
    }
}

function parseTime(timeStr: string, date: Date): Date | null {
    const hours = parseInt(timeStr.substring(0, 2), 10);
    const minutes = parseInt(timeStr.substring(2, 4), 10);

    if (isNaN(hours) || isNaN(minutes)) {
        return null;
    }

    date.setHours(hours, minutes, 0, 0); // Set the hours and minutes for the date
    return date;
}

function ISRPOSTUREUpload() {
    const [openNewAssetLits, setOpenNewAssetList] = useState(false);
    const { uploadAssetToBackend } = useData()
    const [AssetsToUpload, setAssetsToUpload] = useState<PreAsset[]>([])
    const [reviewIndex, setReviewIndex] = useState(0)

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
                console.log("assetList pre transform: ", assetList)

                const transformedAssetList = assetList.map(each => transformAssetDetails(each)).filter(each => each !== null)

                console.log("transformedAssetList: ", transformedAssetList)

                const finalRows = transformedAssetList.map((each, index) => {
                    return {
                        UniquePlatformID: each?.asset,
                        ID: index,
                        Description: each?.asset,
                        AvailableFrom: each?.availabilityStart,
                        AvailableUntil: each?.availabilityEnd,
                        Unit: each?.area + " ISR Unit",
                        Capacity: "24",
                        Plans_containing_self: [],
                        To_Collect: [],
                        Location: "61.042497N 28.1418E",
                        Sensor: "EO, IR, FMV",
                    } as PreAsset
                })


                setAssetsToUpload(finalRows)
                setOpenNewAssetList(true)

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

            <Modal
                open={openNewAssetLits}
                onClose={() => setOpenNewAssetList(false)}
            >
                <Box sx={style}>

                    <Typography variant="h5" component="h5">
                        Review Assets:
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
                            {reviewIndex + 1} / {AssetsToUpload.length}
                        </Typography>
                        <IconButton disabled={reviewIndex + 1 === AssetsToUpload.length} onClick={() => {
                            if (reviewIndex + 1 < AssetsToUpload.length) setReviewIndex(reviewIndex + 1)
                        }}>
                            <ChevronRightIcon />
                        </IconButton>
                    </Box>
                    <Divider sx={{ mb: 2 }} />

                    <Stack gap={2}>

                        <Typography variant="body1" component="p">
                            Name: {AssetsToUpload[reviewIndex]?.UniquePlatformID}
                        </Typography>
                        <Typography variant="body1" component="p">
                            Unit: {AssetsToUpload[reviewIndex]?.Unit}
                        </Typography>
                        <Typography variant="body1" component="p">
                            Sensor: {AssetsToUpload[reviewIndex]?.Sensor}
                        </Typography>
                        <Typography variant="body1" component="p">
                            Start: {AssetsToUpload[reviewIndex]?.AvailableFrom.toLocaleString()}
                        </Typography>
                        <Typography variant="body1" component="p">
                            End: {AssetsToUpload[reviewIndex]?.AvailableUntil?.toLocaleString()}
                        </Typography>
                        <Typography variant="body1" component="p">
                            Coords: {AssetsToUpload[reviewIndex]?.Location}
                        </Typography>

                    </Stack>

                    <Divider sx={{ mt: 2, mb: 2 }} />


                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',

                    }}>
                        <Button variant='outlined' sx={{ mb: 2 }} onClick={() => {
                            setOpenNewAssetList(false)
                        }}>Cancel</Button>
                        <Button variant='contained' sx={{ mb: 2 }} onClick={() => {
                            if (AssetsToUpload.length === 0) return
                            uploadAssetToBackend(AssetsToUpload)
                            setOpenNewAssetList(false)
                        }}>Upload CR</Button>

                    </Box>


                </Box>
            </Modal>
        </div>
    )
}

export default ISRPOSTUREUpload