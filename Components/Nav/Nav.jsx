"use client";

import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // current route

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Tour Packages", href: "/tours" },
    { name: "Custom Tours", href: "/custom-tours" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-18 items-center justify-between">
          <Link className="flex items-center gap-3" href="/">
            <div className="text-primary">
              <img
                src="/logo.jpeg"
                alt="Green Lobster Logo"
                className="rounded-full w-9 h-9 "
              />
            </div>

            <div className="flex flex-col">
              <h1 className="text-md font-semibold tracking-tight text-neutral-900">
                Tango Cabs
              </h1>
              <span className="text-[8px] tracking-wider uppercase text-primary/80 font-medium">
                Sri Lanka
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`
    relative text-sm md:text-sm font-normal  transition-colors
    after:content-[''] after:absolute after:w-0 after:h-[2px]
    after:left-0 after:-bottom-1 after:transition-all after:duration-300
    after:bg-[linear-gradient(188deg,rgba(79,126,156,1)_0%,rgba(117,156,158,1)_54%,rgba(144,163,149,1)_79%,rgba(172,171,139,1)_90%,rgba(232,188,118,1)_100%)]
    hover:after:w-full
    ${
      pathname === item.href
        ? "text-transparent bg-clip-text bg-[linear-gradient(188deg,rgba(79,126,156,1)_0%,rgba(117,156,158,1)_54%,rgba(144,163,149,1)_79%,rgba(172,171,139,1)_90%,rgba(232,188,118,1)_100%)] after:w-full"
        : "text-gray-800"
    }
  `}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Call Us + Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Desktop Button */}
            <a
              href="tel:+94777266518"
              className="
    hidden md:flex items-center justify-center
    px-6 py-1.5 rounded-sm
    text-black/70 font-normal text-sm
    border border-black/80
    bg-transparent

    hover:text-white
    hover:border-transparent
    hover:bg-[linear-gradient(188deg,rgba(79,126,156,1)_0%,rgba(117,156,158,1)_54%,rgba(144,163,149,1)_79%,rgba(172,171,139,1)_90%,rgba(232,188,118,1)_100%)]

    transition-all duration-300
  "
            >
              Book a Tour
            </a>

            {/* <a
              href="tel:+94777266518"
              className="hidden md:flex items-center justify-center px-6 py-1.5 rounded-sm text-white font-semibold text-sm
             bg-[linear-gradient(188deg,rgba(79,126,156,1)_0%,rgba(117,156,158,1)_54%,rgba(144,163,149,1)_79%,rgba(172,171,139,1)_90%,rgba(232,188,118,1)_100%)]
             hover:opacity-90 transition"
            >
              Book a Tour
            </a> */}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-3xl text-gray-800"
            >
              {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden flex flex-col gap-4  border-t border-gray-200 animate-fadeIn">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-base font-medium px-2 transition
                ${
                  pathname === item.href
                    ? "text-[#4D7C9C]"
                    : "text-gray-800 hover:text-[#4D7C9C]"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Call Button */}
            <a
              href="tel:+94777266518"
              className="w-full h-11 rounded-sm text-white text-sm mb-4 font-semibold flex items-center justify-center
              bg-[linear-gradient(189deg,rgba(77,124,156,1)0%,rgba(89,129,153,1)35%,rgba(132,147,142,1)100%,rgba(232,188,116,1)100%)]
              hover:opacity-90 transition"
            >
              Book a Tour
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Nav;
