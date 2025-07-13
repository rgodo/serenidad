"use client";

import React from "react";
import { getServicesData } from "./../utils/servicesUtil";
import { ServicesHero } from "./ServicesHero";
import { ServicesGallery } from "./ServicesGallery";
import { ServicesPlans } from "./ServicesPlans";
import { useIsMobile } from "./useIsMobile";
import { Box } from "@mui/material";

export const Services: React.FC = () => {
  const data = getServicesData();
  const isMobile = useIsMobile();

  return (
    <section>
      <Box
        sx={{
          width: '100%',
          paddingY: '2rem',
          position: 'relative',
          display: { md: 'grid' },
          alignItems: { md: 'center' },
          gridTemplateColumns: { md: '1fr 1fr'},
          gridTemplateAreas: { md: '"second first"' }
        }}
      >
        <Box sx={{
          margin: "32px auto", maxWidth: 600, 
          gridArea: { md: 'first'}
        }}>
          <ServicesHero data={data.hero} isMobile={isMobile} />
        </Box>
        <Box
          sx={{
            paddingLeft: '1rem',
            paddingRight: '1rem',
            maxWidth: {md: '40rem'},
            gridArea: { md: 'second' }
          }}
        >
          <ServicesGallery data={data.gallery} isMobile={isMobile}>
            <Box
              sx={{
                bgcolor: '#E1952D',
                textAlign: 'center',
                paddingY: '0.5rem',
                color: 'white'
              }}
            >
              <span style={{
                fontWeight: 700,
              }}> ¡Ver Planes! </span>
            </Box>
          </ServicesGallery>
          <div
            style={{
              marginTop: 18,
              maxWidth: '100%',
            }}
          >
            <h4 style={{ fontFamily: "Assistant, serif", marginBottom: '0.5rem', marginTop: 0, fontWeight: 700, color: '#484846' }}>
              {data.additionals.title}
            </h4>
            <p style={{ fontFamily: "Assistant, serif", marginTop: 0, fontWeight: 600, lineHeight: 1.1, fontSize: "0.98rem", color: '#484846' }}>
              {data.additionals.description}
            </p>
          </div>
        </Box>
      </Box>
      <ServicesPlans plans={data.plans} />
    </section>
  );
};
