"use client";

import { useState, useRef, useEffect } from "react";
import {
  IoPersonOutline,
  IoMailOutline,
  IoCallOutline,
  IoChatbubbleOutline,
} from "react-icons/io5";
import { FaTripadvisor, FaWhatsapp } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const gradient =
  "linear-gradient(188deg, rgba(79,126,156,1) 0%, rgba(117,156,158,1) 54%, rgba(144,163,149,1) 79%, rgba(172,171,139,1) 90%, rgba(232,188,118,1) 100%)";

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

const GetInTouchSection = () => {
  const [sectionRef, visible] = useInView();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "",
  });

  const validate = () => {
    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });
      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          website: "",
        });
      } else {
        const data = await response.json();
        toast.error(data.message || "Submission failed. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      toast.dismiss("sending");
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

        .git-root { font-family: 'DM Sans', sans-serif; }

        .git-fade {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1);
        }
        .git-fade.on { opacity: 1; transform: translateY(0); }

        .git-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #555;
          margin-bottom: 0.5rem;
        }

        .git-input {
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
        .git-input:focus {
          border-color: rgba(79,126,156,0.6);
          box-shadow: 0 0 0 3px rgba(79,126,156,0.1);
        }
        .git-input::placeholder { color: #bbb; font-weight: 300; }

        .git-textarea {
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
        .git-textarea:focus {
          border-color: rgba(79,126,156,0.6);
          box-shadow: 0 0 0 3px rgba(79,126,156,0.1);
        }
        .git-textarea::placeholder { color: #bbb; font-weight: 300; }

        .git-submit {
          position: relative;
          overflow: hidden;
          padding: 0.75rem 2.5rem;
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
        }
        .git-submit:hover { opacity: 0.88; transform: scale(1.02); }

        .git-contact-row {
          display: flex;
          align-items: center;
          gap: 0.875rem;
          font-size: 0.85rem;
          color: #444;
          font-weight: 300;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          text-decoration: none;
        }
        .git-contact-row:last-child { border-bottom: none; }
        .git-contact-row a { color: #444; text-decoration: none; }
        .git-contact-row a:hover { text-decoration: underline; }

        .git-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        .git-full { grid-column: 1 / -1; }
        @media (max-width: 639px) {
          .git-form-grid { grid-template-columns: 1fr; }
          .git-full { grid-column: 1; }
          .git-submit { width: 100%; }
        }

        .git-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        @media (max-width: 767px) { .git-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section
        className="git-root"
        style={{ padding: "6rem 0", background: "#fff" }}
        ref={sectionRef}
      >
        <Toaster position="top-right" reverseOrder={false} />
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
        >
          {/* Header */}
          <div style={{ marginBottom: "3.5rem" }}>
            <div
              className={`git-fade ${visible ? "on" : ""}`}
              style={{
                display: "flex",
                alignItems: "center",
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
                  flexShrink: 0,
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
                Contact Us
              </span>
            </div>

            <h2
              className={`git-fade ${visible ? "on" : ""}`}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.9rem, 3vw, 2.6rem)",
                fontWeight: 600,
                color: "#111",
                lineHeight: 1.2,
                margin: "0 0 1rem",
                transitionDelay: "0.1s",
              }}
            >
              Get in Touch
            </h2>

            <div
              className={`git-fade ${visible ? "on" : ""}`}
              style={{
                width: "2.5rem",
                height: "1px",
                background: gradient,
                marginBottom: "1rem",
                transitionDelay: "0.15s",
              }}
            />

            <p
              className={`git-fade ${visible ? "on" : ""}`}
              style={{
                fontSize: "0.875rem",
                color: "#555",
                lineHeight: 1.85,
                fontWeight: 300,
                maxWidth: "38rem",
                margin: 0,
                transitionDelay: "0.2s",
              }}
            >
              Have questions or want to plan your next trip? Fill out the form
              and we'll contact you shortly.
            </p>
          </div>

          <div className="git-grid">
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className={`git-fade ${visible ? "on" : ""}`}
              style={{
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.07)",
                borderRadius: "4px",
                padding: "2.5rem 2rem",
                transitionDelay: "0.25s",
              }}
            >
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                style={{ display: "none" }}
              />

              <div className="git-form-grid">
                {/* Name */}
                <div>
                  <label className="git-label">
                    <IoPersonOutline style={{ color: "#4d7c9c" }} /> Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="git-input"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="git-label">
                    <IoMailOutline style={{ color: "#4d7c9c" }} /> Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="git-input"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="git-full">
                  <label className="git-label">
                    <IoCallOutline style={{ color: "#4d7c9c" }} /> Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter 10 digit phone"
                    className="git-input"
                    required
                  />
                </div>

                {/* Message */}
                <div className="git-full">
                  <label className="git-label">
                    <IoChatbubbleOutline style={{ color: "#4d7c9c" }} /> Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    className="git-textarea"
                    required
                  />
                </div>
              </div>

              <div style={{ marginTop: "1.75rem", textAlign: "center" }}>
                <button type="submit" className="git-submit">
                  Send Message
                </button>
              </div>
            </form>

            {/* Right side */}
            <div
              className={`git-fade ${visible ? "on" : ""}`}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                transitionDelay: "0.35s",
              }}
            >
              {/* Map */}
              <div
                style={{
                  borderRadius: "4px",
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.07)",
                }}
              >
                <a
                  href="https://maps.app.goo.gl/1SKmXSJrgd4kYTYx8"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block" }}
                >
                  <img
                    src="/map.png"
                    alt="Tango Cabs Sri Lanka Location Map"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      display: "block",
                    }}
                    loading="lazy"
                  />
                </a>
              </div>

              {/* Contact Info */}
              <div
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.07)",
                  borderRadius: "4px",
                  padding: "2rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <span
                    style={{
                      width: "1.25rem",
                      height: "1px",
                      background: gradient,
                      display: "block",
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      color: "#111",
                      margin: 0,
                    }}
                  >
                    Contact Info
                  </h3>
                </div>

                <p
                  style={{
                    fontSize: "0.825rem",
                    color: "#777",
                    fontWeight: 300,
                    marginBottom: "1.25rem",
                    lineHeight: 1.7,
                  }}
                >
                  Feel free to reach us through any of the following:
                </p>

                <div>
                  <div className="git-contact-row">
                    <IoMailOutline
                      style={{
                        color: "#4d7c9c",
                        fontSize: "1.1rem",
                        flexShrink: 0,
                      }}
                    />
                    <span>tangocabssrilanka@gmail.com</span>
                  </div>
                  <div className="git-contact-row">
                    <FaWhatsapp
                      style={{
                        color: "#25d366",
                        fontSize: "1.1rem",
                        flexShrink: 0,
                      }}
                    />
                    <a
                      href="https://wa.me/94777266518"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +94 77 726 6518
                    </a>
                  </div>
                  <div className="git-contact-row">
                    <IoCallOutline
                      style={{
                        color: "#e8a44d",
                        fontSize: "1.1rem",
                        flexShrink: 0,
                      }}
                    />
                    <a href="tel:+94777266518">+94 77 726 6518</a>
                  </div>
                  <div className="git-contact-row">
                    <FaTripadvisor
                      style={{
                        color: "#34e27d",
                        fontSize: "1.1rem",
                        flexShrink: 0,
                      }}
                    />
                    <span>TripAdvisor: Tango Cabs Sri Lanka</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetInTouchSection;
