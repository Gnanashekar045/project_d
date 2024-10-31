import React from "react";
import PrimaryBtn from "../../components/Button/PrimaryBtn";

const Banner = () => {
  return (
    <>
      <div
        className="w-full h-[55vh] flex items-center justify-center flex-col relative z-10 lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4"
        style={{
          backgroundImage: `url(https://housing.com/news/wp-content/uploads/2022/11/GYM-INTERIORS-FEATURE-compressed.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Darkened overlay for better text */}
        <div className="w-full h-full bg-black/80 absolute top-0 left-0 z-20"></div>

        {/* Text content */}
        <div className="relative z-30 text-center">
          <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-bold text-gray-200 uppercase mb-4">
            No <span className="text-indigo-600">pain</span>, No{" "}
            <span className="text-indigo-600">Gain</span>
          </h1>
          <p className="text-lg text-gray-300 font-medium mb-8">
            Ignite your fitness journey with premium solutions.
          </p>
          <PrimaryBtn className="px-10 py-3 uppercase rounded-full">
            Become a Member
          </PrimaryBtn>
        </div>
      </div>
    </>
  );
};

export default Banner;
