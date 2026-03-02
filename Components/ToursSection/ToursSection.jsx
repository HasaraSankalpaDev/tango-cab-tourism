// "use client";

// import { tours } from "@/Data/Tours";
// import TourCard from "@/Components/TourCard/TourCard";

// const ToursSection = () => {
//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Title */}
//         <div className="space-y-4 mb-12 text-left lg:text-left">
//           <h4 className="bg-clip-text text-transparent bg-gradient-to-r from-[#e8bc74] to-[#4d7c9c] font-semibold uppercase tracking-wider">
//             Our Tours
//           </h4>
//           <h2 className="text-2xl lg:text-2xl font-semibold text-gray-900 leading-tight">
//             Discover Sri Lanka With Tango Cabs & Tours
//           </h2>
//           <p className="text-gray-600 text-sm max-w-3xl">
//             Explore the most beautiful corners of Sri Lanka with our curated
//             tours and premium cab services. From serene beaches to breathtaking
//             mountains, we make every journey safe, comfortable, and
//             unforgettable.
//           </p>
//         </div>

//         {/* Tours Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
//           {tours.map((tour, index) => {
//             // Use fixed delay classes (must be in Tailwind safelist)
//             const delayClasses = [
//               "delay-0",
//               "delay-100",
//               "delay-200",
//               "delay-300",
//               "delay-400",
//             ];
//             const delayClass = delayClasses[index % delayClasses.length];

//             return (
//               <div
//                 key={tour.id}
//                 className={`transition-transform duration-700 ${delayClass} ease-out transform hover:-translate-y-2 cursor-pointer`}
//               >
//                 <TourCard tour={tour} />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ToursSection;

"use client";

import { useRef, useState, useEffect } from "react";
import { tours } from "@/Data/Tours";
import TourCard from "@/Components/TourCard/TourCard";

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

const ToursSection = () => {
  const [sectionRef, visible] = useInView();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;1,300&family=DM+Sans:wght@300;400;500&display=swap');

        .tours-root { font-family: 'DM Sans', sans-serif; }

        .tours-fade {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1);
        }
        .tours-fade.on { opacity: 1; transform: translateY(0); }

        .tour-card-wrap {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1);
        }
        .tour-card-wrap.on { opacity: 1; transform: translateY(0); }
        .tour-card-wrap:hover { transform: translateY(-6px) !important; }

        .tours-divider {
          width: 2.5rem;
          height: 1px;
          background: ${gradient};
        }
      `}</style>

      <section
        className="tours-root"
        style={{ padding: "6rem 0", background: "#fff" }}
        ref={sectionRef}
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
        >
          {/* Header */}
          <div style={{ marginBottom: "3.5rem" }}>
            {/* Eyebrow */}
            <div
              className={`tours-fade ${visible ? "on" : ""}`}
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
                Our Tours
              </span>
            </div>

            {/* Heading */}
            <h2
              className={`tours-fade ${visible ? "on" : ""}`}
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
              Discover Sri Lanka With Tango Cabs & Tours
            </h2>

            {/* Divider */}
            <div
              className={`tours-fade tours-divider ${visible ? "on" : ""}`}
              style={{ marginBottom: "1rem", transitionDelay: "0.15s" }}
            />

            {/* Sub text */}
            <p
              className={`tours-fade ${visible ? "on" : ""}`}
              style={{
                fontSize: "0.875rem",
                color: "#555",
                lineHeight: 1.85,
                fontWeight: 500,
                maxWidth: "42rem",
                margin: 0,
                transitionDelay: "0.2s",
              }}
            >
              Explore the most beautiful corners of Sri Lanka with our curated
              tours and premium cab services. From serene beaches to
              breathtaking mountains, we make every journey safe, comfortable,
              and unforgettable.
            </p>
          </div>

          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
              gap: "1.5rem",
            }}
          >
            {tours.map((tour, index) => (
              <div
                key={tour.id}
                className={`tour-card-wrap ${visible ? "on" : ""}`}
                style={{
                  transitionDelay: visible
                    ? `${0.1 + (index % 6) * 0.08}s`
                    : "0s",
                  cursor: "pointer",
                }}
              >
                <TourCard tour={tour} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ToursSection;
