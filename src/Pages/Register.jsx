import { TextField, MenuItem, Button } from "@mui/material";
import { useContext } from "react";
import { RegisterContext } from "../Components/RegisterForm";
import { useNavigate } from "react-router-dom";
import { courses } from "../Data/courses";
import { useState } from "react";

export function RegisterProvider({ children }) {
  const [registrations, setRegistrations] = useState([]);

  const addRegistrations = (registration) => {
    setRegistrations([...registrations, registration]);
  };
  return (
    <RegisterContext.Provider value={{ registrations, addRegistrations }}>
      {children}
    </RegisterContext.Provider>
  );
}

export default function Register() {
  const { addRegistrations } = useContext(RegisterContext);
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
    addRegistrations(registration);
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
          required
        />

        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <TextField
          select
          label="Choose course"
          fullWidth
          margin="normal"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          required
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
