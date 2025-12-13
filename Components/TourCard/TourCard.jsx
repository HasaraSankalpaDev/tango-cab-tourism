"use client";

import Link from "next/link";
import {
  IoTimeOutline,
  IoLocationOutline,
  IoPricetagOutline,
} from "react-icons/io5";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TourCard = ({ tour }) => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden
                 transition-shadow hover:shadow-xl
                 h-full flex flex-col"
      data-aos="fade-up"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={tour.images[0]}
          alt={tour.title}
          className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-gray-900">{tour.title}</h3>

        <p className="text-gray-600 text-sm line-clamp-2">
          {tour.shortDescription}
        </p>

        {/* Meta */}
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
        <div className="flex gap-3 mt-auto">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/94700000000?text=I'm%20interested%20in%20the%20tour:%20${encodeURIComponent(
              tour.title
            )}`}
            className="flex-1 text-center px-4 py-2 rounded-md font-semibold text-white text-sm sm:text-base
            bg-[linear-gradient(191deg,rgba(79,126,156,1)_12%,rgba(120,157,157,1)_64%,rgba(130,160,153,1)_78%,rgba(232,188,118,1)_100%)]
            hover:bg-[linear-gradient(191deg,rgba(77,124,156,1)_0%,rgba(232,188,118,1)_100%)]
            transition-colors duration-300"
          >
            Book Now
          </a>

          {/* View */}
          <Link
            href={`/tours/${tour.id}`}
            className="flex-1 text-center border-2 border-[#4d7c9c] text-[#4d7c9c]
    px-4 py-2 rounded-md font-semibold text-sm sm:text-base
    transition-all duration-300
    hover:text-white
    hover:border-transparent
    hover:bg-[linear-gradient(191deg,rgba(79,126,156,1)_12%,rgba(232,188,118,1)_100%)]"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
