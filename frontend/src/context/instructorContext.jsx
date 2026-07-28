import { createContext, useState, useEffect } from "react";

export const InstructorContext = createContext();

const InstructorContextProvider = ({ children }) => {
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const [instructorToken, setInstructorToken] = useState(
    localStorage.getItem("instructorToken") || "",
  );

  useEffect(() => {
    if (instructorToken) {
      localStorage.setItem("instructorToken", instructorToken);
    } else {
      localStorage.removeItem("instructorToken");
    }
  }, [instructorToken]);

  const value = {
    backendURL,
    instructorToken,
    setInstructorToken,
  };

  return (
    <InstructorContext.Provider value={value}>
      {children}
    </InstructorContext.Provider>
  );
};

export default InstructorContextProvider;
