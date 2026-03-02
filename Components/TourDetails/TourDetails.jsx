"use client";

import { IoTimeOutline, IoLocationOutline } from "react-icons/io5";
import { FaMapMarkedAlt } from "react-icons/fa";

const gradient =
  "linear-gradient(188deg, rgba(79,126,156,1) 0%, rgba(117,156,158,1) 54%, rgba(144,163,149,1) 79%, rgba(172,171,139,1) 90%, rgba(232,188,118,1) 100%)";

export default function TourDetails({ tour }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

        .td-root { font-family: 'DM Sans', sans-serif; }

        .td-stat-card {
          display: flex;
          align-items: flex-start;
          gap: 0.875rem;
          padding: 1rem 1.25rem;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 4px;
          transition: box-shadow 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .td-stat-card::before {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: ${gradient};
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .td-stat-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.07); }
        .td-stat-card:hover::before { opacity: 1; }

        .td-stat-label {
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #999;
          font-weight: 500;
          margin-bottom: 0.25rem;
        }
        .td-stat-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.05rem;
          font-weight: 600;
          color: #111;
          line-height: 1.3;
        }

        .td-description p {
          font-size: 0.875rem;
          color: #555;
          line-height: 1.85;
          font-weight: 300;
          margin-bottom: 0.75rem;
        }
        .td-description p:last-child { margin-bottom: 0; }

        .td-highlights-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem;
          font-weight: 600;
          color: #111;
          margin: 0 0 1rem;
        }

        .td-highlight-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.65rem 0.875rem;
          background: #fafaf8;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 3px;
          font-size: 0.825rem;
          color: #444;
          font-weight: 300;
          transition: border-color 0.2s ease;
        }
        .td-highlight-item:hover { border-color: rgba(79,126,156,0.35); }

        .td-note {
          padding: 1rem 1.25rem;
          background: rgba(232,188,118,0.08);
          border-left: 3px solid;
          border-image: ${gradient} 1;
          border-radius: 0 3px 3px 0;
          font-size: 0.825rem;
          color: #555;
          font-weight: 300;
          line-height: 1.7;
        }
        .td-note strong {
          font-weight: 500;
          color: #333;
        }
      `}</style>

      <div
        className="td-root"
        style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}
      >
        {/* Duration + Route */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.875rem",
          }}
        >
          <div className="td-stat-card">
            <IoTimeOutline
              style={{
                color: "#4d7c9c",
                fontSize: "1.2rem",
                flexShrink: 0,
                marginTop: "0.1rem",
              }}
            />
            <div>
              <p className="td-stat-label">Duration</p>
              <p className="td-stat-value">{tour.duration}</p>
            </div>
          </div>
          <div className="td-stat-card">
            <IoLocationOutline
              style={{
                color: "#4d7c9c",
                fontSize: "1.2rem",
                flexShrink: 0,
                marginTop: "0.1rem",
              }}
            />
            <div>
              <p className="td-stat-label">Route</p>
              <p className="td-stat-value">{tour.route}</p>
            </div>
          </div>
        </div>

        {/* Thin gradient divider */}
        <div style={{ width: "2.5rem", height: "1px", background: gradient }} />

        {/* Description */}
        <div className="td-description">
          {tour.fullDescription
            .split("\n")
            .map((line, i) =>
              line.trim() ? <p key={i}>{line.trim()}</p> : null,
            )}
        </div>

        {/* Highlights */}
        {tour.highlights?.length > 0 && (
          <div>
            <h3 className="td-highlights-heading">Tour Highlights</h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.5rem",
              }}
            >
              {tour.highlights.map((h, i) => (
                <div key={i} className="td-highlight-item">
                  <FaMapMarkedAlt
                    style={{
                      color: "#4d7c9c",
                      flexShrink: 0,
                      fontSize: "0.75rem",
                    }}
                  />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Note */}
        <div className="td-note">
          <strong>Note:</strong> Prices depend on date, passengers, and vehicle
          type. Contact us on WhatsApp for exact pricing.
        </div>
      </div>
    </>
  );
}
