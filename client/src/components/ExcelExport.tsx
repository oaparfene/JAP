import { Asset, FlightPlan, Plan, Task } from "@/hooks/usePlan";
import { MenuItem } from "@mui/material";
import { gridFilteredSortedRowIdsSelector, gridVisibleColumnFieldsSelector, useGridApiContext, GridToolbarExportContainer, GridToolbarContainer } from "@mui/x-data-grid";
import * as XLSX from "xlsx";
import { AssetConfig } from "./AssetConfig";
import { RequirementConfig } from "./RequirementConfig";
import * as ExcelJS from 'exceljs';
import FileSaver from "file-saver";
function getExcelData(apiRef: any) {
    // Select rows and columns
    const filteredSortedRowIds = gridFilteredSortedRowIdsSelector(apiRef);
    const visibleColumnsField = gridVisibleColumnFieldsSelector(apiRef);

    // Format the data. Here we only keep the value
    const data = filteredSortedRowIds.map((id) => {
        const row = {};
        visibleColumnsField.forEach((field) => {
            // @ts-ignore
            row[field] = apiRef.current.getCellParams(id, field).value;
        });
        return row;
    });

    return data;
}

function handleExportReqs(apiRef: any) {
    const data = getExcelData(apiRef);

    const rows = data.map((row) => {
        const mRow = {};
        // @ts-ignore
        for (const key of RequirementConfig.keys) {
            // @ts-ignore
            mRow[key] = row[key].toString();
        }
        return mRow;
    });

    const worksheet = XLSX.utils.json_to_sheet(rows);
    XLSX.utils.sheet_add_aoa(worksheet, [[...RequirementConfig.columnNames]], {
        origin: 'A1',
    });

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, RequirementConfig.sheetName);
    XLSX.writeFile(workbook, RequirementConfig.fileName, { compression: true });
}

function handleExportAssets(apiRef: any) {
    const data = getExcelData(apiRef);

    const rows = data.map((row) => {
        const mRow = {};
        // @ts-ignore
        for (const key of AssetConfig.keys) {
            // @ts-ignore
            mRow[key] = row[key].toString();
        }
        return mRow;
    });

    const worksheet = XLSX.utils.json_to_sheet(rows);
    XLSX.utils.sheet_add_aoa(worksheet, [[...AssetConfig.columnNames]], {
        origin: 'A1',
    });

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, AssetConfig.sheetName);
    XLSX.writeFile(workbook, AssetConfig.fileName, { compression: true });
}

export function handleExportPlan(plan: Plan, mapImageDataUri?: string) {
    const workbook = new ExcelJS.Workbook();

    // Set the file name
    workbook.creator = 'Your Application Name';
    workbook.title = plan.name;

    // Helper function to convert an array of objects to an array of arrays
    const objectToArray = (objs: any[]) => {
        const headers = Object.keys(objs[0]);
        const values = objs.map(obj => headers.map(header => obj[header]));
        return [headers, ...values];
    };

    // Create a sheet for Assets
    const assetSheet = workbook.addWorksheet('Assets');
    assetSheet.addRows(objectToArray(plan.assets.map((asset: Asset) => ({
        ...asset,
        AvailableFrom: asset.AvailableFrom?.toLocaleTimeString(),
    }))));

    // Create a sheet for Requirements
    const requirementSheet = workbook.addWorksheet('Requirements');
    requirementSheet.addRows(objectToArray(plan.requirements));

    // Create a sheet for Allocation (Tasks)
    const allocationSheet = workbook.addWorksheet('Allocation');
    allocationSheet.addRows(objectToArray(plan.allocation.map((task: Task) => ({
        ...task,
        Start: task.Start?.toLocaleTimeString(),
        End: task.End?.toLocaleTimeString(),
    }))));

    // Create a sheet for FlightPlans
    const flightPlanSheet = workbook.addWorksheet('Flight Plans');
    flightPlanSheet.addRows(objectToArray(plan.flightPlans.map((flightPlan: FlightPlan) => ({
        ...flightPlan,
        Flight_Path: flightPlan.Flight_Path.toString()
    }))));

    // Create a sheet for the Map if mapImageDataUri is provided
    if (mapImageDataUri) {
        const mapSheet = workbook.addWorksheet('Map');
        const mapImage = workbook.addImage({
            base64: mapImageDataUri.split(',')[1],
            extension: 'png',
        });
        mapSheet.addImage(mapImage, {
            tl: { col: 0, row: 0 },
            ext: { width: 900, height: 900 }
        });
    }

    // Write the workbook to file
    //workbook.xlsx.writeFile(`${plan.name}.xlsx`);
    workbook.xlsx.writeBuffer()
        .then(buffer => FileSaver.saveAs(new Blob([buffer]), `${plan.name}.xlsx`))
        .catch(err => console.log('Error writing excel export', err));
}

export function ExportReqsMenuItem(props: any) {
    const apiRef = useGridApiContext();
    const { hideMenu } = props;

    return (
        <MenuItem
            onClick={() => {
                handleExportReqs(apiRef);
                // Hide the export menu after the export
                hideMenu?.();
            }}
        >
            Download Excel
        </MenuItem>
    );
}

export function ExportAssetsMenuItem(props: any) {
    const apiRef = useGridApiContext();
    const { hideMenu } = props;

    return (
        <MenuItem
            onClick={() => {
                handleExportAssets(apiRef);
                // Hide the export menu after the export
                hideMenu?.();
            }}
        >
            Download Excel
        </MenuItem>
    );
}

export function ExportReqsButton(props: any) {
    return (
        <GridToolbarExportContainer {...props}>
            <ExportReqsMenuItem />
        </GridToolbarExportContainer>
    );
}

export function ExportAssetsButton(props: any) {
    return (
        <GridToolbarExportContainer {...props}>
            <ExportAssetsMenuItem />
        </GridToolbarExportContainer>
    );
}
export function CustomReqsToolbar(props: any) {
    return (
        <GridToolbarContainer {...props}>
            <ExportReqsButton />
        </GridToolbarContainer>
    );
}
export function CustomAssetsToolbar(props: any) {
    return (
        <GridToolbarContainer {...props}>
            <ExportAssetsButton />
        </GridToolbarContainer>
    );
}
