import React from "react";
import { Link } from "react-router-dom";

const CoursesHeader = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-white rounded-2xl shadow-xl p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
          <Link
            to="/"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Home
          </Link>

          <span>/</span>

          <span className="text-blue-600 font-medium">
            Courses
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
          Courses
        </h1>

        {/* Description */}
        <p className="max-w-3xl text-lg leading-8 text-gray-600">
          Discover hundreds of high-quality online courses taught by expert
          instructors. Find the perfect course to grow your skills, build
          real-world experience, and achieve your career goals with EduHub.
        </p>

      </div>
    </section>
  );
};

export default CoursesHeader;