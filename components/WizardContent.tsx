"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

import { EffectCreative, Pagination, Navigation } from "swiper/modules";
import SlideOne from "@/components/SlideOne";
import SlideTwo from "@/components/SlideTwo";
import SlideFour from "@/components/SlideFour";
import SlideThree from "@/components/SlideThree";
import ErrorModal from "./ErrorModal";

export default function WizardContent() {
  const sliderRef = useRef<any | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [errorModal, setErrorModal] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [heightClassName, setHeightClassName] = useState("");
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 640 : false
  );
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 630);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const pagination = isMobile
    ? {
        clickable: true,
        renderBullet: (index: number, className: string) => {
          return `<p class="${className} pagination_text">${"stap "}<span>${
            index + 1
          }</span></p>`;
        },
      }
    : {
        clickable: true,
        renderBullet: (index: number, className: string) => {
          return `<p class="${className} pagination_text"><span>${
            index + 1
          }</span> ${
            index === 0
              ? "Introductie"
              : index === 1
              ? "Validiteit"
              : index === 2
              ? "Algemene voorwaarden"
              : "Persoonlijke gegevens"
          }</p>`;
        },
      };

  const handleSlideChange = () => {
    if (!sliderRef.current) return;
    const newIndex = sliderRef.current.swiper.activeIndex;
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (activeIndex === 2 && openModal) {
      timerId = setTimeout(() => {
        setHeightClassName("[&>div]:h-auto");
      }, 1000);

      return () => clearTimeout(timerId);
    }

    setHeightClassName("");
  }, [activeIndex, openModal]);

  return (
    <>
      {errorModal && (
        <ErrorModal errorModal={errorModal} setErrorModal={setErrorModal} />
      )}
      <Swiper
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            shadow: true,
            translate: ["100%", 0, 0],
          },
        }}
        grabCursor={true}
        ref={sliderRef}
        allowTouchMove={false}
        autoHeight={true}
        onSlideChange={handleSlideChange}
        speed={750}
        loop={false}
        pagination={pagination}
        modules={[EffectCreative, Pagination, Navigation]}
        className={`mySwiper3 ${heightClassName} `}>
        <SwiperSlide className="!bg-white">
          <SlideOne handleNext={handleNext} />
        </SwiperSlide>
        <SwiperSlide className="!bg-white">
          <SlideTwo handleNext={handleNext} />
        </SwiperSlide>
        <SwiperSlide className="!bg-white min-h-screen">
          <SlideThree
            openModal={openModal}
            setOpenModal={setOpenModal}
            handleNext={handleNext}
          />
        </SwiperSlide>
        <SwiperSlide className="!bg-white">
          <SlideFour setErrorModal={setErrorModal} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
