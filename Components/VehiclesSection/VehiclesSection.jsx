// "use client";

// import { vehicles } from "@/Data/vehicles";
// import VehicleCard from "@/Components/VehicleCard/VehicleCard";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const VehiclesSection = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 600,
//       easing: "ease-out",
//       once: true,
//     });
//   }, []);

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Section Title */}
//         <div className="space-y-4 mb-12 text-left">
//           <h4
//             className="bg-clip-text text-transparent bg-gradient-to-r from-[#e8bc74] to-[#4d7c9c] font-semibold uppercase tracking-wider"
//             data-aos="fade-up"
//           >
//             Our Vehicles
//           </h4>
//           <h2
//             className="text-2xl lg:text-2xl font-semibold text-gray-900 leading-tight"
//             data-aos="fade-up"
//             data-aos-delay="100"
//           >
//             Premium Cars & Cabs For Your Journey
//           </h2>
//           <p
//             className="text-gray-600 text-sm max-w-3xl"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             Choose from our fleet of premium vehicles, perfect for city tours,
//             airport transfers, or long-distance adventures. Safety, comfort, and
//             style guaranteed.
//           </p>
//         </div>

//         {/* Vehicles Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 items-stretch">
//           {vehicles.map((vehicle, index) => (
//             <div
//               key={vehicle.id}
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//               className="h-full"
//             >
//               <VehicleCard vehicle={vehicle} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VehiclesSection;

"use client";

import { useRef, useState, useEffect } from "react";
import { vehicles } from "@/Data/vehicles";
import VehicleCard from "@/Components/VehicleCard/VehicleCard";

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

const VehiclesSection = () => {
  const [sectionRef, visible] = useInView();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

        .vs-root { font-family: 'DM Sans', sans-serif; }

        .vs-fade {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1);
        }
        .vs-fade.on { opacity: 1; transform: translateY(0); }

        .vs-card-wrap {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1);
          height: 100%;
        }
        .vs-card-wrap.on { opacity: 1; transform: translateY(0); }

        .vs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          align-items: stretch;
        }
        @media (max-width: 767px) { .vs-grid { grid-template-columns: 1fr; } }
        @media (min-width: 768px) and (max-width: 1023px) { .vs-grid { grid-template-columns: repeat(2, 1fr); } }
      `}</style>

      <section
        className="vs-root"
        style={{ padding: "6rem 0", background: "#fff" }}
        ref={sectionRef}
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
        >
          {/* Header */}
          <div style={{ marginBottom: "3.5rem" }}>
            <div
              className={`vs-fade ${visible ? "on" : ""}`}
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
                Our Vehicles
              </span>
            </div>

            <h2
              className={`vs-fade ${visible ? "on" : ""}`}
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
              Premium Cars & Cabs For Your Journey
            </h2>

            <div
              className={`vs-fade ${visible ? "on" : ""}`}
              style={{
                width: "2.5rem",
                height: "1px",
                background: gradient,
                marginBottom: "1rem",
                transitionDelay: "0.15s",
              }}
            />

            <p
              className={`vs-fade ${visible ? "on" : ""}`}
              style={{
                fontSize: "0.875rem",
                color: "#555",
                lineHeight: 1.85,
                fontWeight: 300,
                maxWidth: "42rem",
                margin: 0,
                transitionDelay: "0.2s",
              }}
            >
              Choose from our fleet of premium vehicles, perfect for city tours,
              airport transfers, or long-distance adventures. Safety, comfort,
              and style guaranteed.
            </p>
          </div>

          {/* Grid */}
          <div className="vs-grid">
            {vehicles.map((vehicle, index) => (
              <div
                key={vehicle.id}
                className={`vs-card-wrap ${visible ? "on" : ""}`}
                style={{
                  transitionDelay: visible
                    ? `${0.1 + (index % 6) * 0.08}s`
                    : "0s",
                }}
              >
                <VehicleCard vehicle={vehicle} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default VehiclesSection;
