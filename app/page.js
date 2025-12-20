import AboutUs from "@/Components/AboutUs/AboutUs";
import BookingForm from "@/Components/BookingForm/BookingForm";
import FloatingIcons from "@/Components/FloatingIcons/FloatingIcons";
import Footer from "@/Components/Footer/Footer";
import GetInTouchSection from "@/Components/GetInTouchSection/GetInTouchSection";
import Hero from "@/Components/Hero/Hero";
import Loader from "@/Components/Loader/Loader";
import Nav from "@/Components/Nav/Nav";
import ReviewSection from "@/Components/ReviewSection/ReviewSection";
import ToursSection from "@/Components/ToursSection/ToursSection";
import VehicleCard from "@/Components/VehicleCard/VehicleCard";
import VehiclesSection from "@/Components/VehiclesSection/VehiclesSection";
import WhatWeOffer from "@/Components/WhatWeOffer/WhatWeOffer";
import React from "react";

const page = () => {
  return (
    <>
      <Loader />
      <div>
        <Nav />
        <Hero />
        <AboutUs />
        <ToursSection />
        <WhatWeOffer />
        <VehiclesSection />
        <ReviewSection />
        <GetInTouchSection />
        <FloatingIcons />
        <Footer />
      </div>
    </>
  );
};

export default page;
