// "use client";

// import { useRef } from "react";
// import { tours } from "@/Data/Tours";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// import TourCard from "@/Components/TourCard/TourCard";

// const RelatedToursCarousel = ({ currentTourId }) => {
//   const relatedTours = tours.filter((t) => t.id !== currentTourId);

//   // Refs for custom navigation
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   return (
//     <section className="py-16 lg:py-20 bg-white relative">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-10 sm:mb-12">
//           <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
//             Related Tours
//           </h2>
//           <p className="text-gray-600 text-sm sm:text-base">
//             You may also like these amazing experiences
//           </p>
//         </div>

//         {/* Swiper */}
//         <Swiper
//           modules={[Autoplay, Navigation]}
//           spaceBetween={16}
//           loop={true}
//           slidesPerView={1}
//           autoplay={{ delay: 4500, disableOnInteraction: false }}
//           navigation={{
//             prevEl: prevRef.current,
//             nextEl: nextRef.current,
//           }}
//           onBeforeInit={(swiper) => {
//             swiper.params.navigation.prevEl = prevRef.current;
//             swiper.params.navigation.nextEl = nextRef.current;
//           }}
//           className="items-stretch"
//           breakpoints={{
//             640: { slidesPerView: 2, spaceBetween: 20 },
//             1024: { slidesPerView: 3, spaceBetween: 24 },
//           }}
//         >
//           {relatedTours.map((tour) => (
//             <SwiperSlide key={tour.id} className="h-auto flex">
//               <div className="flex-1 flex mb-5">
//                 <TourCard tour={tour} />
//               </div>
//             </SwiperSlide>
//           ))}

//           {/* Custom Arrows */}
//           <button
//             ref={prevRef}
//             className="absolute left-2 cursor-pointer sm:left-0 top-1/2 -translate-y-1/2 z-20 text-white bg-black/40 hover:bg-black/60 p-2 sm:p-3 rounded-full transition"
//           >
//             <FiChevronLeft size={20} sm={28} />
//           </button>
//           <button
//             ref={nextRef}
//             className="absolute right-2 cursor-pointer sm:right-0 top-1/2 -translate-y-1/2 z-20 text-white bg-black/40 hover:bg-black/60 p-2 sm:p-3 rounded-full transition"
//           >
//             <FiChevronRight size={20} sm={28} />
//           </button>
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default RelatedToursCarousel;

"use client";

import { useRef } from "react";
import { tours } from "@/Data/Tours";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import TourCard from "@/Components/TourCard/TourCard";

const RelatedToursCarousel = ({ currentTourId }) => {
  const relatedTours = tours.filter((t) => t.id !== currentTourId);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-16 lg:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
            Related Tours
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            You may also like these amazing experiences
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={16}
          loop
          slidesPerView={1}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="!pb-6"
        >
          {relatedTours.map((tour) => (
            <SwiperSlide key={tour.id} className="!h-auto flex">
              {/* IMPORTANT: this wrapper enforces equal height */}
              <div className="flex flex-col h-full w-full">
                <TourCard tour={tour} />
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation */}
          <button
            ref={prevRef}
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20
                       text-white bg-black/40 hover:bg-black/60
                       p-2 sm:p-3 rounded-full transition"
          >
            <FiChevronLeft size={24} />
          </button>

          <button
            ref={nextRef}
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20
                       text-white bg-black/40 hover:bg-black/60
                       p-2 sm:p-3 rounded-full transition"
          >
            <FiChevronRight size={24} />
          </button>
        </Swiper>
      </div>
    </section>
  );
};

export default RelatedToursCarousel;
