import React from "react";
import CremacionHeader from "./CremacionHeader";
import CremacionInfo from "./CremacionInfo";
import CremacionCarousel from "./CremacionCarousel";
import cremacionData from "../../data/cremacion.json";

const Cremacion: React.FC = () => (
  <section>
    <CremacionHeader {...cremacionData.header} />
    <CremacionInfo {...cremacionData.info} />
    <CremacionCarousel {...cremacionData.carousel} />
  </section>
);

export default Cremacion;
