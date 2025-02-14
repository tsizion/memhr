import React from "react";

import { courses, ebook, shop } from "../../assets";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="text-gray-800 border-[0.9px] border-primary px-6 py-8 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center">
      <img src={icon} alt={title} className="w-12 h-12 mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4 font-title">{description}</p>
      <button className="bg-primary-orange text-white text-sm px-4 py-2 rounded-md hover:bg-orange-600">
        Get Started
      </button>
    </div>
  );
};

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h2 className="text-2xl font-bold mb-9 text-center font-title text-primary">
        What can you find on Memeher?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-auto max-w-5xl">
        <ServiceCard
          icon={ebook}
          title="Service 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ServiceCard
          icon={courses}
          title="Service 2"
          description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ServiceCard
          icon={shop}
          title="Service 3"
          description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
};

export default Services;
