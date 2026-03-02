// "use client";

// import Link from "next/link";
// import { IoTimeOutline, IoLocationOutline } from "react-icons/io5";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { FaWhatsapp } from "react-icons/fa";

// const TourCard = ({ tour }) => {
//   const message = `Hello, I would like to know the price and more details about ${tour.title}.`;

//   useEffect(() => {
//     AOS.init({
//       duration: 600,
//       easing: "ease-out",
//       once: true,
//     });
//   }, []);

//   return (
//     <div
//       className="bg-white rounded-lg shadow-md overflow-hidden
//                  transition-shadow hover:shadow-xl
//                  h-full flex flex-col"
//       data-aos="fade-up"
//     >
//       {/* Image */}
//       <Link href={`/tours/${tour.id}`} className="relative block">
//         <img
//           src={tour.images[0]}
//           alt={tour.title}
//           className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
//         />

//         {/* Airport Badge */}
//         <span className="absolute top-3 left-3 bg-[#4d7c9c] text-white text-xs font-semibold px-3 py-1 rounded-full">
//           Airport Transfer
//         </span>
//       </Link>

//       {/* Content */}
//       <div className="p-6 space-y-4 flex flex-col flex-1">
//         {/* Title */}
//         <Link href={`/tours/${tour.id}`}>
//           <h3 className="text-md font-[600] text-gray-900">{tour.title}</h3>
//         </Link>

//         <p className="text-gray-600 text-sm line-clamp-2">
//           {tour.shortDescription}
//         </p>

//         {/* Meta Info */}
//         <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
//           <div className="flex items-center gap-1">
//             <IoTimeOutline className="text-[#e8bc74]" />
//             <span>{tour.duration}</span>
//           </div>

//           <div className="flex items-center gap-1">
//             <IoLocationOutline className="text-[#4d7c9c]" />
//             <span>{tour.route}</span>
//           </div>
//         </div>

//         {/* CTA */}
//         {/* CTA */}
//         <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 mt-auto">
//           {/* WhatsApp */}
//           <a
//             href={`https://wa.me/94777266518?text=${encodeURIComponent(
//               message,
//             )}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-full sm:flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-sm font-semibold text-white text-sm
//   bg-[linear-gradient(191deg,rgba(79,126,156,1)_12%,rgba(120,157,157,1)_64%,rgba(130,160,153,1)_78%,rgba(232,188,118,1)_100%)]
//   hover:opacity-90 transition"
//           >
//             Book Now <FaWhatsapp />
//           </a>

//           {/* Details */}
//           <Link
//             href={`/tours/${tour.id}`}
//             className="w-full sm:flex-1 flex items-center justify-center
//              border-1 border-[#4d7c9c] text-[#4d7c9c]
//              px-4 py-2 rounded-sm font-semibold text-sm
//              transition-all duration-300
//              hover:text-white
//              hover:bg-[#4d7c9c]
//              hover:border-transparent"
//           >
//             {" "}
//             View Details
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TourCard;

"use client";

import Link from "next/link";
import { IoTimeOutline, IoLocationOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

const gradient =
  "linear-gradient(188deg, rgba(79,126,156,1) 0%, rgba(117,156,158,1) 54%, rgba(144,163,149,1) 79%, rgba(172,171,139,1) 90%, rgba(232,188,118,1) 100%)";

const TourCard = ({ tour }) => {
  const message = `Hello, I would like to know the price and more details about ${tour.title}.`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap');

        .tc-root {
          font-family: 'DM Sans', sans-serif;
          background: #fff;
          border-radius: 4px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          border: 1px solid rgba(0,0,0,0.07);
          transition: box-shadow 0.35s ease, transform 0.35s ease;
        }
        .tc-root:hover {
          box-shadow: 0 16px 48px rgba(0,0,0,0.1);
        }

        .tc-img-wrap {
          position: relative;
          overflow: hidden;
          display: block;
        }
        .tc-img-wrap img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
          transition: transform 0.65s cubic-bezier(0.22,1,0.36,1);
        }
        .tc-root:hover .tc-img-wrap img {
          transform: scale(1.06);
        }

        .tc-badge {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 600;
          color: white;
          padding: 0.3rem 0.75rem;
          background: ${gradient};
          border-radius: 2px;
        }

        .tc-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 0.875rem;
        }

        .tc-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          font-weight: 600;
          color: #111;
          line-height: 1.3;
          text-decoration: none;
          display: block;
          transition: color 0.2s ease;
        }
        .tc-title:hover { color: #4d7c9c; }

        .tc-desc {
          font-size: 0.825rem;
          color: #666;
          line-height: 1.7;
          font-weight: 500;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin: 0;
        }

        .tc-divider {
          height: 1px;
          background: rgba(0,0,0,0.06);
        }

        .tc-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .tc-meta-item {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.775rem;
          color: #666;
          font-weight: 400;
        }

        .tc-actions {
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
          margin-top: auto;
        }

        @media (min-width: 480px) {
          .tc-actions { flex-direction: row; }
        }
        @media (min-width: 768px) {
          .tc-actions { flex-direction: column; }
        }
        @media (min-width: 1024px) {
          .tc-actions { flex-direction: row; }
        }

        .tc-btn-primary {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          padding: 0.65rem 1rem;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 600;
          color: white;
          text-decoration: none;
          background: ${gradient};
          border: none;
          transition: opacity 0.25s ease;
          white-space: nowrap;
        }
        .tc-btn-primary:hover { opacity: 0.88; }

        .tc-btn-outline {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.65rem 1rem;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 600;
          color: #4d7c9c;
          text-decoration: none;
          border: 1px solid rgba(79,126,156,0.45);
          position: relative;
          overflow: hidden;
          transition: color 0.3s ease, border-color 0.3s ease;
          white-space: nowrap;
        }
        .tc-btn-outline::before {
          content: '';
          position: absolute;
          inset: 0;
          background: ${gradient};
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 0;
        }
        .tc-btn-outline:hover::before { opacity: 1; }
        .tc-btn-outline:hover { color: white; border-color: transparent; }
        .tc-btn-outline span { position: relative; z-index: 1; }
      `}</style>

      <div className="tc-root">
        {/* Image */}
        <Link href={`/tours/${tour.id}`} className="tc-img-wrap">
          <img src={tour.images[0]} alt={tour.title} />
          <span className="tc-badge">Airport Transfer</span>
        </Link>

        {/* Body */}
        <div className="tc-body">
          <Link href={`/tours/${tour.id}`} className="tc-title">
            {tour.title}
          </Link>

          <p className="tc-desc">{tour.shortDescription}</p>

          <div className="tc-divider" />

          {/* Meta */}
          <div className="tc-meta">
            <div className="tc-meta-item">
              <IoTimeOutline
                style={{ color: "#e8bc74", fontSize: "0.95rem" }}
              />
              <span>{tour.duration}</span>
            </div>
            <div className="tc-meta-item">
              <IoLocationOutline
                style={{ color: "#4d7c9c", fontSize: "0.95rem" }}
              />
              <span>{tour.route}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="tc-actions">
            <a
              href={`https://wa.me/94777266518?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="tc-btn-primary"
            >
              Book Now <FaWhatsapp />
            </a>
            <Link href={`/tours/${tour.id}`} className="tc-btn-outline">
              <span>View Details</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourCard;
