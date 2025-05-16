import H3 from "../design/H3";
import { modulerJSON, linearJSON, crashCourseJSON } from "../JSON/courseJSON";
import SocialIcons from "./SocialIcons";
function Footer() {
  return (
    <footer className="w-full py-5 bg-primary text-white text-center sm:px-10  px-4 space-y-2">
      <div className="w-full flex sm:flex-row flex-col justify-between items-start gap-y-7 gap-x-5 pb-5 relative h-auto">
        <div className="text-white w-full">
          <H3 text="Our Courses" />
          <div className="w-full flex flex-col justify-start items-start gap-y-2">
            {modulerJSON.map((module, idx) => (
              <p
                key={idx}
                className="w-full text-sm text-start inline-block text-white/80 hover:text-white hover:underline duration-200 ease-in-out cursor-pointer"
              >
                {module.fullName}
              </p>
            ))}
          </div>
        </div>
        <div className="w-full">
          <H3 text="Typing & ShortHand" />
          <div className="flex flex-col justify-start items-start gap-y-6">
            {linearJSON.course.map((module, idx) => (
              <div
                className="w-full flex justify-between items-start gap-x-4"
                key={idx}
              >
                <p className="w-full text-sm text-start">{module.name}</p>
                <span className="w-full flex flex-col justify-start items-start text-white/80 text-sm gap-y-3 text-start">
                  <p>{module.first}</p>
                  <p>{module.second}</p>
                  <p>{module.third}</p>
                </span>
              </div>
            ))}
          </div>
          <div className="w-full mt-5">
            <H3 text="Crash Courses" />
            <p className="text-start text-sm text-white/80 leading-6">
              {crashCourseJSON}
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start">
          <H3 text="Contact Us" />
          <div className="space-y-3">
            <span className="flex justify-start items-start gap-x-2 text-start">
              <i className="ri-map-pin-line"></i>
              <p className="text-sm text-white/80">
                first floor, D-234, Bharat Vihar Rd, Block C, Madhu Vihar, New
                Delhi, Delhi, 110059
              </p>
            </span>
            <span className="flex justify-start items-start gap-x-2 text-start">
              <i className="ri-phone-line"></i>
              <a
                href="tel:08447286799"
                className="text-sm hover:underline text-white/80"
              >
                084472 86799
              </a>
            </span>
            <SocialIcons />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-3 text-white border-t border-white pt-5 text-sm">
        <img
          src="/fevicon.ico"
          alt="Elite Computer Institute"
          className="w-10 h-10 aspect-square"
          loading="lazy"
          title="All rights reserved by Elite Computer Institute"
        />
        <p className="text-start">
          &copy; {new Date().getFullYear()}
          <span className="font-semibold"> Elite Computer Institute. </span>
          All rights reserved by
        </p>
      </div>
    </footer>
  );
}

export default Footer;
