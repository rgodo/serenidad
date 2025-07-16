"use client";

import { Box, Typography } from "@mui/material";
import heroContent from "../data/hero.json";
import { useEffect, useState } from "react";
import type { HeadlinePart } from "../data/types";
import React from "react";

// Utility to get unique font families from the JSON, for DRY
const getFontFamilies = () => {
  const families = new Set<string>();
  (heroContent.headlineRows as HeadlinePart[][]).forEach((line) =>
    line.forEach((part) => families.add(part.fontFamily))
  );
  return Array.from(families).join(", ");
};

const HERO_HEIGHT_DESKTOP = "100vh";
const HERO_HEIGHT_MOBILE = "80vh";
const CONTENT_MAX_WIDTH = 630;

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Only hide video if prefers-reduced-motion is enabled
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setShowVideo(!prefersReducedMotion);
  }, []);

  const fontFamilies = getFontFamilies();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: HERO_HEIGHT_MOBILE, md: HERO_HEIGHT_DESKTOP },
        minHeight: 340,
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        overflow: "hidden",
      }}
    >
      {/* Background video or fallback image */}
      {showVideo ? (
        <Box
          component="video"
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-fallback.png"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Box>
      ) : (
        <Box
          component="img"
          src="/hero-fallback.png"
          alt="Serenidad background"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        />
      )}

      {/* Gradient overlay for better text visibility */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2,
          background:
            "linear-gradient(90deg, rgba(34,34,34,0.55) 36%, rgba(0,0,0,0.10) 100%)",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 3,
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mx: { xs: 2, md: 0 },
          ml: { md: "16%" },
          mt: { xs: 0, md: 0 },
          mb: { xs: 0, md: 0 },
          maxWidth: {
            xs: 400,
            sm: 550,
            md: CONTENT_MAX_WIDTH,
          },
          px: 0,
          py: 0,
        }}
      >
        {/* Headline */}
        <Typography
          component="h1"
          sx={{
            mb: { xs: 0, sm: 2, md: 4 },
            lineHeight: 1.08,
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            fontFamily: fontFamilies,
          }}
        >
          {(heroContent.headlineRows as HeadlinePart[][]).map(
            (line, lineIdx) => (
              <Box
                key={lineIdx}
                component="div"
                sx={{
                  display: "block",
                  width: "100%",
                  fontSize: {
                    xs: "1.8rem",
                    sm: "2.6rem",
                    md: "3rem",
                  },
                  lineHeight: { md: 1 },
                }}
              >
                {line.map((part, i) => (
                  <span
                    key={i}
                    style={{
                      fontWeight: part.fontWeight,
                      fontSize: part.fontSize,
                      fontFamily: part.fontFamily,
                      color: part.color,
                      verticalAlign: part.verticalAlign ?? "baseline",
                      marginRight: part.marginRight >= 0 ? part.marginRight : 6,
                      letterSpacing: "0.5px",
                    }}
                  >
                    {part.text}
                  </span>
                ))}
              </Box>
            )
          )}
        </Typography>
        {/* Subheadline */}
        <Typography
          variant="body1"
          sx={{
            fontWeight: 400,
            fontFamily: "'Assistant', Arial, sans-serif",
            fontSize: { xs: "0.96rem", sm: "1.08rem", md: "1.16rem" },
            color: "#fff",
            maxWidth: { xs: 350, sm: 450, md: 500 },
            mt: { xs: 2, md: "0" },
            lineHeight: 1.25,
            textShadow: "0 2px 8px rgba(0,0,0,0.35)",
          }}
        >
          {heroContent.subheadline}
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
