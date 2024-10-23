import React from "react";
import Hero from "./hero";
import About from "./About";
import BMI from "./BMI";
import Services from "./Services";
import Banner from "./Banner";
import Trainers from "./Trainers";
import Popular from "./Popular";
import Pricingplan from "./PricingPlaning";
import Contacts from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="w-full h-auto">
        <Hero />
        <About />
        <BMI />
        <Services />
        <Banner />
        <Trainers />
        <Popular />
        <Pricingplan />
        <Contacts />
        <Footer />
      </div>
    </>
  );
};

export default Home;
