import { courses } from "../Data/courses";
import CourseCard from "../Components/CourseCard";
import { Row, Col } from "react-bootstrap";

export function Courses() {
  return (
    <>
      <h2>Courses</h2>
      <Row>
        {courses.map((course) => (
          <Col key={course.id} md={4} className="mb-4">
            <CourseCard course={course} />
          </Col>
        ))}
      </Row>
    </>
  );
}
