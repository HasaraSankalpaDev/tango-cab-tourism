import { NextResponse } from "next/server";

// Simple server-side validation function
const validateField = (name, value) => {
  switch (name) {
    case "fullName":
      if (!value?.trim()) return "Full name is required";
      if (!/^[a-zA-Z\s]{2,50}$/.test(value))
        return "Full name should be 2-50 letters";
      return "";
    case "email":
      if (!value?.trim()) return "Email is required";
      if (!/^\S+@\S+\.\S+$/.test(value)) return "Invalid email";
      return "";
    case "phone":
      if (!value?.trim()) return "Phone number is required";
      if (!/^\d{10,12}$/.test(value))
        return "Phone number must be 10-12 digits";
      return "";
    case "country":
      if (!value?.trim()) return "Country is required";
      return "";
    case "startDate":
      if (!value) return "Start date is required";
      return "";
    case "tourDays":
      if (!value || value < 1) return "Tour duration must be at least 1 day";
      return "";
    case "travelerCount":
      if (value < 1) return "At least 1 traveler required";
      return "";
    case "pickupLocation":
      if (!value?.trim()) return "Pickup location is required";
      return "";
    case "preferredTourLocations":
      if (!value?.trim()) return "Preferred tour locations required";
      return "";
    default:
      return "";
  }
};

// POST handler
export async function POST(req) {
  try {
    const data = await req.json();

    // Validate all fields
    const errors = {};
    Object.keys(data).forEach((key) => {
      const error = validateField(key, data[key]);
      if (error) errors[key] = error;
    });

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // Sanitize inputs (basic)
    const sanitize = (str) => str.toString().replace(/[<>]/g, "");

    const whatsappMessage = `
Hello! I have a custom tour request:

Full Name: ${sanitize(data.fullName)}
Email: ${sanitize(data.email)}
Phone: ${sanitize(data.phone)}
Country: ${sanitize(data.country)}
Start Date: ${sanitize(data.startDate)}
Tour Days: ${sanitize(data.tourDays)}
Travelers: ${sanitize(data.travelerCount)}
Pickup: ${sanitize(data.pickupLocation)}
Drop-off: ${sanitize(data.dropoffLocation || "N/A")}
Preferred Tour Locations: ${sanitize(data.preferredTourLocations)}
    `;

    // Your WhatsApp number (hidden in backend)
    const phoneNumber = "+94777266518";
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${phoneNumber.replace(
      /[^\d]/g,
      ""
    )}?text=${encodedMessage}`;

    // Return the link to frontend
    return NextResponse.json({ success: true, whatsappURL });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
