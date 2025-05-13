import { modulerJSON } from "../JSON/courseJSON";
function Footer() {
  return (
    <footer className="w-full py-5 bg-white text-center px-10 select-none space-y-2">
      <div className="w-full flex justify-between items-center">
        <div className="space-y-3">
          <h3 className="text-3xl text-primary border-b border-primary pb-2 text-start">
            Our Courses
          </h3>
          <div className="flex flex-col justify-start items-start gap-y-2">
            {modulerJSON.map((module, idx) => (
              <p
                key={idx}
                className="text-sm text-black/80 hover:text-primary hover:underline duration-200 ease-in-out cursor-pointer"
              >
                {module.fullName}
              </p>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-3xl text-primary border-b border-primary pb-2 text-start">
            Our Courses
          </h3>
          <div className="flex flex-col justify-start items-start gap-y-2">
            {modulerJSON.map((module, idx) => (
              <p
                key={idx}
                className="text-sm text-black/80 hover:text-primary hover:underline duration-200 ease-in-out cursor-pointer"
              >
                {module.fullName}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-3">
        <img
          src="/eliteicon.png"
          alt="Elite Computer Institute"
          className="w-10 h-10 aspect-square"
          loading="lazy"
        />
        <p className="text-sm text-black/80">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-primary">
            Elite Computer Institute
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
