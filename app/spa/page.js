"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/SiteSlider/SiteSlider.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import VillasSection from "../components/VillasSection/VillasSection";
import "./spa.css";
import heroContent from "@/app/content/heroContent.json";
import { villas } from "@/app/content/villasSpa.json";
import titles from "@/app/content/villasSectionTitles.json";
import { spa } from "@/app/content/sliderSpaImages.json";

const Page = () => {
  const customSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    focusOnSelect: false,
  };

  return (
    <section className="main">
      <Header />
      <Hero content={heroContent.spaPage} />
      <div className="villas-spa__section">
        <VillasSection
          villas={villas}
          about={titles.spaPage}
          className="grid-spa"
        />
      </div>
      <div className="slider-spa">
        <Slider {...customSliderSettings}>
          {spa.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt={item.alt} className="slider-spa__img" />
            </div>
          ))}
        </Slider>
      </div>

      <Footer />
    </section>
  );
};

export default Page;
