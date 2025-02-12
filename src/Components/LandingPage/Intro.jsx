import React from "react";
import Welcome from "./Welcome";
import LanguageCardsContainer from "./LanguageCard";
import LanguageCirclesContainer from "./LanguageCard";

const Intro = () => {
  return (
    <div className="flex h-[50vh] ">
      <div className="w-1/2 text-white text-xl font-bold">
        <Welcome />
      </div>
      <div className="w-1/2  flex items-center justify-center text-white   font-bold">
        <LanguageCirclesContainer />
      </div>
    </div>
  );
};

export default Intro;
