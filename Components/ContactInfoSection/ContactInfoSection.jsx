"use client";

import {
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
  IoTimeOutline,
} from "react-icons/io5";

const ContactInfoSection = () => {
  const infoItems = [
    {
      icon: <IoCallOutline size={28} className="text-[#4d7c9c]" />,
      title: "Call Us",
      value: "+94 70 000 0000",
      link: "tel:+94700000000",
    },
    {
      icon: <IoMailOutline size={28} className="text-[#4d7c9c]" />,
      title: "Email",
      value: "info@tourcompany.com",
      link: "mailto:info@tourcompany.com",
    },
    {
      icon: <IoLocationOutline size={28} className="text-[#4d7c9c]" />,
      title: "Location",
      value: "Colombo, Sri Lanka",
      link: "https://goo.gl/maps/your-location",
    },
    {
      icon: <IoTimeOutline size={28} className="text-[#4d7c9c]" />,
      title: "Business Hours",
      value: "Mon - Sun: 8:00 AM - 8:00 PM",
      link: null,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900">
            Contact Information
          </h2>
          <p className="text-gray-600 mt-2">
            Reach out to us through any of the following ways
          </p>
        </div>

        {/* Grid updated: 2 per row on small screens, 4 on large */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoItems.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-md shadow-sm flex flex-col items-center text-center transition"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-gray-700 hover:text-[#4d7c9c] transition break-words"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-700">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
