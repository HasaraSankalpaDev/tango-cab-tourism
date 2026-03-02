// "use client";

// import React from "react";
// import { FaWhatsapp, FaTripadvisor, FaPhoneAlt } from "react-icons/fa";

// const FloatingIcons = () => {
//   return (
//     <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
//       {/* WhatsApp */}
//       <a
//         href="https://wa.me/94777266518"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="w-10 h-10 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-transform transform hover:scale-110"
//       >
//         <FaWhatsapp size={24} />
//       </a>

//       {/* TripAdvisor */}
//       <a
//         href="https://www.tripadvisor.com/Attraction_Review-g304142-d34097471-Reviews-Tango_Cabs_Sri_lanka-Tangalle_Southern_Province.html"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="w-10 h-10 flex items-center justify-center bg-[#34E27D] hover:bg-[#28b76a] text-white rounded-full shadow-lg transition-transform transform hover:scale-110"
//       >
//         <FaTripadvisor size={24} />
//       </a>

//       {/* Call */}
//       <a
//         href="tel:+ +94777266518"
//         className="w-10 h-10 flex items-center justify-center text-white rounded-full shadow-lg transition-transform transform hover:scale-110"
//         style={{
//           background: "#4F7E9C",
//         }}
//       >
//         <FaPhoneAlt size={20} />
//       </a>
//     </div>
//   );
// };

// export default FloatingIcons;

"use client";

import React, { useState } from "react";
import { FaWhatsapp, FaTripadvisor, FaPhoneAlt } from "react-icons/fa";

const buttons = [
  {
    href: "https://wa.me/94777266518",
    icon: FaWhatsapp,
    label: "WhatsApp",
    color: "#25d366",
    hoverColor: "#1fba59",
    target: "_blank",
  },
  {
    href: "https://www.tripadvisor.com/Attraction_Review-g304142-d34097471-Reviews-Tango_Cabs_Sri_lanka-Tangalle_Southern_Province.html",
    icon: FaTripadvisor,
    label: "TripAdvisor",
    color: "#34e27d",
    hoverColor: "#28b76a",
    target: "_blank",
  },
  {
    href: "tel:+94777266518",
    icon: FaPhoneAlt,
    label: "Call Us",
    color: "#4d7c9c",
    hoverColor: "#3a6480",
    target: "_self",
    iconSize: 16,
  },
];

const FloatingIcons = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap');

        .fi-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          cursor: pointer;
          text-decoration: none;
        }

        .fi-icon {
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease;
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
        }

        .fi-btn:hover .fi-icon {
          transform: scale(1.12);
          box-shadow: 0 8px 24px rgba(0,0,0,0.22);
        }

        .fi-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          color: white;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(6px);
          padding: 0.3rem 0.65rem;
          border-radius: 3px;
          margin-right: 0.625rem;
          white-space: nowrap;
          opacity: 0;
          transform: translateX(6px);
          transition: opacity 0.25s ease, transform 0.25s ease;
          pointer-events: none;
        }

        .fi-btn:hover .fi-label {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          bottom: "1.75rem",
          right: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.875rem",
          zIndex: 50,
        }}
      >
        {buttons.map((btn) => {
          const Icon = btn.icon;
          return (
            <a
              key={btn.label}
              href={btn.href}
              target={btn.target}
              rel={btn.target === "_blank" ? "noopener noreferrer" : undefined}
              className="fi-btn"
              onMouseEnter={() => setHovered(btn.label)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className="fi-label">{btn.label}</span>
              <div
                className="fi-icon"
                style={{
                  background:
                    hovered === btn.label ? btn.hoverColor : btn.color,
                }}
              >
                <Icon size={btn.iconSize || 18} />
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default FloatingIcons;
