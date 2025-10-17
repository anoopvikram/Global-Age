// src/components/Footer.jsx
import React from "react";
import { FiArrowRight } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-16 lg:px-24">
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
        {/* Services */}
        <div>
          <h3 className="text-lg font-medium text-teal-400 mb-4">Services</h3>
          <ul className="space-y-3 text-sm">
            <li>Haulage and Transportation</li>
            <li>Warehousing</li>
            <li>Mining Supplies</li>
            <li>Escort Service</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-medium text-teal-400 mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-medium text-teal-400 mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li>P.O.Box ML 175, Mallam-Accra, Ghana</li>
            <li>0244967253</li>
            <li>0208998840</li>
            <li>operations@globalageservice.com</li>
          </ul>
        </div>

        {/* Logo & Subscribe */}
        <div className="flex flex-col items-start md:items-end">
          <img
            src="/Images/logo-bw.png"
            alt="Global Age Logo"
            className="w-32 mb-6"
          />
          <p className="text-teal-400 text-lg font-medium">
            Subscribe <span className="text-white font-normal">to be in touch with</span>
          </p>
          <p className="text-white text-lg mb-4 font-medium">latest updates</p>
          <div className="flex items-center bg-white rounded-md overflow-hidden w-full max-w-xs">
            <input
              type="email"
              placeholder="Email"
              className="flex-grow px-3 py-2 text-black text-sm outline-none"
            />
            <button className="px-4 text-black">
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center md:text-left text-sm text-gray-400 mt-8">
        © 2021 Globalage Company Limited
      </div>
    </footer>
  );
};
