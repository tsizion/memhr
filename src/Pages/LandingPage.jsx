import React from "react";
import LanguageChoice from "../Sections/LanguageChoice";
import Footer from "../layouts/Footer";

const LandingPage = () => {
  return (
    <>
      <div className="container">
        <LanguageChoice />
      </div>

      <Footer />
    </>
  );
};

export default LandingPage;
