// "use client";

// import Link from "next/link";
// import {
//   IoMailOutline,
//   IoCallOutline,
//   IoLogoWhatsapp,
//   IoLogoFacebook,
//   IoLogoYoutube,
// } from "react-icons/io5";

// const Footer = () => {
//   const navItems = [
//     { name: "Home", href: "/" },
//     { name: "Tour Packages", href: "/tours" },
//     { name: "Custom Tours", href: "/custom-tours" },
//     { name: "About Us", href: "/about" },
//     { name: "Contact Us", href: "/contact" },
//   ];

//   return (
//     <footer
//       className="text-white"
//       style={{
//         background: `linear-gradient(188deg, rgba(79,126,156,1) 0%, rgba(117,156,158,1) 54%, rgba(131,160,153,1) 64%, rgba(144,163,149,1) 70%, rgba(156,166,145,1) 79%, rgba(172,171,139,1) 89%, rgba(232,188,118,1) 100%)`,
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
//         {/* Logo + Description */}
//         <div className="space-y-4">
//           <h2 className="text-xl font-bold">Tango Cabs & Tours</h2>
//           <p className="text-xs text-white/80">
//             Explore Sri Lanka safely and comfortably with our premium cab and
//             tour services. Your journey is our priority.
//           </p>
//         </div>

//         {/* Footer Navigation */}
//         <div>
//           <h3 className="text-md font-semibold mb-4">Quick Links</h3>
//           <ul className="space-y-2">
//             {navItems.map((item) => (
//               <li key={item.name}>
//                 <Link
//                   href={item.href}
//                   className="text-white text-sm hover:text-white/90 transition"
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h3 className="text-md font-semibold mb-4">Contact Us</h3>
//           <ul className="space-y-2">
//             <li className="flex items-center gap-2 text-xs">
//               <IoMailOutline /> tangocabssrilanka@gmail.com
//             </li>
//             <li className="flex items-center gap-2 text-xs">
//               <IoCallOutline /> +94 77 726 6518
//             </li>
//             <li className="flex items-center gap-2 text-xs">
//               <IoLogoWhatsapp /> +94 77 726 6518
//             </li>
//           </ul>
//         </div>

//         {/* Social Media */}
//         <div>
//           <h3 className="text-md font-semibold mb-4">Follow Us</h3>
//           <div className="flex items-center gap-4">
//             <a
//               href="https://www.facebook.com/profile.php?id=100063455562022"
//               target="_blank"
//               className="w-8 h-8 flex bg-[#4F7E9C] items-center justify-center rounded-full text-white shadow-lg transition hover:scale-110"
//             >
//               <IoLogoFacebook size={18} />
//             </a>

//             <a
//               href="https://www.youtube.com/@tangocabs.srilanka"
//               target="_blank"
//               className="w-8 h-8 flex bg-[#4F7E9C] items-center justify-center rounded-full text-white shadow-lg transition hover:scale-110"
//             >
//               <IoLogoYoutube size={18} />
//             </a>

//             <a
//               href="https://wa.me/94777266518"
//               target="_blank"
//               className="w-8 h-8 flex bg-[#4F7E9C] items-center justify-center rounded-full text-white shadow-lg transition hover:scale-110"
//             >
//               <IoLogoWhatsapp size={18} />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="border-t border-white/20 py-6 text-center text-xs text-white/80">
//         © {new Date().getFullYear()} Tango Cabs & Tours. All rights reserved.{" "}
//         <br />
//         <span className="text-white/70">
//           Developed by{" "}
//           <a
//             href="https://lankawebsolutions.lk"
//             target="_blank"
//             className="underline hover:text-white transition"
//           >
//             Lanka Web Solutions
//           </a>
//         </span>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";

