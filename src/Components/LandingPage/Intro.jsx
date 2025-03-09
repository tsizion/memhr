import React from "react";
import Welcome from "./Welcome";
import LanguageCirclesContainer from "./LanguageCard";

const Intro = () => {
  return (
    <div className="flex gap-1 h-auto justify-center items-stretch">
      <div className="w-1/2 text-white text-xl font-bold flex items-center justify-center">
        <Welcome />
      </div>
      <div className="w-1/2 md:mt-14 flex items-center justify-center text-white font-bold">
        <LanguageCirclesContainer />
      </div>
    </div>
  );
};

export default Intro;
