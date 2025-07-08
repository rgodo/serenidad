"use client";

import React from "react";
import { getServicesData } from "./../utils/servicesUtil";
import { ServicesHero } from "./ServicesHero";
import { ServicesGallery } from "./ServicesGallery";
import { ServicesPlans } from "./ServicesPlans";
import { useIsMobile } from "./useIsMobile";

export const Services: React.FC = () => {
  const data = getServicesData();
  const isMobile = useIsMobile();

  if (isMobile) {
    // Mobile layout: Hero top, then centered Gallery
    return (
      <main>
        <section style={{ margin: "32px auto", maxWidth: 600 }}>
          <ServicesHero data={data.hero} />
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "24px 0",
          }}
        >
          <ServicesGallery data={data.gallery} />
          <div
            style={{
              marginTop: 18,
              textAlign: "center",
              maxWidth: 350,
            }}
          >
            <h4 style={{ fontFamily: "Assistant, serif" }}>
              {data.additionals.title}
            </h4>
            <p style={{ fontFamily: "Assistant, serif" }}>
              {data.additionals.description}
            </p>
          </div>
        </section>
        <ServicesPlans plans={data.plans} />
      </main>
    );
  }

  // Desktop layout: side-by-side
  return (
    <main>
      <section
        style={{
          display: "flex",
          gap: "32px",
          maxWidth: 1200,
          margin: "40px auto",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            flex: "1 1 320px",
            minWidth: 300,
            maxWidth: 420,
            fontFamily: "Assistant, serif",
          }}
        >
          <ServicesGallery data={data.gallery} />
          <section style={{ marginLeft: 35, maxWidth: 850 }}>
            <div style={{ marginTop: 0 }}>
              <h4>{data.additionals.title}</h4>
              <p>{data.additionals.description}</p>
            </div>
          </section>
        </div>
        <div style={{ flex: "2 1 400px", minWidth: 300 }}>
          <ServicesHero data={data.hero} />
        </div>
      </section>
      <ServicesPlans plans={data.plans} />
    </main>
  );
};
