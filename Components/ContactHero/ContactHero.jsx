import React from "react";

const ContactHero = () => {
  return (
    <section
      className="w-full h-[20vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/elephant.jpg')",
      }}
    >
      <h1 className="text-2xl md:text-4xl font-bold text-white bg-black/30 px-4 py-2 rounded">
        Contact Us
      </h1>
    </section>
  );
};

export default ContactHero;
