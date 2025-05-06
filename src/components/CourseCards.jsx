import React from "react";
import { modulerJSON } from "../JSON/courseJSON";

function CourseCards({ indx }) {
  const romanNumerals = ["I", "II", "III", "IV", "V", "VI"];

  return (
    <div className="w-full h-auto sm:container sm:mx-auto flex overflow-x-auto overflow-y-visible justify-start items-center">
      <div
        className="w-full h-auto flex transition duration-300 ease-in-out"
        style={{ transform: `translateX(-${indx * (100 / 1)}%)` }}
      >
        {modulerJSON.map((module, idx) => (
          <div
            className="sm:w-2/6 w-full h-auto shrink-0 p-2 pr-0 cursor-pointer select-none"
            key={idx}
          >
            <div className="h-auto w-full relative group">
              <img src="/img.avif" alt="" className="w-full h-full" />
              <div className=" bg-black/80 px-3 text-white sm:absolute sm:top-0 sm:right-0 w-full h-full flex flex-col justify-center items-center transition-all duration-300 ease-in-out p-4 shrink-0">
                <h2 className="text-center text-4xl">{module.shortName}</h2>
                <h2 className="text-center text-2xl mt-1">{module.fullName}</h2>
                <p>Duration : {module.durationFee.duration}</p>
                <p>Registeration Fee : {module.durationFee.registerationFee}</p>
                <p>Exam Fee : {module.durationFee.examFee}</p>
                <p>Fee : {module.durationFee.Fee}</p>
              </div>
            </div>

            <div
              className="w-full flex flex-col gap-y-2 justify-start items-start pt-3"
              style={
                module.modules.length > 2 ? {
                  overflowY: "scroll",
                  maxHeight: "320px",
                }:{}
              }
            >
              {module.modules.map((course, id) => (
                <div className="w-full p-3 bg-primary/10">
                  <h4 className="w-full text-lg mb-1" key={id}>
                    Module {romanNumerals[id]} : ({course.name})
                  </h4>
                  <p className="w-full pl-3 text-sm">{course.topics}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseCards;
