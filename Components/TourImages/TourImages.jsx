"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Thumbs, FreeMode } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Modal from "react-modal";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

export default function TourImages({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const openModal = (index) => {
    setModalIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  const nextImage = () => setModalIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setModalIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div>
      {/* Main Swiper */}
      <Swiper
        modules={[Autoplay, Navigation, Thumbs]}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        autoplay={{ delay: 4000 }}
        loop
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className="rounded-xl overflow-hidden shadow"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              className="w-full h-[420px] object-cover cursor-pointer"
              alt={`Tour Image ${i + 1}`}
              onClick={() => openModal(i)}
            />
          </SwiperSlide>
        ))}

        <button
          ref={prevRef}
          className="absolute left-4 cursor-pointer top-1/2 -translate-y-1/2 z-10 bg-black/40 text-white p-3 rounded-full"
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          ref={nextRef}
          className="absolute right-4 cursor-pointer top-1/2 -translate-y-1/2 z-10 bg-black/40 text-white p-3 rounded-full"
        >
          <FiChevronRight size={24} />
        </button>
      </Swiper>

      {/* Thumbnails */}
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Thumbs, FreeMode]}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        className="mt-4"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              className="h-20 w-full object-cover rounded-md cursor-pointer opacity-70 hover:opacity-100"
              onClick={() => openModal(i)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="fixed inset-0 flex items-center justify-center z-50 p-4"
        overlayClassName="fixed inset-0 bg-black/70 z-40"
      >
        <div className="relative bg-white rounded-md max-w-3xl w-full p-4 flex flex-col items-center">
          <button
            onClick={closeModal}
            className="
    absolute top-4 right-4
    bg-black/60
    text-white
    px-3 py-1 cupsor-pointer cursor-pointer
    rounded-full
    text-3xl
    hover:bg-black/80
    transition
  "
          >
            &times;
          </button>

          <img
            src={images[modalIndex]}
            className="max-h-[80vh] object-contain rounded"
          />

          <button
            onClick={prevImage}
            className="absolute cursor-pointer left-2 top-1/2 -translate-y-1/2 text-gray-700 bg-white/70 rounded-full p-2 hover:bg-white"
          >
            <FiChevronLeft size={30} />
          </button>
          <button
            onClick={nextImage}
            className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 text-gray-700 bg-white/70 rounded-full p-2 hover:bg-white"
          >
            <FiChevronRight size={30} />
          </button>
        </div>
      </Modal>
    </div>
  );
}
