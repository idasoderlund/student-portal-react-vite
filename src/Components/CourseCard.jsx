import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{course.name}</Card.Title>
        <Card.Text>{course.description}</Card.Text>
        <Link to={`/courses/${course.id}`}>
          <Button variant="primary">Show more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
export default CourseCard;
