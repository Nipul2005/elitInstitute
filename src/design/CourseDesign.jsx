import Heading from "./Heading";

function CourseDesign({ module, is }) {
  return (
    <div
      id={module.shortName}
      className="w-full h-auto relative flex lg:flex-row flex-col justify-start items-start gap-x-8 gap-y-6 border-t-5 border-primary/10  sm:py-18 py-8"
      style={{
        borderTopWidth: is === 0 ? 0 : "5px",
      }}
    >
      <div className="flex-1 flex flex-col justify-start items-start">
        <div className="overflow-hidden sm:rounded-xl">
          <img
            src="/course_img.jpg"
            alt={module.fullName}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
        <span className="w-full flex justify-start items-start mt-6 gap-x-5 text-sm text-black/65">
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
      <div className="flex-1 w-full">
        <Heading text={module.fullName} />
        <div className="w-full flex flex-col justify-start items-start gap-y-5">
          {module.modules.map((module, idx) => (
            <div
              className="w-full flex flex-col justify-start items-start gap-y-2 border-b border-primary/10 pb-5"
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
          <button className="bg-primary sm:w-auto w-full duration-200 text-white px-6 py-2 rounded-full cursor-pointer self-end hover:bg-primary/70">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseDesign;
