import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Platform from "@/components/Platform";
import Deploy from "@/components/Deploy";
import Capabilities from "@/components/Capabilities";
import AIWorkforce from "@/components/AIWorkforce";
import ProductFamily from "@/components/ProductFamily";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Nav />
      <main id="top">
        <Hero />
        <Stats />
        <Platform />
        <Deploy />
        <Capabilities />
        <AIWorkforce />
        <ProductFamily />
        <Cta />
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
