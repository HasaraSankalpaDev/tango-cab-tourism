"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  {
    title: "Sigiriya The Lion's Rock",
    text: "Climb the ancient Sigiriya Rock Fortress, marvel at breathtaking frescoes, and enjoy panoramic views of lush Sri Lankan landscapes.",
    btn: "Explore Sigiriya",
    bg: "https://images.pexels.com/photos/13391116/pexels-photo-13391116.jpeg",
  },
  {
    title: "Ella Hills and Tea Plantations",
    text: "Discover the serene town of Ella, hike to Little Adam's Peak, visit the Nine Arches Bridge, and enjoy stunning tea plantation views.",
    btn: "Discover Ella",
    bg: "https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg",
  },
  {
    title: "Kandy Cultural Heart",
    text: "Explore the sacred Temple of the Tooth, stroll around Kandy Lake, and immerse yourself in vibrant cultural performances.",
    btn: "Visit Kandy",
    bg: "https://images.pexels.com/photos/14041994/pexels-photo-14041994.jpeg",
  },
  {
    title: "Galle Colonial Charm",
    text: "Walk through the historic Galle Fort, enjoy boutique shopping, and experience stunning ocean views along the charming streets.",
    btn: "See Galle",
    bg: "https://images.pexels.com/photos/1072531/pexels-photo-1072531.jpeg",
  },
];

const Hero = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Framer Motion variants
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
    },
    hover: { scale: 1.05 },
  };

  return (
    <section className="relative w-full h-[75vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (prevRef.current && nextRef.current && swiper.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          });
        }}
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center brightness-75"
              style={{ backgroundImage: `url(${slide.bg})` }}
            />
            <div className="absolute inset-0 bg-black/40" />

            {/* Animated Content */}
            <motion.div
              className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6"
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#e8bc74] to-[#4d7c9c]"
                variants={textVariant}
              >
                Tango Cabs & Tour
              </motion.h2>
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-4"
                variants={textVariant}
              >
                {slide.title}
              </motion.h1>
              <motion.p
                className="text-lg text-white/85 leading-8 md:text-xl mb-6 w-[75%]"
                variants={textVariant}
              >
                {slide.text}
              </motion.p>
              <motion.button
                className="px-8 py-3 rounded-md text-white font-semibold text-lg
                  bg-[linear-gradient(188deg,rgba(79,126,156,1)_0%,rgba(117,156,158,1)_54%,rgba(131,160,153,1)_64%,rgba(144,163,149,1)_70%,rgba(156,166,145,1)_79%,rgba(172,171,139,1)_89%,rgba(232,188,118,1)_100%)]
                  transition-transform"
                variants={buttonVariant}
                whileHover="hover"
              >
                {slide.btn}
              </motion.button>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer text-white bg-black/40 hover:bg-black/60 p-3 rounded-full transition"
      >
        <FiChevronLeft size={28} />
      </button>
      <button
        ref={nextRef}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer text-white bg-black/40 hover:bg-black/60 p-3 rounded-full transition"
      >
        <FiChevronRight size={28} />
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <span className="text-white text-3xl">⌄</span>
      </div>
    </section>
  );
};

export default Hero;
