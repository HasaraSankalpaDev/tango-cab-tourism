"use client";

import { useState, useEffect } from "react";
import {
  IoPersonOutline,
  IoMailOutline,
  IoCallOutline,
  IoCalendarOutline,
  IoLocationOutline,
  IoAlertCircleOutline,
} from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from "react-hot-toast";

/* ================= VALIDATION FUNCTION ================= */
const validateField = (name, value) => {
  switch (name) {
    case "fullName":
      if (!value?.trim()) return "Full name is required";
      if (!/^[a-zA-Z\s]{2,50}$/.test(value))
        return "Full name should be 2-50 letters";
      return "";
    case "email":
      if (!value?.trim()) return "Email is required";
      if (!/^\S+@\S+\.\S+$/.test(value)) return "Please enter a valid email";
      return "";
    case "phone":
      if (!value?.trim()) return "Phone number is required";
      if (!/^\d{10,12}$/.test(value))
        return "Phone number must be 10-12 digits";
      return "";
    case "country":
      if (!value?.trim()) return "Country is required";
      return "";
    case "startDate":
      if (!value) return "Start date is required";
      return "";
    case "tourDays":
      if (!value || value < 1) return "Tour duration must be at least 1 day";
      return "";
    case "travelerCount":
      if (value < 1) return "At least 1 traveler required";
      return "";
    case "pickupLocation":
      if (!value?.trim()) return "Pickup location is required";
      return "";
    case "preferredTourLocations":
      if (!value?.trim()) return "Preferred tour locations required";
      return "";
    default:
      return "";
  }
};

/* ================= MAIN COMPONENT ================= */
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
    preferredTourLocations: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = ["travelerCount", "tourDays"].includes(name)
      ? Number(value) || ""
      : value;

    setFormData((prev) => ({ ...prev, [name]: newValue }));

    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, newValue) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const allTouched = Object.keys(formData).reduce(
      (acc, k) => ({ ...acc, [k]: true }),
      {},
    );
    setTouched(allTouched);

    const allErrors = Object.keys(formData).reduce((acc, key) => {
      const error = validateField(key, formData[key]);
      if (error) acc[key] = error;
      return acc;
    }, {});
    setErrors(allErrors);
    if (Object.keys(allErrors).length > 0) return;

    try {
      const res = await fetch("/api/tour-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();

      if (!result.success) {
        toast.error("Please fix the errors and try again.");
        if (result.errors) setErrors(result.errors);
        return;
      }

      window.open(result.whatsappURL, "_blank");
      toast.success("Your request has been sent via WhatsApp!");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        startDate: "",
        tourDays: "",
        travelerCount: 1,
        pickupLocation: "",
        dropoffLocation: "",
        preferredTourLocations: "",
      });
      setErrors({});
      setTouched({});
    } catch {
      toast.error("Something went wrong, please try again.");
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <Toaster position="top-right" />
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-2xl md:text-2xl font-semibold text-center mb-12 text-gray-800">
          Custom Sri Lanka Tour Booking
        </h1>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-white py-8 px-6 md:px-8 md:py-8 rounded-md shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <Input
              icon={<IoPersonOutline />}
              label="Full Name *"
              placeholder="John Doe"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.fullName}
              touched={touched.fullName}
            />
            <Input
              icon={<IoMailOutline />}
              label="Email Address *"
              placeholder="your@email.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              touched={touched.email}
            />
            <Input
              icon={<IoCallOutline />}
              label="Phone / WhatsApp *"
              placeholder="0712345678"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.phone}
              touched={touched.phone}
            />
            <Input
              icon={<IoLocationOutline />}
              label="Country *"
              placeholder="Sri Lanka"
              name="country"
              value={formData.country}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.country}
              touched={touched.country}
            />
            <Input
              icon={<IoCalendarOutline />}
              label="Preferred Start Date *"
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.startDate}
              touched={touched.startDate}
            />
            <Input
              label="Tour Duration (Days) *"
              type="number"
              min="1"
              placeholder="3"
              name="tourDays"
              value={formData.tourDays}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.tourDays}
              touched={touched.tourDays}
            />
            <Input
              label="Number of Travelers"
              type="number"
              min="1"
              placeholder="1"
              name="travelerCount"
              value={formData.travelerCount}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.travelerCount}
              touched={touched.travelerCount}
            />
            <Input
              label="Pickup Location *"
              placeholder="Colombo"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.pickupLocation}
              touched={touched.pickupLocation}
            />
            <Input
              label="Drop-off Location (Optional)"
              placeholder="Negombo"
              name="dropoffLocation"
              value={formData.dropoffLocation}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.dropoffLocation}
              touched={touched.dropoffLocation}
            />
            <Textarea
              label="Preferred Tour Locations *"
              placeholder="Colombo, Kandy, Sigiriya"
              name="preferredTourLocations"
              value={formData.preferredTourLocations}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.preferredTourLocations}
              touched={touched.preferredTourLocations}
            />
          </div>

          <div className="text-center mt-10">
            <button
              type="submit"
              className="px-12 py-2 cursor-pointer bg-[#4d7c9c] text-white text-sm md:text-sm font-semibold rounded-sm hover:bg-[#3a5f7f] transition"
            >
              Send Tour Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CustomTourBookingForm;

/* ================= INPUT COMPONENT ================= */
const Input = ({ icon, label, error, touched, placeholder, ...props }) => {
  const showError = Boolean(error && touched);
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
        {icon && <span className="text-[#4d7c9c]">{icon}</span>}
        {label}
      </label>
      <div className="relative">
        <input
          {...props}
          placeholder={placeholder}
          className={`w-full px-4 py-2 text-sm rounded-sm border-1 outline-none transition ${
            showError
              ? "border-red-500 bg-red-50"
              : "border-gray-300 focus:border-[#4d7c9c] focus:ring-[#4d7c9c]/20"
          }`}
        />
        {showError && (
          <IoAlertCircleOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 text-xl" />
        )}
      </div>
      {showError && (
        <p className="text-sm text-red-600 font-medium flex items-center gap-1">
          <IoAlertCircleOutline />
          {error}
        </p>
      )}
    </div>
  );
};

/* ================= TEXTAREA COMPONENT ================= */
const Textarea = ({ label, error, touched, placeholder, ...props }) => {
  const showError = Boolean(error && touched);
  return (
    <div className="space-y-2 md:col-span-2">
      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
        {label}
      </label>
      <div className="relative">
        <textarea
          {...props}
          placeholder={placeholder}
          rows={3}
          className={`w-full px-4 py-2 text-sm rounded-sm border-1 outline-none transition resize-none ${
            showError
              ? "border-red-500 bg-red-50"
              : "border-gray-300 focus:border-[#4d7c9c] focus:ring-[#4d7c9c]/20"
          }`}
        />
        {showError && (
          <IoAlertCircleOutline className="absolute right-3 top-3 text-red-500 text-xl" />
        )}
      </div>
      {showError && (
        <p className="text-sm text-red-600 font-medium flex items-center gap-1">
          <IoAlertCircleOutline />
          {error}
        </p>
      )}
    </div>
  );
};
