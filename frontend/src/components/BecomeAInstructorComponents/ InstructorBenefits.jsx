import React from "react";
import {
  FaBookOpen,
  FaDollarSign,
  FaGlobe,
  FaChartLine,
  FaUserGraduate,
  FaHeadset,
} from "react-icons/fa";

const InstructorBenefits = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* Heading */}
      <div className="text-center mb-14">

        <h2 className="text-4xl font-bold text-blue-600">
          Instructor Benefits
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Discover the advantages of becoming an EduHub instructor and
          grow your teaching career with confidence.
        </p>

      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl mb-5">
            <FaBookOpen />
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Unlimited Courses
          </h3>

          <p className="text-gray-600 leading-7">
            Create and publish as many courses as you want without limits.
          </p>
        </div>


        <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl mb-5">
            <FaDollarSign />
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Earn Passive Income
          </h3>

          <p className="text-gray-600 leading-7">
            Generate revenue whenever students enroll in your courses.
          </p>
        </div>


        <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl mb-5">
            <FaGlobe />
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Global Audience
          </h3>

          <p className="text-gray-600 leading-7">
            Reach learners from different countries and grow your impact.
          </p>
        </div>


        <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl mb-5">
            <FaChartLine />
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Analytics Dashboard
          </h3>

          <p className="text-gray-600 leading-7">
            Monitor student progress, enrollments, and course performance.
          </p>
        </div>


        <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl mb-5">
            <FaUserGraduate />
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Build Your Brand
          </h3>

          <p className="text-gray-600 leading-7">
            Establish yourself as a trusted instructor and grow your reputation.
          </p>
        </div>


        <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl mb-5">
            <FaHeadset />
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Dedicated Support
          </h3>

          <p className="text-gray-600 leading-7">
            Our support team is always available to help you succeed.
          </p>
        </div>

      </div>

    </section>
  );
};

export default InstructorBenefits;