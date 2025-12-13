import React from "react";

const ContactHero = () => {
  return (
    <section
      className="w-full h-[20vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/56/a1/41/caption.jpg?w=700&h=400&s=1')",
      }}
    >
      <h1 className="text-2xl md:text-4xl font-bold text-white bg-black/30 px-4 py-2 rounded">
        Contact Us
      </h1>
    </section>
  );
};

export default ContactHero;
