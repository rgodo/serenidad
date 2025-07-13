import React from "react";
import { Box, Typography, Button } from "@mui/material";

interface CremacionHeaderProps {
  backgroundImage: string;
  backgroundMobileImage: string;
  title: string;
  intro: string;
  description: string;
}

const CremacionHeader: React.FC<CremacionHeaderProps> = ({
  backgroundImage,
  backgroundMobileImage,
  title,
  intro,
  description,
}) => (
  <Box
    sx={{
      backgroundImage: { xs: `url(${backgroundMobileImage})`, sm: `url(${backgroundImage})` },
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: "100%",
      aspectRatio: { xs: '9/12', sm: '2/1', md: '4/1' },
      display: "flex",
      flexDirection: { xs: "column", sm: 'row' },
      justifyContent: "space-between",
      alignItems: { sm: 'center' },
      p: { xs: 2, md: 4 },
      color: "#fff",
      position: "relative",
    }}
  >
    <Box
      sx={{
        p: 2,
        maxWidth: 400,
        textAlign: { xs: 'center', sm: 'left' },
        marginX: { xs: 'auto' },
        marginLeft: { sm: '10%' }
      }}
    >
      <Typography variant="subtitle1" mb={0} fontWeight={400} fontSize={'1rem'}>
        {intro}
      </Typography>
      <Typography variant="h4" fontWeight={700} fontSize={'2.5rem'} mb={0}>
        {title}
      </Typography>
      <Typography variant="subtitle1" sx={{ fontSize: {xs: '1.875rem'}, lineHeight: 1}}>{description}</Typography>
    </Box>
    <Box
      sx={{
        textAlign: 'center',
        paddingRight: { sm: '10%'}
      }}
    >
      <Button
        sx={{
          background: '#768837',
          color: "white",
          border: "1px solid white",
          borderRadius: 0,
          padding: "1rem"
        }}
      >
        Ver Ánforas
      </Button>
    </Box>
  </Box>
);

export default CremacionHeader;
