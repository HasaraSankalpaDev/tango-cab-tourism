"use client";

import Link from "next/link";
import {
  IoMailOutline,
  IoCallOutline,
  IoLogoWhatsapp,
  IoLogoFacebook,
  IoLogoInstagram,
} from "react-icons/io5";

const Footer = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Tour Packages", href: "/tours" },
    { name: "Custom Tours", href: "/custom-tours" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer
      className="text-white"
      style={{
        background: `linear-gradient(188deg, rgba(79,126,156,1) 0%, rgba(117,156,158,1) 54%, rgba(131,160,153,1) 64%, rgba(144,163,149,1) 70%, rgba(156,166,145,1) 79%, rgba(172,171,139,1) 89%, rgba(232,188,118,1) 100%)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Tango Cabs & Tours</h2>
          <p className="text-sm text-white/80">
            Explore Sri Lanka safely and comfortably with our premium cab and
            tour services. Your journey is our priority.
          </p>
        </div>

        {/* Footer Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-white hover:text-white/90 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <IoMailOutline /> tangocabssrilanka@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <IoCallOutline /> +94 77 726 6518
            </li>
            <li className="flex items-center gap-2">
              <IoLogoWhatsapp /> +94 77 726 6518
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center gap-4">
            {[IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex bg-[#4F7E9C] items-center justify-center rounded-full text-white shadow-lg transition hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 py-6 text-center text-sm text-white/80">
        &copy; {new Date().getFullYear()} Tango Cabs & Tours. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
