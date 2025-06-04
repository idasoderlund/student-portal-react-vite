import { useState, useContext } from "react";
import { TextField, Button, MenuItem } from "@mui/material";
import { RegisterContext } from "../Contexts/RegisterContext";
import { courses } from "../Data/courses";
import { useNavigate } from "react-router-dom";

function Register() {
  const { addRegistration } = useContext(RegisterContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [courseId, setCourseId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const registration = {
      name,
      email,
      courseId,
    };
    addRegistration(registration);
    alert("Registration is saved!");
    navigate("/");
  };

  return (
    <div>
      <h2>Register yourself for a course</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "auto" }}>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          reguired
        />

        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          reguired
        />

        <TextField
          select
          label="CHoose course"
          fullWidth
          margin="normal"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          reguired
        >
          {courses.map((course) => (
            <MenuItem key={course.id} value={course.id}>
              {course.name}
            </MenuItem>
          ))}
        </TextField>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: 16 }}
        >
          Register
        </Button>
      </form>
    </div>
  );
}
export default Register;
