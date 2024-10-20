import React from "react";

const About = () => {
  return (
    <div>
      <>
        <div className="w-full h-auto flex items-center justify-between gap-7 lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap-reverse">
          <div className="lg:w-[38%] md:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg">
            <img
              src="https://www.gymreadyequipment.com/wp-content/uploads/2023/04/Body-Solid-EXM2500B-2.jpg"
              alt="about Image"
              className="w-full lg:h-[70vh] md:h-[68%] sm:h-[60%] h-[55%] object-cover"
            ></img>
          </div>
        </div>
      </>
    </div>
  );
};

export default About;
