function CourseDesign({ module }) {
  return (
    <section className="w-full h-auto relative flex lg:flex-row flex-col justify-start items-start gap-x-8 gap-y-6 sm:py-18 pb-7">
      <div className="flex-1 overflow-hidden sm:rounded-xl">
        <img
          src="http://localhost:5173/course_img.jpg"
          alt="Course Banner"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="flex-1 w-full sm:p-0 px-4">
        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-3xl font-light text-primary tracking-tight leading-tight">
          {module.fullName}
        </h1>
        <div className="w-full flex flex-col justify-start items-start mt-4 gap-y-5 ">
          {module.modules.map((module, idx) => (
            <div
              className="w-full flex flex-col justify-start items-start gap-y-2"
              key={idx}
            >
              <h2 className="text-xl">Module {idx + 1}: {module.name}</h2>
              <p className="text-md text-gray-600 pl-5">{module.topics}</p>
            </div>
          ))}
          <button className="bg-primary/70 duration-200 text-white px-6 py-2 rounded-full cursor-pointer self-end mt-10 hover:bg-primary/100">Enroll Now</button>
        </div>
      </div>
    </section>
  );
}

export default CourseDesign;
