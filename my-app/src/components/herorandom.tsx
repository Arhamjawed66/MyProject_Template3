"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const images = [
    "/images/herologo/hero4.jpg",
    "/images/herologo/hero3.jpg",
    "/images/herologo/hero2.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000, 
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="h-screen w-full">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
