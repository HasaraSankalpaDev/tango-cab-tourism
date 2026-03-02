// "use client";

// import React, { useEffect } from "react";
// import {
//   FaCarSide,
//   FaRoute,
//   FaMapMarkedAlt,
//   FaUserTie,
//   FaClock,
//   FaShieldAlt,
// } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function WhatWeOffer() {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: "ease-out",
//       once: true,
//     });
//   }, []);

//   const offers = [
//     {
//       icon: FaCarSide,
//       title: "Airport Transfers",
//       desc: "Reliable airport pickups and drop-offs with comfortable, air-conditioned vehicles.",
//     },
//     {
//       icon: FaRoute,
//       title: "Private Day Tours",
//       desc: "Explore Sri Lanka with flexible private tours tailored to your schedule.",
//     },
//     {
//       icon: FaMapMarkedAlt,
//       title: "Top Destinations",
//       desc: "Visit Sigiriya, Kandy, Ella, Galle, Nuwara Eliya, and more iconic locations.",
//     },
//     {
//       icon: FaUserTie,
//       title: "Professional Drivers",
//       desc: "Friendly, experienced drivers with strong local knowledge.",
//     },
//     {
//       icon: FaClock,
//       title: "Flexible Travel Plans",
//       desc: "Custom routes, stopovers, and travel times based on your preferences.",
//     },
//     {
//       icon: FaShieldAlt,
//       title: "Safe & Trusted Service",
//       desc: "Well-maintained vehicles and safety-focused travel on every journey.",
//     },
//   ];

//   return (
//     <section className="py-16 my-5 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-left mb-14">
//           <h4
//             className="bg-clip-text text-transparent bg-gradient-to-r from-[#e8bc74] to-[#4d7c9c]
//                        font-medium uppercase tracking-wider"
//             data-aos="fade-up"
//           >
//             What We Offer
//           </h4>

//           <h2
//             className="text-2xl lg:text-2xl font-semibold text-gray-900 mt-3"
//             data-aos="fade-up"
//             data-aos-delay="100"
//           >
//             Premium Travel Services Across Sri Lanka
//           </h2>

//           <p
//             className="text-gray-600 text-sm mt-4"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             From airport transfers to unforgettable sightseeing tours, we
//             provide reliable and comfortable travel solutions designed around
//             you.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4">
//           {offers.map((item, index) => {
//             const Icon = item.icon;
//             return (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl p-6 shadow-sm
//                            hover:shadow-mds transition-shadow duration-300"
//                 data-aos="fade-up"
//                 data-aos-delay={index * 100}
//               >
//                 <div
//                   className="w-14 h-14 mb-4 rounded-full flex items-center justify-center
//                   bg-[linear-gradient(191deg,rgba(79,126,156,1)_12%,rgba(120,157,157,1)_64%,rgba(130,160,153,1)_78%,rgba(232,188,118,1)_100%)]"
//                 >
//                   <Icon className="text-white text-2xl" />
//                 </div>

//                 <h3 className="text-md font-semibold text-gray-900 mb-2">
//                   {item.title}
//                 </h3>

//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  FaCarSide,
  FaRoute,
  FaMapMarkedAlt,
  FaUserTie,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";

const gradient =
  "linear-gradient(188deg, rgba(79,126,156,1) 0%, rgba(117,156,158,1) 54%, rgba(144,163,149,1) 79%, rgba(172,171,139,1) 90%, rgba(232,188,118,1) 100%)";

