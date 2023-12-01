"use client";

import { Alert, Box, Button, Snackbar, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { SettingsContext } from "../context";


function Home() {

    const { BackendAPIURL, setBackendAPIURL, MZNAPIURL, setMZNAPIURL, MZNSolverEngine, setMZNSolverEngine } = useContext(SettingsContext)
    const [open, setOpen] = useState(false);
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Box sx={{
            p: 8,
            display: "flex",
            flexDirection: "column",
            gap: "12px",
        }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "24px"

                }}>
                <Typography>
                    Backend API URL:
                </Typography>
                <TextField
                    required
                    variant="outlined"
                    value={BackendAPIURL}
                    onChange={(e) => setBackendAPIURL(e.target.value)}
                />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "24px"
                }}>
                <Typography>
                    MZN Solver Engine:
                </Typography>
                <TextField
                    required
                    select
                    SelectProps={{
                        native: true,
                    }}
                    variant="outlined"
                    value={MZNSolverEngine}
                    onChange={(e) => setMZNSolverEngine(e.target.value)}
                >
                    <option value="Gecode">Gecode</option>
                    {/* <option value="Globalizer">Globalizer</option> */}
                    <option value="Chuffed">Chuffed</option>
                </TextField>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "24px"

                }}>
                <Typography>
                    MZN Service URL:
                </Typography>
                <TextField
                    required
                    variant="outlined"
                    value={MZNAPIURL}
                    onChange={(e) => setMZNAPIURL(e.target.value)}
                />
            </Box>
            <Button variant="contained"
            onClick={() => setOpen(true)}>
                Save
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Settings Saved!
                </Alert>
            </Snackbar>
        </Box>
    );
}

export default Home;
