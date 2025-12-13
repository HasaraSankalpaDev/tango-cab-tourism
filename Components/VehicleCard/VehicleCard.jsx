"use client";

import Link from "next/link";

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      <img
        src={vehicle.image}
        alt={vehicle.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-bold text-gray-900">{vehicle.name}</h3>
        <p className="text-gray-600">{vehicle.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold text-[#4d7c9c]">
            {vehicle.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
