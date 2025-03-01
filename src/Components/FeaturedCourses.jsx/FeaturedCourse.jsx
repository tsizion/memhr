import React, { useState } from "react";
import CourseCards from "./CourseCards";
import YoutubeComponent from "../Youtube/YoutubeComponent";
import {
  FaBook,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaGreaterThan,
  FaLaptopCode,
  FaLessThan,
} from "react-icons/fa";
import { FaInstagram, FaTiktok, FaFacebook, FaYoutube } from "react-icons/fa";
import ComingSoon from "../ComingSoon";
import { skill1, skill2, skill3, skill4 } from "../../assets";
import { useLanguage } from "../../Context/LanguageContext";

const FeaturedCourse = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      courses: [
        { id: 1, name: "Youtube Channels" },
        { id: 2, name: "Social Media" },
        { id: 3, name: "Skills" },
        { id: 4, name: "Blogs & resources" },
      ],
      courseSelection: "Course Selection",
      joinSocial: "Join Our Social Media",
      essentialSkills: "Essential Skills",
      blogResources: "Blog & Resources",
    },
    am: {
      courses: [
        { id: 1, name: "ዩቱብ ቻነል" },
        { id: 2, name: "ማህበረሰብ ሚዲያ" },
        { id: 3, name: "ክህሎቶች" },
        { id: 4, name: "ብሎጎች እና ምርጥ ምንጮች" },
      ],
      courseSelection: "ትምህርት ምርጫ",
      joinSocial: "ከማህበረሰባችን ሚዲያ ጋር ተያይዞ ይተላለፉ",
      essentialSkills: "አስፈላጊ ክህሎቶች",
      blogResources: "ብሎጎች እና ምርጥ ምንጮች",
    },
    ti: {
      courses: [
        { id: 1, name: "ዩቱብ ቻነል" },
        { id: 2, name: "ማህበረሰብ ሚዲያ" },
        { id: 3, name: "ክህሎች" },
        { id: 4, name: "ብሎጎች እና ምርጥ ምንጮች" },
      ],
      courseSelection: "ትምህርት ምርጫ",
      joinSocial: "ከማህበረሰባችን ሚዲያ ጋር ተያይዞ ይተላለፉ",
      essentialSkills: "አስፈላጊ ክህሎቶች",
      blogResources: "ብሎጎች እና ምርጥ ምንጮች",
    },
  };

  const [activeCourse, setActiveCourse] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="py-4 w-full my-10">
      <h2 className="xsm:text-[13px] sm:text-sm md:text-xl font-semibold mb-4">
        {translations[language].courseSelection}
      </h2>

      <div className="relative w-full border-b-2 border-gray-300">
        <div className="flex justify-between w-full">
          {translations[language].courses.map((course) => (
            <h2
              key={course.id}
              className={`xsm:text-[11px] sm:text-[12px] md:text-lg font-medium px-4 py-2 cursor-pointer transition-all duration-300 ${
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

        <div
          className="absolute -bottom-0.5 h-1 bg-orange-500 transition-all duration-300 rounded-2xl"
          style={{
            width: `${100 / translations[language].courses.length}%`,
            left: `${
              (activeCourse - 1) * (100 / translations[language].courses.length)
            }%`,
          }}
        />
      </div>

      {activeCourse === 1 ? (
        <YoutubeComponent />
      ) : activeCourse === 2 ? (
        <SocialMediaSection />
      ) : activeCourse === 3 ? (
        <SkillsSection />
      ) : (
        <BlogAndResources />
      )}

      <div className="flex gap-1 my-4">
        <div className="bg-primary-orange px-4 py-2 rounded-md text-white sm:text-[10px] md:text-[12px] cursor-pointer">
          <FaLessThan />
        </div>
        <div className="bg-primary-orange px-4 py-2 rounded-md text-white sm:text-[10px] md:text-[12px] cursor-pointer">
          <FaGreaterThan />
        </div>
      </div>

      {isModalOpen && <ComingSoon onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

const SocialMediaSection = () => {
  const { language } = useLanguage();

  const translations = {
    en: { joinSocial: "Join Our Social Media", follow: "Follow" },
    am: { joinSocial: "ከማህበረሰባችን ሚዲያ ጋር ተያይዞ ይተላለፉ", follow: "ተከተል" },
    ti: { joinSocial: "ከማህበረሰባችን ሚዲያ ጋር ተያይዞ ይተላለፉ", follow: "ተከተል" },
  };

  return (
    <div>
      <h2 className="xsm:text-sm md:text-lg font-semibold mt-6 mb-3">
        {translations[language].joinSocial}
      </h2>
      <div className="grid xsm:grid-cols-2 md:grid-cols-4 gap-4">
        <SocialMediaCard
          icon={<FaInstagram size={40} className="text-pink-500" />}
          platform="Instagram"
          username="@your_instagram"
          followers="12.5K"
          followText={translations[language].follow}
        />
        <SocialMediaCard
          icon={<FaTiktok size={40} className="text-black" />}
          platform="TikTok"
          username="@your_tiktok"
          followers="50.2K"
          followText={translations[language].follow}
        />
        <SocialMediaCard
          icon={<FaFacebook size={40} className="text-blue-600" />}
          platform="Facebook"
          username="@your_facebook"
          followers="8.3K"
          followText={translations[language].follow}
        />
        <SocialMediaCard
          icon={<FaYoutube size={40} className="text-red-600" />}
          platform="YouTube"
          username="@your_youtube"
          followers="20.7K"
          followText={translations[language].follow}
        />
      </div>
    </div>
  );
};

const SocialMediaCard = ({
  icon,
  platform,
  username,
  followers,
  followText,
}) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center">
      {icon}
      <h3 className="xsm:text-sm md:text-md font-semibold mt-2">{platform}</h3>
      <p className="text-gray-600 xsm:text-xs md:text-sm">{username}</p>
      <p className="text-gray-500 xsm:text-[10px] md:text-xs">
        {followers} Followers
      </p>
      <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-md xsm:text-[10px] md:text-sm">
        {followText}
      </button>
    </div>
  );
};

const SkillsSection = () => {
  const { language } = useLanguage();

  const translations = {
    en: { essentialSkills: "Essential Skills" },
    am: { essentialSkills: "አስፈላጊ ክህሎቶች" },
    ti: { essentialSkills: "አስፈላጊ ክህሎች" },
  };

  const skills = [
    {
      id: 1,
      image: skill1,
      text: {
        en: "Basic Computer Skills",
        am: "መሰረታዊ ኮምፒዩተር ክህሎቶች",
        ti: "መሰረታዊ ኮምፒዩተር ክህሎቶች",
      },
    },
    {
      id: 2,
      image: skill2,
      text: {
        en: "Self-Improvement Skills",
        am: "ራስ ማሻሻያ ክህሎቶች",
        ti: "ራስ ማሻሻያ ክህሎቶች",
      },
    },
    {
      id: 3,
      image: skill3,
      text: {
        en: "Communication Skills",
        am: "እንቅስቃሴ ክህሎቶች",
        ti: "እንቅስቃሴ ክህሎቶች",
      },
    },
    {
      id: 4,
      image: skill4,
      text: {
        en: "Leadership Skills",
        am: "መሪነት ክህሎቶች",
        ti: "መሪነት ክህሎቶች",
      },
    },
  ];

  return (
    <div>
      <h2 className="xsm:text-sm md:text-lg font-semibold mt-6 mb-3">
        {translations[language].essentialSkills}
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            image={skill.image}
            text={skill.text[language]} // Use the language-specific translation
          />
        ))}
      </div>
    </div>
  );
};

const SkillCard = ({ image, text }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center">
      <img src={image} alt={text} className="w-16 h-16" />
      <p className="text-gray-700 xsm:text-xs md:text-sm mt-2">{text}</p>
    </div>
  );
};

const BlogAndResources = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      blogResources: "Blog & Resources",
      resources: [
        { name: "Blog 1", description: "Learn the basics of ML." },
        { name: "Resource 1", description: "Top ML books." },
        { name: "Blog 2", description: "ML algorithms explained." },
        { name: "Resource 2", description: "Best ML courses." },
      ],
    },
    am: {
      blogResources: "ብሎጎች እና ምርጥ ምንጮች",
      resources: [
        { name: "ብሎግ 1", description: "ስለ ML መሠረታዊ ተማሪነት" },
        { name: "ምንጮች 1", description: "ምርጥ ML መጽሐፍት" },
        { name: "ብሎግ 2", description: "ML አልጎሪተሞች ተረት" },
        { name: "ምንጮች 2", description: "ምርጥ ML ትምህርቶች" },
      ],
    },
    ti: {
      blogResources: "ብሎጎች እና ምርጥ ምንጮች",
      resources: [
        { name: "ብሎግ 1", description: "ስለ ML መሠረታዊ ተማሪነት" },
        { name: "ምንጮች 1", description: "ምርጥ ML መጽሐፍት" },
        { name: "ብሎግ 2", description: "ML አልጎሪተሞች ተረት" },
        { name: "ምንጮች 2", description: "ምርጥ ML ትምህርቶች" },
      ],
    },
  };

  return (
    <div>
      <h2 className="xsm:text-sm md:text-lg font-semibold mt-6 mb-3">
        {translations[language].blogResources}
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {translations[language].resources.map((resource, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center"
          >
            {index % 2 === 0 ? (
              <FaBook size={30} className="text-blue-500" />
            ) : index % 2 === 1 ? (
              <FaChalkboardTeacher size={30} className="text-green-500" />
            ) : index % 2 === 2 ? (
              <FaGraduationCap size={30} className="text-purple-500" />
            ) : (
              <FaLaptopCode size={30} className="text-orange-500" />
            )}
            <h3 className="xsm:text-sm md:text-md font-semibold mt-2">
              {resource.name}
            </h3>
            <p className="text-gray-600 xsm:text-xs md:text-sm">
              {resource.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCourse;
