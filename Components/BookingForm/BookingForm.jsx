"use client";

import { useState } from "react";
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

const gradient =
  "linear-gradient(188deg, rgba(79,126,156,1) 0%, rgba(117,156,158,1) 54%, rgba(144,163,149,1) 79%, rgba(172,171,139,1) 90%, rgba(232,188,118,1) 100%)";

const WHATSAPP_NUMBER = "94777266518";

const locations = [
  "Airport to Sigiriya Scenic Transfer",
  "Airport to Nuwara Eliya Hill Country Transfer",
  "Airport to Ella Scenic Transfer",
  "Airport to Galle & Southern Coast Transfer",
  "Airport to Kandy Cultural Transfer",
  "Airport to Kataragama Pilgrimage Transfer",
  "Airport to Hiriketiya Beach Transfer",
  "Airport to Yala Safari Transfer",
  "Airport to Mirissa Beach Transfer",
];

const cleanText = (text) => text.replace(/[<>]/g, "").trim();

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

  const validateForm = () => {
    if (!/^[a-zA-Z\s]{2,40}$/.test(formData.name)) {
      alert("Please enter a valid name (letters only)");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert("Please enter a valid email address");
      return false;
    }
    if (!/^\d{9,12}$/.test(formData.phone.replace(/\D/g, ""))) {
      alert("Please enter a valid phone number");
      return false;
    }
    if (!formData.date) {
      alert("Please select a date");
      return false;
    }
    if (!locations.includes(formData.location)) {
      alert("Please select a valid location");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const message = `Hi, I'm interested in booking a tour.\n\nName: ${cleanText(formData.name)}\nEmail: ${cleanText(formData.email)}\nPhone: ${cleanText(formData.phone)}\n\nTour: ${cleanText(formData.location)}\nPreferred Date: ${formData.date}\nNumber of Persons: ${formData.persons}\n\nAdditional Requests:\n${cleanText(formData.message || "No special requests")}\n\nCould you please provide more details? Thank you!`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

        .bf-root { font-family: 'DM Sans', sans-serif; }

        .bf-label {
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

        .bf-input {
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
        .bf-input:focus {
          border-color: rgba(79,126,156,0.65);
          box-shadow: 0 0 0 3px rgba(79,126,156,0.1);
        }
        .bf-input::placeholder { color: #bbb; font-weight: 300; }

        .bf-form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 639px) { .bf-form-grid { grid-template-columns: 1fr; } }

        .bf-full { grid-column: 1 / -1; }
        @media (max-width: 639px) { .bf-full { grid-column: 1; } }

        .bf-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.85rem 2.5rem;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 500;
          font-family: 'DM Sans', sans-serif;
          color: white;
          border: none;
          cursor: pointer;
          border-radius: 2px;
          background: #25D366;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .bf-submit:hover { opacity: 0.9; transform: scale(1.02); }

        .bf-contact-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 1.1rem;
          font-size: 0.8rem;
          font-weight: 400;
          color: #555;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 2rem;
          text-decoration: none;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .bf-contact-link:hover { border-color: #4d7c9c; color: #4d7c9c; }

        .bf-wa-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.25rem;
          font-size: 0.8rem;
          font-weight: 500;
          color: white;
          background: #25D366;
          border: none;
          border-radius: 2rem;
          text-decoration: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .bf-wa-link:hover { opacity: 0.9; transform: scale(1.03); }
      `}</style>

      <section
        className="bf-root"
        style={{ padding: "6rem 0", background: "#fff" }}
      >
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
                Book Now
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
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.9rem, 3vw, 2.6rem)",
                fontWeight: 600,
                color: "#111",
                lineHeight: 1.2,
                margin: "0 0 0.75rem",
              }}
            >
              Book Your Dream Tour
            </h2>
            <div
              style={{
                width: "2.5rem",
                height: "1px",
                background: gradient,
                margin: "0 auto 1rem",
              }}
            />
            <p
              style={{
                fontSize: "0.875rem",
                color: "#555",
                lineHeight: 1.85,
                fontWeight: 300,
              }}
            >
              Fill in your details and we'll contact you shortly
            </p>
          </div>

          {/* Form card */}
          <form
            onSubmit={handleSubmit}
            style={{
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: "4px",
              padding: "2.5rem",
            }}
          >
            <div className="bf-form-grid">
              <div>
                <label className="bf-label">
                  <IoPersonOutline style={{ color: "#4d7c9c" }} /> Full Name
                </label>
                <input
                  className="bf-input"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="bf-label">
                  <IoMailOutline style={{ color: "#4d7c9c" }} /> Email Address
                </label>
                <input
                  className="bf-input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="bf-label">
                  <IoCallOutline style={{ color: "#4d7c9c" }} /> Phone Number
                </label>
                <input
                  className="bf-input"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+94 77 123 4567"
                />
              </div>

              <div>
                <label className="bf-label">
                  <IoCalendarOutline style={{ color: "#4d7c9c" }} /> Preferred
                  Date
                </label>
                <input
                  className="bf-input"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="bf-label">
                  <IoPersonOutline style={{ color: "#4d7c9c" }} /> Number of
                  Persons
                </label>
                <input
                  className="bf-input"
                  type="number"
                  name="persons"
                  min="1"
                  max="20"
                  value={formData.persons}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="bf-label">
                  <IoLocationOutline style={{ color: "#4d7c9c" }} /> Preferred
                  Safari Location
                </label>
                <select
                  className="bf-input"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  style={{ cursor: "pointer" }}
                >
                  <option value="">Select a location</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              <div className="bf-full">
                <label className="bf-label">
                  <IoChatbubbleOutline style={{ color: "#4d7c9c" }} /> Special
                  Requests (Optional)
                </label>
                <textarea
                  className="bf-input"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any special requirements, dietary needs, or questions..."
                  style={{ resize: "none" }}
                />
              </div>
            </div>

            <div
              style={{
                textAlign: "center",
                marginTop: "2.25rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <button type="submit" className="bf-submit">
                <IoLogoWhatsapp size={16} />
                Send via WhatsApp
              </button>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#aaa",
                  fontWeight: 300,
                  letterSpacing: "0.04em",
                }}
              >
                We'll open WhatsApp with your booking details
              </p>
            </div>
          </form>

          {/* Footer contact strip */}
          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            {/* TripAdvisor */}
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}
            >
              <Image
                src="/tripadvisor.png"
                alt="TripAdvisor"
                width={110}
                height={36}
                style={{ objectFit: "contain" }}
              />
              <span
                style={{ fontSize: "0.8rem", color: "#666", fontWeight: 300 }}
              >
                Trusted by TripAdvisor
              </span>
            </div>

            {/* Contact links */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "0.75rem",
              }}
            >
              <a
                href="mailto:tangocabssrilanka@gmail.com"
                className="bf-contact-link"
              >
                <IoMailOutline size={15} /> tangocabssrilanka@gmail.com
              </a>
              <a href="tel:+94777266518" className="bf-contact-link">
                <IoCallOutline size={15} /> +94 77 726 6518
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="bf-wa-link"
              >
                <IoLogoWhatsapp size={15} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
