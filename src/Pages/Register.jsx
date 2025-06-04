import { createContext, useState } from "react";
export const RegisterContext = createContext();

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
