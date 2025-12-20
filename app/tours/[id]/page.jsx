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

import AOS from "aos";
import "aos/dist/aos.css";

const TourDetailsPage = ({ params }) => {
  const { id } = use(params);
  const tour = tours.find((t) => t.id === parseInt(id, 10));

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
    Modal.setAppElement("body"); // client-side only
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
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold">Tour Not Found</h2>
        <Link href="/tours" className="mt-4 inline-block text-blue-600">
          Back to Tours
        </Link>
      </div>
    );
  }

  return (
    <>
      <Nav />
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 space-y-10">
          <TourHeader
            title={tour.title}
            shortDescription={tour.shortDescription}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <TourImages images={tour.images} />
            <TourDetails tour={tour} />
          </div>
        </div>
      </section>

      <FacilitiesSection facilities={commonFacilities} />

      <BookingForm tour={tour} />
      <RelatedToursCarousel currentTourId={tour.id} />
      <FloatingIcons />
      <Footer />
    </>
  );
};

export default TourDetailsPage;
