import React from "react";
import Footer from "../layouts/Footer";
import Intro from "../Components/LandingPage/Intro";
import FeaturedCourse from "../Components/FeaturedCourses.jsx/FeaturedCourse";
import Services from "../Components/Services/Services";
import YoutubeComponent from "../Components/Youtube/YoutubeComponent";
import { useTranslation } from "react-i18next";

const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container">
        <div></div>
        <Intro />
        {/* <YoutubeComponent /> */}
        <FeaturedCourse />
      </div>
      <Services />
      <div className="container">
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
