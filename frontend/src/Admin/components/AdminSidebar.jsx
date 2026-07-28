import React from "react";
import { NavLink } from "react-router-dom";

import { FaHome, FaBook, FaChalkboardTeacher, FaUsers } from "react-icons/fa";

const AdminSidebar = ({ setOpen, open }) => {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin-panel",
      icon: <FaHome />,
    },

    {
      name: "Courses",
      path: "/admin-panel/courses",
      icon: <FaBook />,
    },

    {
      name: "Instructors",
      path: "/admin-panel/instructors",
      icon: <FaChalkboardTeacher />,
    },

    {
      name: "Users",
      path: "/admin-panel/users",
      icon: <FaUsers />,
    },
  ];

  return (
    <aside
      className={`
      
      fixed md:static
      top-20 left-0
      z-40

      w-64
      min-h-[calc(100vh-80px)]

      bg-white
      shadow-md

      p-5

      transition-transform duration-300

      ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}

      `}
    >
      <h2 className="text-xl font-bold text-gray-800 mb-8">Admin Menu</h2>

      <nav className="space-y-3">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition

                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }

                `
            }
          >
            <span className="text-lg">{item.icon}</span>

            <span className="font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
