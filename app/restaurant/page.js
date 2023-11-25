"use client";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import heroContent from "@/app/content/heroContent.json";
import RestauranMenu from "../components/RestauranMenu/RestauranMenu";
import './restauran.css';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/SiteSlider/SiteSlider.css";
import Footer from "../components/Footer/Footer";
import sliderRestauranImages from "@/app/content/sliderRestauranImages.json";


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
    <section className="restauran">
      <Header />
      <Hero content={heroContent.restauranPage} />
      <RestauranMenu />
      <div className="slider-restauran">
        <Slider {...customSliderSettings}>
          {sliderRestauranImages.restauran.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt={item.alt} className="slider-restauran__img" />
            </div>
          ))}
        </Slider>
      </div>
      <Footer />
    </section>
  );
};

export default Page;