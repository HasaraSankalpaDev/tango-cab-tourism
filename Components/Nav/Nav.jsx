"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
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
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-transparent.png"
              href="/"
              alt="Logo"
              width={80}
              height={80}
              className="object-contain"
              priority
              sizes="80px"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`
    relative text-base md:text-base font-medium transition-colors
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
              className="hidden lg:flex items-center justify-center px-6 py-2 rounded-sm text-white font-semibold
             bg-[linear-gradient(188deg,rgba(79,126,156,1)_0%,rgba(117,156,158,1)_54%,rgba(144,163,149,1)_79%,rgba(172,171,139,1)_90%,rgba(232,188,118,1)_100%)]
             hover:opacity-90 transition"
            >
              Book a Tour
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-3xl text-gray-800"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="lg:hidden flex flex-col gap-4 py-4 border-t border-gray-200 animate-fadeIn">
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
              className="w-full h-11 rounded-sm text-white text-sm font-semibold flex items-center justify-center
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
