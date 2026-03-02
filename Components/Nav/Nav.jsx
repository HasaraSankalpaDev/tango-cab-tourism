// "use client";

// import { useState } from "react";
// import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const Nav = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const pathname = usePathname(); // current route

//   const navItems = [
//     { name: "Home", href: "/" },
//     { name: "Tour Packages", href: "/tours" },
//     { name: "Custom Tours", href: "/custom-tours" },
//     { name: "About Us", href: "/about" },
//     { name: "Contact Us", href: "/contact" },
//   ];

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white backdrop-blur-md shadow-sm">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex h-18 items-center justify-between">
//           <Link className="flex items-center gap-3" href="/">
//             <div className="text-primary">
//               <img
//                 src="/logo.jpeg"
//                 alt="Green Lobster Logo"
//                 className="rounded-full w-9 h-9 "
//               />
//             </div>

//             <div className="flex flex-col">
//               <h1 className="text-md font-semibold tracking-tight text-neutral-900">
//                 Tango Cabs
//               </h1>
//               <span className="text-[8px] tracking-wider uppercase text-primary/80 font-medium">
//                 Sri Lanka
//               </span>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-8">
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className={`
//     relative text-sm md:text-sm font-normal  transition-colors
//     after:content-[''] after:absolute after:w-0 after:h-[2px]
//     after:left-0 after:-bottom-1 after:transition-all after:duration-300
//     after:bg-[linear-gradient(188deg,rgba(79,126,156,1)_0%,rgba(117,156,158,1)_54%,rgba(144,163,149,1)_79%,rgba(172,171,139,1)_90%,rgba(232,188,118,1)_100%)]
//     hover:after:w-full
//     ${
//       pathname === item.href
//         ? "text-transparent bg-clip-text bg-[linear-gradient(188deg,rgba(79,126,156,1)_0%,rgba(117,156,158,1)_54%,rgba(144,163,149,1)_79%,rgba(172,171,139,1)_90%,rgba(232,188,118,1)_100%)] after:w-full"
//         : "text-gray-800"
//     }
//   `}
//               >
//                 {item.name}
//               </a>
//             ))}
//           </nav>

//           {/* Call Us + Mobile Menu */}
//           <div className="flex items-center gap-3">
//             {/* Desktop Button */}
//             <a
//               href="tel:+94777266518"
//               className="
//     hidden md:flex items-center justify-center
//     px-6 py-1.5 rounded-sm
//     text-black/70 font-normal text-sm
//     border border-black/80
//     bg-transparent

//     hover:text-white
//     hover:border-transparent
//     hover:bg-[linear-gradient(188deg,rgba(79,126,156,1)_0%,rgba(117,156,158,1)_54%,rgba(144,163,149,1)_79%,rgba(172,171,139,1)_90%,rgba(232,188,118,1)_100%)]

//     transition-all duration-300
//   "
//             >
//               Book a Tour
//             </a>

//             {/* <a
//               href="tel:+94777266518"
//               className="hidden md:flex items-center justify-center px-6 py-1.5 rounded-sm text-white font-semibold text-sm
//              bg-[linear-gradient(188deg,rgba(79,126,156,1)_0%,rgba(117,156,158,1)_54%,rgba(144,163,149,1)_79%,rgba(172,171,139,1)_90%,rgba(232,188,118,1)_100%)]
//              hover:opacity-90 transition"
//             >
//               Book a Tour
//             </a> */}

//             {/* Mobile Menu Toggle */}
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="md:hidden text-3xl text-gray-800"
//             >
//               {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <nav className="md:hidden flex flex-col gap-4  border-t border-gray-200 animate-fadeIn">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 onClick={() => setMenuOpen(false)}
//                 className={`text-base font-medium px-2 transition
//                 ${
//                   pathname === item.href
//                     ? "text-[#4D7C9C]"
//                     : "text-gray-800 hover:text-[#4D7C9C]"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}

//             {/* Mobile Call Button */}
//             <a
//               href="tel:+94777266518"
//               className="w-full h-11 rounded-sm text-white text-sm mb-4 font-semibold flex items-center justify-center
//               bg-[linear-gradient(189deg,rgba(77,124,156,1)0%,rgba(89,129,153,1)35%,rgba(132,147,142,1)100%,rgba(232,188,116,1)100%)]
//               hover:opacity-90 transition"
//             >
//               Book a Tour
//             </a>
//           </nav>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Nav;

"use client";

import { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Tour Packages", href: "/tours" },
    { name: "Custom Tours", href: "/custom-tours" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const gradient =
    "linear-gradient(188deg, rgba(79,126,156,1) 0%, rgba(117,156,158,1) 54%, rgba(144,163,149,1) 79%, rgba(172,171,139,1) 90%, rgba(232,188,118,1) 100%)";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

        .nav-root {
          font-family: 'DM Sans', sans-serif;
        }

        .nav-logo-text {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          letter-spacing: 0.04em;
        }

        .nav-link {
          position: relative;
          font-size: 0.8125rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #4a4a4a;
          text-decoration: none;
          transition: color 0.3s ease;
          padding-bottom: 3px;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 1.5px;
          background: ${gradient};
          transition: width 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .nav-link.active {
          background: ${gradient};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .book-btn {
          position: relative;
          overflow: hidden;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 600;
          padding: 0.5rem 1.5rem;
          border: 1.8px solid rgba(79,126,156,0.5);
          color: #4a4a4a;
          background: transparent;
          text-decoration: none;
          transition: color 0.3s ease, border-color 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .book-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: ${gradient};
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 0;
        }

        .book-btn:hover::before {
          opacity: 1;
        }

        .book-btn:hover {
          color: white;
          border-color: transparent;
        }

        .book-btn span {
          position: relative;
          z-index: 1;
        }

        .mobile-menu {
          animation: slideDown 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .mobile-link {
          font-size: 0.875rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 400;
          color: #4a4a4a;
          text-decoration: none;
          padding: 0.625rem 0;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          transition: color 0.2s ease;
          display: block;
        }

        .mobile-link:last-of-type {
          border-bottom: none;
        }

        .mobile-link.active {
          background: ${gradient};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .mobile-book-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 2.75rem;
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 500;
          color: white;
          text-decoration: none;
          background: ${gradient};
          transition: opacity 0.2s ease;
        }

        .mobile-book-btn:hover {
          opacity: 0.9;
        }

        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(79,126,156,0.2), transparent);
        }
      `}</style>

      <header
        className="nav-root sticky top-0 z-50 w-full bg-white"
        style={{
          borderBottom: scrolled
            ? "1px solid rgba(0,0,0,0.08)"
            : "1px solid rgba(0,0,0,0.06)",
          boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.06)" : "none",
          transition: "box-shadow 0.4s ease, border-color 0.4s ease",
        }}
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
        >
          <div
            style={{
              display: "flex",
              height: "4.25rem",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Logo */}
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                textDecoration: "none",
              }}
            >
              <img
                src="/logo.jpeg"
                alt="Tango Cabs Logo"
                style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.05rem",
                }}
              >
                <span
                  className="nav-logo-text"
                  style={{
                    fontSize: "1.125rem",
                    color: "#1a1a1a",
                    lineHeight: 1,
                  }}
                >
                  Tango Cabs
                </span>
                <span
                  style={{
                    fontSize: "0.5rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(79,126,156,0.75)",
                    fontWeight: 500,
                  }}
                >
                  Sri Lanka
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav
              style={{ display: "none", alignItems: "center", gap: "2.25rem" }}
              className="desktop-nav md-flex"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`nav-link ${pathname === item.href ? "active" : ""}`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Right side */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <a href="tel:+94777266518" className="book-btn desktop-book">
                <span>Book a Tour</span>
              </a>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="mobile-toggle"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#333",
                  display: "none",
                  fontSize: "1.5rem",
                  padding: "0.25rem",
                }}
                aria-label="Toggle menu"
              >
                {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <nav className="mobile-menu" style={{ paddingBottom: "1.25rem" }}>
              <div className="divider" style={{ marginBottom: "0.75rem" }} />
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`mobile-link ${pathname === item.href ? "active" : ""}`}
                >
                  {item.name}
                </Link>
              ))}
              <div style={{ marginTop: "1rem" }}>
                <a href="tel:+94777266518" className="mobile-book-btn">
                  Book a Tour
                </a>
              </div>
            </nav>
          )}
        </div>

        {/* Responsive CSS */}
        <style>{`
          @media (min-width: 768px) {
            .desktop-nav { display: flex !important; }
            .desktop-book { display: inline-flex !important; }
            .mobile-toggle { display: none !important; }
          }
          @media (max-width: 767px) {
            .desktop-nav { display: none !important; }
            .desktop-book { display: none !important; }
            .mobile-toggle { display: flex !important; }
          }
        `}</style>
      </header>
    </>
  );
};

export default Nav;
