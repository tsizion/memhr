import React, { useState } from "react";
import CourseCards from "./CourseCards";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import ComingSoon from "../ComingSoon"; // Import the modal

const FeaturedCourse = () => {
  const courses = [
    { id: 1, name: "React for Beginners" },
    { id: 2, name: "Advanced JavaScript" },
    { id: 3, name: "UI/UX Design Principles" },
    { id: 4, name: "Machine Learning Basics" },
  ];

  const [activeCourse, setActiveCourse] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  return (
    <div className="p-4 w-full">
      <h2 className="text-xl font-semibold mb-4">Featured Courses</h2>

      {/* Course Selection */}
      <div className="relative w-full border-b-2 border-gray-300">
        <div className="flex justify-between w-full">
          {courses.map((course) => (
            <h2
              key={course.id}
              className={`text-lg font-medium px-4 py-2 cursor-pointer transition-all duration-300 ${
                activeCourse === course.id
                  ? "text-orange-500 font-semibold"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveCourse(course.id)}
            >
              {course.name}
            </h2>
          ))}
        </div>

        {/* Active Indicator */}
        <div
          className="absolute -bottom-0.5 h-1 bg-orange-500 transition-all duration-300 rounded-2xl"
          style={{
            width: `${100 / courses.length}%`,
            left: `${(activeCourse - 1) * (100 / courses.length)}%`,
          }}
        />
      </div>

      {/* Display Cards for Active Course */}
      <CourseCards
        activeCourse={activeCourse}
        onCardClick={() => setIsModalOpen(true)}
      />

      {/* Navigation Buttons */}
      <div className="flex gap-1 my-4">
        <div className="bg-primary-orange px-4 py-2 rounded-md text-white text-[12px]">
          <FaLessThan />{" "}
        </div>
        <div className="bg-primary-orange px-4 py-2 rounded-md text-white text-[12px]">
          <FaGreaterThan />{" "}
        </div>
      </div>

      {/* Show Coming Soon Modal */}
      {isModalOpen && <ComingSoon onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default FeaturedCourse;
