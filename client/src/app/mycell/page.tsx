'use client'
import { createISRSystemType } from "@/lib/helpers";
import { Box, Button, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, FormHelperText, Input, InputLabel, Stack, Typography } from "@mui/material";
import { useState } from "react";

function Home() {

    const [cellName, setCellName] = useState('')
    const [gmti, setGMTI] = useState(false)
    const [image, setImage] = useState(false)
    const [video, setVideo] = useState(false)
    const [esm, setESM] = useState(false)
    const [humint, setHUMINT] = useState(false)
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [phone, setPhone] = useState('')

    const handleSavePEDCell = () => {
        createISRSystemType({
            gmti,
            image,
            video,
            esm,
            humint,
            phoneNumber: phone,
            name: cellName,
            lastName,
            firstName
        })
    }

    return (
        <>
            <Box sx={{ width: '95%', height: 1000, p: 3, m: 3 }}>
                <Typography
                    variant="h5"
                    component="h5"
                    sx={{ textAlign: 'left', mt: 0, mb: 3 }}
                >
                    My PED Cell
                </Typography>
                <FormControl fullWidth={true}>
                    <InputLabel htmlFor="my-input">PED Cell Name</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => setCellName(e.target.value)} />
                </FormControl>
                <Stack direction='row' gap={2}>
                    <FormControl fullWidth={true}>
                        <InputLabel htmlFor="my-input">Country</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => setFirstName(e.target.value)} />
                    </FormControl>
                    <FormControl fullWidth={true}>
                        <InputLabel htmlFor="my-input">Area of Responsibility</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => setLastName(e.target.value)} />
                    </FormControl>
                </Stack>

                <Typography
                    variant="h6"
                    component="h6"
                    sx={{ textAlign: 'left', mt: 0, mb: 3, my: 4 }}
                >
                    Point of Contact
                </Typography>

                <Stack direction='column' gap={2}>
                    <Stack direction='row' gap={2}>
                        <FormControl fullWidth={true}>
                            <InputLabel htmlFor="my-input">First Name</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => setFirstName(e.target.value)} />
                        </FormControl>
                        <FormControl fullWidth={true}>
                            <InputLabel htmlFor="my-input">Last Name</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => setLastName(e.target.value)} />
                        </FormControl>
                    </Stack>

                    <Stack direction='row' gap={2}>
                        <FormControl fullWidth={true}>
                            <InputLabel htmlFor="my-input">Phone Number</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => setPhone(e.target.value)} />
                        </FormControl>
                        <FormControl fullWidth={true}>
                            <InputLabel htmlFor="my-input">E-Mail</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" />
                        </FormControl>
                    </Stack>
                </Stack>

                <Typography
                    variant="h6"
                    component="h6"
                    sx={{ textAlign: 'left', mt: 0, mb: 3, my: 4 }}
                >
                    Exploitation Types
                </Typography>
                <FormGroup>
                    <Stack direction='row' gap={2}>
                        <FormControlLabel control={<Checkbox checked={gmti}
                            onChange={() => setGMTI(!gmti)} />} label="GMTI" />
                        <FormControlLabel control={<Checkbox checked={image}
                            onChange={() => setImage(!image)} />} label="Image" />
                        <FormControlLabel control={<Checkbox checked={video}
                            onChange={() => setVideo(!video)} />} label="Video" />
                        <FormControlLabel control={<Checkbox checked={esm}
                            onChange={() => setESM(!esm)} />} label="ESM" />
                        <FormControlLabel control={<Checkbox checked={humint}
                            onChange={() => setHUMINT(!humint)} />} label="HUMINT" />
                    </Stack>
                </FormGroup>
                <Box display='flex' justifyContent='end'>
                    <Button variant="contained" onClick={handleSavePEDCell}>Save</Button>
                </Box>
            </Box>
        </>
    )
}

export default Home;