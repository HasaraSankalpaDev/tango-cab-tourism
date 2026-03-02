"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Thumbs, FreeMode } from "swiper/modules";
import { FiChevronLeft, FiChevronRight, FiX, FiZoomIn } from "react-icons/fi";
import Modal from "react-modal";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

const gradient =
  "linear-gradient(188deg, rgba(79,126,156,1) 0%, rgba(117,156,158,1) 54%, rgba(144,163,149,1) 79%, rgba(172,171,139,1) 90%, rgba(232,188,118,1) 100%)";

export default function TourImages({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const openModal = (i) => {
    setModalIndex(i);
    setModalIsOpen(true);
  };
  const closeModal = () => setModalIsOpen(false);
  const nextImage = () => setModalIndex((p) => (p + 1) % images.length);
  const prevImage = () =>
    setModalIndex((p) => (p === 0 ? images.length - 1 : p - 1));

  return (
    <>
      <style>{`
        .ti-root { font-family: 'DM Sans', sans-serif; }

        .ti-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 50%;
          background: rgba(0,0,0,0.38);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255,255,255,0.2);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .ti-nav:hover { background: rgba(0,0,0,0.6); transform: translateY(-50%) scale(1.06); }

        .ti-zoom-hint {
          position: absolute;
          bottom: 0.75rem;
          right: 0.75rem;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.85);
          background: rgba(0,0,0,0.35);
          backdrop-filter: blur(4px);
          padding: 0.3rem 0.65rem;
          border-radius: 2px;
          pointer-events: none;
        }

        .ti-thumb {
          width: 100%;
          height: 4rem;
          object-fit: cover;
          border-radius: 3px;
          cursor: pointer;
          opacity: 0.55;
          border: 2px solid transparent;
          display: block;
          transition: opacity 0.2s ease, border-color 0.2s ease;
        }
        .ti-thumb:hover { opacity: 0.85; }
        .swiper-slide-thumb-active .ti-thumb {
          opacity: 1;
          border-color: #4d7c9c;
        }

        .ti-modal-bg {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.82);
          backdrop-filter: blur(6px);
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .ti-modal-inner {
          position: relative;
          background: #fff;
          border-radius: 4px;
          max-width: 860px;
          width: 100%;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }
        .ti-modal-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 50%;
          background: white;
          box-shadow: 0 2px 12px rgba(0,0,0,0.15);
          border: 1px solid rgba(0,0,0,0.08);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #333;
          transition: box-shadow 0.2s ease, transform 0.2s ease;
        }
        .ti-modal-nav:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.2); transform: translateY(-50%) scale(1.06); }
        .ti-close {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          width: 1.75rem;
          height: 1.75rem;
          border-radius: 50%;
          background: rgba(0,0,0,0.5);
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease;
        }
        .ti-close:hover { background: rgba(0,0,0,0.75); }
      `}</style>

      <div className="ti-root">
        {/* Main slider */}
        <div
          style={{
            position: "relative",
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          {/* 3px top gradient line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              background: gradient,
              zIndex: 10,
            }}
          />

          <Swiper
            modules={[Autoplay, Navigation, Thumbs]}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            loop
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`Tour image ${i + 1}`}
                  onClick={() => openModal(i)}
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    cursor: "zoom-in",
                    display: "block",
                  }}
                />
                {/* Bottom fade overlay */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "70px",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.3), transparent)",
                    pointerEvents: "none",
                  }}
                />
              </SwiperSlide>
            ))}

            <button
              ref={prevRef}
              className="ti-nav"
              style={{ left: "0.75rem" }}
            >
              <FiChevronLeft size={16} />
            </button>
            <button
              ref={nextRef}
              className="ti-nav"
              style={{ right: "0.75rem" }}
            >
              <FiChevronRight size={16} />
            </button>

            <div className="ti-zoom-hint">
              <FiZoomIn size={11} />
              click to expand
            </div>
          </Swiper>
        </div>

        {/* Thumbnails */}
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Thumbs, FreeMode]}
          spaceBetween={6}
          slidesPerView={5}
          freeMode
          style={{ marginTop: "0.5rem" }}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={`Thumb ${i + 1}`}
                className="ti-thumb"
                onClick={() => openModal(i)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Lightbox */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Image Lightbox"
          style={{
            overlay: {
              background: "rgba(0,0,0,0.82)",
              backdropFilter: "blur(6px)",
              zIndex: 9999,
            },
            content: {
              inset: 0,
              border: "none",
              background: "none",
              padding: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        >
          <div className="ti-modal-inner">
            <button className="ti-close" onClick={closeModal}>
              <FiX size={12} />
            </button>
            <img
              src={images[modalIndex]}
              alt="Expanded"
              style={{
                maxHeight: "80vh",
                width: "100%",
                objectFit: "contain",
                borderRadius: "3px",
                display: "block",
              }}
            />
            <div
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                color: "#aaa",
              }}
            >
              {modalIndex + 1} / {images.length}
            </div>
            <button
              className="ti-modal-nav"
              style={{ left: "0.5rem" }}
              onClick={prevImage}
            >
              <FiChevronLeft size={16} />
            </button>
            <button
              className="ti-modal-nav"
              style={{ right: "0.5rem" }}
              onClick={nextImage}
            >
              <FiChevronRight size={16} />
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
}
