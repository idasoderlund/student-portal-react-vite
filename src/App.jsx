import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "/";
import Home from "/";
import Courses from "/";
import CourseDetails from "/";
import News from "/";
import Register from "/";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="path-container">
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
