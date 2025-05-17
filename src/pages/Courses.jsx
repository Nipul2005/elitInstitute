import { useLocation, useNavigate } from "react-router-dom";
import CourseDesign from "../design/CourseDesign";
import HeroSection from "../design/HeroSection";
import { modulerJSON } from "../JSON/courseJSON";
import { useEffect } from "react";

function Courses() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      document.getElementById(hash).scrollIntoView({ behavior: "smooth" });
    }

    return () => {
      window.scrollTo(0, 0);
    };
  }, [location]);
  return (
    <>
      <HeroSection
        text={"Explore Our"}
        img={"/course_img.jpg"}
        spanText={"Courses"}
      />
      <div className="w-full sm:container sm:mx-auto sm:p-0 pt-7">
        {modulerJSON.map((module, idx) => (
          <div className="space-y-7" key={idx}>
            {idx !== 0 && (
              <hr className="w-full h-1 bg-primary/10 border-transparent rounded-full" />
            )}
            <CourseDesign
              module={module}
              change={(idx + 1) % 2 == 0 ? true : false}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Courses;
