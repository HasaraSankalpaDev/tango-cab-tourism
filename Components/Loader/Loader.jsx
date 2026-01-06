"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page load delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds for demo
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999]">
      <div className="relative w-40 h-40 flex items-center justify-center">
        {/* Logo */}
        <Image
          src="/logo.jpeg" // replace with your logo path
          alt="Logo"
          fill
          className="object-contain rounded-full p-5"
        />

        {/* Spinning ring */}
        <span className="absolute w-40 h-40 rounded-full border-4 border-[#2e4a5e] border-t-transparent animate-spin"></span>
      </div>
    </div>
  );
};

export default Loader;
