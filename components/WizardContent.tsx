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
import { useTranslations } from "next-intl";

interface ErrorModalContent {
  title?: string;
  body?: string;
  onClose?: () => void;
}

export default function WizardContent() {
  const sliderRef = useRef<any | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [errorModal, setErrorModal] = useState<ErrorModalContent | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [openList, setOpenList] = useState(false);
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

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const t = useTranslations("Pag");

  const pagination = isMobile
    ? {
        clickable: process.env.NODE_ENV === "development",
        el: ".swiper-pagination",
        renderBullet: (index: number, className: string) => {
          return `<p class="${className} pagination_text">${t("step")}<span>${
            index + 1
          }</span></p>`;
        },
      }
    : {
        clickable: process.env.NODE_ENV === "development",
        el: ".swiper-pagination",
        renderBullet: (index: number, className: string) => {
          return `<p class="${className} pagination_text"><span>${
            index + 1
          }</span> ${
            index === 0
              ? t("introduction")
              : index === 1
              ? t("validity")
              : index === 2
              ? t("tAndC")
              : t("personalInformation")
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

    if (activeIndex === 3 && openList) {
      timerId = setTimeout(() => {
        setHeightClassName("[&>div]:h-auto");
      }, 10);

      return () => clearTimeout(timerId);
    }

    if (activeIndex === 2 && openModal) {
      timerId = setTimeout(() => {
        setHeightClassName("[&>div]:h-auto");
      }, 1000);

      return () => clearTimeout(timerId);
    }

    setHeightClassName("");
  }, [activeIndex, openModal, openList]);

  return (
    <>
      {errorModal && (
        <ErrorModal
          languageButtons="hidden"
          errorModal={errorModal}
          setErrorModal={setErrorModal}
        />
      )}
      <div className="pt-24 pb-12 gap-3 flex justify-center">
        <div className="swiper-pagination !w-fit"></div>
      </div>
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
          <SlideOne handleNext={handleNext} handlePrev={handlePrev} />
        </SwiperSlide>
        <SwiperSlide className="!bg-white">
          <SlideTwo
            activeIndex={activeIndex}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        </SwiperSlide>
        <SwiperSlide className="!bg-white min-h-screen">
          <SlideThree
            activeIndex={activeIndex}
            openModal={openModal}
            setOpenModal={setOpenModal}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        </SwiperSlide>
        <SwiperSlide className="!bg-white">
          <SlideFour
            setOpenList={setOpenList}
            openList={openList}
            setErrorModal={setErrorModal}
            handlePrev={handlePrev}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