import Link from "next/link";
import {
  IoMailOutline,
  IoCallOutline,
  IoLogoWhatsapp,
  IoLogoFacebook,
  IoLogoYoutube,
} from "react-icons/io5";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Tour Packages", href: "/tours" },
  { name: "Custom Tours", href: "/custom-tours" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

        .footer-root {
          font-family: 'DM Sans', sans-serif;
          background: linear-gradient(188deg, rgba(79,126,156,1) 0%, rgba(117,156,158,1) 54%, rgba(131,160,153,1) 64%, rgba(144,163,149,1) 70%, rgba(156,166,145,1) 79%, rgba(172,171,139,1) 89%, rgba(232,188,118,1) 100%);
          color: white;
        }

        .footer-col-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.05rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          margin: 0 0 1.25rem;
          color: white;
        }

        .footer-nav-link {
          display: block;
          font-size: 0.8rem;
          font-weight: 300;
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          padding: 0.2rem 0;
          letter-spacing: 0.04em;
          transition: color 0.2s ease, padding-left 0.2s ease;
        }
        .footer-nav-link:hover { color: white; padding-left: 4px; }

        .footer-contact-row {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          font-size: 0.8rem;
          font-weight: 300;
          color: rgba(255,255,255,0.8);
          padding: 0.3rem 0;
        }

        .footer-social-btn {
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.15);
          color: white;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.25);
          transition: background 0.25s ease, transform 0.25s cubic-bezier(0.22,1,0.36,1);
        }
        .footer-social-btn:hover {
          background: rgba(255,255,255,0.3);
          transform: scale(1.1);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 3rem;
          padding: 5rem 1.5rem 4rem;
          max-width: 1280px;
          margin: 0 auto;
        }
        @media (max-width: 1023px) { .footer-grid { grid-template-columns: 1fr 1fr; gap: 2.5rem; } }
        @media (max-width: 639px) { .footer-grid { grid-template-columns: 1fr; gap: 2rem; padding: 3.5rem 1.5rem 3rem; } }

        .footer-divider {
          height: 1px;
          background: rgba(255,255,255,0.15);
          max-width: 1280px;
          margin: 0 auto;
        }

        .footer-bottom {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        @media (max-width: 639px) { .footer-bottom { flex-direction: column; text-align: center; } }
      `}</style>

      <footer className="footer-root">
        <div className="footer-grid">
          {/* Brand */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.5rem",
                fontWeight: 600,
                margin: 0,
                letterSpacing: "0.02em",
              }}
            >
              Tango Cabs & Tours
            </h2>
            <div
              style={{
                width: "2rem",
                height: "1px",
                background: "rgba(255,255,255,0.4)",
              }}
            />
            <p
              style={{
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.8,
                fontWeight: 300,
                margin: 0,
              }}
            >
              Explore Sri Lanka safely and comfortably with our premium cab and
              tour services. Your journey is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-col-title">Quick Links</h3>
            <nav style={{ display: "flex", flexDirection: "column" }}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="footer-nav-link"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer-col-title">Contact Us</h3>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="footer-contact-row">
                <IoMailOutline style={{ flexShrink: 0, opacity: 0.85 }} />
                <span>tangocabssrilanka@gmail.com</span>
              </div>
              <div className="footer-contact-row">
                <IoCallOutline style={{ flexShrink: 0, opacity: 0.85 }} />
                <span>+94 77 726 6518</span>
              </div>
              <div className="footer-contact-row">
                <IoLogoWhatsapp style={{ flexShrink: 0, opacity: 0.85 }} />
                <span>+94 77 726 6518</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="footer-col-title">Follow Us</h3>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <a
                href="https://www.facebook.com/profile.php?id=100063455562022"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
              >
                <IoLogoFacebook size={16} />
              </a>
              <a
                href="https://www.youtube.com/@tangocabs.srilanka"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
              >
                <IoLogoYoutube size={16} />
              </a>
              <a
                href="https://wa.me/94777266518"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
              >
                <IoLogoWhatsapp size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ padding: "0 1.5rem" }}>
          <div className="footer-divider" />
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span
            style={{
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.7)",
              fontWeight: 300,
            }}
          >
            © {new Date().getFullYear()} Tango Cabs & Tours. All rights
            reserved.
          </span>
          <span
            style={{
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.6)",
              fontWeight: 300,
            }}
          >
            Developed by{" "}
            <a
              href="https://lankawebsolutions.lk"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(255,255,255,0.85)",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                transition: "color 0.2s ease",
              }}
            >
              Lanka Web Solutions
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
