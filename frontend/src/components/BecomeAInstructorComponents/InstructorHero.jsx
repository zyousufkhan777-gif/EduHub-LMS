import React from "react";
import teacher from "../../assets/teacher.jpg";
import { useNavigate } from "react-router-dom";

const InstructorHero = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">
            Become an Instructor
          </h1>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Share Your Knowledge With The World
          </h2>

          <p className="text-gray-600 text-lg leading-8">
            Join EduHub and teach thousands of students with your skills and
            experience. Create engaging courses, inspire learners, and grow your
            teaching career with us.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8">
            <button
              onClick={() => {
                (navigate("/instructor/apply"), scrollTo(0, 0));
              }}
              className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-xl shadow-lg"
            >
              Start Teaching
            </button>

            <button
              onClick={() => {
                (navigate("/courses"), scrollTo(0, 0));
              }}
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition px-8 py-3 cursor-pointer rounded-xl"
            >
              Explore Courses
            </button>
          </div>

          {/* Stats */}
          <div className="flex justify-center lg:justify-start gap-10 mt-12">
            <div>
              <h3 className="text-3xl font-bold text-blue-600">10K+</h3>
              <p className="text-gray-500">Students</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">500+</h3>
              <p className="text-gray-500">Courses</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">100+</h3>
              <p className="text-gray-500">Instructors</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={teacher}
            alt="Instructor"
            className="w-full max-w-md rounded-3xl shadow-2xl hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default InstructorHero;
