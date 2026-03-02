"use client";

import AboutHero from "@/Components/AboutHero/AboutHero";
import Nav from "@/Components/Nav/Nav";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Footer from "@/Components/Footer/Footer";
import FloatingIcons from "@/Components/FloatingIcons/FloatingIcons";

const metadata = {
  title: "Contact Tango Cabs Sri Lanka | Tangalle Taxi & Airport Transfers",
  description:
    "Contact Tango Cabs Sri Lanka in Tangalle for taxi bookings, airport transfers, private drivers, and Sri Lanka tours. Fast response via WhatsApp or phone.",
  keywords: [
    "Tango Cabs Sri Lanka",
    "Tango Cabs",
    "Tangalle taxi service",
    "Tangalle tour agency",
    "Sri Lanka taxi service",
    "Sri Lanka tour agency",
    "Sri Lanka airport transfer",
    "Colombo airport taxi",
    "Colombo airport transfer Sri Lanka",
    "Bandaranaike airport taxi",
    "Bandaranaike airport transfer",
    "CMB airport transfer Sri Lanka",
    "Airport pickup Sri Lanka",
    "Airport drop Sri Lanka",
    "Sri Lanka airport pickup service",
    "Sri Lanka airport drop service",
    "Private airport transfer Sri Lanka",
    "Taxi from Colombo airport",
    "Colombo airport to Tangalle taxi",
    "Tangalle to Colombo airport taxi",
    "Colombo airport to Tangalle transfer",
    "Airport taxi Tangalle",
    "Tangalle airport transfer",
    "Sri Lanka airport cab service",
    "Private driver Sri Lanka",
    "Cab service Sri Lanka",
    "Taxi service in Tangalle",
    "Chauffeur service Sri Lanka",
    "Tourist taxi Sri Lanka",
    "Affordable taxi Sri Lanka",
    "Best taxi service in Tangalle",
    "Reliable taxi Sri Lanka",
    "Sri Lanka travel agency",
    "Sri Lanka tours",
    "Sri Lanka round tour",
    "Sri Lanka sightseeing tours",
    "Sri Lanka private tours",
    "Travel Sri Lanka",
    "Visit Sri Lanka",
    "Southern Province Sri Lanka",
    "Tangalle beach tours",
    "Tangalle to Colombo taxi",
    "Tangalle to Galle taxi",
  ],
};

const gradient =
  "linear-gradient(188deg, rgba(79,126,156,1) 0%, rgba(117,156,158,1) 54%, rgba(144,163,149,1) 79%, rgba(172,171,139,1) 90%, rgba(232,188,118,1) 100%)";

