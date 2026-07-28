import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const FeaturedCourses = () => {
  const navigate = useNavigate();

  const { courses } = useContext(AppContext);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Header */}

      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
          Featured Courses
        </h1>

        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Explore our most popular courses and start learning today.
        </p>
      </div>

      {/* Empty */}

      {courses.length === 0 ? (
        <div className="py-20 text-center">
          <h2 className="text-2xl font-semibold text-gray-500">
            No courses found
          </h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.slice(0, 8).map((course) => (
            <div
              key={course._id}
              className="
                bg-white 
                rounded-3xl 
                overflow-hidden 
                shadow-lg 
                hover:shadow-2xl 
                hover:-translate-y-2 
                transition-all 
                duration-300
                "
            >
              {/* Image */}

              <div className="overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="
                    w-full 
                    h-52 
                    object-cover
                    hover:scale-110
                    transition
                    duration-500
                    "
                />
              </div>

              {/* Content */}

              <div className="p-5">
                {/* Stats */}

                <div className="flex justify-between items-center mb-4">
                  <span
                    className="
                    bg-yellow-100 
                    text-yellow-700 
                    px-3 
                    py-1 
                    rounded-full 
                    text-sm
                    "
                  >
                    ⭐ {course.rating || 0}
                  </span>

                  <span
                    className="
                    bg-blue-100 
                    text-blue-700 
                    px-3 
                    py-1 
                    rounded-full 
                    text-sm
                    "
                  >
                    👥 {course.students?.length || 0}
                  </span>
                </div>

                {/* Title */}

                <h2
                  className="
                  text-xl 
                  font-bold 
                  line-clamp-2
                  "
                >
                  {course.title}
                </h2>

                {/* Instructor */}

                <p
                  className="
                  mt-3 
                  text-gray-500
                  "
                >
                  By {course.instructor?.name || "Unknown Instructor"}
                </p>

                {/* Info */}

                <div
                  className="
                  flex 
                  justify-between 
                  mt-5 
                  text-sm 
                  text-gray-500
                  "
                >
                  <span>⏱ {course.duration || "0 Hours"}</span>

                  <span>📚 {course.lessons || 0} Lessons</span>
                </div>

                {/* Price + Button */}

                <div
                  className="
                  mt-6 
                  flex 
                  justify-between 
                  items-center
                  "
                >
                  <div>
                    {course.discountPrice ? (
                      <>
                        <span
                          className="
                        text-gray-400 
                        line-through 
                        mr-2
                        "
                        >
                          ${course.price}
                        </span>

                        <span
                          className="
                        text-2xl 
                        font-bold 
                        text-blue-600
                        "
                        >
                          ${course.discountPrice}
                        </span>
                      </>
                    ) : (
                      <span
                        className="
                        text-2xl 
                        font-bold 
                        text-blue-600
                        "
                      >
                        ${course.price}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      navigate(`/course/${course._id}`);

                      window.scrollTo(0, 0);
                    }}
                    className="
                    bg-blue-600
                    text-white
                    px-2
                    py-2
                    rounded-xl
                    hover:bg-blue-700
                    transition
                    cursor-pointer
                    "
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedCourses;
