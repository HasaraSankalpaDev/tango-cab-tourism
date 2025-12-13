"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";

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
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="space-y-4 mb-12 text-center lg:text-left">
          <h4
            className="bg-clip-text text-transparent bg-gradient-to-r from-[#e8bc74] to-[#4d7c9c] font-semibold uppercase tracking-wider"
            data-aos="fade-up"
          >
            Traveler Reviews
          </h4>
          <h2
            className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Hear From Our Happy Travelers
          </h2>
          <p
            className="text-gray-600 text-lg max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Real testimonials from customers who enjoyed our tailor-made tours.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000 }}
          loop
          spaceBetween={30}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          className="pb-6"
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="bg-white/80 border-2 border-gray-200 p-6 rounded-lg shadow-lg h-full flex flex-col justify-between"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
                <p className="text-gray-700 mb-4">{review.text}</p>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-18"></div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Bullets Spacing */}
        <style jsx>{`
          :global(.swiper-pagination) {
            margin-top: 1.5rem; /* gap between cards and bullets */
          }
        `}</style>
      </div>
    </section>
  );
};

export default ReviewsSection;
