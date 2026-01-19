"use client";

import { tours } from "@/Data/Tours";
import TourCard from "@/Components/TourCard/TourCard";

const ToursSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div className="space-y-4 mb-12 text-left lg:text-left">
          <h4 className="bg-clip-text text-transparent bg-gradient-to-r from-[#e8bc74] to-[#4d7c9c] font-semibold uppercase tracking-wider">
            Our Tours
          </h4>
          <h2 className="text-2xl lg:text-2xl font-semibold text-gray-900 leading-tight">
            Discover Sri Lanka With Tango Cabs & Tours
          </h2>
          <p className="text-gray-600 text-sm max-w-3xl">
            Explore the most beautiful corners of Sri Lanka with our curated
            tours and premium cab services. From serene beaches to breathtaking
            mountains, we make every journey safe, comfortable, and
            unforgettable.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {tours.map((tour, index) => {
            // Use fixed delay classes (must be in Tailwind safelist)
            const delayClasses = [
              "delay-0",
              "delay-100",
              "delay-200",
              "delay-300",
              "delay-400",
            ];
            const delayClass = delayClasses[index % delayClasses.length];

            return (
              <div
                key={tour.id}
                className={`transition-transform duration-700 ${delayClass} ease-out transform hover:-translate-y-2 cursor-pointer`}
              >
                <TourCard tour={tour} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
