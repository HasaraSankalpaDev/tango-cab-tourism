"use client";

export default function FacilitiesSection({ facilities }) {
  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
          What’s Included in Every Tour
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {facilities.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-lg shadow-sm p-6 text-center
                       transition-shadow hover:shadow-md"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div
                  className="mx-auto mb-4 flex items-center justify-center w-14 h-14 rounded-full
              bg-[linear-gradient(191deg,rgba(79,126,156,1)_12%,rgba(120,157,157,1)_64%,rgba(130,160,153,1)_78%,rgba(232,188,118,1)_100%)]"
                >
                  <Icon className="text-white text-2xl" />
                </div>

                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
