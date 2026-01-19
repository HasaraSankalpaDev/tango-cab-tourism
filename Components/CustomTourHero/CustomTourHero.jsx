import React from "react";

const CustomTourHero = () => {
  return (
    <section
      className="w-full h-[20vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('hirikatiya-3.webp')",
      }}
    >
      <h1 className="text-2xl md:text-2xl font-semibold text-white bg-black/30 px-4 py-2 rounded">
        Custom Tours
      </h1>
    </section>
  );
};

export default CustomTourHero;
