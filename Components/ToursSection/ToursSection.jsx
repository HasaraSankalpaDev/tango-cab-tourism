"use client";

import { tours } from "@/Data/Tours"; // adjust path
import TourCard from "@/Components/TourCard/TourCard";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ToursSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Left-aligned small title and heading */}
        <div className="space-y-4 mb-12">
          <h4
            className="bg-clip-text text-transparent bg-gradient-to-r from-[#e8bc74] to-[#4d7c9c] font-semibold uppercase tracking-wider"
            data-aos="fade-up"
          >
            Our Tours
          </h4>

          <h2
            className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Discover Sri Lanka With Tango Cabs & Tours
          </h2>

          <p
            className="text-gray-600 text-lg max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Explore the most beautiful corners of Sri Lanka with our curated
            tours and premium cab services. From serene beaches to breathtaking
            mountains, we make every journey safe, comfortable, and
            unforgettable.
          </p>
        </div>

        {/* Tours Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
