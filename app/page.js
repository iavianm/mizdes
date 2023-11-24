import Header from "@/app/components/Header/Header";
import Hero from "@/app/components/Hero/Hero";
import FeaturesSection from "@/app/components/FeaturesSection/FeaturesSection";
import VillasSection from "@/app/components/VillasSection/VillasSection";
import PremiumVilla from "@/app/components/PremiumVilla/PremiumVilla";
import SiteSlider from "@/app/components/SiteSlider/SiteSlider";
import InteractiveMap from "@/app/components/InteractiveMap/InteractiveMap";
import LeisureBlock from "@/app/components/LeisureBlock/LeisureBlock";
import TextBlock from "@/app/components/TextBlock/TextBlock";
import Footer from "@/app/components/Footer/Footer";
import { sliderText } from "./components/const";
import heroContent from "@/app/content/heroContent.json";
import { villas } from "@/app/content/villasMain.json";
import titles from "@/app/content/villasSectionTitles.json";

export default function Home() {
  return (
    <main className={"main"}>
      <Header />
      <Hero content={heroContent.homePage} />
      <FeaturesSection />
      <VillasSection villas={villas} about={titles.homePage} />
      <PremiumVilla />
      <SiteSlider title={sliderText.titleRes} />
      <SiteSlider title={sliderText.titleSpa} />
      <InteractiveMap />
      <LeisureBlock />
      <TextBlock />
      <Footer />
    </main>
  );
}
