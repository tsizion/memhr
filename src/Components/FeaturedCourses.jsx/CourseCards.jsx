import React from "react";
import {
  Course1,
  Course2,
  Course4,
  Course5,
  Course7,
  person1,
  person2,
  person3,
} from "../../assets";

const images = [Course1, Course2, Course4, Course5, Course7];

const CourseCards = ({ activeCourse, onCardClick }) => {
  const courseContent = {
    1: [
      {
        id: 1,
        title: "Introduction to React",
        instructor: "John Doe",
        role: "Senior Developer",
        image: person1,
      },
      {
        id: 2,
        title: "React Hooks ",
        instructor: "Jane Smith",
        role: "Frontend Engineer",
        image: person2,
      },
      {
        id: 3,
        title: "React Router ",
        instructor: "Alice Johnson",
        role: "Software Engineer",
        image: person3,
      },
      {
        id: 4,
        title: "Deploying React Apps",
        instructor: "Bob Williams",
        role: "Tech Lead",
        image: person1,
      },
    ],
    2: [
      {
        id: 1,
        title: "Understanding Closures",
        instructor: "Charlie Brown",
        role: "JavaScript Expert",
        image: person2,
      },
      {
        id: 2,
        title: "Asynchronous JavaScript",
        instructor: "David Lee",
        role: "Backend Developer",
        image: person3,
      },
      {
        id: 3,
        title: "ES6+ Features",
        instructor: "Emma Watson",
        role: "Full Stack Developer",
        image: person1,
      },
      {
        id: 4,
        title: "JavaScript Performance",
        instructor: "Frank Miller",
        role: "Software Architect",
        image: person2,
      },
    ],
    3: [
      {
        id: 1,
        title: "Design Thinking",
        instructor: "Grace Hopper",
        role: "UX Designer",
        image: person3,
      },
      {
        id: 2,
        title: "Wireframing & Prototyping",
        instructor: "Helen Keller",
        role: "Product Designer",
        image: person1,
      },
      {
        id: 3,
        title: "Color & Typography",
        instructor: "Isaac Newton",
        role: "Visual Designer",
        image: person2,
      },
      {
        id: 4,
        title: "Usability Testing",
        instructor: "James Maxwell",
        role: "UX Researcher",
        image: person3,
      },
    ],
    4: [
      {
        id: 1,
        title: "Introduction to ML",
        instructor: "Katherine Johnson",
        role: "Data Scientist",
        image: person1,
      },
      {
        id: 2,
        title: "Supervised vs Unsupervised Learning",
        instructor: "Leonardo da Vinci",
        role: "AI Engineer",
        image: person2,
      },
      {
        id: 3,
        title: "Neural Networks Basics",
        instructor: "Marie Curie",
        role: "Machine Learning Engineer",
        image: person3,
      },
      {
        id: 4,
        title: "Deploying ML Models",
        instructor: "Nikola Tesla",
        role: "AI Researcher",
        image: person1,
      },
    ],
  };

  return (
    <div className="grid xsm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      {courseContent[activeCourse]?.map((lesson) => (
        <div
          key={lesson.id}
          className=" xsm:h-60 md:h-72 overflow-auto bg-white rounded-lg shadow-lg  cursor-pointer hover:shadow-xl transition duration-300"
          onClick={onCardClick} // Show the modal when clicked
        >
          {/* Image */}
          <div className="h-[40%]">
            <img
              src={images[Math.floor(Math.random() * images.length)]}
              alt={lesson.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="h-auto  p-4 flex flex-col justify-center items-start">
            <div className="flex items-center space-x-3">
              <img
                src={lesson.image}
                alt={lesson.instructor}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="xsm:text-[10px] sm:text-sm md:text-lg font-semibold text-primary">
                  {lesson.instructor}
                </h3>
                <p className="xsm:text-[10px] sm:text-sm font-light text-gray-500">
                  {lesson.role}
                </p>
              </div>
            </div>
            <h4 className="xsm:text-[10px] sm:text-md font-medium mt-2 text-left text-primary">
              {lesson.title}
            </h4>
            <p className=" xsm:text-[8px] text-[12px] font-light font-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCards;
