// "use client";

// import React, { useEffect } from "react";
// import Image from "next/image";
// import "aos/dist/aos.css";
// import AOS from "aos";

// export default function AboutUs() {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: "ease-out",
//       once: true,
//     });
//   }, []);

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 items-center">
//           {/* Left Text */}
//           <div className="space-y-6">
//             <h4
//               className="bg-clip-text text-transparent bg-gradient-to-r from-[#e8bc74] to-[#4d7c9c] font-semibold uppercase tracking-wider"
//               data-aos="fade-up"
//             >
//               About Tango Cabs & Tours
//             </h4>

//             <h1
//               className="text-2xl lg:text-2xl font-semibold text-gray-900 leading-tight"
//               data-aos="fade-up"
//               data-aos-delay="100"
//             >
//               Discover the Beauty of Sri Lanka
//               <br />
//               With Comfort and Style
//             </h1>

//             <div
//               className="space-y-4 text-gray-600 text-sm"
//               data-aos="fade-up"
//               data-aos-delay="200"
//             >
//               <p>
//                 Tango Cabs & Tours offers premium cab services and curated
//                 travel experiences across Sri Lanka. From golden beaches in
//                 Galle to the misty hills of Nuwara Eliya, we make every journey
//                 seamless, safe, and memorable.
//               </p>
//               <p>
//                 Whether you're traveling for sightseeing, adventure, or cultural
//                 immersion, our professional drivers and local guides ensure a
//                 comfortable and personalized experience. Explore the island at
//                 your pace and let us handle the logistics.
//               </p>
//             </div>

//             <a
//               href="tel:+94777266518"
//               className="inline-flex items-center justify-center px-5 py-2 md:px-6 md:py-2 rounded-sm text-white font-semibold text-sm md:text-sm
//     bg-[linear-gradient(188deg,rgba(79,126,156,1)_0%,rgba(117,156,158,1)_54%,rgba(131,160,153,1)_64%,rgba(144,163,149,1)_70%,rgba(156,166,145,1)_79%,rgba(172,171,139,1)_89%,rgba(232,188,118,1)_100%)]
//     hover:bg-[linear-gradient(188deg,#4d7c9c_0%,#e8bc74_100%)]
//     transition-colors duration-500"
//               data-aos="fade-up"
//               data-aos-delay="300"
//             >
//               Book a Tour
//             </a>
//           </div>

//           {/* Right Images */}
//           <div className="grid grid-cols-2 gap-4">
//             <div className="row-span-2" data-aos="fade-up" data-aos-delay="100">
//               <Image
//                 src="/about-1.webp"
//                 alt="Sri Lanka scenic beach"
//                 width={800}
//                 height={800}
//                 className="rounded-lg object-cover w-full h-full shadow-lg"
//                 priority
//               />
//             </div>

//             <div data-aos="fade-up" data-aos-delay="200">
//               <Image
//                 src="/about-2.webp"
//                 alt="Sri Lanka tea plantations"
//                 width={400}
//                 height={400}
//                 className="rounded-lg object-cover w-full h-full shadow-lg"
//               />
//             </div>

//             <div data-aos="fade-up" data-aos-delay="300">
//               <Image
//                 src="/about-3.webp"
//                 alt="Sri Lanka cultural temple"
//                 width={400}
//                 height={400}
//                 className="rounded-lg object-cover w-full h-full shadow-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const gradient =
  "linear-gradient(188deg, rgba(79,126,156,1) 0%, rgba(117,156,158,1) 54%, rgba(144,163,149,1) 79%, rgba(172,171,139,1) 90%, rgba(232,188,118,1) 100%)";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

