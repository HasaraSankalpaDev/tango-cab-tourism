"use client";

import { useState, useEffect } from "react";
import {
  IoPersonOutline,
  IoMailOutline,
  IoCallOutline,
  IoChatbubbleOutline,
  IoCalendarOutline,
  IoLocationOutline,
  IoLogoWhatsapp,
} from "react-icons/io5";
import Image from "next/image";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

export const BookingForm = ({ tour }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    persons: 1,
    location: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you, ${formData.name}! Your booking request for "${
        tour.title
      }" at ${formData.location || "selected location"} has been sent.`
    );
  };

  const locations = [
    "Yala National Park",
    "Udawalawe National Park",
    "Wilpattu National Park",
    "Bundala National Park",
    "Minneriya National Park",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Book Your Dream Tour
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Fill in your details and we'll contact you shortly
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-8 bg-white py-8 px-6 lg:py-12 lg:px-8 rounded-lg shadow-xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Full Name */}
            <div className="space-y-2" data-aos="fade-up" data-aos-delay="150">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <IoPersonOutline className="text-[#4d7c9c]" />
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4d7c9c] focus:ring-4 focus:ring-[#4d7c9c]/20 outline-none transition-all bg-gray-50/50"
              />
            </div>

            {/* Email */}
            <div className="space-y-2" data-aos="fade-up" data-aos-delay="200">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <IoMailOutline className="text-[#4d7c9c]" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4d7c9c] focus:ring-4 focus:ring-[#4d7c9c]/20 outline-none transition-all bg-gray-50/50"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2" data-aos="fade-up" data-aos-delay="250">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <IoCallOutline className="text-[#4d7c9c]" />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+94 77 123 4567"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4d7c9c] focus:ring-4 focus:ring-[#4d7c9c]/20 outline-none transition-all bg-gray-50/50"
              />
            </div>

            {/* Date */}
            <div className="space-y-2" data-aos="fade-up" data-aos-delay="300">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <IoCalendarOutline className="text-[#4d7c9c]" />
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4d7c9c] focus:ring-4 focus:ring-[#4d7c9c]/20 outline-none transition-all bg-gray-50/50"
              />
            </div>

            {/* Persons */}
            <div className="space-y-2" data-aos="fade-up" data-aos-delay="350">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <IoPersonOutline className="text-[#4d7c9c]" />
                Number of Persons
              </label>
              <input
                type="number"
                name="persons"
                min="1"
                max="20"
                value={formData.persons}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4d7c9c] focus:ring-4 focus:ring-[#4d7c9c]/20 outline-none transition-all bg-gray-50/50"
              />
            </div>

            {/* Location */}
            <div className="space-y-2" data-aos="fade-up" data-aos-delay="400">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <IoLocationOutline className="text-[#4d7c9c]" />
                Preferred Safari Location
              </label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4d7c9c] focus:ring-4 focus:ring-[#4d7c9c]/20 outline-none transition-all bg-gray-50/50 cursor-pointer"
              >
                <option value="">Select a location</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2" data-aos="fade-up" data-aos-delay="450">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <IoChatbubbleOutline className="text-[#4d7c9c]" />
              Special Requests or Message (Optional)
            </label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any special requirements, dietary needs, or questions..."
              className="w-full px-4 py-4 rounded-lg border border-gray-300 focus:border-[#4d7c9c] focus:ring-4 focus:ring-[#4d7c9c]/20 outline-none transition-all bg-gray-50/50 resize-none"
            />
          </div>

          {/* Button */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="500">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-8 sm:px-12 py-2 sm:py-3 rounded-md text-white text-sm sm:text-base font-semibold
  bg-[#4d7c9c] hover:bg-[#3a5a73] transition"
            >
              Book a Tour
            </button>

            <p className="mt-4 text-sm text-gray-500">
              We'll call you within minutes to confirm your tour.
            </p>
          </div>
        </form>

        {/* Contact Info */}
        <div
          className="mt-12 text-center space-y-4"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="flex justify-center items-center gap-2">
            <Image
              src="/tripadvisor.png"
              alt="TripAdvisor"
              width={120}
              height={40}
              className="object-contain"
            />
            <span className="text-gray-700 font-medium">
              Trusted by TripAdvisor
            </span>
          </div>

          <div className="flex justify-center mt-8 flex-wrap gap-6  text-gray-700">
            {/* Email */}
            <a
              href="mailto:info@tourcompany.com"
              className="flex items-center gap-2 px-4 py-2 rounded-full
    bg-white shadow-sm border border-gray-200
    hover:border-[#4d7c9c] hover:text-[#4d7c9c]
    transition-all duration-300"
            >
              <IoMailOutline className="text-lg" />
              info@tourcompany.com
            </a>

            {/* Phone */}
            <a
              href="tel:+94700000000"
              className="flex items-center gap-2 px-4 py-2 rounded-full
    bg-white shadow-sm border border-gray-200
    hover:border-[#4d7c9c] hover:text-[#4d7c9c]
    transition-all duration-300"
            >
              <IoCallOutline className="text-lg" />
              +94 77 726 6518
            </a>

            {/* WhatsApp – Premium Highlight */}
            <a
              href="https://wa.me/94700000000"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full
    bg-[#25D366] text-white font-semibold
    shadow-lg shadow-green-500/30
    hover:scale-105 hover:shadow-xl
    transition-all duration-300"
            >
              <IoLogoWhatsapp className="text-xl" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
