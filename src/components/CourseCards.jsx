import React, { useState } from "react";
import { modulerJSON } from "../JSON/courseJSON";

function CourseCards({ indx }) {
  return (
    <div className="w-full h-auto sm:container sm:mx-auto flex flex-wrap justify-center items-start">
      {modulerJSON.map((module, idx) => (
        <div
          className="sm:w-2/6 w-full h-auto shrink-0 cursor-pointer overflow-hidden border-8 border-transparent "
          key={idx}
        >
          <div className="w-full h-auto">
            <img src="course_img.jpg" alt={module.fullName} />
          </div>
          <div className="flex bg-primary/5 flex-col text-black justify-center items-center shrink-0 p-4 gap-y-6 py-10 relative">
            <h2 className="text-2xl bg-primary text-white text-center px-10 py-1 rounded-full">
              {module.shortName}
            </h2>
            <h2 className="text-xl text-center">{module.fullName}</h2>
          </div>
          <button className="w-full bg-primary text-white cursor-pointer py-2 hover:bg-primary/80 duration-200">
            know More
          </button>
        </div>
      ))}
    </div>
  );
}

export default CourseCards;
