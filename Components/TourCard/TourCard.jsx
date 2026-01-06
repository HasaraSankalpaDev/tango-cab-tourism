"use client";

import Link from "next/link";
import { IoTimeOutline, IoLocationOutline } from "react-icons/io5";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp } from "react-icons/fa";

const TourCard = ({ tour }) => {
  const message = `Hello, I would like to know the price and more details about ${tour.title}.`;

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
      <Link href={`/tours/${tour.id}`} className="relative block">
        <img
          src={tour.images[0]}
          alt={tour.title}
          className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
        />

        {/* Airport Badge */}
        <span className="absolute top-3 left-3 bg-[#4d7c9c] text-white text-xs font-semibold px-3 py-1 rounded-full">
          Airport Transfer
        </span>
      </Link>

      {/* Content */}
      <div className="p-6 space-y-4 flex flex-col flex-1">
        {/* Title */}
        <Link href={`/tours/${tour.id}`}>
          <h3 className="text-xl font-semibold text-gray-900">{tour.title}</h3>
        </Link>

        <p className="text-gray-600 text-sm line-clamp-2">
          {tour.shortDescription}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <IoTimeOutline className="text-[#e8bc74]" />
            <span>{tour.duration}</span>
          </div>

          <div className="flex items-center gap-1">
            <IoLocationOutline className="text-[#4d7c9c]" />
            <span>{tour.route}</span>
          </div>
        </div>

        {/* CTA */}
        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/94777266518?text=${encodeURIComponent(
              message
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-sm font-semibold text-white text-sm
  bg-[linear-gradient(191deg,rgba(79,126,156,1)_12%,rgba(120,157,157,1)_64%,rgba(130,160,153,1)_78%,rgba(232,188,118,1)_100%)]
  hover:opacity-90 transition"
          >
            Book Now <FaWhatsapp />
          </a>

          {/* Details */}
          <Link
            href={`/tours/${tour.id}`}
            className="w-full sm:flex-1 flex items-center justify-center
             border-1 border-[#4d7c9c] text-[#4d7c9c]
             px-4 py-2 rounded-sm font-semibold text-sm
             transition-all duration-300
             hover:text-white
             hover:bg-[#4d7c9c]
             hover:border-transparent"
          >
            {" "}
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
