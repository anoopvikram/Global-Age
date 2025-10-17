import React from "react";
import { MdArrowOutward } from "react-icons/md";

export const ServiceCard = ({ service }) => {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm flex flex-col transition hover:shadow-lg">
      <div className="p-6 flex-1 flex flex-col justify-between">
        {/* Icon + Title + Desc */}
        <div className="space-y-5">
            <img src='Images/service-icon.svg'/>
          <p className="text-black  text-2xl">{service.description}</p>
        </div>

        {/* Learn More Link */}
        <div className="mt-6 flex items-center justify-between text-black font-medium pb-2 border-b">
          <span>Learn More</span>
          <MdArrowOutward/>
        </div>
      </div>

      {/* Image */}
      <div className="h-56 w-full overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
