import React from "react";
import {
  FaGlobe,
  FaDollarSign,
  FaBookOpen,
  FaClock,
} from "react-icons/fa";

const WhyTeach = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">

      {/* Heading */}
      <div className="text-center mb-14">

        <h2 className="text-4xl font-bold text-blue-600">
          Why Teach with EduHub
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Join thousands of instructors who inspire learners, build their
          personal brand, and earn income by sharing their expertise.
        </p>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">

          <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl mb-5">
            <FaGlobe />
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-3">
            Reach Students Worldwide
          </h3>

          <p className="text-gray-600 leading-7">
            Teach learners from around the world and expand your impact.
          </p>

        </div>


        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">

          <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl mb-5">
            <FaDollarSign />
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-3">
            Earn Money
          </h3>

          <p className="text-gray-600 leading-7">
            Generate income while teaching the subjects you love.
          </p>

        </div>


        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">

          <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl mb-5">
            <FaBookOpen />
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-3">
            Share Your Knowledge
          </h3>

          <p className="text-gray-600 leading-7">
            Inspire students by sharing your experience and expertise.
          </p>

        </div>


        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">

          <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl mb-5">
            <FaClock />
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-3">
            Teach on Your Schedule
          </h3>

          <p className="text-gray-600 leading-7">
            Create and manage your courses anytime, from anywhere.
          </p>

        </div>

      </div>

    </section>
  );
};

export default WhyTeach;