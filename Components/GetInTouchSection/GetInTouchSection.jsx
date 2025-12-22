"use client";

import { useState, useEffect } from "react";
import {
  IoPersonOutline,
  IoMailOutline,
  IoCallOutline,
  IoChatbubbleOutline,
} from "react-icons/io5";
import { FaTripadvisor, FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from "react-hot-toast";

const GetInTouchSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "", // honeypot for bots
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out" });
  }, []);

  // Custom validation function
  const validate = () => {
    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/; // exactly 11 digits

    if (formData.website) return "Bot detected";
    if (!formData.name.trim()) return "Name is required";
    if (!nameRegex.test(formData.name)) return "Invalid name (2-50 letters)";
    if (!formData.email.trim()) return "Email is required";
    if (!emailRegex.test(formData.email)) return "Invalid email address";
    if (!formData.phone.trim()) return "Phone number is required";
    if (!phoneRegex.test(formData.phone)) return "Phone must be 10 digits";
    if (!formData.message.trim()) return "Message is required";
    if (formData.message.length < 5 || formData.message.length > 1000)
      return "Message must be 5-1000 characters";

    return null;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numbersOnly = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, phone: numbersOnly }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      toast.error(error);
      return;
    }

    toast.loading("Sending message...", { id: "sending" });

    try {
      const formDataToSend = new FormData();

      formDataToSend.append(
        "access_key",
        "4909cec1-b93c-4770-8571-097896ae9033"
      );
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("message", formData.message);

      // Optional (recommended)
      formDataToSend.append("subject", "New Contact Form Message");
      formDataToSend.append("from_name", "Tango Cabs Website");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          website: "",
        });
      } else {
        toast.error(data.message || "Submission failed");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      toast.dismiss("sending");
    }
  };

  return (
    <section className="py-20 bg-white">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-4 mb-12">
          <h2
            className="text-2xl lg:text-4xl font-semibold text-gray-900 leading-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Get in Touch
          </h2>
          <p
            className="text-gray-600 text-lg max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Have questions or want to plan your next trip? Fill out the form and
            we’ll contact you shortly
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            data-aos="fade-up"
            className="bg-white py-8 px-4 md:px-6 rounded-lg shadow-lg space-y-6"
          >
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="hidden"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <IoPersonOutline className="text-[#4d7c9c]" /> Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#4d7c9c] focus:ring-4 focus:ring-[#4d7c9c]/20 outline-none bg-gray-50/50 transition"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <IoMailOutline className="text-blue-500" /> Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none bg-gray-50/50 transition"
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2 md:col-span-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <IoCallOutline className="text-orange-500" /> Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter 10 digit phone"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 outline-none bg-gray-50/50 transition"
                  required
                />
              </div>

              {/* Message */}
              <div className="space-y-2 md:col-span-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <IoChatbubbleOutline className="text-[#4d7c9c]" /> Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  className="w-full px-4 py-4 rounded-md border border-gray-300 focus:border-[#4d7c9c] focus:ring-4 focus:ring-[#4d7c9c]/20 outline-none bg-gray-50/50 resize-none transition"
                  required
                />
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 md:px-12 md:py-3 text-white font-semibold text-sm md:text-lg
                  bg-[linear-gradient(189deg,rgba(77,124,156,1)_0%,rgba(89,129,153,1)_35%,rgba(132,147,142,1)_100%,rgba(232,188,116,1)_100%)]
                  hover:opacity-90 hover:scale-[1.02] transition-transform transform rounded-lg"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Contact Info / Map */}
          <div className="flex flex-col justify-start space-y-6">
            {/* Map */}
            <div className="w-full h-48 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789!2d79.861243!3d6.927079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2590c4f84b5b7%3A0x123456789abcdef!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact Info Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Contact Info
              </h3>
              <p className="text-gray-600">
                Feel free to reach us through any of the following:
              </p>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-center gap-3">
                  <IoMailOutline className="text-blue-500 text-xl" />{" "}
                  info@tangocabs.com
                </p>
                <p className="flex items-center gap-3">
                  <FaWhatsapp className="text-green-500 text-xl" />
                  <a
                    href="https://wa.me/94777266518"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    +94 77 726 6518
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <IoCallOutline className="text-orange-500 text-xl" />
                  <a href="tel:+94777266518" className="hover:underline">
                    +94 77 726 6518
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <FaTripadvisor className="text-[#34E27D] text-xl" />{" "}
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
