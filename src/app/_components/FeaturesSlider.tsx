"use client";
import Image from "next/image";
import { useState } from "react";
import type { Swiper as SwiperCore } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = [
  {
    id: 0,
    tag: "Customer focused",
    title: "Purpose-built financial services",
    desOne:
      "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
    desTwo:
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    imgPath: "/assets/slider/slider-1.jpg",
  },
  {
    id: 1,
    tag: "Agile and adaptable",
    title: "Agile and adaptable for growth",
    desOne:
      "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
    desTwo:
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    imgPath: "/assets/slider/slider-2.jpg",
  },
  {
    id: 2,
    tag: "Compliance ready",
    title: "Manage compliance with ease",
    desOne:
      "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
    desTwo:
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    imgPath: "/assets/slider/slider-3.png",
  },
  {
    id: 3,
    tag: "Secure and safe",
    title: "Highly secure and safe",
    desOne:
      "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
    desTwo:
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    imgPath: "/assets/slider/slider-4.jpg",
  },
];

const buttons: string[] = [
  "Customer focused",
  "Agile and adaptable",
  "Compliance ready",
  "Secure and safe",
];
const FeaturesSlider = () => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="max-w-6xl mx-auto p-5">
      <div className="hidden xl:flex gap-5 mb-8 relative">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => {
              swiper?.slideToLoop(index);
              setActiveIndex(index);
            }}
            className={`${activeIndex === index ? "font-semibold bg-blue-main/20" : ""} px-10 py-2 border-0 text-lg font-medium leading-[32.4px] cursor-pointer transition-all rounded-full text-blue-main 
`}
          >
            {button}
          </button>
        ))}
      </div>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        onSwiper={(swiperInstance: SwiperCore) => setSwiper(swiperInstance)}
        onSlideChange={(swiper: SwiperCore) => {
          setActiveIndex(swiper.realIndex);
        }}
        className="w-full drop-shadow-[0px_16px_21px_rgba(207,233,247,0.47)]"
      >
        {slides.map(({ tag, title, desOne, desTwo, imgPath, id }) => (
          <SwiperSlide key={id} className="">
            <article className="grid lg:grid-cols-2 grid-cols-1 md:gap-[32px]  lg:p-[64px] rounded-[20px] mb-5 p-[24px] lg:h-[550px] bg-white">
              <section className="space-y-5 lg:space-y-10">
                <header className="space-y-4 lg:space-y-7">
                  <h6 className="max-sm:text-sm leading-[1.5] tracking-[2.56px] font-bold font-inter uppercase text-blue-main font-Montserrat">
                    {tag}
                  </h6>
                  <h3 className="font-semibold  text-[25px] lg:text-[40px] leading-[120%] text-blue-dark font-montserrat">
                    {title}
                  </h3>
                </header>
                <figure className="md:hidden h-[150px]">
                  <Image
                    src={imgPath}
                    width={3672}
                    height={2712}
                    alt={tag}
                    className="h-full w-full object-cover rounded-[8px]"
                    sizes="max-width(768px) 90vw, 0px"
                    loading="lazy"
                  />
                </figure>
                <div className="text-blue-dark">
                  <div className="">
                    <p>
                      <strong>{desOne}</strong>
                    </p>
                  </div>
                  <div className="">
                    <p>
                      <br />
                      {desTwo}
                    </p>
                  </div>
                </div>
              </section>
              <figure className="hidden md:block h-full">
                <Image
                  src={imgPath}
                  width={3600}
                  height={2700}
                  alt={tag}
                  className="w-full h-full   rounded-[16px]"
                  sizes="35vw"
                  loading="lazy"
                />
              </figure>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturesSlider;
