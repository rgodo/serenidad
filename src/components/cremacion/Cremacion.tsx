"use client";

import React from "react";
import CremacionHeader from "./CremacionHeader";
import CremacionInfo from "./CremacionInfo";
import CremacionCarousel from "./CremacionCarousel";
import cremacionData from "../../data/cremacion.json";
import { useIsMobile } from "../services/useIsMobile";

const Cremacion: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <section
      style={{
        paddingBottom: "2rem",
        backgroundImage: "url('bg-sheet.png')",
      }}
      id='cremation'
    >
      <CremacionHeader {...cremacionData.header} />
      <CremacionInfo {...cremacionData.info} isMobile={isMobile} />
      <CremacionCarousel {...cremacionData.carousel} />
    </section>
  );
};

export default Cremacion;
