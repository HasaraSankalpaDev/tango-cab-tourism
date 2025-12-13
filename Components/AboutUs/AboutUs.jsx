"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="space-y-6">
            <h4
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#e8bc74] to-[#4d7c9c] font-semibold uppercase tracking-wider"
              data-aos="fade-up"
            >
              About Tango Cabs & Tours
            </h4>

            <h1
              className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Discover the Beauty of Sri Lanka
              <br />
              With Comfort and Style
            </h1>

            <div
              className="space-y-4 text-gray-600 text-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p>
                Tango Cabs & Tours offers premium cab services and curated
                travel experiences across Sri Lanka. From golden beaches in
                Galle to the misty hills of Nuwara Eliya, we make every journey
                seamless, safe, and memorable.
              </p>
              <p>
                Whether you're traveling for sightseeing, adventure, or cultural
                immersion, our professional drivers and local guides ensure a
                comfortable and personalized experience. Explore the island at
                your pace and let us handle the logistics.
              </p>
            </div>

            <a
              href="tel:+94777266518"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md text-white font-semibold
                bg-[linear-gradient(188deg,rgba(79,126,156,1)_0%,rgba(117,156,158,1)_54%,rgba(131,160,153,1)_64%,rgba(144,163,149,1)_70%,rgba(156,166,145,1)_79%,rgba(172,171,139,1)_89%,rgba(232,188,118,1)_100%)]
                hover:bg-[linear-gradient(188deg,#4d7c9c_0%,#e8bc74_100%)]
                transition-colors duration-500"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Book a Tour
            </a>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="row-span-2" data-aos="fade-up" data-aos-delay="100">
              <Image
                src="https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sri Lanka scenic beach"
                width={800}
                height={800}
                className="rounded-lg object-cover w-full h-full shadow-lg"
                priority
              />
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <Image
                src="https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sri Lanka tea plantations"
                width={400}
                height={400}
                className="rounded-lg object-cover w-full h-full shadow-lg"
              />
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              <Image
                src="https://images.pexels.com/photos/667205/pexels-photo-667205.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sri Lanka cultural temple"
                width={400}
                height={400}
                className="rounded-lg object-cover w-full h-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
