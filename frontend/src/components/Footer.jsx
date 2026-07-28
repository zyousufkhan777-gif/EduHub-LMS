import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
} from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}
          <div>
            <h1 className="text-4xl font-bold">EduHub</h1>

            <p className="mt-5 leading-7 text-blue-100">
              Learn without limits. Join thousands of students and build
              your future with expert instructors.
            </p>

            <div className="flex gap-5 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-3xl hover:text-gray-300 transition duration-300" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-3xl hover:text-gray-300 transition duration-300" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-3xl hover:text-gray-300 transition duration-300" />
              </a>

              <a
                href="https://github.com/zyousufkhan777-gif"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-3xl hover:text-gray-300 transition duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-semibold mb-5">
              Quick Links
            </h2>

            <nav className="flex flex-col gap-3">
              <NavLink className="hover:text-gray-300 transition" to="/">
                Home
              </NavLink>

              <NavLink
                className="hover:text-gray-300 transition"
                to="/courses"
              >
                Courses
              </NavLink>

              <NavLink
                className="hover:text-gray-300 transition"
                to="/about"
              >
                About
              </NavLink>

              <NavLink
                className="hover:text-gray-300 transition"
                to="/contact"
              >
                Contact
              </NavLink>
            </nav>
          </div>

          {/* Categories */}
          <div>
            <h2 className="text-2xl font-semibold mb-5">
              Categories
            </h2>

            <div className="flex flex-col gap-3 text-blue-100">
              <p>Web Development</p>
              <p>Mobile Development</p>
              <p>AI & Machine Learning</p>
              <p>Data Science</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-semibold mb-5">
              Contact Us
            </h2>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <MdEmail className="text-2xl" />
                <p>support@eduhub.com</p>
              </div>

              <div className="flex items-center gap-3">
                <MdPhone className="text-2xl" />
                <p>+1 234 567 890</p>
              </div>

              <div className="flex items-center gap-3">
                <MdLocationOn className="text-2xl" />
                <p>São Paulo, Brazil</p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-blue-400 mt-12 pt-6 text-center text-blue-100">
          <p>© 2026 EduHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;