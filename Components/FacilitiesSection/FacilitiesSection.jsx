"use client";

import { useRef, useEffect, useState } from "react";

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

export default function FacilitiesSection({ facilities }) {
  const [sectionRef, visible] = useInView();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

        .fs-root { font-family: 'DM Sans', sans-serif; }

        .fs-fade {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1);
        }
        .fs-fade.on { opacity: 1; transform: translateY(0); }

        .fs-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 4px;
          padding: 1.75rem 1.25rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.875rem;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1),
                      transform 0.7s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .fs-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: ${gradient};
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .fs-card.on { opacity: 1; transform: translateY(0); }
        .fs-card:hover { box-shadow: 0 12px 36px rgba(0,0,0,0.09); }
        .fs-card:hover::after { opacity: 1; }

        .fs-icon-wrap {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${gradient};
          flex-shrink: 0;
        }

        .fs-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          font-weight: 600;
          color: #111;
          margin: 0;
          line-height: 1.3;
        }

        .fs-card-desc {
          font-size: 0.8rem;
          color: #666;
          font-weight: 300;
          line-height: 1.6;
          margin: 0;
        }

        .fs-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1rem;
        }
        @media (max-width: 1023px) { .fs-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 639px)  { .fs-grid { grid-template-columns: repeat(2, 1fr); } }
      `}</style>

      <section
        className="fs-root"
        style={{ padding: "6rem 0", background: "#fafaf8" }}
        ref={sectionRef}
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div
              className={`fs-fade ${visible ? "on" : ""}`}
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
                Inclusions
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
              className={`fs-fade ${visible ? "on" : ""}`}
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
              What's Included in Every Tour
            </h2>

            <div
              className={`fs-fade ${visible ? "on" : ""}`}
              style={{
                width: "2.5rem",
                height: "1px",
                background: gradient,
                margin: "0 auto",
                transitionDelay: "0.15s",
              }}
            />
          </div>

          {/* Cards */}
          <div className="fs-grid">
            {facilities.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className={`fs-card ${visible ? "on" : ""}`}
                  style={{
                    transitionDelay: visible ? `${0.1 + i * 0.08}s` : "0s",
                  }}
                >
                  <div className="fs-icon-wrap">
                    <Icon style={{ color: "white", fontSize: "1.15rem" }} />
                  </div>
                  <div
                    style={{
                      width: "1.5rem",
                      height: "1px",
                      background: gradient,
                      opacity: 0.5,
                    }}
                  />
                  <h4 className="fs-card-title">{item.title}</h4>
                  <p className="fs-card-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
