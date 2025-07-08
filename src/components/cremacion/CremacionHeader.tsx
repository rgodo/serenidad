import React from "react";
import { Box, Typography, Button } from "@mui/material";

interface CremacionHeaderProps {
  backgroundImage: string;
  title: string;
  intro: string;
  description: string;
}

const CremacionHeader: React.FC<CremacionHeaderProps> = ({
  backgroundImage,
  title,
  intro,
  description,
}) => (
  <Box
    sx={{
      background: `url(${backgroundImage}) center/cover no-repeat`,
      minHeight: { xs: 250, md: 360 },
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      p: { xs: 2, md: 4 },
      color: "#fff",
      position: "relative",
    }}
  >
    <Box
      sx={{
        p: 2,
        maxWidth: 400,
      }}
    >
      <Typography variant="subtitle1" mb={2}>
        {intro}
      </Typography>
      <Typography variant="h4" fontWeight={600} mb={1}>
        {title}
      </Typography>
      <Typography variant="subtitle1">{description}</Typography>
    </Box>
  </Box>
);

export default CremacionHeader;