function useInView(threshold = 0.12) {
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

const page = () => {
  const [storyRef, storyVisible] = useInView();
  const [mvRef, mvVisible] = useInView();
  const [taRef, taVisible] = useInView();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,300&family=DM+Sans:wght@300;400;500&display=swap');

        .about-page { font-family: 'DM Sans', sans-serif; }

        .ap-fade {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1);
        }
        .ap-fade.on { opacity: 1; transform: translateY(0); }
        .ap-d1 { transition-delay: 0.1s; }
        .ap-d2 { transition-delay: 0.2s; }
        .ap-d3 { transition-delay: 0.3s; }

        .ap-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 4px;
          padding: 2.5rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1),
                      transform 0.75s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.3s ease;
        }
        .ap-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: ${gradient};
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .ap-card:hover { box-shadow: 0 12px 36px rgba(0,0,0,0.08); }
        .ap-card:hover::before { opacity: 1; }
        .ap-card.on { opacity: 1; transform: translateY(0); }

        .ap-ta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 2rem;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 500;
          font-family: 'DM Sans', sans-serif;
          color: #3a3a3a;
          text-decoration: none;
          border: 1px solid rgba(79,126,156,0.4);
          position: relative;
          overflow: hidden;
          transition: color 0.3s ease, border-color 0.3s ease;
        }
        .ap-ta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: ${gradient};
          opacity: 0;
          transition: opacity 0.35s ease;
          z-index: 0;
        }
        .ap-ta-btn:hover::before { opacity: 1; }
        .ap-ta-btn:hover { color: white; border-color: transparent; }
        .ap-ta-btn span { position: relative; z-index: 1; }

        .ap-mv-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 767px) { .ap-mv-grid { grid-template-columns: 1fr; } }
        @media (min-width: 768px) and (max-width: 1023px) { .ap-mv-grid { grid-template-columns: repeat(2, 1fr); } }
      `}</style>

      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Tango Cabs Sri Lanka" />
      </Head>

      <div className="about-page">
        <Nav />
        <AboutHero />

        <section style={{ background: "#fafaf8" }}>
          {/* ── Our Story ── */}
          <div
            ref={storyRef}
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "6rem 1.5rem",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 440px), 1fr))",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <div className={`ap-fade ${storyVisible ? "on" : ""}`}>
              <div
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
                  Who We Are
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.9rem, 3vw, 2.6rem)",
                  fontWeight: 600,
                  color: "#111",
                  lineHeight: 1.2,
                  margin: "0 0 1rem",
                }}
              >
                Our Story
              </h2>
              <div
                style={{
                  width: "2.5rem",
                  height: "1px",
                  background: gradient,
                  marginBottom: "1.5rem",
                }}
              />
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#555",
                  lineHeight: 1.85,
                  fontWeight: 300,
                  margin: "0 0 1rem",
                }}
              >
                Founded in 2015, Tango Cabs & Tours has been dedicated to
                offering premium cab services and curated tours across Sri
                Lanka. Our passion for travel and hospitality drives us to
                deliver experiences that are safe, reliable, and truly
                memorable.
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#555",
                  lineHeight: 1.85,
                  fontWeight: 300,
                  margin: 0,
                }}
              >
                With a fleet of modern vehicles, experienced drivers, and local
                expertise, we make your journey stress-free and enjoyable. From
                scenic coastal drives to adventurous safari trips, we are your
                trusted travel partner.
              </p>
            </div>

            <div
              className={`ap-fade ap-d1 ${storyVisible ? "on" : ""}`}
              style={{
                position: "relative",
                width: "100%",
                height: "340px",
                borderRadius: "4px",
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.07)",
              }}
            >
              <Image
                src="/logo.jpeg"
                alt="Our Story"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* ── Mission / Vision / Values ── */}
          <div style={{ background: "#fff", padding: "5rem 0" }} ref={mvRef}>
            <div
              style={{
                maxWidth: "1280px",
                margin: "0 auto",
                padding: "0 1.5rem",
              }}
            >
              <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <div
                  className={`ap-fade ${mvVisible ? "on" : ""}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.75rem",
                    marginBottom: "1rem",
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
                    What Drives Us
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
              </div>

              <div className="ap-mv-grid">
                {[
                  {
                    title: "Our Mission",
                    delay: 0,
                    text: "To provide safe, comfortable, and reliable travel experiences that exceed our clients' expectations.",
                  },
                  {
                    title: "Our Vision",
                    delay: 0.1,
                    text: "To be the most trusted travel and cab service in Sri Lanka, connecting travelers with unforgettable experiences.",
                  },
                  {
                    title: "Our Values",
                    delay: 0.2,
                    text: "Safety, Reliability, Customer Satisfaction, and a Passion for Travel.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className={`ap-card ${mvVisible ? "on" : ""}`}
                    style={{
                      transitionDelay: mvVisible ? `${item.delay}s` : "0s",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.2rem",
                        fontWeight: 600,
                        color: "#111",
                        margin: "0 0 0.75rem",
                      }}
                    >
                      {item.title}
                    </h3>
                    <div
                      style={{
                        width: "1.5rem",
                        height: "1px",
                        background: gradient,
                        margin: "0 auto 1rem",
                      }}
                    />
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "#666",
                        lineHeight: 1.8,
                        fontWeight: 300,
                        margin: 0,
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── TripAdvisor ── */}
          <div
            style={{
              background: "#fafaf8",
              padding: "5rem 0",
              textAlign: "center",
            }}
            ref={taRef}
          >
            <div
              style={{
                maxWidth: "1280px",
                margin: "0 auto",
                padding: "0 1.5rem",
              }}
            >
              <div
                className={`ap-fade ${taVisible ? "on" : ""}`}
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
                  Traveler Reviews
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
                className={`ap-fade ap-d1 ${taVisible ? "on" : ""}`}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.9rem, 3vw, 2.6rem)",
                  fontWeight: 600,
                  color: "#111",
                  lineHeight: 1.2,
                  margin: "0 0 1rem",
                }}
              >
                We're on TripAdvisor!
              </h2>

              <div
                className={`ap-fade ap-d1 ${taVisible ? "on" : ""}`}
                style={{
                  width: "2.5rem",
                  height: "1px",
                  background: gradient,
                  margin: "0 auto 1.25rem",
                }}
              />

              <p
                className={`ap-fade ap-d2 ${taVisible ? "on" : ""}`}
                style={{
                  fontSize: "0.875rem",
                  color: "#555",
                  lineHeight: 1.85,
                  fontWeight: 300,
                  maxWidth: "36rem",
                  margin: "0 auto 2rem",
                }}
              >
                Check out our reviews and see why travelers love Tango Cabs &
                Tours.
              </p>

              <div
                className={`ap-fade ap-d2 ${taVisible ? "on" : ""}`}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "1.75rem",
                }}
              >
                <a
                  href="https://www.tripadvisor.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transition: "opacity 0.2s ease",
                  }}
                >
                  <Image
                    src="/tripadvisor.png"
                    alt="TripAdvisor"
                    width={150}
                    height={50}
                  />
                </a>
              </div>

              <div className={`ap-fade ap-d3 ${taVisible ? "on" : ""}`}>
                <a
                  href="https://www.tripadvisor.com/Attraction_Review-g304142-d34097471-Reviews-Tango_Cabs_Sri_lanka-Tangalle_Southern_Province.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ap-ta-btn"
                >
                  <span>Read Reviews</span>
                  <span style={{ fontSize: "0.65rem" }}>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <FloatingIcons />
        <Footer />
      </div>
    </>
  );
};

export default page;
