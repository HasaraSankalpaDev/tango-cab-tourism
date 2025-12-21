import React from "react";

const TourHero = () => {
  return (
    <section
      className="w-full h-[20vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/galle-colonial.jpeg')",
      }}
    >
      <h1 className="text-2xl md:text-4xl font-bold text-white bg-black/30 px-4 py-2 rounded">
        Our Tours & Packages
      </h1>
    </section>
  );
};

export default TourHero;
