
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ThemeSection from "./components/ThemeSection";
import PrizeSection from "./components/PrizeSection";
import Sponsors from "./components/SponsorsSection";
import Timeline from "./components/Timeline";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <AboutSection />
      <Timeline />
      <ThemeSection />
      <PrizeSection />
      <Sponsors />
    </main>
  );
}
