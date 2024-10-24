import { Dumbbell } from "lucide-react";
import React from "react";

const Popular = () => {
  const exercisesData = [
    {
      id: 1,
      trainerImg: "https://pumpsandiron.com/wp-content/uploads/2016/09/5-minute-warm-up-workouts.jpg",
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
      <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
        <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
          <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" />
          Our Popular Exercises
        </h6>
        <div className="w-full h-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6">
          {exercisesData.map((data) => (
            <div
              key={data.id}
              className="w-full h-auto rounded-lg overflow-hidden hover:shadow-lg shadow-indigo-900/40 ease-out duration-700 cursor-pointer bg-gray-800"
            >
              <img
                src={data.trainerImg}
                alt={`${data.name} image`}
                className="w-full h-[250px] object-cover rounded-t-lg"
              />
              <div className="w-full h-auto py-4 px-3">
                <h1 className="text-lg text-white font-semibold mb-1">
                  {data.name}
                </h1>
                <div className="w-full h-auto flex items-center gap-x-2">
                  <p className="text-sm text-gray-300">{data.duration} min</p>
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                  <p className="text-sm text-gray-300">{data.sets} sets</p>
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                  <p className="text-sm text-gray-300">{data.calories} kcal</p>
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
