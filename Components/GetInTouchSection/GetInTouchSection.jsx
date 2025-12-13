"use client";

import { useState } from "react";
import {
  IoPersonOutline,
  IoMailOutline,
  IoCallOutline,
  IoChatbubbleOutline,
} from "react-icons/io5";
import { FaWhatsapp, FaTripadvisor } from "react-icons/fa";

const GetInTouchSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get("content-type");
      let data;
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        throw new Error(`Unexpected response: ${text}`);
      }

      if (response.ok) {
        alert(`Thank you ${formData.name}, your message has been sent!`);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-700 text-lg">
            Have questions or want to plan your next trip? Fill out the form and
            we’ll contact you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <IoPersonOutline className="text-[#4d7c9c]" />
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4d7c9c] focus:ring-4 focus:ring-[#4d7c9c]/20 outline-none bg-gray-50/50 transition"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <IoMailOutline className="text-blue-500" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none bg-gray-50/50 transition"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2 md:col-span-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <IoCallOutline className="text-orange-500" />
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+94 77 123 4567"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 outline-none bg-gray-50/50 transition"
                />
              </div>

              {/* Message */}
              <div className="space-y-2 md:col-span-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <IoChatbubbleOutline className="text-[#4d7c9c]" />
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  className="w-full px-4 py-4 rounded-lg border border-gray-300 focus:border-[#4d7c9c] focus:ring-4 focus:ring-[#4d7c9c]/20 outline-none bg-gray-50/50 resize-none transition"
                />
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-12 py-3 text-white font-semibold text-lg 
                bg-[linear-gradient(189deg,rgba(77,124,156,1)0%,rgba(89,129,153,1)35%,rgba(132,147,142,1)100%,rgba(232,188,116,1)100%)]
                hover:opacity-90 transition-transform transform hover:scale-102 rounded-lg"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Contact Info / Map */}
          <div className="flex flex-col justify-start space-y-6">
            {/* Small Map */}
            <div className="w-full h-48 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789!2d79.861243!3d6.927079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2590c4f84b5b7%3A0x123456789abcdef!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Info Card with Highlighted Icons */}
            <div className="bg-white p-8 rounded-lg shadow-lg space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Contact Info
              </h3>
              <p className="text-gray-600">
                Feel free to reach us through any of the following:
              </p>
              <div className="space-y-3">
                <p className="flex items-center gap-3 text-gray-700">
                  <IoMailOutline className="text-blue-500 text-2xl" />
                  info@tangocabs.com
                </p>
                <p className="flex items-center gap-3 text-gray-700">
                  <IoCallOutline className="text-orange-500 text-2xl" />
                  +94 77 000 0000
                </p>
                <p className="flex items-center gap-3 text-gray-700">
                  <FaWhatsapp className="text-green-500 text-2xl" />
                  WhatsApp: +94 77 000 0000
                </p>
                <p className="flex items-center gap-3 text-gray-700">
                  <FaTripadvisor className="text-[#34E27D] text-2xl" />
                  TripAdvisor: Tango Cabs & Tours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
