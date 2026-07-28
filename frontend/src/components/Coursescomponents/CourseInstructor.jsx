import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const CourseInstructor = () => {
  const { course } = useContext(AppContext);

  if (!course || !course.instructor) {
    return (
      <h1 className="text-center py-20 text-3xl text-red-500">
        Instructor Not Found
      </h1>
    );
  }

  const instructor = course.instructor;

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1
        className="
        text-4xl
        text-blue-600
        font-bold
        text-center
        mb-10
        "
      >
        Instructor
      </h1>

      <div
        className="
        flex
        flex-col
        md:flex-row
        gap-10
        items-center
        bg-white
        shadow-xl
        rounded-2xl
        p-8
        "
      >
        {/* Image */}

        <div>
          <img
            src={instructor.image}
            alt={instructor.name}
            className="
            w-40
            h-40
            rounded-full
            object-cover
            "
          />
        </div>

        {/* Information */}

        <div className="flex flex-col gap-4">
          <h2
            className="
            text-3xl
            font-bold
            text-gray-800
            "
          >
            {instructor.name}
          </h2>

          <p
            className="
            text-blue-600
            text-lg
            "
          >
            {instructor.specialization}
          </p>

          <div
            className="
            flex
            flex-wrap
            gap-4
            "
          >
            <span
              className="
              bg-yellow-200
              px-4
              py-2
              rounded-full
              "
            >
              ⭐ {instructor.rating}
            </span>

            <span
              className="
              bg-green-200
              px-4
              py-2
              rounded-full
              "
            >
              👥 {instructor.followers} Followers
            </span>

            <span
              className="
              bg-blue-200
              px-4
              py-2
              rounded-full
              "
            >
              💼 {instructor.experience}
            </span>
          </div>

          <p
            className="
            text-gray-600
            leading-7
            "
          >
            {instructor.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CourseInstructor;
