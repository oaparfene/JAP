import React, { useContext, useState } from 'react'
var parseString = require('xml2js').parseString;
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Requirement } from '@/hooks/usePlan';
import { JAPContext } from '@/app/context';
import { Modal, Box, Stack, Typography, TextField } from '@mui/material';
import { PreRequirement, useData } from '@/hooks/useData';

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

function XMLUpload() {
  const { allRequirements, addCRs } = useContext(JAPContext)
  const [openNewCR, setOpenNewCR] = useState(false);
  const [activeCR, setActiveCR] = useState<Requirement | null>(null);
  const { uploadCRtoBackend } = useData()


  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = (e) => {
        const xml = e.target?.result
        parseString(xml, async function (err: any, payload: any) {
          console.log(payload)
          const result = payload.CollectionRequirement
          const coordPoint = result.GeographicAreaOfInterestReference[0].GeographicAreaOfInterest[0]["d3p1:GeographicArea"][0]["d3p1:Point"][0]
          console.log(coordPoint)
          const temp_CR_To_Add: PreRequirement = {
            ID: allRequirements.length + 1,
            Operation: "5G",
            Requester: result.Originator[0].Requestor[0],
            Location: `Target ${allRequirements.length} - Point Location`,
            Coordinates: `${coordPoint["d3p1:Latitude"][0]._}N ${coordPoint["d3p1:Longitude"][0]._}E`,
            Coll_Start_Time: result.AnticipatedTimeIntervalForActivity[0].StartDateTimeZulu[0]._.split("T")[1].slice(0, 5),
            Coll_End_Time: result.AnticipatedTimeIntervalForActivity[0].EndDateTimeZulu[0]._.split("T")[1].slice(0, 5),
            LTIOV: new Date(2023, 10, 27).toDateString(),
            Required_Information: result.RequiredInformation[0],
            Intel_Discipline: result.IntelCollectionDiscipline[0],
            Required_Product: "ISREXREP",
            Recurrance: "",
          }
          const temp_CR_ID = await uploadCRtoBackend(temp_CR_To_Add)
          const CR_To_Add: Requirement = {
            ...temp_CR_To_Add,
            db_id: temp_CR_ID
          }
          setActiveCR(CR_To_Add)
          setOpenNewCR(true)
          console.log(CR_To_Add)
        })
      }
      reader.readAsText(file)
    }
  }
  return (
    <div>
      <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
        Upload CR XML
        <VisuallyHiddenInput type="file" onChange={handleFileUpload} accept={".xml"} />
      </Button>
      <Modal
        open={openNewCR}
        onClose={() => setOpenNewCR(false)}
      >
        <Box sx={style}>
          <Stack gap={2}>

            <Typography variant="h6" component="h2">
              Review CR:
            </Typography>
            <Typography variant="body1" component="p">
              Operation: {activeCR?.Operation}
            </Typography>
            <Typography variant="body1" component="p">
              Requester: {activeCR?.Requester}
            </Typography>
            <Typography variant="body1" component="p">
              Location: {activeCR?.Location}
            </Typography>
            <Typography variant="body1" component="p">
              Coords: {activeCR?.Coordinates}
            </Typography>
            <Typography variant="body1" component="p">
              Start Time: {activeCR?.Coll_Start_Time}
            </Typography>
            <Typography variant="body1" component="p">
              End Time: {activeCR?.Coll_End_Time}
            </Typography>
            <Typography variant="body1" component="p">
              LTIOV: {activeCR?.LTIOV}
            </Typography>
            <Typography variant="body1" component="p">
              Required Info: {activeCR?.Required_Information}
            </Typography>
            <Typography variant="body1" component="p">
              Intel: {activeCR?.Intel_Discipline}
            </Typography>
            <Typography variant="body1" component="p">
              Required Product: {activeCR?.Required_Product}
            </Typography>
            <Typography variant="body1" component="p">
              Recurrance: {activeCR?.Recurrance}
            </Typography>


            <Button variant='contained' sx={{ mb: 2 }} onClick={() => {
              if (!activeCR) return
              addCRs([activeCR])
              setOpenNewCR(false)
            }}>Upload CR</Button>
            <Button variant='contained' sx={{ mb: 2 }} onClick={() => {
              setOpenNewCR(false)
            }}>Cancel</Button>
          </Stack>


        </Box>
      </Modal>
    </div>
  )
}

export default XMLUpload