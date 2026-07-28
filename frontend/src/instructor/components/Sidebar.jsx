import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBook,
  FaPlusCircle,
  FaUserCircle,
} from "react-icons/fa";

const Sidebar = ({ open, setOpen }) => {
  return (
    <aside
      onClick={() => setOpen(false)}
      className={`
        fixed md:static
        top-0 left-0
        z-50
        h-screen 
        w-64
        bg-blue-700
        text-white
        shadow-lg
        transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
    >
      {/* Logo */}
      <div className="py-6 border-b border-blue-600 text-center">
        <h1 className="text-3xl font-bold">EduHub</h1>
        <p className="text-sm text-blue-200 mt-1">Instructor Panel</p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 mt-8 px-4">
        <NavLink
          to="/instructor-panel/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              isActive
                ? "bg-white text-blue-700 font-semibold"
                : "hover:bg-blue-600"
            }`
          }
        >
          <FaTachometerAlt className="text-lg" />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/instructor-panel/add-course"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              isActive
                ? "bg-white text-blue-700 font-semibold"
                : "hover:bg-blue-600"
            }`
          }
        >
          <FaPlusCircle className="text-lg" />
          <span>Add Course</span>
        </NavLink>

        <NavLink
          to="/instructor-panel/add-lesson"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              isActive
                ? "bg-white text-blue-700 font-semibold"
                : "hover:bg-blue-600"
            }`
          }
        >
          <FaPlusCircle className="text-lg" />
          <span>Add Lesson</span>
        </NavLink>

        <NavLink
          to="/instructor-panel/my-courses"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              isActive
                ? "bg-white text-blue-700 font-semibold"
                : "hover:bg-blue-600"
            }`
          }
        >
          <FaBook className="text-lg" />
          <span>My Courses</span>
        </NavLink>

        <NavLink
          to="/instructor-panel/profile"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              isActive
                ? "bg-white text-blue-700 font-semibold"
                : "hover:bg-blue-600"
            }`
          }
        >
          <FaUserCircle className="text-lg" />
          <span>Profile</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
