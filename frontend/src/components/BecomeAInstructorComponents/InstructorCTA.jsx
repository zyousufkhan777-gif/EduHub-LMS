import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const InstructorCTA = () => {

  const navigate = useNavigate()

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="bg-blue-600 rounded-3xl px-8 py-16 text-center text-white shadow-xl">

        <h2 className="text-4xl font-bold">
          Ready to Start Teaching?
        </h2>

        <p className="mt-5 max-w-2xl mx-auto text-lg text-blue-100 leading-8">
          Join EduHub today and share your knowledge with thousands of
          students around the world. Inspire learners, grow your
          personal brand, and earn income by teaching what you love.
        </p>

        <button
          onClick={() => {navigate('/instructor/apply') , scrollTo(0,0)}}
          className="inline-flex items-center gap-3 mt-8 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300"
        >
          Become an Instructor
          <FaArrowRight />
        </button>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8 text-sm text-blue-100">
          <span>✓ No Registration Fee</span>
          <span>✓ Quick Approval</span>
          <span>✓ Start Teaching Today</span>
        </div>

      </div>

    </section>
  );
};

export default InstructorCTA;