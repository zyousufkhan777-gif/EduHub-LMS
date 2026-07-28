import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const CourseOverview = () => {
  const { course } = useContext(AppContext);

  if (!course) {
    return <h1 className="text-center py-20 text-3xl">Loading...</h1>;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1
        className="
        text-4xl
        font-bold
        text-blue-600
        text-center
        mb-10
        "
      >
        Course Overview
      </h1>

      <div
        className="
        bg-white
        shadow-xl
        rounded-2xl
        p-8
        "
      >
        <p
          className="
          text-gray-600
          text-lg
          leading-8
          "
        >
          {course.description}
        </p>

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-6
          mt-10
          "
        >
          <div
            className="
            bg-blue-100
            rounded-xl
            p-5
            text-center
            "
          >
            <h3 className="font-bold text-xl text-blue-600">Category</h3>

            <p className="mt-2 text-gray-700">{course.category}</p>
          </div>

          <div
            className="
            bg-green-100
            rounded-xl
            p-5
            text-center
            "
          >
            <h3 className="font-bold text-xl text-green-600">Level</h3>

            <p className="mt-2 text-gray-700">{course.level}</p>
          </div>

          <div
            className="
            bg-yellow-100
            rounded-xl
            p-5
            text-center
            "
          >
            <h3 className="font-bold text-xl text-yellow-600">Language</h3>

            <p className="mt-2 text-gray-700">{course.language}</p>
          </div>
        </div>

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-6
          mt-6
          "
        >
          <div className="border rounded-xl p-5 text-center">
            <h3 className="font-bold text-xl">Duration</h3>

            <p className="mt-2 text-gray-600">{course.duration} Hours</p>
          </div>

          <div className="border rounded-xl p-5 text-center">
            <h3 className="font-bold text-xl">Students</h3>

            <p className="mt-2 text-gray-600">{course.totalStudents}</p>
          </div>

          <div className="border rounded-xl p-5 text-center">
            <h3 className="font-bold text-xl">Rating</h3>

            <p className="mt-2 text-gray-600">⭐ {course.rating}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;
