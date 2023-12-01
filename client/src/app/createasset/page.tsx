"use client";
import { MultipleSelect } from "@/components/MultipleSelect";
import { generateDataFromORBAT } from "@/constants";
import { PreAsset, useData } from "@/hooks/useData";
import { Asset } from "@/hooks/usePlan";
import { Alert, Box, Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, Snackbar, TextField, Theme, Typography, useTheme } from "@mui/material";
import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { useContext, useState } from "react";
import { JAPContext } from "../context";


function Home() {

  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [capacity, setCapacity] = useState("");
  const [location, setLocation] = useState("");
  const [sensor, setSensor] = useState<string[]>([]);
  const [unit, setUnit] = useState("");
  const [availableFrom, setAvailableFrom] = useState<Date>(Date.now() as unknown as Date);
  const { uploadAssetToBackend } = useData()

  const { allAssets, addAssets } = useContext(JAPContext)

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleCreateAsset = async () => {
    const newAsset: PreAsset = {
      ID: allAssets.length,
      UniquePlatformID: name,
      Description: description,
      Capacity: capacity,
      Location: location,
      Sensor: typeof sensor === "string" ? sensor : sensor.toString(),
      Unit: unit,
      AvailableFrom: availableFrom,
    }
    const assetID = await uploadAssetToBackend(newAsset)

    const fullNewAsset: Asset = {
      db_id: assetID,
      ...newAsset
    }
    await addAssets([fullNewAsset])
    setOpen(true);
  }

  return (
    <Box sx={{ p: 8 }}>
      <Typography
        variant="h5"
        component="h5"
        sx={{ textAlign: "left", mt: 0, mb: 3 }}
      >
        Create Asset:
      </Typography>

      <Box sx={{ display: "grid", gap: "12px", gridTemplateColumns: "auto auto auto" }}>
        <TextField
          id="name"
          required
          label="Name"
          variant="outlined"
          placeholder="MQ-9 Reaper"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="decription"
          required
          label="Description"
          variant="outlined"
          placeholder="..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          id="capacity"
          required
          label="Capacity"
          variant="outlined"
          placeholder="24"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        />
        <TextField
          id="location"
          required
          label="Location"
          variant="outlined"
          placeholder="46.220588N 24.108810E"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <MultipleSelect handleChange={setSensor} />

        {/* Location, Shape, LocationType */}
        <TextField
          id="unit"
          required
          label="Unit"
          variant="outlined"
          placeholder="JAFC-216"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        />
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <Typography
            variant="h6"
            component="h6"
            sx={{ textAlign: "left", mt: 0, mb: 3 }}
          >
            Available From:
          </Typography>
          <TextField
            id="available_from"
            required
            label=""
            variant="outlined"
            type={"datetime-local"}
            value={availableFrom}
            onChange={(e) => setAvailableFrom(new Date(e.target.value))}
          />
        </Box>

      </Box>

      <Box sx={{ display: "flex", justifyContent: "end", m: "12px" }}>

        <Button variant='contained' sx={{ mr: 2 }} onClick={handleCreateAsset}>Create</Button>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Created Asset! Do not forget to add it to a plan.
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Home;
