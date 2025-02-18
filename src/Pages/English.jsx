import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Blog from "../Components/Blog";
import { logo } from "../assets";
import { YouTubePlaylist } from "@codesweetly/react-youtube-playlist";

// Reusable Box Component
const Box = ({ title, onClick, size = "" }) => {
  return (
    <div
      onClick={() => onClick(title)} // Handle the click event
      className={`flex text-center xsm:text-[9px] sm:text-[12px] md:text-sm font-body justify-center items-center px-5 xsm:py-2 sm:py-4 md:py-6 bg-primary text-white font-medium sm:w-28 sm:h-10 md:w-32 md:h-13 rounded-lg shadow-md hover:bg-primary-dark hover:scale-105 hover:shadow-lg hover:shadow-primary transition-all`}
    >
      {title}
    </div>
  );
};

const English = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const boxes = [
    "Learn React",
    "Master JavaScript",
    "Build Projects",
    "Improve UI/UX",
    "Focus on Backend",
    "Network with Experts",
    "Continuous Learning",
  ];

  // Set the default box to be the first one
  const [selectedBox, setSelectedBox] = useState(boxes[0]);

  // Cards to display for each box
  const cards = {
    "Learn React": [
      { title: "React Basics", content: "Learn the basics of React." },
      { title: "YouTube Playlist", content: "", isPlaylist: true },
    ],
    "Master JavaScript": [
      {
        title: "JavaScript Fundamentals",
        content: "Understand the basics of JavaScript.",
      },
      {
        title: "YouTube Playlist",
        content: "",
        isPlaylist: true,
      },
    ],
    "Build Projects": [
      {
        title: "Build Simple Projects",
        content: "Start building basic projects.",
      },
      {
        title: "YouTube Playlist",
        content: "",
        isPlaylist: true,
      },
    ],
    "Improve UI/UX": [
      {
        title: "UI Design Principles",
        content: "Learn the core principles of UI design.",
      },
      {
        title: "YouTube Playlist",
        content: "",
        isPlaylist: true,
      },
    ],
    "Focus on Backend": [
      {
        title: "Backend Basics",
        content: "Learn the fundamentals of backend development.",
      },
      {
        title: "YouTube Playlist",
        content: "",
        isPlaylist: true,
      },
    ],
    "Network with Experts": [
      {
        title: "Building a Network",
        content: "Learn how to connect with professionals in your field.",
      },
      {
        title: "YouTube Playlist",
        content: "",
        isPlaylist: true,
      },
    ],
    "Continuous Learning": [
      {
        title: "Keep Learning",
        content: "Stay updated with the latest trends and technologies.",
      },
      {
        title: "YouTube Playlist",
        content: "",
        isPlaylist: true,
      },
    ],
  };

  // Handle box click event
  const handleBoxClick = (title) => {
    setSelectedBox(title);
  };

  // Get the current cards for the selected box
  const currentCards = selectedBox ? cards[selectedBox] : [];

  return (
    <div className="container flex flex-col items-center p-4 space-y-4 bg-[#f7f7f7] relative">
      {/* Logo at the top-left corner */}
      <div
        onClick={() => navigate("/")} // Navigate to the homepage when clicked
        className="absolute top-4 left-4 cursor-pointer"
      >
        <img src={logo} alt="Logo" className=" xsm:w-24 sm:w-32 md:w-40" />
      </div>

      {/* Titles */}
      <h1 className="xsm:text-lg sm:text-xl md:text-4xl font-bold xsm:mt-[15%] md:mt-[12%] font-body text-primary-dark bg-clip-text shadow-glow">
        My Path to Growth
      </h1>
      <h2 className="xsm:text-sm sm:text-lg md:text-xl font-semibold text-gray-600 font-body text-center">
        Explore the core values and actions shaping my journey.
      </h2>

      {/* Button Boxes */}
      <div className="space-y-6 mt-6 w-full max-w-5xl">
        {/* Flex container for button boxes */}
        <div className="flex flex-wrap justify-center gap-4">
          {boxes.map((box, index) => (
            <Box key={index} title={box} onClick={handleBoxClick} />
          ))}
        </div>
      </div>

      {/* New Section for Two 300px by 300px Boxes */}
      <div className="flex mx-auto w-full justify-items-center mt-2 gap-4">
        {/* Render the dynamic cards based on the selected box */}
        {currentCards.length > 0 ? (
          currentCards.map((card, index) => (
            <div
              key={index}
              className="mx-2 flex flex-col text-center text-sm font-body justify-center items-center px-5 py-6 bg-primary text-white font-medium w-full h-[300px] rounded-lg shadow-md hover:bg-primary-dark hover:scale-105 hover:shadow-lg hover:shadow-primary transition-all"
            >
              <h2 className="text-xl font-semibold mb-4 text-left">
                {card.title}
              </h2>
              {card.isPlaylist ? (
                <YouTubePlaylist
                  apiKey="AIzaSyA3S74hVSIyfY4A0CjYxmLDgoHy9Wa3-Bg"
                  playlistId="PL88PvbeqXtDsOPQjB2ENdLQ8fSAqz2GKF"
                  columnCount="auto"
                  columnWidth="230"
                  gapSize={24}
                  customStyles={{
                    galleryContainerStyle: {
                      borderRadius: "8px",
                      overflow: "hidden",
                    },
                    videoImageStyle: {
                      borderRadius: "5px",
                    },
                  }}
                />
              ) : (
                <p className="text-sm text-gray-200">{card.content}</p>
              )}
            </div>
          ))
        ) : (
          <div className="mx-2 flex flex-col text-center text-sm font-body justify-center items-center px-5 py-6 bg-primary text-white font-medium w-full h-[300px] rounded-lg shadow-md hover:bg-primary-dark hover:scale-105 hover:shadow-lg hover:shadow-primary transition-all">
            {/* Blog Component will show when no cards are available */}
            <Blog
              title="Blog Title"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default English;
