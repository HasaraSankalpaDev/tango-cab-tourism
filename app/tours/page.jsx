import FloatingIcons from "@/Components/FloatingIcons/FloatingIcons";
import Footer from "@/Components/Footer/Footer";
import Nav from "@/Components/Nav/Nav";
import TourHero from "@/Components/TourHero/TourHero";
import ToursSection from "@/Components/ToursSection/ToursSection";
import React from "react";

const page = () => {
  return (
    <div>
      <Nav />
      <TourHero />
      <ToursSection />
      <FloatingIcons />
      <Footer />
    </div>
  );
};

export default page;
