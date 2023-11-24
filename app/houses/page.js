import Header from "@/app/components/Header/Header";
import Hero from "@/app/components/Hero/Hero";
import Footer from "@/app/components/Footer/Footer";
import Houses from "@/app/components/Houses/Houses";
import housesContent from "../content/housesContent.json";
import TerraceBlock from "@/app/components/TerraceBlock/TerraceBlock";

const Page = () => {
  return (
    <div className={"main"}>
      <Header />
      <Hero />
      <Houses house={housesContent.riviera} />
      <Houses house={housesContent.grandis} />
      <Houses house={housesContent.highgarden} />
      <TerraceBlock />
      <Footer />
    </div>
  );
};

export default Page;
