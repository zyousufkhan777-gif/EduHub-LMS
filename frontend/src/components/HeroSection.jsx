import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg";

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 sha">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* Left Section */}
        <div className="flex-1 max-w-xl">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 leading-tight">
            Learn Without Limits
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            Join thousands of students, learn from expert instructors,
            build real-world skills, and advance your career with
            high-quality online courses.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link to="/courses">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                Explore Courses
              </button>
            </Link>

            <Link to="/become-instructor">
              <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                Become Instructor
              </button>
            </Link>
          </div>

          {/* Statistics */}
          <div className="flex gap-10 mt-10">

            <div>
              <h2 className="text-3xl font-bold text-blue-600">20K+</h2>
              <p className="text-gray-500">Students</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">500+</h2>
              <p className="text-gray-500">Courses</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">100+</h2>
              <p className="text-gray-500">Instructors</p>
            </div>

          </div>

        </div>

        {/* Right Section */}
        <div className="flex-1">

          <img
            src={hero}
            alt="Learning"
            className="w-full rounded-2xl shadow-2xl hover:scale-105 transition-all duration-500"
          />

        </div>

      </div>
    </section>
  );
};

export default HeroSection;