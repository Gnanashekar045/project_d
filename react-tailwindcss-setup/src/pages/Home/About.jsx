import React from "react";
import { Dumbbell } from "lucide-react";
import SecondaryBtn from "../../components/Button/SecondaryBtn";

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
          <dir className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center">
            <h6 className="text-lg font-medium text-gray-500 flex items-center lg:justify-start md:justify-start sm:justify-start justify-center gap-x-2 mb-3">
              <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" />
              About Us
            </h6>
            <h1 className="lg:text-3xl md:text-3xl sm:text-2xl font-semibold text-gray-200 mb-4 leading-normal lg:pe-5 md:pe-4 sm:pe-1 pe-0">
              Effectless Strenght timely Gain Building better bodies faster
            </h1>
            <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4">
              This the informtion about Gym that we are going to launch newly in
              the event of special ocations will give information about all the
              plan we have drff edtrt f dft dsdfere scsdf ert sarer r wer5wt
              dfsdfsdr ererwtw etwtert w4tertery eytruru rtutyutit rut8t7iyru
              6t7iti tur6it7itjfjktut utyjrur rur sderye ty tryrurturtu
              tururutrur r6ur6urur6
            </p>
            <SecondaryBtn className="lg:w-auto md:w-auto sm:w-full w-full px-7 py-2 text-base font-medium uppercase justify-center">
              Become a Number
            </SecondaryBtn>
          </dir>
        </div>
      </>
    </div>
  );
};

export default About;
