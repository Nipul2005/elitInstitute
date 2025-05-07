import React from "react";
import { modulerJSON } from "../JSON/courseJSON";

function CourseCards({ indx }) {
  const romanNumerals = ["I", "II", "III", "IV", "V", "VI"];

  return (
    <div className="w-full h-auto sm:container sm:mx-auto sm:overflow-x-auto sm:justify-start sm:items-start shrink-0 overflow-y-visible">
      <div
        className="w-full h-auto sm:flex transition duration-300 ease-in-out sm:space-y-0 space-y-3"
        style={{ transform: `translateX(-${indx * (100 / 1)}%)` }}
      >
        {modulerJSON.map((module, idx) => (
          <div
            className="sm:w-2/6 w-full h-auto shrink-0 cursor-pointer select-none border-r-4 border-white rounded-xl overflow-hidden"
            key={idx}
          >
            <h2 className="text-3xl bg-black/80 text-white text-center py-1">
              {module.shortName}
            </h2>
            <div className="h-auto w-full flex bg-primary/80 justify-between items-center pb-5 shrink-0">
              <h2 className="text-xl pl-2 text-white py-4 flex-1">{module.fullName}</h2>
              <div className="text-white py-2 px-4 text-sm">
                <p>Duration : {module.durationFee.duration}</p>
                <p>Registeration Fee : {module.durationFee.registerationFee}</p>
                <p>Exam Fee : {module.durationFee.examFee}</p>
                <p>Fee : {module.durationFee.Fee}</p>
              </div>
            </div>
            <button className="w-full bg-primary text-white py-2 cursor-pointer">
              Now More
            </button>
            {/* <div
              className="w-full flex flex-col gap-y-2 justify-start items-start pt-3"
            >
              {module.modules.map((course, id) => (
                <div className="w-full p-3 bg-primary/10">
                  <h4 className="w-full text-lg mb-1" key={id}>
                    Module {romanNumerals[id]} : ({course.name})
                  </h4>
                  <p className="w-full pl-3 text-sm">{course.topics}</p>
                </div>
              ))}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseCards;
