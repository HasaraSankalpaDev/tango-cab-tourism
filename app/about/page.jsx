"use client";

import AboutHero from "@/Components/AboutHero/AboutHero";
import Nav from "@/Components/Nav/Nav";
import React, { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Footer from "@/Components/Footer/Footer";
import FloatingIcons from "@/Components/FloatingIcons/FloatingIcons";
import AOS from "aos";
import "aos/dist/aos.css";

/* 🔥 SEO DATA (Client-safe) */
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

const page = () => {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out", once: true });
  }, []);

  return (
    <>
      {/* ✅ SEO injected safely */}
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />

        {/* Optional but recommended */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Tango Cabs Sri Lanka" />
      </Head>

      {/* 🔻 YOUR CONTENT (UNCHANGED) */}
      <div>
        <Nav />
        <AboutHero />

        <section className="bg-gray-50">
          {/* Our Story Section */}
          <div
            className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            data-aos="fade-up"
          >
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-gray-700 mb-4">
                Founded in 2015, Tango Cabs & Tours has been dedicated to
                offering premium cab services and curated tours across Sri
                Lanka. Our passion for travel and hospitality drives us to
                deliver experiences that are safe, reliable, and truly
                memorable.
              </p>
              <p className="text-gray-700">
                With a fleet of modern vehicles, experienced drivers, and local
                expertise, we make your journey stress-free and enjoyable. From
                scenic coastal drives to adventurous safari trips, we are your
                trusted travel partner.
              </p>
            </div>
            <div
              className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Image
                src="/logo.jpeg"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Mission & Vision Section */}
          <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div
                className="p-8 rounded-md shadow-sm border-2 border-gray-200"
                data-aos="fade-up"
              >
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To provide safe, comfortable, and reliable travel experiences
                  that exceed our clients’ expectations.
                </p>
              </div>
              <div
                className="p-8 rounded-md shadow-sm border-2 border-gray-200"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To be the most trusted travel and cab service in Sri Lanka,
                  connecting travelers with unforgettable experiences.
                </p>
              </div>
              <div
                className="p-8 rounded-md shadow-sm border-2 border-gray-200"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <p className="text-gray-600">
                  Safety, Reliability, Customer Satisfaction, and a Passion for
                  Travel.
                </p>
              </div>
            </div>
          </div>

          {/* TripAdvisor Section */}
          <div className="bg-white py-16 text-center" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              We’re on TripAdvisor!
            </h2>
            <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto mb-8">
              Check out our reviews and see why travelers love Tango Cabs &
              Tours.
            </p>
            <div
              className="flex justify-center items-center gap-6 mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a
                href="https://www.tripadvisor.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-90 transition"
              >
                <Image
                  src="/tripadvisor.png"
                  alt="TripAdvisor"
                  width={150}
                  height={50}
                />
              </a>
            </div>
            <a
              href="https://www.tripadvisor.com/Attraction_Review-g304142-d34097471-Reviews-Tango_Cabs_Sri_lanka-Tangalle_Southern_Province.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-[#4d7c9c] text-white font-semibold hover:bg-[#3a5a73] transition text-sm sm:text-base"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Read Reviews
            </a>
          </div>
        </section>

        <FloatingIcons />
        <Footer />
      </div>
    </>
  );
};

export default page;
