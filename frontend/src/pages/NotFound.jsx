import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">

      <div className="text-center max-w-lg">

        {/* 404 */}
        <h1 className="text-[120px] font-extrabold text-blue-600 leading-none">
          404
        </h1>


        <h2 className="text-3xl font-bold text-gray-800 mt-4">
          Page Not Found
        </h2>


        <p className="text-gray-500 mt-4 text-lg">
          Sorry, the page you are looking for doesn't exist
          or has been moved.
        </p>


        {/* Illustration */}
        <div className="mt-8">

          <div className="w-32 h-32 mx-auto rounded-full bg-blue-100 flex items-center justify-center">

            <span className="text-5xl">
              😕
            </span>

          </div>

        </div>


        {/* Button */}
        <Link
          to="/"
          className="
          inline-flex 
          items-center 
          gap-2
          mt-8
          bg-blue-600 
          text-white 
          px-6 
          py-3 
          rounded-xl
          hover:bg-blue-700
          transition
          "
        >

          <FaHome />

          Back To Home

        </Link>


      </div>

    </div>
  );
};

export default NotFound;