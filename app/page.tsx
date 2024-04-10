
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ThemeSection from "./components/ThemeSection";
import PrizeSection from "./components/PrizeSection";
import Sponsors from "./components/SponsorsSection";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <AboutSection />

      <ThemeSection />
      <PrizeSection />
      <Sponsors />
    </main>
  );
}
