"use client";

import { useRef, useState, useEffect } from "react";
import {
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
  IoTimeOutline,
} from "react-icons/io5";

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

const infoItems = [
  {
    icon: IoCallOutline,
    title: "Call Us",
    value: "+94 77 726 65180",
    link: "tel:+947772665180",
  },
  {
    icon: IoMailOutline,
    title: "Email",
    value: "tangocabssrilanka@gmail.com",
    link: "mailto:tangocabssrilanka@gmail.com",
  },
  {
    icon: IoLocationOutline,
    title: "Location",
    value: "Tangalle, Sri Lanka",
    link: "https://share.google/YICM3Ocwo6WeiGdxh",
  },
  {
    icon: IoTimeOutline,
    title: "Business Hours",
    value: "Mon - Sun: 8:00 AM - 8:00 PM",
    link: null,
  },
];

const ContactInfoSection = () => {
  const [sectionRef, visible] = useInView();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

        .ci-root { font-family: 'DM Sans', sans-serif; }

        .ci-fade {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1);
        }
        .ci-fade.on { opacity: 1; transform: translateY(0); }

        .ci-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 4px;
          padding: 2.25rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.75rem;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1),
                      transform 0.7s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .ci-card::before {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: ${gradient};
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .ci-card:hover { box-shadow: 0 12px 36px rgba(0,0,0,0.09); }
        .ci-card:hover::before { opacity: 1; }
        .ci-card.on { opacity: 1; transform: translateY(0); }

        .ci-icon-wrap {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(79,126,156,0.08);
          transition: background 0.3s ease;
        }
        .ci-card:hover .ci-icon-wrap { background: rgba(79,126,156,0.15); }

        .ci-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.05rem;
          font-weight: 600;
          color: #111;
          margin: 0;
        }

        .ci-card-value {
          font-size: 0.825rem;
          color: #666;
          font-weight: 300;
          line-height: 1.6;
          word-break: break-word;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        a.ci-card-value:hover { color: #4d7c9c; }

        .ci-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 767px) { .ci-grid { grid-template-columns: 1fr; } }
        @media (min-width: 640px) and (max-width: 1023px) { .ci-grid { grid-template-columns: repeat(2, 1fr); } }
      `}</style>

      <section
        className="ci-root"
        style={{ padding: "6rem 0", background: "#fafaf8" }}
        ref={sectionRef}
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div
              className={`ci-fade ${visible ? "on" : ""}`}
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
                Get In Touch
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
              className={`ci-fade ${visible ? "on" : ""}`}
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
              Contact Information
            </h2>

            <div
              className={`ci-fade ${visible ? "on" : ""}`}
              style={{
                width: "2.5rem",
                height: "1px",
                background: gradient,
                margin: "0 auto 1rem",
                transitionDelay: "0.15s",
              }}
            />

            <p
              className={`ci-fade ${visible ? "on" : ""}`}
              style={{
                fontSize: "0.875rem",
                color: "#555",
                lineHeight: 1.85,
                fontWeight: 300,
                margin: 0,
                transitionDelay: "0.2s",
              }}
            >
              Reach out to us through any of the following ways
            </p>
          </div>

          {/* Cards */}
          <div className="ci-grid">
            {infoItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`ci-card ${visible ? "on" : ""}`}
                  style={{
                    transitionDelay: visible ? `${0.1 + idx * 0.1}s` : "0s",
                  }}
                >
                  <div className="ci-icon-wrap">
                    <Icon size={20} style={{ color: "#4d7c9c" }} />
                  </div>

                  <div
                    style={{
                      width: "1.5rem",
                      height: "1px",
                      background: gradient,
                      opacity: 0.6,
                    }}
                  />

                  <h3 className="ci-card-title">{item.title}</h3>

                  {item.link ? (
                    <a
                      href={item.link}
                      className="ci-card-value"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="ci-card-value" style={{ margin: 0 }}>
                      {item.value}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfoSection;
