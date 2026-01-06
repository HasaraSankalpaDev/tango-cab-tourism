"use client";

export default function TourHeader({ title, shortDescription }) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl lg:text-3xl font-bold text-gray-900">{title}</h1>
      <p className="text-md text-gray-700">{shortDescription}</p>
    </div>
  );
}
