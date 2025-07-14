'use client';

import { Box, MenuItem, TextField, Typography } from "@mui/material";
import locations from '../data/locations.json';
import { useState } from "react";

type LocationType = { name: string; address: string; iFrameUrl: string; }

const Locations = () => {
  const [locationSelected, setLocationSelected] = useState<LocationType>(locations[0]);
  const updateMap = (idx: number) => {
    setLocationSelected(locations[idx]);
  }

  return (
    <Box component={'section'} sx={{
      backgroundImage: "url('bg-sheet.png')",
      p: '2rem'
    }} id="locations">
      <Box
        sx={{
          margin: 'auto',
          maxWidth: '65rem'
        }}
      >
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontSize: { xs: '1.625rem' },
            fontWeight: 700,
            color: '#768837',
            fontFamily: 'Perpetua, sans-serif'
          }}
        >Locaciones disponibles</Typography>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: '1rem' },
          mb: '1.5rem'
        }}>
          <Typography
            sx={{
              fontFamily: 'Assistant, sans-serif',
              fontWeight: 400,
              color: '#616161'
            }}
          >
            Encuéntranos en las parroquias y cementerios de la región de O&rsquo;Higgins.
            Consulta nuestro mapa interactivo y elige el lugar más cercano a ti.
          </Typography>
          <TextField fullWidth select defaultValue={'0'} onChange={(e) => { updateMap(+e.target.value) }} sx={{ fontFamily: 'Assistant, sans-serif' }}>
            <MenuItem sx={{ fontFamily: 'Assistant, sans-serif' }} disabled value={'-1'}>Elige la locación deseada</MenuItem>
            {
              locations.map((location, idx) => (
                <MenuItem value={idx} key={idx}>{location.name}</MenuItem>
              ))
            }
          </TextField>
        </Box>
        <iframe
          src={locationSelected.iFrameUrl}
          width="600" height="450" style={{ border: 0, width: '100%', display: 'block' }} allowFullScreen={false} loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </Box>
    </Box>
  )
}

export default Locations;