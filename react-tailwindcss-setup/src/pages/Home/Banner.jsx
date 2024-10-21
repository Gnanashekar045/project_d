import React from "react";

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
        <div className="w-full h-auto bg-black/80 absolute top-0 left-0 -z-10"></div>
        <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-bold text-gray-200 uppercase mb-4 text-center">
          No <span className="text-indigo-600">pain</span>, No{" "} 
          <span className="text-indigo-600 ">Gain</span>
        </h1>
      </div>
    </>
  );
};

export default Banner;
