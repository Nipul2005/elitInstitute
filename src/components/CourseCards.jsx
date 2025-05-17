import { modulerJSON } from "../JSON/courseJSON";
import { Link } from "react-router-dom";

function CourseCards() {
  return (
    <div className="w-full h-auto sm:container sm:mx-auto flex flex-wrap justify-start items-start">
      {modulerJSON.map((module, idx) => (
        <div
          className="sm:w-2/6 w-full h-auto shrink-0 cursor-pointer overflow-hidden border-10 border-transparent"
          key={idx}
        >
          <div className="w-full h-auto">
            <img src="course_img.jpg" alt={module.fullName} />
          </div>
          <div className="flex bg-primary/10 flex-col text-black justify-center items-center shrink-0 gap-y-6 relative pb-10">
            <h2 className="text-2xl bg-primary/80 text-white text-center px-6 py-1 self-start justify-self-start ">
              {module.shortName}
            </h2>
            <h2 className="text-xl text-center mt-2">{module.fullName}</h2>
          </div>
          <Link to={`/courses/#${module.shortName}`}>
            <button className="w-full bg-primary rounded-b-3xl text-white text-lg cursor-pointer py-2 hover:bg-primary/80 duration-200">
              know More
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CourseCards;
