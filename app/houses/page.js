import Header from "@/app/components/Header/Header";
import Hero from "@/app/components/Hero/Hero";
import Footer from "@/app/components/Footer/Footer";
import Houses from "@/app/components/Houses/Houses";
import housesContent from "@/app/content/housesContent.json";
import TerraceBlock from "@/app/components/TerraceBlock/TerraceBlock";
import heroContent from "@/app/content/heroContent.json";
import TourPopup from "@/app/components/TourPopup/TourPopup";

const Page = () => {
  return (
    <section className={"main"}>
      <Header />
      <Hero content={heroContent.housesPage} />
      <Houses house={housesContent.riviera} />
      <Houses house={housesContent.grandis} />
      <Houses house={housesContent.highgarden} />
      <TerraceBlock />
      <Footer />
      {/*<TourPopup />*/}
    </section>
  );
};

export default Page;
