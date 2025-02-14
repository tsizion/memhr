import React from "react";
import Footer from "../layouts/Footer";
import Intro from "../Components/LandingPage/Intro";
import FeaturedCourse from "../Components/FeaturedCourses.jsx/FeaturedCourse";
import Services from "../Components/Services/Services";

const LandingPage = () => {
  return (
    <>
      <div className="container">
        <Intro />
        <FeaturedCourse />
      </div>
      <Services />
      <Footer />
    </>
  );
};

export default LandingPage;
