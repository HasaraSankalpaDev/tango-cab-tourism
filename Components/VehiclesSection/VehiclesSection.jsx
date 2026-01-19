"use client";

import { vehicles } from "@/Data/vehicles";
import VehicleCard from "@/Components/VehicleCard/VehicleCard";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const VehiclesSection = () => {
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
        <div className="space-y-4 mb-12 text-left">
          <h4
            className="bg-clip-text text-transparent bg-gradient-to-r from-[#e8bc74] to-[#4d7c9c] font-semibold uppercase tracking-wider"
            data-aos="fade-up"
          >
            Our Vehicles
          </h4>
          <h2
            className="text-2xl lg:text-2xl font-semibold text-gray-900 leading-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Premium Cars & Cabs For Your Journey
          </h2>
          <p
            className="text-gray-600 text-sm max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Choose from our fleet of premium vehicles, perfect for city tours,
            airport transfers, or long-distance adventures. Safety, comfort, and
            style guaranteed.
          </p>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 items-stretch">
          {vehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="h-full"
            >
              <VehicleCard vehicle={vehicle} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehiclesSection;
