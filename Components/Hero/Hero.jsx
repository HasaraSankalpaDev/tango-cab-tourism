"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "aos/dist/aos.css";
import AOS from "aos";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  {
    title: "Sigiriya The Lion's Rock",
    text: "Climb the ancient Sigiriya Rock Fortress, marvel at breathtaking frescoes, and enjoy panoramic views of lush Sri Lankan landscapes.",
    btn: "Explore Sigiriya",
    bg: "/sigiriya.png",
  },
  {
    title: "Ella Hills and Tea Plantations",
    text: "Discover the serene town of Ella, hike to Little Adam's Peak, visit the Nine Arches Bridge, and enjoy stunning tea plantation views.",
    btn: "Discover Ella",
    bg: "/ella-bridge.png",
  },

  {
    title: "Nuwara Eliya – Little England",
    text: "Experience the cool climate of Nuwara Eliya, explore endless tea estates, misty mountains, scenic waterfalls, and charming colonial architecture.",
    btn: "Explore Nuwara Eliya",
    bg: "/hills.png",
  },
  {
    title: "Mirissa & Weligama Coast",
    text: "Enjoy golden beaches, gentle ocean waves, whale watching experiences, and unforgettable sunsets along Sri Lanka’s southern coastline.",
    btn: "Discover Mirissa",
    bg: "/beach.png",
  },
];

const Hero = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navigationReady, setNavigationReady] = useState(false);

  useEffect(() => {
    setNavigationReady(true);
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section className="relative w-full h-[75vh] overflow-hidden">
      {/* Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/40 hover:bg-black/60 p-2 md:p-3 rounded-full transition"
      >
        <FiChevronLeft className="text-2xl md:text-3xl" />
      </button>

      <button
        ref={nextRef}
        className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/40 hover:bg-black/60 p-2 md:p-3 rounded-full transition"
      >
        <FiChevronRight className="text-2xl md:text-3xl" />
      </button>

      {/* Swiper */}
      {navigationReady && (
        <Swiper
          modules={[Autoplay, EffectFade, Navigation]}
          effect="fade"
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="w-full h-full"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <Image
                src={slide.bg}
                alt={slide.title}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-black/40" />

              {/* Content with AOS vertical animations */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
                <h2
                  className="text-2xl md:text-3xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#e8bc74] to-[#4d7c9c]"
                  data-aos="fade-up"
                >
                  Tango Cabs & Tour
                </h2>
                <h1
                  className="text-4xl md:text-6xl font-semibold mb-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {slide.title}
                </h1>
                <p
                  className="text-base md:text-lg text-white/85 leading-7 md:leading-8 mb-6 w-[75%]"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {slide.text}
                </p>
                <a
                  href="/tours"
                  className="px-6 py-2 md:px-8 md:py-3 rounded-md text-white font-semibold text-base md:text-lg
                  bg-[linear-gradient(188deg,rgba(79,126,156,1)_0%,rgba(117,156,158,1)_54%,rgba(131,160,153,1)_64%,rgba(144,163,149,1)_70%,rgba(156,166,145,1)_79%,rgba(172,171,139,1)_89%,rgba(232,188,118,1)_100%)]
                  transition-all"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  {slide.btn}
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <span className="text-white text-3xl">⌄</span>
      </div>
    </section>
  );
};

export default Hero;
