import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Home from "./Pages/Home";
import CourseDetails from "./Pages/CourseDetails";
import News from "./Pages/News";
import Register, { RegisterProvider } from "./Pages/Register";
import React from "react";
import { Courses } from "./Pages/Courses";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <RegisterProvider>
      <Router>
        <NavBar />
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/news" element={<News />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </RegisterProvider>
  );
}
export default App;
