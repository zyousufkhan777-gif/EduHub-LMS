import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

import profile_pic from "../assets/profile_pic.png";

import Mobilemenu from "./Mobilemenu";
import Notification from "./Notification";
import Searchbox from "./Searchbox";

import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showProf, setShowProf] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);

  const {
    token,
    setToken,
    userData,
    setUserData,
    notifications,
  } = useContext(AppContext);

  const navigate = useNavigate();

  const unreadCount = notifications.filter(
    (item) => !item.isRead
  ).length;

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(false);
    setUserData(false);
    setShowProf(false);
    navigate("/");
  };

  return (
    <>
      <header className="shadow-lg px-7 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-4xl font-bold text-blue-600">
            EduHub
          </h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-7">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "hover:text-blue-600 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "hover:text-blue-600 transition"
            }
          >
            Courses
          </NavLink>

          <NavLink
            to="/my-learning"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "hover:text-blue-600 transition"
            }
          >
            My Learning
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "hover:text-blue-600 transition"
            }
          >
            Contact
          </NavLink>

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-5">

            <button onClick={() => {navigate('/admin-login') , scrollTo(0,0)}} className="bg-blue-600  text-white py-2 px-2 rounded-2xl shadow-2xl cursor-pointer">Admin</button>

          {/* Search */}
          <CiSearch
            onClick={() => setShowSearchBox(true)}
            className="text-3xl cursor-pointer hover:text-blue-600"
          />

          {/* Notification */}
          {token && (
            <div className="relative">

              <IoIosNotifications
                onClick={() =>
                  setShowNotification(!showNotification)
                }
                className="text-3xl cursor-pointer hover:text-blue-600"
              />

              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full bg-red-600 text-white text-xs">
                  {unreadCount}
                </span>
              )}

            </div>
          )}

          {/* Profile */}
          {token ? (
            <div className="relative">

              <img
                src={userData?.image || profile_pic}
                alt="profile"
                onClick={() => setShowProf(!showProf)}
                className="w-10 h-10 rounded-full object-cover cursor-pointer"
              />

              {showProf && (
                <div className="absolute right-0 mt-3 w-48 rounded-lg bg-white shadow-xl py-2">

                  <Link
                    to="/profile"
                    onClick={() => setShowProf(false)}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Profile
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 hover:text-red-500"
                  >
                    Logout
                  </button>

                </div>
              )}

            </div>
          ) : (
            <div className="hidden md:flex gap-3">

              <Link to="/login">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Login
                </button>
              </Link>

              <Link to="/register">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Sign Up
                </button>
              </Link>

            </div>
          )}

          {/* Mobile Menu */}
          <IoMenu
            onClick={() => setMenu(true)}
            className="text-3xl cursor-pointer md:hidden"
          />

        </div>

      </header>

      <Mobilemenu menu={menu} setMenu={setMenu} />

      <Notification
        showNotification={showNotification}
        setShowNotification={setShowNotification}
      />

      <Searchbox
        showSearchBox={showSearchBox}
        setShowSearchBox={setShowSearchBox}
      />
    </>
  );
};

export default Navbar;