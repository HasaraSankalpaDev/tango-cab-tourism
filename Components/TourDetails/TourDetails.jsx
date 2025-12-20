"use client";

import { IoTimeOutline, IoLocationOutline } from "react-icons/io5";
import { FaMapMarkedAlt } from "react-icons/fa";

export default function TourDetails({ tour }) {
  return (
    <div className="space-y-6">
      {/* Modern Tour Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-100">
          <IoTimeOutline className="text-xl text-[#4d7c9c] mt-1" />
          <div>
            <p className="text-sm text-gray-500">Duration</p>
            <p className="font-semibold text-gray-900">{tour.duration}</p>
          </div>
        </div>

        <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-100">
          <IoLocationOutline className="text-xl text-[#4d7c9c] mt-1" />
          <div>
            <p className="text-sm text-gray-500">Route</p>
            <p className="font-semibold text-gray-900">{tour.route}</p>
          </div>
        </div>
      </div>

      {/* Full Description */}
      <div className="space-y-2 text-gray-600">
        {tour.fullDescription.split("\n").map((line, i) => (
          <p key={i}>{line.trim()}</p>
        ))}
      </div>

      {/* Highlights */}
      {tour.highlights?.length > 0 && (
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-900">
            Tour Highlights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {tour.highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-gray-50 p-3 rounded-md"
              >
                <FaMapMarkedAlt className="text-[#4d7c9c]" />
                <span className="text-gray-700 text-sm">{h}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Notice */}
      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-sm">
        <strong>Note:</strong> Prices depend on date, passengers, and vehicle
        type. Contact us on WhatsApp for exact pricing.
      </div>
    </div>
  );
}
