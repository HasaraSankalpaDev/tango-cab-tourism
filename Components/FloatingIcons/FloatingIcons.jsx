"use client";

import React from "react";
import { FaWhatsapp, FaTripadvisor } from "react-icons/fa";

const FloatingIcons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* WhatsApp */}
      <a
        href="https://wa.me/94700000000" // replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* TripAdvisor */}
      <a
        href="https://www.tripadvisor.com/YourPage" // replace with your TripAdvisor link
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 flex items-center justify-center bg-[#34E27D] hover:bg-[#28b76a] text-white rounded-full shadow-lg transition"
      >
        <FaTripadvisor size={28} />
      </a>
    </div>
  );
};

export default FloatingIcons;
