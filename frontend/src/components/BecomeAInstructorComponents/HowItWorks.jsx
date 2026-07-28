import React from "react";
import {
  FaUserCheck,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaMoneyBillWave,
} from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* Heading */}
      <div className="text-center mb-14">

        <h2 className="text-4xl font-bold text-blue-600">
          How It Works
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Becoming an instructor is simple. Follow these four easy steps
          and start teaching students around the world.
        </p>

      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Step 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

          <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl mb-5">
            <FaUserCheck />
          </div>

          <span className="text-sm font-semibold text-blue-600">
            Step 1
          </span>

          <h3 className="text-xl font-bold text-gray-800 mt-2">
            Apply
          </h3>

          <p className="text-gray-600 mt-3 leading-7">
            Submit your instructor application and tell us about your expertise.
          </p>

        </div>

        {/* Step 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

          <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl mb-5">
            <FaLaptopCode />
          </div>

          <span className="text-sm font-semibold text-blue-600">
            Step 2
          </span>

          <h3 className="text-xl font-bold text-gray-800 mt-2">
            Create Course
          </h3>

          <p className="text-gray-600 mt-3 leading-7">
            Upload videos, lessons, quizzes, and learning resources.
          </p>

        </div>

        {/* Step 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

          <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl mb-5">
            <FaChalkboardTeacher />
          </div>

          <span className="text-sm font-semibold text-blue-600">
            Step 3
          </span>

          <h3 className="text-xl font-bold text-gray-800 mt-2">
            Publish & Teach
          </h3>

          <p className="text-gray-600 mt-3 leading-7">
            Publish your course and start teaching students worldwide.
          </p>

        </div>

        {/* Step 4 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

          <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl mb-5">
            <FaMoneyBillWave />
          </div>

          <span className="text-sm font-semibold text-blue-600">
            Step 4
          </span>

          <h3 className="text-xl font-bold text-gray-800 mt-2">
            Earn Income
          </h3>

          <p className="text-gray-600 mt-3 leading-7">
            Grow your audience and earn money from your courses.
          </p>

        </div>

      </div>

    </section>
  );
};

export default HowItWorks;