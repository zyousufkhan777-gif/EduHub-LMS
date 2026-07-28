import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import App from "./App";

import AppContextProvider from "./context/AppContext";
import InstructorContextProvider from "./context/instructorContext";
import AdminContextProvider from "./context/AdminContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContextProvider>
      <InstructorContextProvider>
        <AdminContextProvider>
          <App />
        </AdminContextProvider>
      </InstructorContextProvider>
    </AppContextProvider>
  </BrowserRouter>,
);
