"use client";

import { useState, useEffect } from "react";
import {
  IoPersonOutline,
  IoMailOutline,
  IoCallOutline,
  IoCalendarOutline,
  IoLocationOutline,
  IoCarOutline,
  IoHomeOutline,
  IoChatbubbleOutline,
  IoCashOutline,
} from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const CustomTourBookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    startDate: "",
    tourDays: "",
    travelerCount: 1,
    pickupLocation: "",
    dropoffLocation: "",
    preferredLocations: "",
    tourType: "",
    vehicleType: "",
    accommodationType: "",
    budgetRange: "",
    specialRequests: "",
  });

  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out", once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you ${formData.fullName}! Your tour request has been received.`
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Plan Your Custom Sri Lanka Tour
          </h1>
          <p className="mt-3 text-gray-600">
            A tailor-made travel experience designed exactly to your preferences
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 lg:p-12 rounded-lg shadow-lg space-y-10"
        >
          {/* PERSONAL INFO */}
          <Section title="Personal Information" dataAos="fade-up">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                icon={<IoPersonOutline />}
                label="Full Name"
                name="fullName"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <Input
                icon={<IoMailOutline />}
                label="Email Address"
                type="email"
                name="email"
                placeholder="john@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                icon={<IoCallOutline />}
                label="Phone / WhatsApp"
                name="phone"
                placeholder="+94 77 123 4567"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <Input
                icon={<IoLocationOutline />}
                label="Country"
                name="country"
                placeholder="United Kingdom"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </div>
          </Section>

          {/* TOUR DETAILS */}
          <Section title="Tour Details" dataAos="fade-up">
            <div className="grid md:grid-cols-3 gap-6">
              <Input
                icon={<IoCalendarOutline />}
                label="Start Date"
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
              <Input
                label="Tour Duration (Days)"
                type="number"
                name="tourDays"
                placeholder="7"
                min="1"
                value={formData.tourDays}
                onChange={handleChange}
                required
              />
              <Input
                label="Number of Travelers"
                type="number"
                name="travelerCount"
                placeholder="2"
                min="1"
                value={formData.travelerCount}
                onChange={handleChange}
                required
              />
            </div>
          </Section>

          {/* LOCATIONS */}
          <Section title="Locations" dataAos="fade-up">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Pickup Location"
                name="pickupLocation"
                placeholder="Colombo Airport / Hotel"
                value={formData.pickupLocation}
                onChange={handleChange}
                required
              />
              <Input
                label="Drop-off Location"
                name="dropoffLocation"
                placeholder="Colombo / Airport / Hotel"
                value={formData.dropoffLocation}
                onChange={handleChange}
                required
              />
            </div>

            <textarea
              data-aos="fade-up"
              name="preferredLocations"
              rows="3"
              placeholder="Sigiriya, Ella, Kandy, Yala, Mirissa..."
              value={formData.preferredLocations}
              onChange={handleChange}
              className="mt-6 w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4d7c9c] focus:ring-4 focus:ring-[#4d7c9c]/20 outline-none"
            />
          </Section>

          {/* PREFERENCES */}
          <Section title="Preferences" dataAos="fade-up">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Select
                icon={<IoCarOutline />}
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                options={["Sedan", "SUV", "Van", "Luxury Vehicle"]}
                placeholder="Vehicle Type"
              />
              <Select
                icon={<IoHomeOutline />}
                name="accommodationType"
                value={formData.accommodationType}
                onChange={handleChange}
                options={["Budget", "Standard", "Luxury", "Resort"]}
                placeholder="Accommodation"
              />
              <Select
                icon={<IoCashOutline />}
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                options={["$500 - $800", "$800 - $1200", "$1200+"]}
                placeholder="Budget Range"
              />
              <Select
                name="tourType"
                value={formData.tourType}
                onChange={handleChange}
                options={["Safari", "Cultural", "Beach", "Adventure"]}
                placeholder="Tour Type"
              />
            </div>
          </Section>

          {/* MESSAGE */}
          <div data-aos="fade-up">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <IoChatbubbleOutline /> Special Requests
            </label>
            <textarea
              name="specialRequests"
              rows="4"
              placeholder="Dietary needs, child seats, honeymoon trip, special plans..."
              value={formData.specialRequests}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-lg border border-gray-300 focus:border-[#4d7c9c] focus:ring-4 focus:ring-[#4d7c9c]/20 outline-none resize-none"
            />
          </div>

          {/* SUBMIT */}
          <div className="text-center" data-aos="fade-up">
            <button
              type="submit"
              className="px-12 py-3 rounded-lg bg-[#4d7c9c] text-white font-semibold hover:bg-[#3a5a73] transition"
            >
              Send Tour Request
            </button>
            <p className="mt-4 text-sm text-gray-500">
              We’ll contact you within minutes
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CustomTourBookingForm;

/* ---------- Reusable Components ---------- */

const Section = ({ title, children, dataAos }) => (
  <div data-aos={dataAos || "fade-up"}>
    <h2 className="text-lg font-semibold text-gray-900 mb-6">{title}</h2>
    {children}
  </div>
);

const Input = ({ icon, label, ...props }) => (
  <div className="space-y-2" data-aos="fade-up">
    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
      {icon} {label}
    </label>
    <input
      {...props}
      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4d7c9c] focus:ring-4 focus:ring-[#4d7c9c]/20 outline-none"
    />
  </div>
);

const Select = ({ icon, options, placeholder, ...props }) => (
  <div className="space-y-2" data-aos="fade-up">
    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
      {icon} {placeholder}
    </label>
    <select
      {...props}
      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4d7c9c] focus:ring-4 focus:ring-[#4d7c9c]/20 outline-none"
    >
      <option value="">Select {placeholder}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);
