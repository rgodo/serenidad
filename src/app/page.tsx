import Hero from "../components/Hero";
import About from "../components/About";
import FeatureBar from "../components/FeatureBar";
import Differences from "@/components/Differences";
import Cremacion from "@/components/cremacion/Cremacion";
import { Services } from "@/components/services";
import PanteonSection from "@/components/panteon/PanteonSection";
import Footer from "@/components/Footer";
import ContactUs from "@/components/contactUs/ContactUs";
import Locations from "@/components/Locations";

export default function Home() {
  return (
    <main style={{maxWidth: "1440px", margin: 'auto'}}>
      <Hero />
      <FeatureBar />
      <About />
      <Differences />
      <Services />
      <Cremacion />
      <PanteonSection />
      <Locations />
      <ContactUs />
      <Footer />
      {/* Add more sections as you build them */}
    </main>
  );
}
