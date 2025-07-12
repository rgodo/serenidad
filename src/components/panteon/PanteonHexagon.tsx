"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const hexagonStyles = {
  width: 220,
  height: 220,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "#E7DED7",
  clipPath: "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
  transition: "0.5s",
  boxShadow: "0 2px 16px rgba(0,0,0,0.1)",
  cursor: "pointer",
  position: "relative",
  mx: -2,
  my: 2,
  overflow: "hidden",
};

const hexagonHoverStyles = {
  background: "#AF9983",
  color: "#fff",
  boxShadow: "0 6px 24px rgba(0,0,0,0.15)",
  transform: "rotateY(360deg)",
};

const innerContentStyles = {
  p: 2,
  textAlign: "center",
};

export default function PanteonHexagon({ icon, title, content, index }) {
  console.log("index", index);
  const [hover, setHover] = useState(false);

  return (
    <Box
      sx={{
        ...hexagonStyles,
        ...(hover ? hexagonHoverStyles : {}),
        transition: "all 0.4s cubic-bezier(.79,.14,.15,.86)",
        marginTop: index % 2 === 0 ? "-150px" : "auto",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Front (icon+title), Back (icon+title+desc) */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: hover ? "none" : "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transition: "opacity 0.3s",
        }}
      >
        <img src={icon} alt={title} style={{ width: 44, marginBottom: 12 }} />
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          ...innerContentStyles,
          position: "absolute",
          width: "100%",
          height: "100%",
          display: hover ? "flex" : "none",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transition: "opacity 0.3s",
        }}
      >
        <img src={icon} alt={title} style={{ width: 36, marginBottom: 8 }} />
        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontWeight: 400 }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Box>
    </Box>
  );
}
