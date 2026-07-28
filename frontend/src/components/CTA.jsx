import React from "react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl px-8 py-16 text-center text-white shadow-2xl">

        <h1 className="text-4xl md:text-5xl font-bold">
          Ready to Start Learning?
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-blue-100">
          Join thousands of students and learn from expert instructors.
          Build real-world skills and achieve your career goals with EduHub.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

          <button
            onClick={() => { navigate("/register"), scrollTo(0,0)}}
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Get Started
          </button>

          <button
            onClick={() => { navigate("/courses"); window.scrollTo(0,0)}}

            className="border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Browse Courses
          </button>

        </div>

      </div>
    </section>
  );
};

export default CTA;