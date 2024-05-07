"use client";

import React, { useCallback, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { EffectCube, Pagination, Navigation } from "swiper/modules";
import SlideOne from "@/components/SlideOne";
import SlideTwo from "@/components/SlideTwo";
import SlideFour from "@/components/FourthSlide";
import SlideThree from "@/components/SlideThree";

export default function WizardContent() {
  const sliderRef = useRef<any | null>(null);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return (
        '<p class="' +
        className +
        " pagination_text" +
        '">' +
        "stap " +
        "<span>" +
        (index + 1) +
        "</span>" +
        "</p>"
      );
    },
  };
  return (
    <Swiper
      effect={"cube"}
      grabCursor={true}
      allowTouchMove={false}
      speed={500}
      autoHeight={true}
      loop={false}
      pagination={pagination}
      navigation={{
        nextEl: ".next",
      }}
      cubeEffect={{
        shadow: false,
      }}
      modules={[EffectCube, Pagination, Navigation]}
      className="mySwiper !overflow-hidden">
      <SwiperSlide className="!bg-white !h-fit">
        <SlideOne handleNext={handleNext} />
      </SwiperSlide>
      <SwiperSlide className="!bg-white !h-fit">
        <SlideTwo handleNext={handleNext} />
      </SwiperSlide>
      <SwiperSlide className="!bg-white !h-fit">
        <SlideThree handleNext={handleNext} />
      </SwiperSlide>
      <SwiperSlide className="!bg-white !h-fit">
        <SlideFour handleNext={handleNext} />
      </SwiperSlide>
    </Swiper>
  );
}
