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
import { sliderText, heroMain, villasMainText, villasMain } from "./components/const";

import Link from 'next/link';

export default function Home() {
  return (
    <main className={"main"}>
      <Header />
      <Hero 
      adress={heroMain.adressMain}
      title={heroMain.titleMain}
      description={heroMain.descriptionMain}
      features1={heroMain.featuresMain1}
      features2={heroMain.featuresMain2}
      features3={heroMain.featuresMain3}
      textBtn={heroMain.textBtnMain}/>
      <FeaturesSection />
      <VillasSection title={villasMainText.title} subtitle={villasMainText.subtitle} villas={villasMain}/>
      <PremiumVilla />
      <SiteSlider title={sliderText.titleRes}/>
      <SiteSlider title={sliderText.titleSpa} />
      <InteractiveMap />
      <LeisureBlock />
      <TextBlock />
      <Footer />
    </main>
  );
}
