import React from "react";
import Hero from "./hero";
import About from "./About";

const Home = () => {
  return (
    <>
      <div className="w-full h-auto">
        <Hero />
        <About />
      </div>
    </>
  );
};

export default Home;