export default function AboutUs() {
  const [sectionRef, visible] = useInView();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .about-root { font-family: 'DM Sans', sans-serif; }

        .afd {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1);
        }
        .afd.on { opacity: 1; transform: translateY(0); }
        .d1 { transition-delay: 0.1s; }
        .d2 { transition-delay: 0.2s; }
        .d3 { transition-delay: 0.3s; }
        .d5 { transition-delay: 0.15s; }
        .d6 { transition-delay: 0.3s; }
        .d7 { transition-delay: 0.45s; }

        .about-img-wrap { overflow: hidden; border-radius: 3px; }
        .about-img-wrap img { transition: transform 0.7s cubic-bezier(0.22,1,0.36,1); }
        .about-img-wrap:hover img { transform: scale(1.05); }

        .about-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.7rem 1.75rem;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 500;
          color: #3a3a3a;
          text-decoration: none;
          border: 1px solid rgba(79,126,156,0.4);
          position: relative;
          overflow: hidden;
          transition: color 0.3s ease, border-color 0.3s ease;
        }
        .about-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: ${gradient};
          opacity: 0;
          transition: opacity 0.35s ease;
          z-index: 0;
        }
        .about-cta:hover::before { opacity: 1; }
        .about-cta:hover { color: white; border-color: transparent; }
        .about-cta span { position: relative; z-index: 1; }
      `}</style>

      <section
        className="about-root"
        style={{ padding: "6rem 0", background: "#fff" }}
        ref={sectionRef}
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            {/* ── Left: Text ── */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {/* Eyebrow */}
              <div
                className={`afd ${visible ? "on" : ""}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <span
                  style={{
                    width: "1.75rem",
                    height: "1px",
                    background: gradient,
                    display: "block",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: "0.68rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    background: gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  About Tango Cabs & Tours
                </span>
              </div>

              {/* Heading */}
              <h1
                className={`afd d1 ${visible ? "on" : ""}`}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.9rem, 3vw, 2.6rem)",
                  fontWeight: "600",
                  color: "#111",
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                Discover the Beauty of Sri Lanka With Comfort and Style
              </h1>

              {/* Divider */}
              <div
                className={`afd d2 ${visible ? "on" : ""}`}
                style={{ width: "2.5rem", height: "1px", background: gradient }}
              />

              {/* Body */}
              <div
                className={`afd d2 ${visible ? "on" : ""}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.875rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#555",
                    lineHeight: 1.85,
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  Tango Cabs & Tours offers premium cab services and curated
                  travel experiences across Sri Lanka. From golden beaches in
                  Galle to the misty hills of Nuwara Eliya, we make every
                  journey seamless, safe, and memorable.
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#555",
                    lineHeight: 1.85,
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  Whether you're traveling for sightseeing, adventure, or
                  cultural immersion, our professional drivers and local guides
                  ensure a comfortable and personalized experience. Explore the
                  island at your pace and let us handle the logistics.
                </p>
              </div>

              {/* CTA */}
              <div className={`afd d3 ${visible ? "on" : ""}`}>
                <a href="tel:+94777266518" className="about-cta">
                  <span>Book a Tour</span>
                  <span style={{ fontSize: "0.65rem" }}>→</span>
                </a>
              </div>
            </div>

            {/* ── Right: Images ── */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "auto auto",
                gap: "0.75rem",
              }}
            >
              {/* Tall left */}
              <div
                className={`about-img-wrap afd d5 ${visible ? "on" : ""}`}
                style={{
                  gridRow: "1 / 3",
                  position: "relative",
                  minHeight: "380px",
                }}
              >
                <Image
                  src="/about-1.webp"
                  alt="Sri Lanka scenic beach"
                  fill
                  sizes="(max-width:768px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>

              {/* Top right */}
              <div
                className={`about-img-wrap afd d6 ${visible ? "on" : ""}`}
                style={{ position: "relative", aspectRatio: "1 / 1" }}
              >
                <Image
                  src="/about-2.webp"
                  alt="Sri Lanka tea plantations"
                  fill
                  sizes="(max-width:768px) 50vw, 20vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Bottom right */}
              <div
                className={`about-img-wrap afd d7 ${visible ? "on" : ""}`}
                style={{ position: "relative", aspectRatio: "1 / 1" }}
              >
                <Image
                  src="/about-3.webp"
                  alt="Sri Lanka cultural temple"
                  fill
                  sizes="(max-width:768px) 50vw, 20vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
