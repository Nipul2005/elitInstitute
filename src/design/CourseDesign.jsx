import Heading from "./Heading";

function CourseDesign({ module, change }) {
  return (
    <section

      id={module.shortName}
      className="w-full h-auto relative flex lg:flex-row flex-col justify-start items-start gap-x-8 gap-y-6 sm:py-18 pb-7 px-4"
    >
      <div className="flex-1 ">
        <div className="overflow-hidden sm:rounded-xl">
          <img
            src="http://localhost:5173/course_img.jpg"
            alt={module.fullName}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
        <span className="w-full flex justify-start items-start mt-6 gap-x-5 text-sm text-black/65 px-4">
          <p>
            <span className="text-primary font-semibold text-md">
              Duration :-
            </span>{" "}
            {module.durationFee.duration}
          </p>
          <p>
            <span className="text-primary font-semibold text-md">
              Examination Fee :-
            </span>{" "}
            {module.durationFee.examFee}
          </p>
          <p>
            <span className="text-primary font-semibold text-md">
              Registeration Fee :-
            </span>{" "}
            {module.durationFee.registerationFee}
          </p>
        </span>
      </div>
      <div className="flex-1 w-full sm:p-0">
        <Heading text={module.fullName} />
        <div className="w-full flex flex-col justify-start items-start gap-y-5 pl-4">
          {module.modules.map((module, idx) => (
            <div
              className="w-full flex flex-col justify-start items-start gap-y-2"
              key={idx}
            >
              <h3 className="text-xl text-primary">
                Module {idx + 1}: {module.name}
              </h3>
              <p className="text-md text-black/65 pl-5 leading-7">
                {module.topics}
              </p>
            </div>
          ))}
          <button className="bg-primary duration-200 text-white px-6 py-2 rounded-full cursor-pointer self-end hover:bg-primary/70">
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default CourseDesign;
