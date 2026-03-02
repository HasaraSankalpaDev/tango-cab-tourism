"use client";

import { useEffect, use } from "react";
import { tours } from "@/Data/Tours";
import Link from "next/link";
import Modal from "react-modal";

import Nav from "@/Components/Nav/Nav";
import Footer from "@/Components/Footer/Footer";
import FloatingIcons from "@/Components/FloatingIcons/FloatingIcons";
import RelatedToursCarousel from "@/Components/RelatedToursCarousel/RelatedToursCarousel";
import { BookingForm } from "@/Components/BookingForm/BookingForm";

import TourHeader from "@/Components/TourHeader/TourHeader";
import TourImages from "@/Components/TourImages/TourImages";
import TourDetails from "@/Components/TourDetails/TourDetails";
import FacilitiesSection from "@/Components/FacilitiesSection/FacilitiesSection";

import {
  FaCarSide,
  FaUserTie,
  FaShieldAlt,
  FaMapMarkedAlt,
  FaSnowflake,
} from "react-icons/fa";

const gradient =
  "linear-gradient(188deg, rgba(79,126,156,1) 0%, rgba(117,156,158,1) 54%, rgba(144,163,149,1) 79%, rgba(172,171,139,1) 90%, rgba(232,188,118,1) 100%)";

const TourDetailsPage = ({ params }) => {
  const { id } = use(params);
  const tour = tours.find((t) => t.id === parseInt(id, 10));

  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  const commonFacilities = [
    {
      icon: FaCarSide,
      title: "A/C Vehicles",
      desc: "Comfortable air-conditioned vehicles",
    },
    {
      icon: FaUserTie,
      title: "Professional Driver",
      desc: "Friendly & experienced local drivers",
    },
    {
      icon: FaShieldAlt,
      title: "Safe Driving",
      desc: "Safety-focused and reliable travel",
    },
    {
      icon: FaMapMarkedAlt,
      title: "Custom Stops",
      desc: "Stops at places you prefer",
    },
    {
      icon: FaSnowflake,
      title: "Clean Interior",
      desc: "Clean, fresh & comfortable seating",
    },
  ];

  if (!tour) {
    return (
      <>
        <Nav />
        <div
          style={{
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'DM Sans', sans-serif",
            gap: "1.5rem",
          }}
        >
          <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');`}</style>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "2rem",
              fontWeight: 600,
              color: "#111",
            }}
          >
            Tour Not Found
          </h2>
          <Link
            href="/tours"
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 500,
              color: "white",
              textDecoration: "none",
              padding: "0.7rem 1.75rem",
              background: gradient,
              borderRadius: "2px",
            }}
          >
            Back to Tours
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,300&family=DM+Sans:wght@300;400;500&display=swap');

        .tdp-root { font-family: 'DM Sans', sans-serif; background: #fff; }

        .tdp-page-in {
          opacity: 0;
          animation: tdpIn 0.85s cubic-bezier(0.22,1,0.36,1) 0.05s forwards;
        }
        @keyframes tdpIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .tdp-banner {
          width: 100%;
          height: 3px;
          background: ${gradient};
        }

        .tdp-breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.7rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #aaa;
          flex-wrap: wrap;
          padding: 1.5rem 0 0;
        }
        .tdp-breadcrumb a { color: #aaa; text-decoration: none; transition: color 0.2s; }
        .tdp-breadcrumb a:hover { color: #4d7c9c; }
        .tdp-breadcrumb-sep { color: #ddd; font-size: 0.65rem; }

        .tdp-title-area {
          padding: 2rem 0 2.5rem;
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }

        .tdp-content-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3.5rem;
          align-items: start;
          padding: 3.5rem 0;
        }
        /* Critical: prevent children from breaking out of grid columns */
        .tdp-content-grid > * {
          min-width: 0;
          width: 100%;
        }
        @media (max-width: 1023px) {
          .tdp-content-grid { grid-template-columns: 1fr; gap: 2.5rem; padding: 2.5rem 0; }
        }

        @media (min-width: 1024px) {
          .tdp-details-sticky { position: sticky; top: 5rem; }
        }

        .tdp-rule {
          height: 1px;
          background: rgba(0,0,0,0.06);
          margin: 0;
        }
      `}</style>

      <Nav />

      <div className="tdp-root tdp-page-in">
        <div className="tdp-banner" />

        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
        >
          {/* Breadcrumb */}
          <nav className="tdp-breadcrumb">
            <a href="/">Home</a>
            <span className="tdp-breadcrumb-sep">›</span>
            <a href="/tours">Tours</a>
            <span className="tdp-breadcrumb-sep">›</span>
            <span style={{ color: "#4d7c9c" }}>{tour.title}</span>
          </nav>

          {/* Title */}
          <div className="tdp-title-area">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1rem",
              }}
            >
              <span
                style={{
                  width: "1.75rem",
                  height: "1px",
                  background: gradient,
                  display: "block",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "0.68rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  background: gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Tour Details
              </span>
            </div>
            <TourHeader
              title={tour.title}
              shortDescription={tour.shortDescription}
            />
          </div>

          {/* Images + Details */}
          <div className="tdp-content-grid">
            <div style={{ overflow: "hidden", minWidth: 0 }}>
              <TourImages images={tour.images} />
            </div>
            <div className="tdp-details-sticky" style={{ minWidth: 0 }}>
              <TourDetails tour={tour} />
            </div>
          </div>
        </div>

        <div className="tdp-rule" />
        <FacilitiesSection facilities={commonFacilities} />

        <div className="tdp-rule" />
        <BookingForm tour={tour} />

        <div className="tdp-rule" />
        <RelatedToursCarousel currentTourId={tour.id} />
      </div>

      <FloatingIcons />
      <Footer />
    </>
  );
};

export default TourDetailsPage;
