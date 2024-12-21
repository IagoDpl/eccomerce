"use client";
import Link from "next/link";
import React, { useState } from "react";
const slides = [
  {
    id: 1,
    title: "summer",
    description: " PROMOÇÃO 50%",
    img: "https://w7.pngwing.com/pngs/388/461/png-transparent-khuy%E1%BA%BFn-mai-promotion-price-product-discounts-and-allowances-super-promotion-purple-text-logo-thumbnail.png",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },

  {
    id: 2,
    title: "fall",
    description: " coming",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW5-exerzn9aAF_pPEEmy2C9qtbGq-Z4aAIw&s",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },

  {
    id: 3,
    title: "winter",
    description: " está chegando",
    img: "https://blog.tcheinverno.com.br/novo/wp-content/uploads/2024/03/look-feminino-de-inverno-urbano.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div className="w-max h-full flex transition-all ease-in-out duration-1000">
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="rounded-md bg-black text-white py-3 px-4">
                  SHOP NOW
                </button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
              <img
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              ></img>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 gap-4">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-4"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
