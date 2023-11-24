import Header from "@/app/components/Header/Header";
import Hero from "@/app/components/Hero/Hero";
import Footer from "@/app/components/Footer/Footer";
import Houses from "@/app/components/Houses/Houses";
import { riviera, grandis, highgarden } from "../content/housesContent.json";

const Page = () => {
  return (
    <div className={"main"}>
      <Header />
      <Hero />
      <Houses house={riviera} />
      <Houses house={grandis} />
      <Houses house={highgarden} />
      <Footer />
    </div>
  );
};

export default Page;
