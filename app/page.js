import Header from "@/app/components/Header/Header";
import Hero from "@/app/components/Hero/Hero";
import FeaturesSection from "@/app/components/FeaturesSection/FeaturesSection";
import VillasSection from "@/app/components/VillasSection/VillasSection";
import PremiumVilla from "@/app/components/PremiumVilla/PremiumVilla";
import SiteSlider from "@/app/components/SiteSlider/SiteSlider";
import InteractiveMap from "@/app/components/InteractiveMap/InteractiveMap";

export default function Home() {
  return (
    <main className={"main"}>
      <Header />
      <Hero />
      <FeaturesSection />
      <VillasSection />
      <PremiumVilla />
      <SiteSlider />
      <SiteSlider />
      <InteractiveMap />
    </main>
  );
}
