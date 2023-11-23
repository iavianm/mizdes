import Header from "@/app/components/Header/Header";
import Hero from "@/app/components/Hero/Hero";
import Footer from "@/app/components/Footer/Footer";
import Riviera from "@/app/components/Riviera/Riviera";

const Page = () => {
  return (
    <div className={"main"}>
      <Header />
      <Hero />
      <Riviera />
      <Footer />
    </div>
  );
};

export default Page;
