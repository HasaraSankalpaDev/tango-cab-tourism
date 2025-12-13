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
  return (
    <footer className="bg-[linear-gradient(189deg,rgba(77,124,156,1)0%,rgba(89,129,153,1)35%,rgba(132,147,142,1)100%,rgba(232,188,116,1)100%)] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Tango Cabs & Tours</h2>
          <p className="text-sm text-white/80">
            Explore Sri Lanka safely and comfortably with our premium cab and
            tour services. Your journey is our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:opacity-90 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/tours" className="hover:opacity-90 transition">
                Tours
              </Link>
            </li>
            <li>
              <Link href="/vehicles" className="hover:opacity-90 transition">
                Vehicles
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:opacity-90 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <IoMailOutline /> info@tangocabs.com
            </li>
            <li className="flex items-center gap-2">
              <IoCallOutline /> +94 77 000 0000
            </li>
            <li className="flex items-center gap-2">
              <IoLogoWhatsapp /> +94 77 000 0000
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-90 transition">
              <IoLogoFacebook size={24} />
            </a>
            <a href="#" className="hover:opacity-90 transition">
              <IoLogoInstagram size={24} />
            </a>
            <a href="#" className="hover:opacity-90 transition">
              <IoLogoWhatsapp size={24} />
            </a>
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
