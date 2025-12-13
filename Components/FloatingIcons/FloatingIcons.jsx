"use client";

import React from "react";
import { FaWhatsapp, FaTripadvisor, FaPhoneAlt } from "react-icons/fa";

const FloatingIcons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* WhatsApp */}
      <a
        href="https://wa.me/94700000000"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-transform transform hover:scale-110"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* TripAdvisor */}
      <a
        href="https://www.tripadvisor.com/YourPage"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center bg-[#34E27D] hover:bg-[#28b76a] text-white rounded-full shadow-lg transition-transform transform hover:scale-110"
      >
        <FaTripadvisor size={24} />
      </a>

      {/* Call */}
      <a
        href="tel:+94700000000"
        className="w-12 h-12 flex items-center justify-center text-white rounded-full shadow-lg transition-transform transform hover:scale-110"
        style={{
          background: "#4F7E9C",
        }}
      >
        <FaPhoneAlt size={24} />
      </a>
    </div>
  );
};

export default FloatingIcons;
