import React from "react";
import Heading from "./_component/Heading";
import Hero from "./_component/Hero";
import Footer from "./_component/Footer";
/**
 * display marketing landing page 
 */
const MarketingPage = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <div className="flex flex-col items-center justify-center  text-center   flex-1 px-6 pb-5">
        <Heading/>
        <Hero/>
      </div>
      <Footer/>
    </div>
  );
};

export default MarketingPage;
