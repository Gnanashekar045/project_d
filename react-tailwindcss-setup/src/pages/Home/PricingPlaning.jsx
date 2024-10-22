import { Dumbbell } from "lucide-react";
import React from "react";

const Pricingplan = () => {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
        <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
          <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" />
          Our pricing Plan
        </h6>
        <div className="w-full h-auto flex justify-center gap-x-5 gap-y-8 flex-wrap">
          <div className="lg:w-[28%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 sm:py-10 py-10 bg-black rounded-lg border-6 border-gray-600 hover:border-indigo-600 hover:bg-gray-600 ease-out duration-700 cursor-pointer">
            <h2 className="text-4xl text-white font-semibold mb-5">
                Basic Plan
            </h2>
            <h1 className=""></h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricingplan;
