"use client";

import React, { useEffect } from "react";
import {
  FaCarSide,
  FaRoute,
  FaMapMarkedAlt,
  FaUserTie,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhatWeOffer() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
    });
  }, []);

  const offers = [
    {
      icon: FaCarSide,
      title: "Airport Transfers",
      desc: "Reliable airport pickups and drop-offs with comfortable, air-conditioned vehicles.",
    },
    {
      icon: FaRoute,
      title: "Private Day Tours",
      desc: "Explore Sri Lanka with flexible private tours tailored to your schedule.",
    },
    {
      icon: FaMapMarkedAlt,
      title: "Top Destinations",
      desc: "Visit Sigiriya, Kandy, Ella, Galle, Nuwara Eliya, and more iconic locations.",
    },
    {
      icon: FaUserTie,
      title: "Professional Drivers",
      desc: "Friendly, experienced drivers with strong local knowledge.",
    },
    {
      icon: FaClock,
      title: "Flexible Travel Plans",
      desc: "Custom routes, stopovers, and travel times based on your preferences.",
    },
    {
      icon: FaShieldAlt,
      title: "Safe & Trusted Service",
      desc: "Well-maintained vehicles and safety-focused travel on every journey.",
    },
  ];

  return (
    <section className="py-16 my-5 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-14">
          <h4
            className="bg-clip-text text-transparent bg-gradient-to-r from-[#e8bc74] to-[#4d7c9c]
                       font-medium uppercase tracking-wider"
            data-aos="fade-up"
          >
            What We Offer
          </h4>

          <h2
            className="text-2xl lg:text-3xl font-semibold text-gray-900 mt-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Premium Travel Services Across Sri Lanka
          </h2>

          <p
            className="text-gray-600 text-md mt-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            From airport transfers to unforgettable sightseeing tours, we
            provide reliable and comfortable travel solutions designed around
            you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {offers.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm
                           hover:shadow-mds transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className="w-14 h-14 mb-4 rounded-full flex items-center justify-center
                  bg-[linear-gradient(191deg,rgba(79,126,156,1)_12%,rgba(120,157,157,1)_64%,rgba(130,160,153,1)_78%,rgba(232,188,118,1)_100%)]"
                >
                  <Icon className="text-white text-2xl" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
