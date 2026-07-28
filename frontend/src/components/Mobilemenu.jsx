import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
const Mobilemenu = ({ menu, setMenu }) => {
  return (
    <div
    onClick={() => setMenu(false)}
      className={`fixed inset-0 z-20 bg-white transform transition-transform ease-in-out duration-300 md:hidden ${
        menu ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold text-blue-500">EduHub</h1>
        <span>
          <MdOutlineClose
            onClick={() => setMenu(false)}
            className=" text-3xl  rounded-2xl mr-3 hover:scale-150 hover:text-red-500 transition-all duration-200 cursor-pointer"
          />
        </span>
      </div>
      <nav className="mt-10 text-2xl flex flex-col gap-2 text-center">
        <NavLink
          onClick={() => setMenu(false)}
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 text-white mx-auto px-3 py-2 text-center rounded-2xl"
              : ""
          }
        >
          Home
        </NavLink>

        <NavLink
          onClick={() => setMenu(false)}
          to="/courses"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 text-white mx-auto px-3 py-2 text-center rounded-2xl"
              : ""
          }
        >
          Courses
        </NavLink>

        <NavLink
          onClick={() => setMenu(false)}
          to="/my-learning"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 text-white mx-auto px-3 py-2 text-center rounded-2xl"
              : ""
          }
        >
          My Learing
        </NavLink>

        <NavLink
          onClick={() => setMenu(false)}
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 text-white mx-auto px-3 py-2 text-center rounded-2xl"
              : ""
          }
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Mobilemenu;
