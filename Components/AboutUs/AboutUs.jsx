"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutUs() {
  // Variants for animations
  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
    },
    hover: { scale: 1.05 },
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariant}
        >
          {/* Left: Text Content */}
          <motion.div className="space-y-6" variants={containerVariant}>
            <motion.h4
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#e8bc74] to-[#4d7c9c] font-semibold uppercase tracking-wider"
              variants={textVariant}
            >
              About Tango Cabs & Tours
            </motion.h4>

            <motion.h1
              className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight"
              variants={textVariant}
            >
              Discover the Beauty of Sri Lanka
              <br />
              With Comfort and Style
            </motion.h1>

            <motion.div
              className="space-y-4 text-gray-600 text-lg"
              variants={textVariant}
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
            </motion.div>

            <motion.a
              href="tel:+94700000000"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md text-white font-semibold
                bg-[linear-gradient(188deg,rgba(79,126,156,1)_0%,rgba(117,156,158,1)_54%,rgba(131,160,153,1)_64%,rgba(144,163,149,1)_70%,rgba(156,166,145,1)_79%,rgba(172,171,139,1)_89%,rgba(232,188,118,1)_100%)]
                transition-transform"
              variants={buttonVariant}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              Book a Tour
            </motion.a>
          </motion.div>

          {/* Right: Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div className="row-span-2" variants={imageVariant}>
              <img
                src="https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg"
                alt="Sri Lanka scenic beach"
                className="rounded-lg object-cover w-full h-full shadow-lg"
              />
            </motion.div>

            <motion.div variants={imageVariant}>
              <img
                src="https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg"
                alt="Sri Lanka tea plantations"
                className="rounded-lg object-cover w-full h-full shadow-lg"
              />
            </motion.div>

            <motion.div variants={imageVariant}>
              <img
                src="https://images.pexels.com/photos/667205/pexels-photo-667205.jpeg"
                alt="Sri Lanka cultural temple"
                className="rounded-lg object-cover w-full h-full shadow-lg"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
