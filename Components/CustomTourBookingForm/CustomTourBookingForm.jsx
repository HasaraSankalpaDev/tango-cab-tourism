"use client";

import { useState } from "react";
import {
  IoPersonOutline,
  IoMailOutline,
  IoCallOutline,
  IoCalendarOutline,
  IoLocationOutline,
  IoAlertCircleOutline,
} from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";

const gradient =
  "linear-gradient(188deg, rgba(79,126,156,1) 0%, rgba(117,156,158,1) 54%, rgba(144,163,149,1) 79%, rgba(172,171,139,1) 90%, rgba(232,188,118,1) 100%)";

/* ================= VALIDATION ================= */
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = ["travelerCount", "tourDays"].includes(name)
      ? Number(value) || ""
      : value;
    setFormData((prev) => ({ ...prev, [name]: newValue }));
    if (touched[name])
      setErrors((prev) => ({ ...prev, [name]: validateField(name, newValue) }));
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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

        .ctf-root { font-family: 'DM Sans', sans-serif; }

        .ctf-form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        .ctf-full { grid-column: 1 / -1; }
        @media (max-width: 639px) {
          .ctf-form-grid { grid-template-columns: 1fr; }
          .ctf-full { grid-column: 1; }
        }

        .ctf-label {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: #555;
          margin-bottom: 0.5rem;
        }

        .ctf-input {
          width: 100%;
          padding: 0.7rem 1rem;
          font-size: 0.875rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          color: #222;
          background: #fafaf8;
          border: 1px solid rgba(0,0,0,0.12);
          border-radius: 3px;
          outline: none;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
          box-sizing: border-box;
        }
        .ctf-input:focus {
          border-color: rgba(79,126,156,0.65);
          box-shadow: 0 0 0 3px rgba(79,126,156,0.1);
        }
        .ctf-input.error { border-color: rgba(220,38,38,0.6); background: #fff8f8; }
        .ctf-input::placeholder { color: #bbb; font-weight: 300; }

        .ctf-textarea {
          width: 100%;
          padding: 0.7rem 1rem;
          font-size: 0.875rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          color: #222;
          background: #fafaf8;
          border: 1px solid rgba(0,0,0,0.12);
          border-radius: 3px;
          outline: none;
          resize: none;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
          box-sizing: border-box;
        }
        .ctf-textarea:focus {
          border-color: rgba(79,126,156,0.65);
          box-shadow: 0 0 0 3px rgba(79,126,156,0.1);
        }
        .ctf-textarea.error { border-color: rgba(220,38,38,0.6); background: #fff8f8; }
        .ctf-textarea::placeholder { color: #bbb; font-weight: 300; }

        .ctf-error-msg {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          color: #dc2626;
          margin-top: 0.375rem;
          font-weight: 400;
        }

        .ctf-submit {
          position: relative;
          overflow: hidden;
          padding: 0.8rem 3rem;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 500;
          font-family: 'DM Sans', sans-serif;
          color: white;
          border: none;
          cursor: pointer;
          border-radius: 2px;
          background: ${gradient};
          transition: opacity 0.25s ease, transform 0.25s ease;
          width: 100%;
        }
        @media (min-width: 640px) { .ctf-submit { width: auto; } }
        .ctf-submit:hover { opacity: 0.88; transform: scale(1.02); }

        @media (max-width: 639px) {
          .ctf-form-card { padding: 1.75rem 1.25rem !important; }
        }
      `}</style>

      <section
        className="ctf-root"
        style={{ padding: "6rem 0", background: "#fafaf8" }}
      >
        <Toaster position="top-right" />
        <div
          style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1.5rem" }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                marginBottom: "1.25rem",
              }}
            >
              <span
                style={{
                  width: "1.75rem",
                  height: "1px",
                  background: gradient,
                  display: "block",
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
                Plan Your Journey
              </span>
              <span
                style={{
                  width: "1.75rem",
                  height: "1px",
                  background: gradient,
                  display: "block",
                }}
              />
            </div>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.9rem, 3vw, 2.6rem)",
                fontWeight: 600,
                color: "#111",
                lineHeight: 1.2,
                margin: "0 0 0.75rem",
              }}
            >
              Custom Sri Lanka Tour Booking
            </h1>
            <div
              style={{
                width: "2.5rem",
                height: "1px",
                background: gradient,
                margin: "0 auto",
              }}
            />
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="ctf-form-card"
            style={{
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: "4px",
              padding: "2.5rem",
            }}
          >
            <div className="ctf-form-grid">
              <Field
                label="Full Name *"
                icon={<IoPersonOutline />}
                error={errors.fullName}
                touched={touched.fullName}
              >
                <input
                  className={`ctf-input${errors.fullName && touched.fullName ? " error" : ""}`}
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Field>

              <Field
                label="Email Address *"
                icon={<IoMailOutline />}
                error={errors.email}
                touched={touched.email}
              >
                <input
                  className={`ctf-input${errors.email && touched.email ? " error" : ""}`}
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Field>

              <Field
                label="Phone / WhatsApp *"
                icon={<IoCallOutline />}
                error={errors.phone}
                touched={touched.phone}
              >
                <input
                  className={`ctf-input${errors.phone && touched.phone ? " error" : ""}`}
                  name="phone"
                  placeholder="0712345678"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Field>

              <Field
                label="Country *"
                icon={<IoLocationOutline />}
                error={errors.country}
                touched={touched.country}
              >
                <input
                  className={`ctf-input${errors.country && touched.country ? " error" : ""}`}
                  name="country"
                  placeholder="Sri Lanka"
                  value={formData.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Field>

              <Field
                label="Preferred Start Date *"
                icon={<IoCalendarOutline />}
                error={errors.startDate}
                touched={touched.startDate}
              >
                <input
                  type="date"
                  className={`ctf-input${errors.startDate && touched.startDate ? " error" : ""}`}
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Field>

              <Field
                label="Tour Duration (Days) *"
                error={errors.tourDays}
                touched={touched.tourDays}
              >
                <input
                  type="number"
                  min="1"
                  className={`ctf-input${errors.tourDays && touched.tourDays ? " error" : ""}`}
                  name="tourDays"
                  placeholder="3"
                  value={formData.tourDays}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Field>

              <Field
                label="Number of Travelers"
                error={errors.travelerCount}
                touched={touched.travelerCount}
              >
                <input
                  type="number"
                  min="1"
                  className={`ctf-input${errors.travelerCount && touched.travelerCount ? " error" : ""}`}
                  name="travelerCount"
                  placeholder="1"
                  value={formData.travelerCount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Field>

              <Field
                label="Pickup Location *"
                error={errors.pickupLocation}
                touched={touched.pickupLocation}
              >
                <input
                  className={`ctf-input${errors.pickupLocation && touched.pickupLocation ? " error" : ""}`}
                  name="pickupLocation"
                  placeholder="Colombo"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Field>

              <Field
                label="Drop-off Location (Optional)"
                error={errors.dropoffLocation}
                touched={touched.dropoffLocation}
                fullWidth
              >
                <input
                  className={`ctf-input${errors.dropoffLocation && touched.dropoffLocation ? " error" : ""}`}
                  name="dropoffLocation"
                  placeholder="Negombo"
                  value={formData.dropoffLocation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Field>

              <Field
                label="Preferred Tour Locations *"
                error={errors.preferredTourLocations}
                touched={touched.preferredTourLocations}
                fullWidth
              >
                <textarea
                  rows={3}
                  className={`ctf-textarea${errors.preferredTourLocations && touched.preferredTourLocations ? " error" : ""}`}
                  name="preferredTourLocations"
                  placeholder="Colombo, Kandy, Sigiriya"
                  value={formData.preferredTourLocations}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Field>
            </div>

            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <button type="submit" className="ctf-submit">
                Send Tour Request
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default CustomTourBookingForm;

/* ================= FIELD WRAPPER ================= */
const Field = ({ label, icon, error, touched, children, fullWidth }) => {
  const showError = Boolean(error && touched);
  return (
    <div className={fullWidth ? "ctf-full" : undefined}>
      <label className="ctf-label">
        {icon && (
          <span style={{ color: "#4d7c9c", display: "flex" }}>{icon}</span>
        )}
        {label}
      </label>
      <div style={{ position: "relative" }}>
        {children}
        {showError && (
          <IoAlertCircleOutline
            style={{
              position: "absolute",
              right: "0.75rem",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#dc2626",
              fontSize: "1.1rem",
              pointerEvents: "none",
            }}
          />
        )}
      </div>
      {showError && (
        <p className="ctf-error-msg">
          <IoAlertCircleOutline />
          {error}
        </p>
      )}
    </div>
  );
};
