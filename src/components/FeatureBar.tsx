"use client";

import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Image from "next/image";
import features from "../data/features.json";
import React from "react";

const ARROW_SIZE_DESKTOP = { width: 36, height: 20 };
const ARROW_SIZE_MOBILE = { width: 24, height: 24 };

const FeatureBar = () => {
  const theme = useTheme();
  // Switch to mobile grid only at and below 600px (sm)
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (!isMobile) {
    return (
      <Box
        sx={{
          width: "100%",
          background: "#7B8F45",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: { xs: 1, md: 3 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            maxWidth: 1400,
            justifyContent: "space-between",
            px: { xs: 3, sm: 6, md: 10 },
            overflowX: "auto",
            gap: { xs: 2, sm: 4, md: 0 },
          }}
        >
          {features.map((feature, idx) => (
            <React.Fragment key={idx}>
              {/* Add extra space to first and last icon */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  minWidth: { xs: 130, sm: 180 },
                  minHeight: 170,
                  px:
                    idx === 0
                      ? { xs: 4, sm: 6, md: 8 }
                      : idx === features.length - 1
                      ? { xs: 4, sm: 6, md: 8 }
                      : 2,
                }}
              >
                <Image
                  src={`/icons/${feature.icon}`}
                  alt={feature.label}
                  width={163}
                  height={66}
                  style={{ marginBottom: 10, maxWidth: 163, maxHeight: 66 }}
                />
                <Typography
                  sx={{
                    mt: 1,
                    fontWeight: 400,
                    fontSize: { xs: "0.99rem", sm: "1.13rem", md: "1.3rem" },
                    textAlign: "center",
                    fontFamily: "'EB Garamond', serif",
                    whiteSpace: "pre-line",
                    width: 180,
                    maxWidth: 180,
                  }}
                >
                  {feature.label}
                </Typography>
              </Box>
              {/* Centered arrow between features */}
              {idx < features.length - 1 && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: "0 0 100px", // Set a fixed width for arrows to ensure centering
                  }}
                >
                  <Image
                    src="/icons/arrow-right.svg"
                    alt="flecha derecha"
                    width={36}
                    height={20}
                  />
                </Box>
              )}
            </React.Fragment>
          ))}
        </Box>
      </Box>
    );
  }

  // MOBILE GRID, with right and down arrows as per your screenshot
  return (
    <Box
      sx={{
        width: "100%",
        background: "#7B8F45",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 4,
      }}
    >
      <Box
        sx={{
          display: "grid",
          // The grid structure:
          // [A] [B]
          // [C] [D]
          gridTemplateColumns: "1fr 40px 1fr",
          gridTemplateRows: "auto 40px auto",
          width: "100%",
          maxWidth: 500,
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        {/* Top Left: Servicios Funerarios */}
        <Box
          sx={{
            gridColumn: "1 / 2",
            gridRow: "1 / 2",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            px: 0.5,
            minWidth: 0,
          }}
        >
          <Image
            src={`/icons/${features[0].icon}`}
            alt={features[0].label}
            width={120}
            height={50}
            style={{ marginBottom: 7, maxWidth: 120, maxHeight: 50 }}
          />
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "0.98rem",
              textAlign: "center",
              fontFamily: "'EB Garamond', serif",
            }}
          >
            {features[0].label}
          </Typography>
        </Box>
        {/* Arrow Right (between first and second feature) */}
        <Box
          sx={{
            gridColumn: "2 / 3",
            gridRow: "1 / 2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Image
            src="/icons/arrow-right.svg"
            alt="flecha derecha"
            width={ARROW_SIZE_MOBILE.width}
            height={ARROW_SIZE_MOBILE.height}
          />
        </Box>
        {/* Top Right: Velatorios */}
        <Box
          sx={{
            gridColumn: "3 / 4",
            gridRow: "1 / 2",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            px: 0.5,
            minWidth: 0,
          }}
        >
          <Image
            src={`/icons/${features[1].icon}`}
            alt={features[1].label}
            width={120}
            height={50}
            style={{ marginBottom: 7, maxWidth: 120, maxHeight: 50 }}
          />
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "0.98rem",
              textAlign: "center",
              fontFamily: "'EB Garamond', serif",
            }}
          >
            {features[1].label}
          </Typography>
        </Box>
        {/* Arrow Down (between top right and bottom right) */}
        <Box
          sx={{
            gridColumn: "3 / 4",
            gridRow: "2 / 3",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Image
            src="/icons/arrow-down.svg"
            alt="flecha abajo"
            width={ARROW_SIZE_MOBILE.width}
            height={ARROW_SIZE_MOBILE.height}
          />
        </Box>
        {/* Bottom Left: Panteón de Cenizas */}
        <Box
          sx={{
            gridColumn: "1 / 2",
            gridRow: "3 / 4",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            px: 0.5,
            minWidth: 0,
          }}
        >
          <Image
            src={`/icons/${features[3].icon}`}
            alt={features[3].label}
            width={120}
            height={50}
            style={{ marginBottom: 7, maxWidth: 120, maxHeight: 50 }}
          />
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "0.98rem",
              textAlign: "center",
              fontFamily: "'EB Garamond', serif",
            }}
          >
            {features[3].label}
          </Typography>
        </Box>
        {/* Arrow Left (between bottom right and bottom left) */}
        <Box
          sx={{
            gridColumn: "2 / 3",
            gridRow: "3 / 4",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Image
            src="/icons/arrow-left.svg"
            alt="flecha izquierda"
            width={ARROW_SIZE_MOBILE.width}
            height={ARROW_SIZE_MOBILE.height}
          />
        </Box>
        {/* Bottom Right: Cremación y Sepulturas */}
        <Box
          sx={{
            gridColumn: "3 / 4",
            gridRow: "3 / 4",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            px: 0.5,
            minWidth: 0,
          }}
        >
          <Image
            src={`/icons/${features[2].icon}`}
            alt={features[2].label}
            width={120}
            height={50}
            style={{ marginBottom: 7, maxWidth: 120, maxHeight: 50 }}
          />
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "0.98rem",
              textAlign: "center",
              fontFamily: "'EB Garamond', serif",
            }}
          >
            {features[2].label}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FeatureBar;
