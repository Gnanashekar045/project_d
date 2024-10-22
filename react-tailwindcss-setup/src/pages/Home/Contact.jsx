import { Dumbbell } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-10 md:px-16 sm:px-6 px-4">
        <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
          <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" />
          Ask Out Plans
        </h6>
        <div className="w-full h-auto flex items-center gap-x-8 lg:gap-y-8 md:gad-y-8 sm:gap-y-5 gap-y-4 flex-col lg:p-7 sm:p-4 p-3">
          <div className="w-full h-auto flex items-center lg:gap-x-8 md:gap-x-4 sm:gap-x-4 gap-x-3 lg:gap-y-8 sm:gap-y-5 gap-y-4 lg:flex-newrap md:flex-newrap sm:flex-newrap flex-wrap">
            <div className="lg:w-[32%] md:w-[32%] sm:w-[48] w-full h-auto">
              <input
                type="text"
                id="fullname"
                name="fullname"
                className="w-full h-12 px-4"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="lg:w-[32%] md:w-[32%] sm:w-[48] w-full h-auto">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full h-12 px-4"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="lg:w-[32%] md:w-[32%] sm:w-[48] w-full h-auto">
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full h-12 px-4"
                placeholder="Enter Your Subject"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;