import React from "react";

// Reusable Card Component
const Card = ({ title }) => {
  return (
    <div className="flex text-center text-sm font-body justify-center items-center px-5 py-6 bg-primary text-white font-medium w-32 h-13 rounded-lg shadow-md hover:bg-primary-dark hover:scale-105 hover:shadow-lg hover:shadow-primary transition-all">
      {title}
    </div>
  );
};

const English = () => {
  const boxes = [
    "Learn React",
    "Master JavaScript",
    "Build Projects",
    "Improve UI/UX",
    "Focus on Backend",
    "Network with Experts",
    "Continuous Learning",
  ];

  return (
    <div className="flex flex-col items-center p-4 space-y-4 bg-[#f7f7f7]">
      {/* Titles */}
      <h1 className="text-4xl font-bold font-body text-primary-dark bg-clip-text shadow-glow">
        My Path to Growth
      </h1>
      <h2 className="text-xl font-semibold text-gray-600 font-body">
        Explore the core values and actions shaping my journey.
      </h2>

      {/* Button Boxes */}
      <div className="space-y-6 mt-6 w-full max-w-5xl">
        {/* Flex container for button boxes */}
        <div className="flex flex-wrap justify-center gap-4">
          {boxes.map((box, index) => (
            <Card key={index} title={box} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default English;
