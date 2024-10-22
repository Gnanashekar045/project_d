import React from "react";
import { Dumbbell, MoveRight } from "lucide-react";
import { data } from "autoprefixer";
import SecondaryLink from "../../components/LinkBtn/SecondaryLink";
const Trainers = () => {
  const trainerData = [
    {
      id: 1,
      trainerImg: "https://source.unsplash.com/random/?bodybuilder",
      name: "Dr. John Smith",
      role: "Body Building Coach",
    },
    {
      id: 2,
      trainerImg: "https://source.unsplash.com/random/?gym,trainer",
      name: "Dr. John Doe",
      role: "Gym Trainer",
    },
    {
      id: 3,
      trainerImg: "https://source.unsplash.com/random/?fitness",
      name: "Mrs. Lilly Doe",
      role: "Prof. fitness coach",
    },
    {
      id: 4,
      trainerImg: "https://source.unsplash.com/random/?wrestler",
      name: "Roman Reigns",
      role: "Prof. wrestling coach",
    },
  ];
  return (
    <>
      <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
        <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-2">
          <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" />
          Our Export Trainers
        </h6>
        <div className="w-full h-auto flex items-center justify-center lg:gap-x-8 md:gap-x-6 sm:gap-x-4 gap-x-3 lg:gap-y-8 md:gap-y-6 sm:gap-y-4 gap-3 flex-wrap mb-10">
          {/*let display it through loop */}
          {trainerData.map((Trainer) => (
            <div
              key={data.id}
              className="lg:w-[23%] md:w-[48%] sm:w-[48%] w-full lg:h-[50vh] md:h-[53vh] sm:h-[58v] h-[60vh] rounded-xl overflow-hidden relative"
            >
              <img
                src={data.trainerImg}
                alt="trainer Image"
                className="w-full h-auto object-cover"
              />
              <div className="w-full h-auto bg-gray-900/70 absolute bottom-0 left-0 py-4 px-2 flex items-center justify-center flex-col">
                <h1 className="text-xl text-white font-semibold">
                  {data.name}
                </h1>
                <p className="text-sm text-gray-300">{data.role}</p>
              </div>
            </div>
          ))}
        </div>
        <SecondaryLink
          link="/trainers"
          className="lg:w-[15%] md:w-[50%] sm:w-[75%] w-[85%] justify-center"
        >
          View All Trainers
          <MoveRight className="w-4 h-4" />
        </SecondaryLink>
      </div>
    </>
  );
};

export default Trainers;
