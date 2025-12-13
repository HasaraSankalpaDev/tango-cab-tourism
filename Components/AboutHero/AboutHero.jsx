import React from "react";

const AboutHero = () => {
  return (
    <section
      className="w-full h-[20vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://www.srilankaauthenticholidays.com/wp-content/uploads/2025/03/Web-Post-cover-JS-1-915x271-3-394x117.png')",
      }}
    >
      <h1 className="text-2xl md:text-4xl font-bold text-white bg-black/30 px-4 py-2 rounded">
        About Us
      </h1>
    </section>
  );
};

export default AboutHero;
