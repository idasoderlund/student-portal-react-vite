import { createContext, useState } from "react";
//import { useContext } from "react";
//import { TextField, Button, MenuItem } from "@mui/material";
//import { RegisterContext } from "../";
//import { courses } from "../Data/courses";
//import { useNavigate } from "react-router-dom";

export const RegisterContext = createContext();

function RegisterProvider({ children }) {
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
export default RegisterProvider;
