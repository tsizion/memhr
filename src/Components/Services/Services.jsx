import React, { useState } from "react";
import { courses, ebook, shop } from "../../assets";
import ComingSoon from "../ComingSoon"; // Import the ComingSoon component

const ServiceCard = ({ icon, title, description, onGetStarted }) => {
  return (
    <div className="text-gray-800 bg-white border-[0.9px] border-primary px-6 py-8 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
      <img src={icon} alt={title} className="w-12 h-12 mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4 font-title">{description}</p>
      <button
        onClick={onGetStarted}
        className="bg-primary-orange text-white text-sm px-4 py-2 rounded-md hover:bg-orange-600"
      >
        Get Started
      </button>
    </div>
  );
};

const Services = () => {
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);

  const handleGetStartedClick = () => {
    setIsComingSoonOpen(true); // Show the modal when "Get Started" is clicked
  };

  const handleCloseModal = () => {
    setIsComingSoonOpen(false); // Close the modal when the close button is clicked
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white">
      <h2 className="text-2xl font-bold mb-9 text-center font-title text-primary">
        What can you find on Memeher?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-auto max-w-5xl">
        <ServiceCard
          icon={ebook}
          title="Buy e-book"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          onGetStarted={handleGetStartedClick}
        />
        <ServiceCard
          icon={courses}
          title="Buy Course"
          description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          onGetStarted={handleGetStartedClick}
        />
        <ServiceCard
          icon={shop}
          title="Buy products"
          description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          onGetStarted={handleGetStartedClick}
        />
      </div>

      {/* Display ComingSoon modal if state is true */}
      {isComingSoonOpen && <ComingSoon onClose={handleCloseModal} />}
    </div>
  );
};

export default Services;
