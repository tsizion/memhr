import React, { useState } from "react";
import CourseCards from "./CourseCards";
import YoutubeComponent from "../Youtube/YoutubeComponent";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { FaInstagram, FaTiktok, FaFacebook, FaYoutube } from "react-icons/fa";
import ComingSoon from "../ComingSoon";
import { skill1, skill2, skill3, skill4 } from "../../assets";

const FeaturedCourse = () => {
  const courses = [
    { id: 1, name: "Youtube Channels" },
    { id: 2, name: "Social Media" },
    { id: 3, name: "Skills" }, // Changed "UI/UX Design Principles" to "Skills"
    { id: 4, name: "Machine Learning Basics" },
  ];

  const [activeCourse, setActiveCourse] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="py-4 w-full">
      <h2 className="xsm:text-[13px] sm:text-sm md:text-xl font-semibold mb-4">
        Featured Courses
      </h2>

      {/* Course Selection */}
      <div className="relative w-full border-b-2 border-gray-300">
        <div className="flex justify-between w-full">
          {courses.map((course) => (
            <h2
              key={course.id}
              className={`text-[8px] sm:text-[10px] md:text-lg font-medium px-4 py-2 cursor-pointer transition-all duration-300 ${
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

      {/* Content Switch */}
      {activeCourse === 1 ? (
        <YoutubeComponent />
      ) : activeCourse === 2 ? (
        <SocialMediaSection />
      ) : activeCourse === 3 ? (
        <SkillsSection />
      ) : (
        <CourseCards
          activeCourse={activeCourse}
          onCardClick={() => setIsModalOpen(true)}
        />
      )}

      {/* Navigation Buttons */}
      <div className="flex gap-1 my-4">
        <div className="bg-primary-orange px-4 py-2 rounded-md text-white text-[12px] cursor-pointer">
          <FaLessThan />
        </div>
        <div className="bg-primary-orange px-4 py-2 rounded-md text-white text-[12px] cursor-pointer">
          <FaGreaterThan />
        </div>
      </div>

      {/* Show Coming Soon Modal */}
      {isModalOpen && <ComingSoon onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

const SocialMediaSection = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mt-6 mb-3">Join Our Social Media</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <SocialMediaCard
          icon={<FaInstagram size={40} className="text-pink-500" />}
          platform="Instagram"
          username="@your_instagram"
          followers="12.5K"
        />
        <SocialMediaCard
          icon={<FaTiktok size={40} className="text-black" />}
          platform="TikTok"
          username="@your_tiktok"
          followers="50.2K"
        />
        <SocialMediaCard
          icon={<FaFacebook size={40} className="text-blue-600" />}
          platform="Facebook"
          username="@your_facebook"
          followers="8.3K"
        />
        <SocialMediaCard
          icon={<FaYoutube size={40} className="text-red-600" />}
          platform="YouTube"
          username="@your_youtube"
          followers="20.7K"
        />
      </div>
    </div>
  );
};

const SocialMediaCard = ({ icon, platform, username, followers }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center">
      {icon}
      <h3 className="text-md font-semibold mt-2">{platform}</h3>
      <p className="text-gray-600 text-sm">{username}</p>
      <p className="text-gray-500 text-xs">{followers} Followers</p>
      <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-md text-sm">
        Follow
      </button>
    </div>
  );
};

// Skills Section
const SkillsSection = () => {
  const skills = [
    {
      id: 1,
      image: skill1,
      text: "Basic Computer Skills",
    },
    {
      id: 2,
      image: skill2,
      text: "Self-Improvement Skills",
    },
    {
      id: 3,
      image: skill3,
      text: "Communication Skills",
    },
    {
      id: 4,
      image: skill4,
      text: "Leadership Skills",
    },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mt-6 mb-3">Essential Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.id} image={skill.image} text={skill.text} />
        ))}
      </div>
    </div>
  );
};

const SkillCard = ({ image, text }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center">
      <img src={image} alt={text} className="w-16 h-16" />
      <p className="text-gray-700 text-sm mt-2">{text}</p>
    </div>
  );
};

export default FeaturedCourse;
