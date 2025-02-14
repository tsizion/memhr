import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Blog from "../Components/Blog";
import { logo } from "../assets";
import { YouTubePlaylist } from "@codesweetly/react-youtube-playlist";

// Reusable Box Component
const Box = ({ title, onClick, size = "w-32 h-13" }) => {
  return (
    <div
      onClick={() => onClick(title)}
      className={`flex text-center text-sm font-body justify-center items-center px-5 py-6 bg-primary text-white font-medium ${size} rounded-lg shadow-md hover:bg-primary-dark hover:scale-105 hover:shadow-lg hover:shadow-primary transition-all`}
    >
      {title}
    </div>
  );
};

const Amharic = () => {
  const navigate = useNavigate();
  const boxes = [
    "ሪአክትን ተማር",
    "ጃቫስክሪፕትን ማስተላለፊያ",
    "ፕሮጀክቶችን መስራት",
    "UI/UXን ማሻሻል",
    "በባኪንድ ላይ ተተክል",
    "ከባለሙያዎች ጋር መያዣ ማንበብ",
    "በቀጣይ መማር",
  ];

  // Default selected box is the first one
  const [selectedBox, setSelectedBox] = useState(boxes[0]);

  // Cards for each box
  const cards = {
    "ሪአክትን ተማር": [
      { title: "ሪአክት መሠረቶች", content: "ሪአክትን በመጀመሪያ ስለማስተላለፊያ ተማሩ።" },
      { title: "ዩቱብ ፕሌይስሊስት", content: "", isPlaylist: true },
    ],
    "ጃቫስኪሪፕትን ማስተላለፊያ": [
      { title: "ጃቫስኪሪፕት መሠረቶች", content: "ጃቫስኪሪፕት እንደመጀመሪያ ተማሩ።" },
      { title: "ዩቱብ ፕሌይስሊስት", content: "", isPlaylist: true },
    ],
    "ፕሮጀክቶችን መስራት": [
      { title: "ቀላል ፕሮጀክቶችን ማስተላለፊያ", content: "ቀላል ፕሮጀክቶችን መስራት አሁን ጀምሩ።" },
      { title: "ዩቱብ ፕሌይስሊስት", content: "", isPlaylist: true },
    ],
    "UI/UXን ማሻሻል": [
      { title: "UI እና UX ስለማሻሻል", content: "UI እና UX በተለምዶ ማሻሻል ስለሚከተል።" },
      { title: "ዩቱብ ፕሌይስሊስት", content: "", isPlaylist: true },
    ],
    "በባኪንድ ላይ ተተክል": [
      { title: "በባኪንድ መሠረቶች", content: "ባኪንድ ስለሚሆን ተማሩ።" },
      { title: "ዩቱብ ፕሌይስሊስት", content: "", isPlaylist: true },
    ],
    "ከባለሙያዎች ጋር መያዣ ማንበብ": [
      { title: "ስለማሳሰብ መነሳት", content: "ስለመማር ከባለሙያዎች ጋር መተዋወቅ።" },
      { title: "ዩቱብ ፕሌይስሊስት", content: "", isPlaylist: true },
    ],
    "በቀጣይ መማር": [
      { title: "መነሳት", content: "በስራ ላይ በተደላዊ ሁኔታ ማማረሽ።" },
      { title: "ዩቱብ ፕሌይስሊስት", content: "", isPlaylist: true },
    ],
  };

  // Handle the box click event
  const handleBoxClick = (title) => {
    setSelectedBox(title);
  };

  // Get the current cards for the selected box
  const currentCards = selectedBox ? cards[selectedBox] : [];

  return (
    <div className="container flex flex-col items-center p-4 space-y-4 bg-[#f7f7f7] relative">
      {/* Logo at the top-left corner */}
      <div
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 cursor-pointer"
      >
        <img src={logo} alt="Logo" className="w-40" />
      </div>

      {/* Titles */}
      <h1 className="text-4xl font-bold font-body text-primary-dark bg-clip-text shadow-glow">
        የማህበረሰብ መንገድ
      </h1>
      <h2 className="text-xl font-semibold text-gray-600 font-body">
        በእኔ እቅድ ስር እንደምን ነገሮች እንደምን እናቀርባለን
      </h2>

      {/* Button Boxes */}
      <div className="space-y-6 mt-6 w-full max-w-5xl">
        <div className="flex flex-wrap justify-center gap-4">
          {boxes.map((box, index) => (
            <Box key={index} title={box} onClick={handleBoxClick} />
          ))}
        </div>
      </div>

      {/* Displaying Cards */}
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
            <Blog title="Blog ስም" content="አሁን ሁሉንም መማር ይመስለኝ።" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Amharic;
