
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ThemeSection from "./components/ThemeSection";
import ProcessFlow from "./components/ProcessFlow";
import PrizeSection from "./components/PrizeSection";
import Sponsors from "./components/SponsorsSection";
import ProcessFlow2 from "./components/ProcessFlow";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <AboutSection />
      <ThemeSection />
      <ProcessFlow/>
      <PrizeSection />
      <Sponsors />
    </main>
  );
}
