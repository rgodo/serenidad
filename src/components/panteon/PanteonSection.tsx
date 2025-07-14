"use client";

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import PanteonHexagon from "./PanteonHexagon";
import content from "../../data/panteon.json";
import { scrollToSection } from "../utils/functions/scroll";

function RichText({ html, ...props }) {
  return <span dangerouslySetInnerHTML={{ __html: html }} {...props} />;
}

export default function PanteonSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isMobile = useMediaQuery("(max-width:900px)");
  if (!mounted) return null;

  const { header, infoSection, hexSection } = content;

  // Header section with background
  return (
    <section style={{ backgroundImage: "url('bg-sheet.png')" }} id="mausoleum">
      <Box>
        {/* Header */}
        <Box
          sx={{
            background: `url('${header.bgImage}') center/cover no-repeat`,
            minHeight: isMobile ? 250 : 350,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            px: isMobile ? 2 : 8,
            py: isMobile ? 4 : 7,
            color: "#fff",
            position: "relative",
          }}
        >
          <Box
            sx={{
              p: isMobile ? 2 : 4,
              maxWidth: "100%",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            {/* Texts at the left */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="caption" sx={{ letterSpacing: 2 }}>
                {header.intro}
              </Typography>
              <Typography
                variant={isMobile ? "h5" : "h4"}
                sx={{ fontWeight: 800, mb: 2 }}
              >
                {header.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 0 }}>
                <RichText html={header.description} />
              </Typography>
            </Box>

            {/* Button at the right */}
            <Box
              sx={{
                mt: isMobile ? 2 : 0,
                ml: isMobile ? 0 : 4,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{
                  background: "#AF9983",
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  ":hover": { background: "#8d735a" },
                  whiteSpace: "nowrap",
                  textTransform: "none",
                }}
                onClick={() => { scrollToSection('panteonInfo')}}
              >
                {header.button.text}
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Info Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            width: "100%",
            py: isMobile ? 4 : 8,
            px: isMobile ? 2 : 12,
            gap: isMobile ? 4 : 8,
            alignItems: "center",
          }}
          id="panteonInfo"
        >
          {/* Left */}
          <Box
            sx={{
              flex: 1,
              maxWidth: isMobile ? "100%" : 460,
              pr: isMobile ? 0 : 8,
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "#6e8348", letterSpacing: 1, fontSize: "1.2rem" }}
            >
              {infoSection.intro}
            </Typography>
            <Typography
              variant={isMobile ? "h6" : "h4"}
              sx={{ fontWeight: 800, mb: 2, borderBottom: "1px solid #E1952D" }}
            >
              {infoSection.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 2, fontFamily: "Assistant, serif" }}
            >
              <RichText html={infoSection.description} />
            </Typography>
            <Button
              onClick={() => { scrollToSection('locations')}}
              sx={{
                fontWeight: 700,
                px: 4,
                py: 1.5,
                border: "1px solid",
                fontFamily: "Assistant, serif",
              }}
            >
              {infoSection.button.text}
            </Button>
          </Box>
          {/* Right */}
          <Box
            sx={{
              flex: 1,
              width: isMobile ? "100%" : "auto",
              minHeight: 280,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: isMobile ? 2 : 0,
            }}
          >
            <img
              src={infoSection.image}
              alt="Columbario"
              style={{
                width: isMobile ? "100%" : "420px",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>

        {/* Hexagon Section */}
        <Box
          sx={{
            pt: isMobile ? 4 : 8,
            pb: isMobile ? 4 : 8,
            px: isMobile ? 2 : 8,
          }}
        >
          <Typography
            variant={isMobile ? "h6" : "h4"}
            sx={{
              fontWeight: 800,
              mb: { xs: '1rem'},
              color: '#616161',
              textAlign: "center",
              fontFamily: "Assistant, serif",
              fontSize: { sx: '1.25rem', md: '1.875rem' }
            }}
          >
            {hexSection.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: { md: "center" },
              alignItems: "center",
              gap: {xs:'1rem'},
              mb: '3rem',
              overflowY: 'auto',
              marginTop: {md: '-6rem'}
            }}
          >
            {hexSection.hexagons.map((hx, i) => (
              <PanteonHexagon
                key={i}
                icon={hx.icon}
                title={hx.title}
                content={hx.content}
                index={i}
              />
            ))}
          </Box>
          <Box sx={{ textAlign: "center", maxWidth: 950, mx: "auto", mb: 4 }}>
            <Typography
              variant="body1"
              sx={{ mb: 2, fontFamily: "Assistant, serif" }}
            >
              <RichText html={hexSection.footer.text} />
            </Typography>
            <Button
              onClick={() => { scrollToSection('contacto')}}
              sx={{
                fontWeight: 700,
                px: 4,
                py: 1.5,
                border: "1px solid #8B7669",
                color: '#8B7669',
                fontFamily: "Assistant, serif",
                textTransform: "none",
              }}
            >
              {hexSection.footer.button.text}
            </Button>
          </Box>
        </Box>
      </Box>
    </section>
  );
}
