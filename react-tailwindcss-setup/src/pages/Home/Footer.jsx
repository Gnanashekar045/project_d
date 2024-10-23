import { Dumbbell, Link } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-center bg-black/30 flex-colpy-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
        <div className="w-full h-auto flex items-start lg:justify-between md:justify-between sm:justify-center gap-5 mb-10 flex-wrap">
          <div className="lg:w-[30%] md:w-[30%] sm:w-full w-full h-auto p-2 flex items-start flex-col">
            <Link className="w-fit h-auto text-3xl text-indigo-600 font-semibold tracking-wide flex items-end gap-x-1 relative">
              G<span className="text-xl font-bold text-gray-300">Y</span>M
              <Dumbbell className="w-5 h-4 text-indigo-600 -rotate-45 absolute top-0 left-1/2 transform -translate-x-1/2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
  8;
};

export default Footer;
