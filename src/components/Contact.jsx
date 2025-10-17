// src/components/Contact.jsx
import React from "react";
import { MdArrowOutward } from "react-icons/md";

export const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-stretch rounded-2xl overflow-hidden bg-white shadow-md">
      {/* Left Side - Image */}
      <div className="md:w-1/2 w-full">
        <img
          src="/Images/form-img.png"
          alt="Contact"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Form Section */}
      <div className="md:w-1/2 w-full gradient-bg p-8 md:p-12 flex flex-col justify-center text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Partner with <br /> Global age today!
        </h2>
        <p className="text-sm md:text-base mb-8 text-gray-100 leading-relaxed">
          Do You Have Any Questions, kindly complete the form below to send us your
          questions and we will respond within 24 hours.
        </p>

        <form className="space-y-6">
          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm ">Name</label>
              <input
                type="text"
                placeholder=""
                className="w-full bg-transparent border-b border-gray-200 focus:border-white outline-none py-2"
              />
            </div>
            <div>
              <label className="block text-sm ">Email</label>
              <input
                type="email"
                placeholder=""
                className="w-full bg-transparent border-b border-gray-200 focus:border-white outline-none py-2"
              />
            </div>
          </div>

          {/* Phone and Service */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm ">Phone</label>
              <input
                type="text"
                placeholder=""
                className="w-full bg-transparent border-b border-gray-200 focus:border-white outline-none py-2"
              />
            </div>
            <div>
              <label className="block text-sm ">Select your Service</label>
              <input
                type="text"
                placeholder=""
                className="w-full bg-transparent border-b border-gray-200 focus:border-white outline-none py-2"
              />
            </div>
          </div>

          {/* Additional Details */}
          <div>
            <label className="block text-sm ">Additional details</label>
            <input
              type="text"
              placeholder=""
              className="w-full bg-transparent border-b border-gray-200 focus:border-white outline-none py-2"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-6 bg-white text-gray-900 font-medium py-3 px-10 rounded-full flex items-center justify-between gap-2 hover:bg-gray-100 transition-all"
          >
            Get a quote
            <MdArrowOutward/>
          </button>
        </form>
      </div>
    </div>
  );
};
