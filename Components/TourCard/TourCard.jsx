"use client";

import Link from "next/link";
import {
  IoTimeOutline,
  IoLocationOutline,
  IoPricetagOutline,
} from "react-icons/io5";

const TourCard = ({ tour }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-xl">
      {/* Image with hover scale */}
      <div className="overflow-hidden">
        <img
          src={tour.images[0]} // show the first image of the gallery
          alt={tour.title}
          className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Card content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">{tour.title}</h3>

        {/* Short description */}
        <p className="text-gray-600 text-sm">{tour.shortDescription}</p>

        {/* Duration, Location, Price */}
        <div className="flex flex-wrap gap-4 text-gray-600">
          <div className="flex items-center gap-1">
            <IoTimeOutline className="text-[#e8bc74]" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <IoLocationOutline className="text-[#4d7c9c]" />
            <span>{tour.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <IoPricetagOutline className="text-[#e8bc74]" />
            <span>{tour.price}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          {/* Book Now Button */}
          <a
            href={`https://wa.me/94700000000?text=I'm%20interested%20in%20the%20tour:%20${encodeURIComponent(
              tour.title
            )}`}
            className="flex-1 text-center px-4 py-2 rounded-md font-semibold text-white
      bg-[linear-gradient(191deg,rgba(79,126,156,1)_12%,rgba(120,157,157,1)_64%,rgba(117,156,158,1)_64%,rgba(130,160,153,1)_78%,rgba(160,168,143,1)_86%,rgba(188,176,133,1)_94%,rgba(232,188,118,1)_100%)]
      hover:opacity-95 hover:scale-105 hover:shadow-lg transition transform duration-300"
          >
            Book Now
          </a>

          {/* View Details Button */}
          <Link
            href={`/tours/${tour.id}`}
            className="flex-1 text-center border-2 border-[#4d7c9c] text-[#4d7c9c] px-4 py-2 rounded-md font-semibold
      hover:bg-[linear-gradient(191deg,rgba(79,126,156,1)_12%,rgba(120,157,157,1)_64%,rgba(117,156,158,1)_64%,rgba(130,160,153,1)_78%,rgba(160,168,143,1)_86%,rgba(188,176,133,1)_94%,rgba(232,188,118,1)_100%)]
      hover:text-white transition transform duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
