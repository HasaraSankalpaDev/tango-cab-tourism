// "use client";

// import React, { useRef, useState, useEffect } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "aos/dist/aos.css";
// import AOS from "aos";

// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// const slides = [
//   {
//     title: "Sigiriya The Lion's Rock",
//     text: "Climb the ancient Sigiriya Rock Fortress, marvel at breathtaking frescoes, and enjoy panoramic views of lush Sri Lankan landscapes.",
//     btn: "Explore Sigiriya",
//     bg: "/sigiriya.png",
//   },
//   {
//     title: "Ella Hills and Tea Plantations",
//     text: "Discover the serene town of Ella, hike to Little Adam's Peak, visit the Nine Arches Bridge, and enjoy stunning tea plantation views.",
//     btn: "Discover Ella",
//     bg: "/ella-bridge.avif",
//   },

//   {
//     title: "Nuwara Eliya – Little England",
//     text: "Experience the cool climate of Nuwara Eliya, explore endless tea estates, misty mountains, scenic waterfalls, and charming colonial architecture.",
//     btn: "Explore Nuwara Eliya",
//     bg: "/hills.avif",
//   },
//   {
//     title: "Mirissa & Weligama Coast",
//     text: "Enjoy golden beaches, gentle ocean waves, whale watching experiences, and unforgettable sunsets along Sri Lanka’s southern coastline.",
//     btn: "Discover Mirissa",
//     bg: "/beach.avif",
//   },
// ];

// const Hero = () => {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   const [navigationReady, setNavigationReady] = useState(false);

//   useEffect(() => {
//     setNavigationReady(true);
//     AOS.init({
//       duration: 800,
//       easing: "ease-out",
//       once: true,
//       mirror: false,
//     });
//   }, []);

//   return (
//     <section className="relative w-full h-[75vh] overflow-hidden">
//       {/* Navigation Buttons */}
//       <button
//         ref={prevRef}
//         className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/40 hover:bg-black/60 p-2 md:p-3 rounded-full transition"
//       >
//         <FiChevronLeft className="text-2xl md:text-2xl" />
//       </button>

//       <button
//         ref={nextRef}
//         className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/40 hover:bg-black/60 p-2 md:p-3 rounded-full transition"
//       >
//         <FiChevronRight className="text-2xl md:text-2xl" />
//       </button>

//       {/* Swiper */}
//       {navigationReady && (
//         <Swiper
//           modules={[Autoplay, EffectFade, Navigation]}
//           effect="fade"
//           loop
//           autoplay={{ delay: 5000, disableOnInteraction: false }}
//           navigation={{
//             prevEl: prevRef.current,
//             nextEl: nextRef.current,
//           }}
//           onBeforeInit={(swiper) => {
//             swiper.params.navigation.prevEl = prevRef.current;
//             swiper.params.navigation.nextEl = nextRef.current;
//             swiper.navigation.init();
//             swiper.navigation.update();
//           }}
//           className="w-full h-full"
//         >
//           {slides.map((slide, i) => (
//             <SwiperSlide key={i}>
//               <Image
//                 src={slide.bg}
//                 alt={slide.title}
//                 fill
//                 priority={i === 0}
//                 sizes="100vw"
//                 className="object-cover brightness-90"
//               />
//               <div className="absolute inset-0 bg-black/40" />

//               {/* Content with AOS vertical animations */}
//               <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
//                 <h2
//                   className="text-1.5xl md:text-1.5xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#e8bc74] to-[#4d7c9c]"
//                   data-aos="fade-up"
//                 >
//                   Tango Cabs & Tour
//                 </h2>
//                 <h1
//                   className="text-4xl md:text-4xl font-semibold mb-4"
//                   data-aos="fade-up"
//                   data-aos-delay="100"
//                 >
//                   {slide.title}
//                 </h1>
//                 <p
//                   className="text-base md:text-sm text-white/85 leading-7 md:leading-8 mb-6 w-[75%]"
//                   data-aos="fade-up"
//                   data-aos-delay="200"
//                 >
//                   {slide.text}
//                 </p>
//                 <a
//                   href="/tours"
//                   className="px-6 py-2 md:px-8 md:py-2 rounded-sm text-white font-semibold text-sm md:text-sm
//                   bg-[linear-gradient(188deg,rgba(79,126,156,1)_0%,rgba(117,156,158,1)_54%,rgba(131,160,153,1)_64%,rgba(144,163,149,1)_70%,rgba(156,166,145,1)_79%,rgba(172,171,139,1)_89%,rgba(232,188,118,1)_100%)]
//                   transition-all"
//                   data-aos="fade-up"
//                   data-aos-delay="300"
//                 >
//                   {slide.btn}
//                 </a>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       )}

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
//         <span className="text-white text-3xl">⌄</span>
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

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
    bg: "/ella-bridge.avif",
  },
  {
    title: "Nuwara Eliya – Little England",
    text: "Experience the cool climate of Nuwara Eliya, explore endless tea estates, misty mountains, scenic waterfalls, and charming colonial architecture.",
    btn: "Explore Nuwara Eliya",
    bg: "/hills.avif",
  },
  {
    title: "Mirissa & Weligama Coast",
    text: "Enjoy golden beaches, gentle ocean waves, whale watching experiences, and unforgettable sunsets along Sri Lanka's southern coastline.",
    btn: "Discover Mirissa",
    bg: "/beach.avif",
  },
];

const gradient =
  "linear-gradient(188deg, rgba(79,126,156,1) 0%, rgba(117,156,158,1) 54%, rgba(144,163,149,1) 79%, rgba(172,171,139,1) 90%, rgba(232,188,118,1) 100%)";

