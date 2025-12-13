import AboutHero from "@/Components/AboutHero/AboutHero";
import Nav from "@/Components/Nav/Nav";
import React from "react";
import Image from "next/image";
import Footer from "@/Components/Footer/Footer";
import FloatingIcons from "@/Components/FloatingIcons/FloatingIcons";

const page = () => {
  return (
    <div>
      <Nav />
      <AboutHero />

      <section className="bg-gray-50">
        {/* Our Story Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2015, Tango Cabs & Tours has been dedicated to offering
              premium cab services and curated tours across Sri Lanka. Our
              passion for travel and hospitality drives us to deliver
              experiences that are safe, reliable, and truly memorable.
            </p>
            <p className="text-gray-700">
              With a fleet of modern vehicles, experienced drivers, and local
              expertise, we make your journey stress-free and enjoyable. From
              scenic coastal drives to adventurous safari trips, we are your
              trusted travel partner.
            </p>
          </div>
          <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/logo.jpeg"
              alt="Our Story"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-gray-50 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To provide safe, comfortable, and reliable travel experiences
                that exceed our clients’ expectations.
              </p>
            </div>
            <div className="p-8 bg-gray-50 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted travel and cab service in Sri Lanka,
                connecting travelers with unforgettable experiences.
              </p>
            </div>
            <div className="p-8 bg-gray-50 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <p className="text-gray-600">
                Safety, Reliability, Customer Satisfaction, and a Passion for
                Travel.
              </p>
            </div>
          </div>
        </div>

        {/* TripAdvisor Section - Simple, above footer */}
        <div className="bg-white py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            We’re on TripAdvisor!
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Check out our reviews and see why travelers love Tango Cabs & Tours.
          </p>
          <div className="flex justify-center items-center gap-6 mb-6">
            {/* TripAdvisor logo */}
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
            {/* Example link to reviews */}
          </div>
          <a
            href="https://www.tripadvisor.com/YourBusinessPage"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-[#4d7c9c] text-white font-semibold hover:bg-[#3a5a73] transition"
          >
            Read Reviews
          </a>
        </div>
      </section>
      <FloatingIcons />
      <Footer />
    </div>
  );
};

export default page;
