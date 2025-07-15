"use client";

import React, { useState } from "react";
import { getServicesData } from "./../utils/servicesUtil";
import { ServicesHero } from "./ServicesHero";
import { ServicesGallery } from "./ServicesGallery";
import { ServicesPlans } from "./ServicesPlans";
import { useIsMobile } from "./useIsMobile";
import { Box } from "@mui/material";

export const Services: React.FC = () => {
  const data = getServicesData();
  const isMobile = useIsMobile();
  const [currentService, setCurrentService] = useState(data.gallery.images[0])

  return (
    <section style={{ backgroundImage: "url('bg-sheet.png')" }} id="services">
      <Box
        sx={{
          width: "100%",
          paddingY: "2rem",
          position: "relative",
          display: { md: "grid" },
          alignItems: { md: "center" },
          gridTemplateColumns: { md: "1fr 1fr" },
          gridTemplateAreas: { md: '"second first"' },
          maxWidth: '1100px',
          margin: { md: 'auto' }
        }}
      >
        <Box
          sx={{
            margin: { xs: "32px auto", md: 0 },
            maxWidth: 430,
            gridArea: { md: "first" },
            justifySelf: { md: 'self-end' }
          }}
        >
          <ServicesHero data={data.hero} isMobile={isMobile} />
        </Box>
        <Box
          sx={{
            paddingLeft: {xs: "1rem", md: 0 },
            paddingRight: {xs: "1rem", md: 0 },
            maxWidth: { md: "530px" },
            gridArea: { md: "second" },
          }}
        >
          <ServicesGallery data={data.gallery} isMobile={isMobile} autoplay={true} onSlideChange={(e) => {
            setCurrentService(data.gallery.images[e.activeIndex])
          }}>
            <Box
              sx={{
                bgcolor: "#E1952D",
                textAlign: "center",
                paddingY: "0.5rem",
                color: "white",
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                }}
              >
                {" "}
                ¡Ver Planes!{" "}
              </span>
            </Box>
          </ServicesGallery>
          <div
            style={{
              maxWidth: "100%",
            }}
          >
            <h4
              style={{
                fontFamily: "Assistant, serif",
                marginBottom: "0.5rem",
                marginTop: 0,
                fontWeight: 700,
                color: "#484846",
              }}
            >
              {currentService.title}
            </h4>
            <p
              style={{
                fontFamily: "Assistant, serif",
                marginTop: 0,
                fontWeight: 600,
                lineHeight: 1.1,
                fontSize: "0.98rem",
                color: "#484846",
              }}
            >
              {currentService.description}
            </p>
          </div>
        </Box>
      </Box>
      <ServicesPlans plans={data.plans} />
    </section>
  );
};