const Hero = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navigationReady, setNavigationReady] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    setNavigationReady(true);
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setAnimKey((k) => k + 1);
  };

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "80vh",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .hero-root { font-family: 'DM Sans', sans-serif; }

        .hero-slide-content {
          animation: heroContentIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .hero-eyebrow {
          animation: heroContentIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both;
        }

        .hero-title {
          animation: heroContentIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;
        }

        .hero-text {
          animation: heroContentIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.35s both;
        }

        .hero-btn-wrap {
          animation: heroContentIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.5s both;
        }

        @keyframes heroContentIn {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.25);
          background: rgba(0,0,0,0.25);
          backdrop-filter: blur(8px);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
        }

        .hero-nav-btn:hover {
          background: rgba(0,0,0,0.5);
          border-color: rgba(255,255,255,0.5);
          transform: translateY(-50%) scale(1.08);
        }

        .hero-explore-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 2rem;
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 500;
          color: white;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.4);
          transition: border-color 0.3s ease;
        }

        .hero-explore-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: ${gradient};
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .hero-explore-btn:hover::before { opacity: 1; }
        .hero-explore-btn:hover { border-color: transparent; }

        .hero-explore-btn span { position: relative; z-index: 1; }

        .scroll-indicator {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          animation: scrollPulse 2.5s ease-in-out infinite;
        }

        .scroll-line {
          width: 1px;
          height: 2.5rem;
          background: linear-gradient(to bottom, rgba(255,255,255,0.6), transparent);
        }

        .scroll-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(255,255,255,0.7);
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.6; transform: translateX(-50%) translateY(0); }
          50% { opacity: 1; transform: translateX(-50%) translateY(6px); }
        }

        .slide-counter {
          position: absolute;
          bottom: 2.75rem;
          right: 1.5rem;
          z-index: 20;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .slide-pip {
          width: 1.75rem;
          height: 1px;
          background: rgba(255,255,255,0.35);
          transition: all 0.4s ease;
          cursor: pointer;
        }

        .slide-pip.active {
          background: ${gradient};
          width: 2.75rem;
        }

        @media (max-width: 767px) {
          .hero-nav-btn { width: 2.25rem; height: 2.25rem; }
        }
      `}</style>

      {/* Prev / Next */}
      <button
        ref={prevRef}
        className="hero-nav-btn"
        style={{ left: "1.25rem" }}
        aria-label="Previous slide"
      >
        <FiChevronLeft size={18} />
      </button>
      <button
        ref={nextRef}
        className="hero-nav-btn"
        style={{ right: "1.25rem" }}
        aria-label="Next slide"
      >
        <FiChevronRight size={18} />
      </button>

      {navigationReady && (
        <Swiper
          modules={[Autoplay, EffectFade, Navigation]}
          effect="fade"
          loop
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          onSlideChange={handleSlideChange}
          style={{ width: "100%", height: "100%" }}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <Image
                src={slide.bg}
                alt={slide.title}
                fill
                priority={i === 0}
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />

              {/* Layered overlays for depth */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.38) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.5) 100%)",
                }}
              />

              {/* Slide content */}
              <div
                className="hero-root"
                style={{
                  position: "relative",
                  zIndex: 10,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  textAlign: "center",
                  padding: "0 1.5rem",
                }}
              >
                {/* Eyebrow */}
                <div
                  key={`eyebrow-${animKey}-${i}`}
                  className={i === activeIndex ? "hero-eyebrow" : ""}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "1.25rem",
                    opacity: i === activeIndex ? undefined : 0,
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      width: "2rem",
                      height: "1px",
                      background: "rgba(255,255,255,0.7)",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.75rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      background: gradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      filter: "drop-shadow(0 0 8px rgba(232,188,118,0.4))",
                    }}
                  >
                    Tango Cabs & Tour
                  </span>
                  <span
                    style={{
                      display: "block",
                      width: "2rem",
                      height: "1px",
                      background: "rgba(255,255,255,0.7)",
                    }}
                  />
                </div>

                {/* Title */}
                <h1
                  key={`title-${animKey}-${i}`}
                  className={i === activeIndex ? "hero-title" : ""}
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(2.25rem, 5vw, 4rem)",
                    fontWeight: 600,
                    color: "white",
                    lineHeight: 1.15,
                    letterSpacing: "0.01em",
                    marginBottom: "1.25rem",
                    maxWidth: "700px",
                    opacity: i === activeIndex ? undefined : 0,
                  }}
                >
                  {slide.title}
                </h1>

                {/* Divider */}
                <div
                  style={{
                    width: "3rem",
                    height: "1px",
                    background: gradient,
                    marginBottom: "1.25rem",
                    opacity: 0.8,
                  }}
                />

                {/* Body */}
                <p
                  key={`text-${animKey}-${i}`}
                  className={i === activeIndex ? "hero-text" : ""}
                  style={{
                    fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: 1.8,
                    maxWidth: "560px",
                    marginBottom: "2rem",
                    fontWeight: 300,
                    opacity: i === activeIndex ? undefined : 0,
                  }}
                >
                  {slide.text}
                </p>

                {/* CTA */}
                <div
                  key={`btn-${animKey}-${i}`}
                  className={i === activeIndex ? "hero-btn-wrap" : ""}
                  style={{ opacity: i === activeIndex ? undefined : 0 }}
                >
                  <a href="/tours" className="hero-explore-btn">
                    <span>{slide.btn}</span>
                    <span style={{ fontSize: "0.7rem" }}>→</span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Slide pips */}
      <div className="slide-counter">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`slide-pip ${i === activeIndex ? "active" : ""}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-dot" />
        <div className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
