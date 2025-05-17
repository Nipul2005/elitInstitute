import { useLocation, useNavigate } from "react-router-dom";
import CourseDesign from "../design/CourseDesign";
import HeroSection from "../design/HeroSection";
import { modulerJSON } from "../JSON/courseJSON";
import { useEffect, useState } from "react";

function Courses() {
  const location = useLocation();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      document.getElementById(hash).scrollIntoView({ behavior: "smooth" });
    }

    return () => {
      window.scrollTo(0, 0);
    };
  }, [location]);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <>
      <HeroSection
        text={"Explore Our"}
        img={"/course_img.jpg"}
        spanText={"Courses"}
      />
      <section className="w-full sm:container sm:mx-auto px-4 flex flex-col justify-start items-start">
        {modulerJSON.map((module, idx) => (
            <CourseDesign module={module} key={idx} is={idx}/>
        ))}
      </section>
    </>
  );
}

export default Courses;
