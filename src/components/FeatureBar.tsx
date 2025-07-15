"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import features from "../data/features.json";
import React from "react";

const FeatureBar = () => {
  // Switch to mobile grid only at and below 600px (sm)

  return (
    <Box
      sx={{
        width: "100%",
        background: "#7B8F45",
        color: "#fff",
        display: { xs: 'none', md: "flex" },
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
                justifyContent: { xs: "flex-start", md: 'center' },
                minWidth: { xs: 130, sm: 180 },
                minHeight: 170
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
                  // width: { xs: 180,  },
                  maxWidth: 195
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
};

export default FeatureBar;
