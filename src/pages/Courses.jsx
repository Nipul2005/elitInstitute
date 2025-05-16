import CourseDesign from "../design/CourseDesign";
import { modulerJSON } from "../JSON/courseJSON";

function Courses() {
  return (
    <div className="w-full sm:container sm:mx-auto">
      {modulerJSON.map((module, idx) => (
        <div className="space-y-7">
          {idx !== 0 && (
            <hr className="w-full h-1 bg-primary/10 border-transparent" />
          )}
          <CourseDesign key={idx} module={module} />
        </div>
      ))}
    </div>
  );
}

export default Courses;
