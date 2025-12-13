"use client";

import { vehicles } from "@/Data/vehicles"; // your vehicles data
import VehicleCard from "@/Components/VehicleCard/VehicleCard";

const VehiclesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="space-y-4 mb-12 text-center lg:text-left">
          <h4 className="bg-clip-text text-transparent bg-gradient-to-r from-[#e8bc74] to-[#4d7c9c] font-semibold uppercase tracking-wider">
            Our Vehicles
          </h4>
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Premium Cars & Cabs For Your Journey
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            Choose from our fleet of premium vehicles, perfect for city tours,
            airport transfers, or long-distance adventures. Safety, comfort, and
            style guaranteed.
          </p>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehiclesSection;
