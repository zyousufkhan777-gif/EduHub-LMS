import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaUserShield } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";

import { AdminContext } from "../../context/AdminContext";

const AdminNavbar = ({ setOpen }) => {
  const { setAdminToken } = useContext(AdminContext);

  const navigate = useNavigate();

  const logout = () => {
    setAdminToken("");

    navigate("/admin-login");
  };

  return (
    <nav className="h-20 bg-white shadow-md flex items-center justify-between px-6">
      {/* Left Side */}

      <div className="flex items-center gap-3">
        {/* Mobile Menu */}

        <RiMenu2Fill
          className="text-2xl cursor-pointer md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        />

        <div className="bg-blue-600 text-white p-3 rounded-full">
          <FaUserShield size={22} />
        </div>

        <h1 className="text-2xl font-bold text-gray-800">EduHub Admin</h1>
      </div>

      {/* Right Side */}

      <div className="flex items-center gap-6">
        <div className="hidden md:block">
          <p className="font-semibold text-gray-700">Administrator</p>

          <p className="text-sm text-gray-500">Manage Platform</p>
        </div>

        <button
          onClick={logout}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
