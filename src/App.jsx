import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Courses from "./Data/courses";
import CourseDetails from "./Pages/CourseDetails";
import News from "./Pages/News";
import Register from "./Pages/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-3">
        <Route Path="/" element={<Home />} />
        <Route Path="/courses" element={<Courses />} />
        <Route Path="/courses/:id" element={<CourseDetails />} />
        <Route Path="/news" element={<News />} />
        <Route Path="/register" element={<Register />} />
      </div>
    </Router>
  );
}
export default App;
