"use client";

import ContactHero from "@/Components/ContactHero/ContactHero";
import ContactInfoSection from "@/Components/ContactInfoSection/ContactInfoSection";
import FloatingIcons from "@/Components/FloatingIcons/FloatingIcons";
import Footer from "@/Components/Footer/Footer";
import GetInTouchSection from "@/Components/GetInTouchSection/GetInTouchSection";
import Nav from "@/Components/Nav/Nav";
import Head from "next/head";
import React from "react";

const metadata = {
  title: "Contact Tango Cabs Sri Lanka | Tangalle Taxi & Airport Transfers",
  description:
    "Contact Tango Cabs Sri Lanka in Tangalle for taxi bookings, airport transfers, private drivers, and Sri Lanka tours. Fast response via WhatsApp or phone.",
  keywords: [
    "Tango Cabs Sri Lanka",
    "Tango Cabs",
    "Tangalle taxi service",
    "Tangalle tour agency",
    "Sri Lanka taxi service",
    "Sri Lanka tour agency",
    "Sri Lanka airport transfer",
    "Colombo airport taxi",
    "Colombo airport transfer Sri Lanka",
    "Bandaranaike airport taxi",
    "Bandaranaike airport transfer",
    "CMB airport transfer Sri Lanka",
    "Airport pickup Sri Lanka",
    "Airport drop Sri Lanka",
    "Sri Lanka airport pickup service",
    "Sri Lanka airport drop service",
    "Private airport transfer Sri Lanka",
    "Taxi from Colombo airport",
    "Colombo airport to Tangalle taxi",
    "Tangalle to Colombo airport taxi",
    "Colombo airport to Tangalle transfer",
    "Airport taxi Tangalle",
    "Tangalle airport transfer",
    "Sri Lanka airport cab service",
    "Private driver Sri Lanka",
    "Cab service Sri Lanka",
    "Taxi service in Tangalle",
    "Chauffeur service Sri Lanka",
    "Tourist taxi Sri Lanka",
    "Affordable taxi Sri Lanka",
    "Best taxi service in Tangalle",
    "Reliable taxi Sri Lanka",
    "Sri Lanka travel agency",
    "Sri Lanka tours",
    "Sri Lanka round tour",
    "Sri Lanka sightseeing tours",
    "Sri Lanka private tours",
    "Travel Sri Lanka",
    "Visit Sri Lanka",
    "Southern Province Sri Lanka",
    "Tangalle beach tours",
    "Tangalle to Colombo taxi",
    "Tangalle to Galle taxi",
  ],
};

const page = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Tango Cabs Sri Lanka" />
      </Head>

      <div>
        <Nav />
        <ContactHero />
        <ContactInfoSection />
        <GetInTouchSection />
        <FloatingIcons />
        <Footer />
      </div>
    </>
  );
};

export default page;
