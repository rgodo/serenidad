import Hero from "../components/Hero";
import About from "../components/About";
import FeatureBar from "../components/FeatureBar";
import Differences from "@/components/Differences";
import Cremacion from "@/components/cremacion/Cremacion";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureBar />
      <About />
      <Differences />
      <Services />
      <Cremacion />
      {/* Add more sections as you build them */}
    </main>
  );
}
