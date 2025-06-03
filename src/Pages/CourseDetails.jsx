import { useParams } from "react-router-dom";
import { courses } from "../Data/courses";

function CourseDetails() {
  const { id } = useParams();
  const course = course.find((c) => c.id === parseInt(id));

  if (!course) {
    return <p>Course could not be found.</p>;
  }
  return (
    <div>
      <h2>{course.name}</h2>
      <p>{course.details}</p>
    </div>
  );
}
export default CourseDetails;
