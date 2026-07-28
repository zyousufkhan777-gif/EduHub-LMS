import { createContext, useEffect, useState } from "react";

export const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {

    
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const [adminToken, setAdminToken] = useState(
    localStorage.getItem("adminToken") || "",
  );

  useEffect(() => {
    if (adminToken) {
      localStorage.setItem("adminToken", adminToken);
    } else {
      localStorage.removeItem("adminToken");
    }
  }, [adminToken]);

  const value = {
    backendURL,

    adminToken,

    setAdminToken,
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};

export default AdminContextProvider;
