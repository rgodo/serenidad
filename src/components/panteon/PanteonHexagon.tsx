"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const hexagonStyles = {
  width: '270px',
  minWidth: '270px',
  height: '270px',
  AspectRatio: 1/1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(#c1ad97, #756157)",
  clipPath: "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
  transition: "0.5s",
  boxShadow: "0 2px 16px rgba(0,0,0,0.1)",
  cursor: "pointer",
  position: "relative",
  color: "#fff",
  fontFamily: "Assistant, serif",
};

const hexagonHoverStyles = {
  background: "#AF9983",
  color: "#fff",
  boxShadow: "0 6px 24px rgba(0,0,0,0.15)",
  transform: "rotateY(180deg)",
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
        marginTop: { xs: '0', md: index % 2 !== 0 ? "250px" : "0" },
        marginLeft: { md: index !== 0 ? "-5rem" : "0" },
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
          transition: "opacity 0.9s",
        }}
      >
        <img src={icon} alt={title} style={{ width: 44, height: 44, marginBottom: 12 }} />
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            fontFamily: "Assistant, serif",
            paddingX: "40px",
            textAlign: 'center',
            fontSize: '17px',
            lineHeight: '21px'
          }}
        >
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
          transition: "opacity 0.9s",
        }}
      >
        <img src={icon} alt={title} style={{ width: 36, height: 36, marginBottom: 8 }} />
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 700, mb: 1, fontFamily: "Assistant, serif" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 400,
            fontFamily: "Assistant, serif",
            maxWidth: '160px',
            lineHeight: 1,
            fontSize: '13px'
          }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Box>
    </Box>
  );
}
