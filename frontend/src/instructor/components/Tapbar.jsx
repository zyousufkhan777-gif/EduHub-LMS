import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import { InstructorContext } from "../../context/instructorContext";

const Topbar = ({setOpen}) => {
  const navigate = useNavigate();

  const { setInstructorToken } = useContext(InstructorContext);

  const logoutHandler = () => {
    setInstructorToken("");
    localStorage.removeItem("instructorToken");

    navigate("/instructor/login");
  };

  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
      {/* Left */}
      <div className="flex items-center gap-4">
        <FaBars onClick={() => setOpen(prev => !prev)} className="text-xl text-gray-600 cursor-pointer md:hidden" />

        <h1 className="text-2xl font-bold text-blue-600">Instructor Panel</h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        <img
          src="https://ui-avatars.com/api/?name=Instructor"
          alt="Instructor"
          className="w-10 h-10 rounded-full border"
        />

        <button
          onClick={logoutHandler}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </header>
  );
};

export default Topbar;
