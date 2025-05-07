import React from "react";

function Cards() {
  return (
    <div className="w-full mt-4 space-y-2">
      <div className="flex sm:flex-row  flex-col justify-start items-start gap-x-2 gap-y-2">
        <div className="flex-1 border-2 border-primary rounded-xl overflow-hidden">
          <div className="flex gap-2 justify-start items-start pr-2">
            <i className="ri-graduation-cap-line text-3xl bg-primary rounded-br-lg w-12 h-12 flex justify-center items-center text-white"></i>
            <h2 className="text-xl font-semibold text-primary self-center">
              100 students trained
            </h2>
          </div>

          <p className="text-md text-black p-2 py-3">
            We have successfully trained over 100 students, equipping them with
            vital computer skills for the modern workforce.
          </p>
        </div>
        <div className="flex-1 border-2 border-primary rounded-xl overflow-hidden">
          <div className="flex gap-2 justify-start items-start pr-2">
            <i className="ri-presentation-line text-3xl bg-primary w-12 h-12 rounded-br-lg flex justify-center items-center text-white"></i>
            <h2 className="text-xl font-semibold text-primary self-center">
              Our instructors
            </h2>
          </div>

          <p className="text-md text-black p-2 py-3">
            Our dedicated instructors are committed to student success,
            providing personalized guidance and support.
          </p>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-start items-start gap-x-2 gap-y-2">
        <div className="flex-1 border-2 border-primary rounded-xl overflow-hidden">
          <div className="flex gap-2 justify-start items-start pr-2">
            <i className="ri-bookmark-3-line text-3xl bg-primary rounded-br-lg w-12 h-12 flex justify-center items-center text-white"></i>
            <h2 className="text-xl font-semibold text-primary self-center">
              10 years of experience
            </h2>
          </div>
          <p className="text-md text-black p-2 py-3">
            Our team boasts over 10 years of combined experience in computer
            education, ensuring high-quality instruction.
          </p>
        </div>
        <div className="flex-1 border-2 border-primary rounded-xl overflow-hidden">
          <div className="flex gap-2 justify-start items-start pr-2">
            <i className="ri-user-2-line text-3xl bg-primary rounded-br-lg w-12 h-12 flex justify-center items-center text-white"></i>
            <h2 className="text-xl font-semibold text-primary self-center">
              visionary leader
            </h2>
          </div>
          <p className="text-md text-black p-2 py-3">
            Led by{" "}
            <span
              className="underline
              decoration-secondary
              decoration-1
              underline-offset-2
              text-primary"
            >
              Mr. Arun Giri
            </span>{" "}
            , our director, who has a vision for excellence in education and a
            passion for student success.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
