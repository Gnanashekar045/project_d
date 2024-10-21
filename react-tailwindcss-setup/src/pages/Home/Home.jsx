import React from "react";
import Hero from "./hero";
import About from "./About";
import BMI from "./BMI";
import Services from "./Services";
import Banner from "./Banner";

const Home = () => {
  return (
    <>
      <div className="w-full h-auto">
        <Hero />
        <About />
        <BMI />
        <Services />
        <Banner />
      </div>
    </>
  );
};

export default Home;
