// src/components/Navbar.jsx
import React from "react";
import { MdArrowOutward } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/Images/logo.svg"
            alt="Global Age"
            className="h-20 w-auto"
          />
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-10 text-gray-800 font-medium">
          <li><a href="#home" className="hover:text-[#086770]">Home</a></li>
          <li><a href="#about" className="hover:text-[#086770]">About</a></li>
          <li><a href="#services" className="hover:text-[#086770]">Services</a></li>
          <li><a href="#career" className="hover:text-[#086770]">Careers</a></li>
          <li><a href="#gallery" className="hover:text-[#086770]">Gallery</a></li>
        </ul>

        {/* Contact Button */}
        <div>
        <button className="btn-gradient flex items-center gap-8">
            Contact Us <MdArrowOutward/>
        </button>
        </div>
      </div>
    </nav>
  );
}
