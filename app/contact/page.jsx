import ContactHero from "@/Components/ContactHero/ContactHero";
import ContactInfoSection from "@/Components/ContactInfoSection/ContactInfoSection";
import FloatingIcons from "@/Components/FloatingIcons/FloatingIcons";
import Footer from "@/Components/Footer/Footer";
import GetInTouchSection from "@/Components/GetInTouchSection/GetInTouchSection";
import Nav from "@/Components/Nav/Nav";
import React from "react";

const page = () => {
  return (
    <div>
      <Nav />
      <ContactHero />
      <ContactInfoSection />
      <GetInTouchSection />
      <FloatingIcons />
      <Footer />
    </div>
  );
};

export default page;
