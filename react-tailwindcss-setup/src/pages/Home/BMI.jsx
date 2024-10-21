import { Dumbbell } from "lucide-react";
import React, { useState } from "react";
import SecondaryBtn from "../../components/Button/SecondaryBtn";

const BMI = () => {
    //lets write logic to calculate BMI//
    const [weight, setWeiht] = useState("");
    const [height, setHeight] = useState("")
    const [BMIs, setBMI] = useState(null)
    //function to calculate BMI//
    const CalculateBMI = () => {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        setBMI(bmi);
    }
  return (
    <>
      <div className="w-full h-auto flex items-center lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
        <div className="w-full h-auto flex items-center justify-center flex-col">
          <h6 className="lg:text-lg md:text-lg sm:text-base text-base font-medium text-gray-500 flex items-center gap-x-2 bg-black/20 rounded-t-md py-2 px-4">
            <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" />
            Calculate you BMI
          </h6>
          <div className="w-full h-auto flex items-end justify-center bg-black/20 rounded-md lg:gap-5 sm:gap-3 gap-2 py-10 lg:px-0 md:px-0 sm:px-2 px-4 flex-wrap">
            <div className="lg:w-[25%] md:w-[40%] sm:w-[50%] w-full h-auto p-2">
              <label htmlFor="Weight" className="text-white">
                Weight (Kg)
              </label>
              <input
                type="text"
                id="weight"
                name="weight"
                placeholder="Enter Your Weight"
                className="w-full block bg-transparent text-white placeholder-white border border-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white"
                value={weight}
                onChange={(e)=> setWeiht(e.target.value)}
              />
            </div>

            <div className="lg:w-[25%] md:w-[40%] sm:w-[50%] w-full h-auto p-2">
              <label htmlFor="Weight" className="text-white">
                Height (cm)
              </label>
              <input
                type="text"
                id="weight"
                name="weight"
                placeholder="Enter Your Weight"
                className="w-full block bg-transparent text-white placeholder-white border border-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white"
                value={height}
                onChange={(e)=> setHeight(e.target.value)}
              />
            </div>

            <div className="lg:w-[25%] md:w-[40%] sm:w-[50%] w-full h-auto p-2">
              <SecondaryBtn className="w-full h-11 justify-center" onClick={CalculateBMI}>Calculate BMI</SecondaryBtn>
            </div>
          </div>
          {/*Display BMI */}
          {BMIs !== null && (
            <div className="bg-black rounded-b-md px-6 py-2 5">
                <p className="text-indigo-600">
                    Your BMI:- <span className="font-bold">{BMIs}</span>
                </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BMI;
