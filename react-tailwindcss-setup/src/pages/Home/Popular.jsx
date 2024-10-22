import { Dumbbell } from "lucide-react";
import React from "react";

const Popular = () => {
  const exercisesData = [
    {
      id: 1,
      trainerImg: "https://source.unsplash.com/random/?warmup",
      name: "Warm up",
      duration: 15,
      sets: 3,
      calories: 100,
    },
    {
      id: 2,
      trainerImg: "https://source.unsplash.com/random/?deadlift",
      name: "Shoulder Workout",
      duration: 20,
      sets: 4,
      calories: 150,
    },
    {
      id: 3,
      trainerImg: "https://source.unsplash.com/random/?yoga",
      name: "Yoga Session",
      duration: 55,
      sets: 5,
      calories: 250,
    },
    {
      id: 4,
      trainerImg: "https://source.unsplash.com/random/?squat",
      name: "Leg Workout",
      duration: 18,
      sets: 4,
      calories: 120,
    },
  ];
  return (
    <>
      <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-124 md-px-16 sm:px-6 px-4">
        <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
          <Dumbbell className="w-4 h4 -rotate-45 text-indigo-600" />
          Our Popular Exercised
        </h6>
        <div className="w-full h-auto flex items-center gap-x-5 gap-y-6 lg:flex-newrap md:flex-wrap sm:flex-wrap flex-wrap">
            {exercisesData.map((data)=>(
                <div key={data.id} className="lg:w-[24%] md:w-[48%] sm:w-[48%] w-[48] h-auto rounded-lg overflow-hidden hover:shadow-indigo-900/40 ease-out duration-700 cursor-pointer">
                <img
                  src={data.exercisesData}
                  alt="exersises img"
                  className="w-full lg:h-[30vh] md:h-[33vh] sm:h-[38vh] h-[40vh] object-cover rounded-lg"
                />
                <div className="w-full h-auto py-4 px-3">
                  <h1 className="text-lg text-white font-semibold mb-1">
                    {data.name}
                  </h1>
                  <div className="w-full h-auto flex items-center gap-x-2">
                    <p className="text-sm text-gray-300">{data.duration}</p>
                    <span className="w-1 h-1 rounded-full bg-gray-600" />
                    <p className="text-sm text-gray-300">{data.sets}</p>
                    <span className="w-1 h-1 rounded-full bg-gray-600" />
                    <p className="text-sm text-gray-300">{data.calories}</p>
                    <span className="w-1 h-1 rounded-full bg-gray-600" />
                  </div>
                </div>
              </div>
            ))}
          
        </div>
      </div>
    </>
  );
};

export default Popular;
