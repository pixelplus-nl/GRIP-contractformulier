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
import CustomPagination from "./CustomPagination";

interface ErrorModalContent {
  title?: string;
  body?: string;
}

export default function WizardContent() {
  const sliderRef = useRef<any | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [errorModal, setErrorModal] = useState<ErrorModalContent | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [openList, setOpenList] = useState(false);
  const [heightClassName, setHeightClassName] = useState("");
  const [fileName, setFileName] = useState<string>("");
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 640 : false
  );

  const [slideOneChecked, setSlideOneChecked] = useState(false);
  const [slideTwoChecked, setSlideTwoChecked] = useState(false);
  const [slideThreeChecked, setSlideThreeChecked] = useState(false);
  const [slideFourChecked, setSlideFourChecked] = useState(false);

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

  const handleSlideChange = () => {
    if (!sliderRef.current) return;
    const newIndex = sliderRef.current.swiper.activeIndex;
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (activeIndex === 3 && openList) {
      timerId = setTimeout(() => {
        setHeightClassName("[&>div]:!h-auto");

        setTimeout(() => {
          setHeightClassName("");
        }, 10);
      }, 10);
      return () => clearTimeout(timerId);
    }

    if (fileName !== "") {
      setHeightClassName("[&>div]:!h-auto");

      timerId = setTimeout(() => {
        setHeightClassName("[&>div]:!h-auto");

        setTimeout(() => {
          setHeightClassName("");
        }, 15);
      }, 10);
      return () => clearTimeout(timerId);
    }

    if (activeIndex === 3 && !openList) {
      timerId = setTimeout(() => {
        setHeightClassName("[&>div]:!h-auto");

        setTimeout(() => {
          setHeightClassName("");
        }, 10);
      }, 10);
      return () => clearTimeout(timerId);
    }

    if (activeIndex === 2 && openModal) {
      timerId = setTimeout(() => {
        setHeightClassName("[&>div]:!h-auto");

        setTimeout(() => {
          setHeightClassName("");
        }, 1010);
      }, 1000);

      return () => clearTimeout(timerId);
    }

    setHeightClassName("");
  }, [activeIndex, openModal, openList, fileName]);

  useEffect(() => {
    const toggleBodyClass = () => {
      if (
        (activeIndex === 2 && !openModal) ||
        (!isMobile && activeIndex === 1)
      ) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };

    toggleBodyClass();

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [openModal, activeIndex, isMobile]);

  return (
    <>
      {errorModal && (
        <ErrorModal
          languageButtons="hidden"
          errorModal={errorModal}
          setErrorModal={setErrorModal}
        />
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
        onSlideChangeTransitionEnd={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        autoHeight={true}
        onSlideChange={handleSlideChange}
        speed={750}
        loop={false}
        modules={[EffectCreative, Pagination, Navigation]}
        className={`mySwiper3 ${heightClassName} bg-white`}>
        <SwiperSlide className="!bg-white">
          <CustomPagination
            handlePrev={handlePrev}
            handleNext={handleNext}
            slideChecked={slideOneChecked}
            activeIndex={activeIndex}
          />
          <SlideOne
            setSlideOneChecked={setSlideOneChecked}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        </SwiperSlide>
        <SwiperSlide className="!bg-white">
          <CustomPagination
            handlePrev={handlePrev}
            handleNext={handleNext}
            slideChecked={slideTwoChecked}
            activeIndex={activeIndex}
          />
          <SlideTwo
            setSlideTwoChecked={setSlideTwoChecked}
            activeIndex={activeIndex}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        </SwiperSlide>
        <SwiperSlide className="!bg-white min-h-screen">
          <CustomPagination
            handlePrev={handlePrev}
            slideChecked={slideThreeChecked}
            handleNext={handleNext}
            activeIndex={activeIndex}
          />
          <SlideThree
            activeIndex={activeIndex}
            openModal={openModal}
            setOpenModal={setOpenModal}
            setSlideThreeChecked={setSlideThreeChecked}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        </SwiperSlide>
        <SwiperSlide className="!bg-white ">
          <CustomPagination
            handlePrev={handlePrev}
            slideChecked={slideFourChecked}
            handleNext={handleNext}
            activeIndex={activeIndex}
          />
          <SlideFour
            fileName={fileName}
            setFileName={setFileName}
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
