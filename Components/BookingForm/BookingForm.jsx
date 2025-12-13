"use client";

import { useState } from "react";
import {
  IoPersonOutline,
  IoMailOutline,
  IoCallOutline,
  IoChatbubbleOutline,
  IoCalendarOutline,
  IoLocationOutline,
} from "react-icons/io5";
import Image from "next/image";

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
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-3xl font-bold text-gray-900 mb-4">
            Book Your Dream Tour
          </h1>
          <p className="text-gray-700 text-lg">
            Fill in your details and we'll contact you shortly
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 bg-white p-8 lg:p-12 rounded-2xl shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Full Name */}
            <div className="space-y-2">
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
            <div className="space-y-2">
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
            <div className="space-y-2">
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

            {/* Preferred Date */}
            <div className="space-y-2">
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

            {/* Number of Persons */}
            <div className="space-y-2">
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
                placeholder="1"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4d7c9c] focus:ring-4 focus:ring-[#4d7c9c]/20 outline-none transition-all bg-gray-50/50"
              />
            </div>

            {/* Location Dropdown */}
            <div className="space-y-2">
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

          {/* Special Requests */}
          <div className="space-y-2">
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

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-12 py-3 rounded-md text-white font-semibold
              bg-[#4d7c9c] hover:bg-[#3a5a73] transition"
            >
              Book a Tour
            </button>
            <p className="mt-4 text-sm text-gray-500">
              We'll call you within minutes to confirm your tour.
            </p>
          </div>
        </form>

        {/* Contact Info Section */}
        <div className="mt-12 text-center space-y-4">
          {/* TripAdvisor Logo */}
          <div className="flex justify-center items-center gap-2">
            <Image
              src="/tripadvisor.png" // replace with your logo path
              alt="TripAdvisor"
              width={120}
              height={40}
              className="object-contain"
            />
            <span className="text-gray-700 font-medium">
              Trusted by TripAdvisor
            </span>
          </div>

          {/* Contact Methods */}
          <div className="flex justify-center flex-wrap gap-6 mt-4 text-gray-700">
            <a
              href="mailto:info@tourcompany.com"
              className="flex items-center gap-2 hover:text-[#4d7c9c] transition"
            >
              <IoMailOutline /> info@tourcompany.com
            </a>
            <a
              href="tel:+94700000000"
              className="flex items-center gap-2 hover:text-[#4d7c9c] transition"
            >
              <IoCallOutline /> +94 70 000 0000
            </a>
            <a
              href="https://wa.me/94700000000"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-[#4d7c9c] transition"
            >
              <IoChatbubbleOutline /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
