import React, { useState } from "react";
import { YouTubePlaylist } from "@codesweetly/react-youtube-playlist";
import Blog from "../Components/Blog";
import { logo } from "../assets";

// Reusable Box Component
const Box = ({ title, onClick, size = "w-32 h-13" }) => {
  return (
    <div
      onClick={() => onClick(title)} // Handle the click event
      className={`flex text-center text-sm font-body justify-center items-center px-5 py-6 bg-primary text-white font-medium ${size} rounded-lg shadow-md hover:bg-primary-dark hover:scale-105 hover:shadow-lg hover:shadow-primary transition-all`}
    >
      {title}
    </div>
  );
};

const Tigrinya = () => {
  const boxes = [
    "ምስ ትምህርት",
    "በጃቫስክሪፕት ኣማካኝ",
    "ፕሮጀክቶችን ማምረት",
    "UI/UXን መሻሻል",
    "በባከንድ ማሰተባበር",
    "ከሙዚቃ እንዲሁ ባለሙያ እንደተነጋገር",
    "በቆልምን ማሻሻል",
  ];

  const [selectedBox, setSelectedBox] = useState(boxes[0]);

  const cards = {
    "ምስ ትምህርት": [
      { title: "ትምህርት መሰረታዊ", content: "ትምህርት ምንን መማር" },
      { title: "YouTube Playlist", content: "", isPlaylist: true },
    ],
    "በጃቫስክሪፕት ኣማካኝ": [
      { title: "ማህተም መነሻዊ", content: "አማርኛ በማህተም ምን ማሰስ፡-" },
      { title: "YouTube Playlist", content: "", isPlaylist: true },
    ],
    "ፕሮጀክቶችን ማምረት": [
      { title: "ማሰተባበር", content: "ተማሪ ፕሮጀክት ትማት" },
      { title: "YouTube Playlist", content: "", isPlaylist: true },
    ],
    // Add more sections here
  };

  const handleBoxClick = (title) => {
    setSelectedBox(title);
  };

  const currentCards = selectedBox ? cards[selectedBox] : [];

  return (
    <div className="container flex flex-col items-center p-4 space-y-4 bg-[#f7f7f7] relative">
      <div className="absolute top-4 left-4 cursor-pointer">
        <img src={logo} alt="Logo" className="w-40" />
      </div>

      <h1 className="text-4xl font-bold font-body text-primary-dark bg-clip-text shadow-glow">
        እትም ምስ ስምምነት
      </h1>
      <h2 className="text-xl font-semibold text-gray-600 font-body">
        ምስ ትምህርትንንንን ዝተሰማምዐ ሕይወትን ናብ ቀንዲ ዘመን እትም አድርጋታት።
      </h2>

      <div className="space-y-6 mt-6 w-full max-w-5xl">
        <div className="flex flex-wrap justify-center gap-4">
          {boxes.map((box, index) => (
            <Box key={index} title={box} onClick={handleBoxClick} />
          ))}
        </div>
      </div>

      <div className="flex mx-auto w-full justify-items-center mt-2 gap-4">
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
            <Blog
              title="ባህላዊ እንተ ምሳሌ"
              content="ከምትም ምሳሌ ምንበርኩ ኣማርኛን ምንበርኩ በእንዴት ውብን።"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tigrinya;
