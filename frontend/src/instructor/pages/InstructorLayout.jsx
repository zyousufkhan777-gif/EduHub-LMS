import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Tapbar from "../components/Tapbar";
import Sidebar from "../components/Sidebar";

const InstructorLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 ">
      <Sidebar open={open}  setOpen={setOpen}/>

      <div className="flex-1">
        <Tapbar open={open} setOpen={setOpen} />

        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default InstructorLayout;
