// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "swiper/css";
// import "swiper/css/pagination";

// const reviews = [
//   {
//     name: "Alice Johnson",
//     location: "London, UK",
//     rating: 5,
//     text: "Our Sri Lanka tour was absolutely perfect! The itinerary was tailored exactly to our needs, and the service was excellent.",
//   },
//   {
//     name: "Mark Smith",
//     location: "New York, USA",
//     rating: 4,
//     text: "Amazing experience with breathtaking locations. Highly recommend their custom tours!",
//   },
//   {
//     name: "Sophia Lee",
//     location: "Sydney, Australia",
//     rating: 5,
//     text: "We felt like VIPs the whole trip. Everything was seamless and very professional.",
//   },
// ];

// const ReviewsSection = () => {
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
//         <div className="space-y-4 mb-12 text-left lg:text-left">
//           <h4
//             className="bg-clip-text text-transparent bg-gradient-to-r from-[#e8bc74] to-[#4d7c9c] font-semibold uppercase tracking-wider"
//             data-aos="fade-up"
//           >
//             Traveler Reviews
//           </h4>
//           <h2
//             className="text-2xl lg:text-2xl font-semibold text-gray-900 leading-tight"
//             data-aos="fade-up"
//             data-aos-delay="100"
//           >
//             Hear From Our Happy Travelers
//           </h2>
//           <p
//             className="text-gray-600 text-sm max-w-3xl"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             Real testimonials from customers who enjoyed our tailor-made tours.
//           </p>
//         </div>

//         {/* Swiper Slider */}
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           autoplay={{ delay: 5000 }}
//           loop
//           spaceBetween={30}
//           pagination={{ clickable: true }}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             1024: { slidesPerView: 2 },
//           }}
//           className="pb-6"
//         >
//           {reviews.map((review, idx) => (
//             <SwiperSlide key={idx}>
//               <div
//                 className="bg-white/80 border-2 border-gray-200 p-6 rounded-lg shadow-lg flex flex-col justify-between min-h-[250px]"
//                 data-aos="fade-up"
//                 data-aos-delay={idx * 100}
//               >
//                 <div className="mb-4">
//                   <h3 className="font-semibold text-gray-900">{review.name}</h3>
//                   <p className="text-sm text-gray-500">{review.location}</p>
//                 </div>
//                 <p className="text-gray-700 mb-4 flex-1 text-sm">
//                   {review.text}
//                 </p>
//                 <div className="flex gap-1">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <span
//                       key={i}
//                       className={`${
//                         i < review.rating ? "text-yellow-400" : "text-gray-300"
//                       }`}
//                     >
//                       ★
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <div className="pt-16"></div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Pagination Bullets Spacing */}
//         <style jsx>{`
//           :global(.swiper-pagination) {
//             margin-top: 1.5rem; /* gap between cards and bullets */
//           }
//         `}</style>
//       </div>
//     </section>
//   );
// };

// export default ReviewsSection;

"use client";

import { useRef, useState, useEffect } from "react";

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

const reviews = [
  {
    name: "Alice Johnson",
    location: "London, UK",
    rating: 5,
    text: "Our Sri Lanka tour was absolutely perfect! The itinerary was tailored exactly to our needs, and the service was excellent.",
  },
  {
    name: "Mark Smith",
    location: "New York, USA",
    rating: 4,
    text: "Amazing experience with breathtaking locations. Highly recommend their custom tours!",
  },
  {
    name: "Sophia Lee",
    location: "Sydney, Australia",
    rating: 5,
    text: "We felt like VIPs the whole trip. Everything was seamless and very professional.",
  },
];

const ReviewsSection = () => {
  const [sectionRef, visible] = useInView();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,300&family=DM+Sans:wght@300;400;500&display=swap');

        .rv-root { font-family: 'DM Sans', sans-serif; }

        .rv-fade {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1);
        }
        .rv-fade.on { opacity: 1; transform: translateY(0); }

        .rv-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 4px;
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1),
                      transform 0.7s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .rv-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: ${gradient};
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .rv-card:hover { box-shadow: 0 12px 36px rgba(0,0,0,0.09); }
        .rv-card:hover::before { opacity: 1; }
        .rv-card.on { opacity: 1; transform: translateY(0); }

        .rv-quote {
          font-size: 3.5rem;
          line-height: 0.5;
          font-family: 'Cormorant Garamond', serif;
          background: ${gradient};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          user-select: none;
        }

        .rv-text {
          font-size: 0.875rem;
          color: #555;
          line-height: 1.8;
          font-weight: 300;
          font-style: italic;
          flex: 1;
          margin: 0;
        }

        .rv-divider {
          height: 1px;
          background: rgba(0,0,0,0.07);
        }

        .rv-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.05rem;
          font-weight: 600;
          color: #111;
          margin: 0;
        }

        .rv-location {
          font-size: 0.75rem;
          color: #999;
          letter-spacing: 0.06em;
          margin: 0;
        }

        .rv-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 767px) { .rv-grid { grid-template-columns: 1fr; } }
        @media (min-width: 768px) and (max-width: 1023px) { .rv-grid { grid-template-columns: repeat(2, 1fr); } }
      `}</style>

      <section
        className="rv-root"
        style={{ padding: "6rem 0", background: "#fafaf8" }}
        ref={sectionRef}
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
        >
          {/* Header */}
          <div style={{ marginBottom: "3.5rem" }}>
            <div
              className={`rv-fade ${visible ? "on" : ""}`}
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
                Traveler Reviews
              </span>
            </div>

            <h2
              className={`rv-fade ${visible ? "on" : ""}`}
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
              Hear From Our Happy Travelers
            </h2>

            <div
              className={`rv-fade ${visible ? "on" : ""}`}
              style={{
                width: "2.5rem",
                height: "1px",
                background: gradient,
                marginBottom: "1rem",
                transitionDelay: "0.15s",
              }}
            />

            <p
              className={`rv-fade ${visible ? "on" : ""}`}
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
              Real testimonials from customers who enjoyed our tailor-made
              tours.
            </p>
          </div>

          {/* Cards */}
          <div className="rv-grid">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className={`rv-card ${visible ? "on" : ""}`}
                style={{
                  transitionDelay: visible ? `${0.1 + idx * 0.1}s` : "0s",
                }}
              >
                <span className="rv-quote">"</span>

                <p className="rv-text">{review.text}</p>

                <div className="rv-divider" />

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <p className="rv-name">{review.name}</p>
                    <p className="rv-location">{review.location}</p>
                  </div>
                  <div style={{ display: "flex", gap: "2px" }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: "0.85rem",
                          color: i < review.rating ? "#e8bc74" : "#ddd",
                        }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewsSection;
