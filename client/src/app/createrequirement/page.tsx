"use client";
import XMLUpload from "@/components/XMLUpload";
import { PreRequirement, useData } from "@/hooks/useData";
import { Requirement } from "@/hooks/usePlan";
import { Alert, Box, Button, Snackbar, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { JAPContext } from "../context";

function Home() {

  const [open, setOpen] = useState(false);


  const [operation, setOperation] = useState("");
  const [requester, setRequester] = useState("");
  const [CR_Rank, setCR_Rank] = useState("");
  const [justification, setJustification] = useState("");
  const [status, setStatus] = useState("");
  const [coordinates, setCoordinates] = useState("");
  const [targetID, setTargetID] = useState("");
  const [locationCategory, setLocationCategory] = useState("");
  const [collStartTime, setCollStartTime] = useState("");
  const [collEndTime, setCollEndTime] = useState("");
  const [sensorVisibility, setSensorVisibility] = useState("");
  const [ltiov, setLtiov] = useState("");
  const [requiredInformation, setRequiredInformation] = useState("");
  const [intelDiscipline, setIntelDiscipline] = useState("");
  const [requiredProduct, setRequiredProduct] = useState("");
  const [reportFrequency, setReportFrequency] = useState("");
  const [recurrance, setRecurrance] = useState("");
  const [maxClassification, setMaxClassification] = useState("NU");
  const [reportingInstructions, setReportingInstructions] = useState("");
  const [remarks, setRemarks] = useState("");

  const { allRequirements, addCRs } = useContext(JAPContext)
  const { uploadCRtoBackend } = useData()

  console.log(collEndTime);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleCreateRequirement = async () => {
    const newCR: PreRequirement = {
      ID: allRequirements.length,
      Operation: operation,
      Requester: requester,
      CR_Rank: CR_Rank,
      Justification: justification,
      Location: `Target ${allRequirements.length} - Point Location`,
      Status: status,
      Coordinates: coordinates,
      Target_ID: targetID,
      Location_Category: locationCategory,
      Coll_Start_Time: collStartTime,
      Coll_End_Time: collEndTime,
      Sensor_Visibility: sensorVisibility,
      LTIOV: ltiov,
      Required_Information: requiredInformation,
      Intel_Discipline: intelDiscipline,
      Required_Product: requiredProduct,
      ER_Report_Frequency: reportFrequency,
      Recurrance: recurrance,
      RP_Remarks: maxClassification,
      Reporting_Instructions: reportingInstructions,
      ER_Remarks: remarks,
    }
    const CR = await uploadCRtoBackend([newCR])

    addCRs(CR)
    setOpen(true);
  }

  return (
    <Box sx={{ p: 8 }}>
      <Typography
        variant="h5"
        component="h5"
        sx={{ textAlign: "left", mt: 0, mb: 3 }}
      >
        Create Requirement:
      </Typography>

      <Box sx={{ display: "grid", gap: "12px", gridTemplateColumns: "auto auto auto" }}>
        <TextField
          id="operation"
          required
          label="Operation"
          variant="outlined"
          placeholder="TestOpSouth"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        />
        <TextField
          id="requester"
          required
          label="Requester"
          variant="outlined"
          placeholder="ACC"
          value={requester}
          onChange={(e) => setRequester(e.target.value)}
        />
        <TextField
          id="cr_rank"
          label="CR Rank"
          variant="outlined"
          placeholder="CR Rank"
          value={CR_Rank}
          onChange={(e) => setCR_Rank(e.target.value)}
        />
        <TextField
          id="justification"
          label="Justification"
          variant="outlined"
          placeholder="Supports PIR 1"
          value={justification}
          onChange={(e) => setJustification(e.target.value)}
        />
        <TextField
          id="status"
          label="Status"
          variant="outlined"
          placeholder="Approved"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        {/* Location, Shape, LocationType */}
        <TextField
          id="coordinates"
          required
          label="Coordinates"
          variant="outlined"
          placeholder="46.220588N 24.108810E"
          value={coordinates}
          onChange={(e) => setCoordinates(e.target.value)}
        />
        <TextField
          id="target_id"
          label="Target ID"
          variant="outlined"
          placeholder="1234AA0000"
          value={targetID}
          onChange={(e) => setTargetID(e.target.value)}
        />
        <TextField
          id="location_category"
          label="Location Category"
          variant="outlined"
          placeholder="46.220588N 24.108810E"
          value={locationCategory}
          onChange={(e) => setLocationCategory(e.target.value)}
        />
        <TextField
          id="sensor_visibility"
          label="Sensor Visibility"
          variant="outlined"
          placeholder="LOW"
          value={sensorVisibility}
          onChange={(e) => setSensorVisibility(e.target.value)}
        />

        <TextField
          sx={{ gridColumn: "1 / span 3" }}
          multiline
          id="required_informtion"
          required
          label="Required Information"
          variant="outlined"
          placeholder="Which indications exist of OF hostile activities?"
          value={requiredInformation}
          onChange={(e) => setRequiredInformation(e.target.value)}
        />
        <TextField
          id="intel_discipliine"
          required
          select
          SelectProps={{
            native: true,
          }}
          label="Intel Discipline"
          variant="outlined"
          value={intelDiscipline}
          onChange={(e) => setIntelDiscipline(e.target.value)}
        >
          <option value=""></option>
          <option value="FMV">FMV</option>
          <option value="EO">EO</option>
          <option value="IR">IR</option>
          <option value="SAR">SAR</option>
          <option value="MTI">MTI</option>
          <option value="SIGINT">SIGINT</option>
          <option value="ELINT">ELINT</option>
        </TextField>
        <TextField
          id="required_product"
          required
          label="Required Product"
          variant="outlined"
          placeholder="ISREXREP"
          value={requiredProduct}
          onChange={(e) => setRequiredProduct(e.target.value)}
        />
        <TextField
          id="report_frequency"
          label="Report Frequency"
          variant="outlined"
          placeholder="POST MISSION"
          value={reportFrequency}
          onChange={(e) => setReportFrequency(e.target.value)}
        />
        <TextField
          id="recurrance"
          label="Recurrance"
          variant="outlined"
          placeholder="none"
          value={recurrance}
          onChange={(e) => setRecurrance(e.target.value)}
        />
        <TextField
          id="max_classification"
          required
          select
          SelectProps={{
            native: true,
          }}
          label="Max Classification"
          variant="outlined"
          placeholder=""
          value={maxClassification}
          onChange={(e) => setMaxClassification(e.target.value)}
        >
          <option value=""></option>
          <option value="NU">NU</option>
          <option value="NR">NR</option>
          <option value="NC">NC</option>
          <option value="NS">NS</option>
          <option value="CTS">CTS</option>
        </TextField>
        <TextField
          id="remarks"
          label="Remarks"
          variant="outlined"
          placeholder="none"
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
        />
        <TextField
          sx={{ gridColumn: "1 / span 3" }}
          multiline
          id="reporting_instructions"
          label="Reporting Instructions"
          variant="outlined"
          placeholder="Send copy of report to..."
          value={reportingInstructions}
          onChange={(e) => setReportingInstructions(e.target.value)}
        />
      </Box>
      <Box sx={{ display: "flex", gap: "12px", flexDirection: "column", mt: "12px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>

          <Box sx={{ display: "flex", flexDirection: "column", width: "30%" }}>
            <Typography
              variant="h6"
              component="h6"
              sx={{ textAlign: "left", mt: 0, mb: 3 }}
            >
              Collection Start Time:
            </Typography>

            <TextField
              id="coll_start_time"
              required
              label=""
              variant="outlined"
              type={"datetime-local"}
              value={collStartTime}
              onChange={(e) => setCollStartTime(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", width: "30%" }}>
            <Typography
              variant="h6"
              component="h6"
              sx={{ textAlign: "left", mt: 0, mb: 3 }}
            >
              Collection End Time:
            </Typography>
            <TextField
              id="coll_end_time"
              required
              label=""
              variant="outlined"
              type={"datetime-local"}
              value={collEndTime}
              onChange={(e) => setCollEndTime(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", width: "30%" }}>
            <Typography
              variant="h6"
              component="h6"
              sx={{ textAlign: "left", mt: 0, mb: 3 }}
            >
              LTIOV:
            </Typography>
            <TextField
              id="ltiov"
              required
              label=""
              variant="outlined"
              type={"datetime-local"}
              value={ltiov}
              onChange={(e) => setLtiov(e.target.value)}
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "between", m: "12px", width: "100%", gap: "4px" }}>
        <XMLUpload />
        <Button variant='contained' sx={{ mr: 2 }} onClick={handleCreateRequirement}>Create</Button>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Created Requirement! Do not forget to add it to a plan.
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Home;