function useInView(threshold = 0.1) {
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

export default function WhatWeOffer() {
  const [sectionRef, visible] = useInView();

  const offers = [
    {
      icon: FaCarSide,
      title: "Airport Transfers",
      desc: "Reliable airport pickups and drop-offs with comfortable, air-conditioned vehicles.",
    },
    {
      icon: FaRoute,
      title: "Private Day Tours",
      desc: "Explore Sri Lanka with flexible private tours tailored to your schedule.",
    },
    {
      icon: FaMapMarkedAlt,
      title: "Top Destinations",
      desc: "Visit Sigiriya, Kandy, Ella, Galle, Nuwara Eliya, and more iconic locations.",
    },
    {
      icon: FaUserTie,
      title: "Professional Drivers",
      desc: "Friendly, experienced drivers with strong local knowledge.",
    },
    {
      icon: FaClock,
      title: "Flexible Travel Plans",
      desc: "Custom routes, stopovers, and travel times based on your preferences.",
    },
    {
      icon: FaShieldAlt,
      title: "Safe & Trusted Service",
      desc: "Well-maintained vehicles and safety-focused travel on every journey.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

        .wwo-root { font-family: 'DM Sans', sans-serif; }

        .wwo-fade {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1);
        }
        .wwo-fade.on { opacity: 1; transform: translateY(0); }

        .wwo-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 4px;
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1),
                      transform 0.7s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.3s ease;
        }
        .wwo-card.on { opacity: 1; transform: translateY(0); }
        .wwo-card:hover { box-shadow: 0 12px 36px rgba(0,0,0,0.09); }

        .wwo-icon-wrap {
          width: 3rem;
          height: 3rem;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${gradient};
          flex-shrink: 0;
        }

        .wwo-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem;
          font-weight: 600;
          color: #111;
          margin: 0;
          line-height: 1.3;
        }

        .wwo-card-desc {
          font-size: 0.825rem;
          color: #666;
          line-height: 1.75;
          font-weight: 300;
          margin: 0;
        }

        .wwo-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        @media (max-width: 767px) {
          .wwo-grid { grid-template-columns: 1fr; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .wwo-grid { grid-template-columns: repeat(2, 1fr); }
        }
          width: 1.5rem;
          height: 1px;
          background: ${gradient};
          opacity: 0.7;
        }
      `}</style>

      <section
        className="wwo-root"
        style={{
          padding: "6rem 0",
          margin: "1.25rem 0",
          background: "#fafaf8",
        }}
        ref={sectionRef}
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
        >
          {/* Header */}
          <div style={{ marginBottom: "3.5rem" }}>
            <div
              className={`wwo-fade ${visible ? "on" : ""}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.25rem",
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
                What We Offer
              </span>
            </div>

            <h2
              className={`wwo-fade ${visible ? "on" : ""}`}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.9rem, 3vw, 2.6rem)",
                fontWeight: 600,
                color: "#111",
                lineHeight: 1.2,
                margin: "0 0 1rem",
                transitionDelay: "0.1s",
              }}
            >
              Premium Travel Services Across Sri Lanka
            </h2>

            <div
              className={`wwo-fade ${visible ? "on" : ""}`}
              style={{
                width: "2.5rem",
                height: "1px",
                background: gradient,
                marginBottom: "1rem",
                transitionDelay: "0.15s",
              }}
            />

            <p
              className={`wwo-fade ${visible ? "on" : ""}`}
              style={{
                fontSize: "0.875rem",
                color: "#555",
                lineHeight: 1.85,
                fontWeight: 300,
                maxWidth: "38rem",
                margin: 0,
                transitionDelay: "0.2s",
              }}
            >
              From airport transfers to unforgettable sightseeing tours, we
              provide reliable and comfortable travel solutions designed around
              you.
            </p>
          </div>

          {/* Cards */}
          <div className="wwo-grid">
            {offers.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`wwo-card ${visible ? "on" : ""}`}
                  style={{
                    transitionDelay: visible ? `${0.1 + index * 0.08}s` : "0s",
                  }}
                >
                  <div className="wwo-icon-wrap">
                    <Icon style={{ color: "white", fontSize: "1.1rem" }} />
                  </div>
                  <div className="wwo-card-line" />
                  <h3 className="wwo-card-title">{item.title}</h3>
                  <p className="wwo-card-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
