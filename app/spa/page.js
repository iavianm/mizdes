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
import { heroSpa, villasSpa, villasSpaText } from "../components/const";
import { spaImages } from "../components/Images";
import "./spa.css";

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
    <main className="main">
      <Header />
      <Hero
        title={heroSpa.titleSpa}
        description={heroSpa.descriptionSpa}
        features1={heroSpa.featuresSpa1}
        features2={heroSpa.featuresSpa2}
        features3={heroSpa.featuresSpa3}
        textBtn={heroSpa.textBtnSpa}
      />
      <section className="villas-spa__section">
        <VillasSection
          title={villasSpaText.title}
          subtitle={villasSpaText.subtitle}
          villas={villasSpa}
          className='grid-spa'
        />
         </section>
        <Slider {...customSliderSettings}>
          {spaImages.map((item) => (
            <div key={item.id} className="slider-spa"> 
              <img src={item.src} alt={item.alt} className="slider-spa__img"/>
            </div>
          ))}
        </Slider>
      <Footer />
    </main>
  );
};

export default Page;
