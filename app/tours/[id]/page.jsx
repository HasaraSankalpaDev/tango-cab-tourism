"use client";

import { useState, useRef } from "react";
import { use } from "react";
import { tours } from "@/Data/Tours";
import Link from "next/link";
import {
  IoTimeOutline,
  IoLocationOutline,
  IoPricetagOutline,
} from "react-icons/io5";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Nav from "@/Components/Nav/Nav";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Thumbs, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import { BookingForm } from "@/Components/BookingForm/BookingForm";

const TourDetailsPage = ({ params }) => {
  const { id } = use(params);
  const tourId = parseInt(id, 10);
  const tour = tours.find((t) => t.id === tourId);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // Refs for custom navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  if (!tour) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-2xl font-bold">Tour Not Found</h2>
        <Link
          href="/tours"
          className="mt-4 inline-block text-white bg-[#4d7c9c] px-6 py-3 rounded-md hover:bg-[#3a5a73] transition"
        >
          Back to Tours
        </Link>
      </div>
    );
  }

  return (
    <>
      <Nav />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
          {/* Tour Title */}
          <h1 className="text-4xl lg:text-3xl font-bold text-gray-900 mb-8">
            {tour.title}
          </h1>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left: Swiper Carousel with Thumbnails */}
            <div className="lg:w-1/2 space-y-6 relative">
              {/* Main Carousel */}
              <Swiper
                modules={[Autoplay, Navigation, Thumbs]}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  // Link custom buttons to Swiper navigation
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                className="rounded-xl shadow-lg relative"
              >
                {tour.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`${tour.title} ${idx + 1}`}
                      className="w-full h-96 object-cover rounded-xl"
                    />
                  </SwiperSlide>
                ))}

                {/* Custom Navigation Arrows (Overlaid on Main Image) */}
                <button
                  ref={prevRef}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer
                  text-white bg-black/40 hover:bg-black/60 p-3 rounded-full transition"
                >
                  <FiChevronLeft size={28} />
                </button>

                <button
                  ref={nextRef}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer
                  text-white bg-black/40 hover:bg-black/60 p-3 rounded-full transition"
                >
                  <FiChevronRight size={28} />
                </button>
              </Swiper>

              {/* Thumbnail Carousel Below */}
              <Swiper
                onSwiper={setThumbsSwiper}
                modules={[Thumbs, FreeMode]}
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                breakpoints={{
                  320: { slidesPerView: 3 },
                  640: { slidesPerView: 4 },
                  1024: { slidesPerView: 5 },
                }}
                className="thumbnail-swiper mt-4"
              >
                {tour.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-20 object-cover rounded-md cursor-pointer opacity-60 transition-opacity duration-300 swiper-slide-thumb-active:opacity-100"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Right: Tour Details */}
            <div className="lg:w-1/2 flex flex-col gap-6">
              <p className="text-gray-700 text-lg">{tour.shortDescription}</p>

              <div className="flex flex-wrap gap-6 text-gray-700">
                <div className="flex items-center gap-2 bg-white p-2 rounded-md shadow">
                  <IoTimeOutline className="text-[#e6a948] text-xl " />
                  <span className="font-bold text-xl">{tour.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-2 rounded-md shadow">
                  <IoLocationOutline className="text-[#4d7c9c] text-xl" />
                  <span className="font-bold text-xl">{tour.location}</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-2 rounded-md shadow">
                  <IoPricetagOutline className="text-[#e8bc74] text-xl" />
                  <span className="font-bold text-xl">{tour.price}</span>
                </div>
              </div>

              <div className="text-gray-600 space-y-2">
                {tour.fullDescription.split("\n").map((line, idx) => (
                  <p key={idx}>{line.trim()}</p>
                ))}
              </div>

              {tour.highlights && tour.highlights.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Highlights:</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {tour.highlights.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <BookingForm tour={tour} />
    </>
  );
};

export default TourDetailsPage;
