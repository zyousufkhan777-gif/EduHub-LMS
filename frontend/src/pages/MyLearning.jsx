import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";

const MyLearning = () => {
  const [courses, setCourses] = useState([]);

  const navigate = useNavigate();

  const { backendURL, token } = useContext(AppContext);

  const getEnrolledCourses = async () => {
    try {
      const { data } = await axios.get(backendURL + "/api/user/my-learning", {
        headers: {
          token,
        },
      });

      if (data.success) {
        setCourses(data.courses);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      getEnrolledCourses();
    }
  }, [token]);

  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      {/* Header */}

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">My Learning</h1>

        <p className="mt-3 text-gray-600 text-lg">
          Continue your learning journey. You've got this!
        </p>
      </div>

      {/* Empty */}

      {courses.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-gray-500">
            No enrolled courses yet
          </h2>

          <p className="text-gray-400 mt-3">
            Enroll in a course and start learning.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((enrollment) => {
            const course = enrollment.courseId;

            if (!course) return null;

            return (
              <div
                key={enrollment._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300"
              >
                {/* Image */}

                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-52 object-cover"
                />

                {/* Content */}

                <div className="p-6">
                  <h2 className="text-xl font-bold mb-4">{course.title}</h2>

                  {/* Progress */}

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>{enrollment.progress || 0}% Complete</span>

                      <span>
                        {enrollment.completedLessons?.length || 0}/
                        {course.lessons?.length || 0}
                      </span>
                    </div>

                    <div className="w-full h-3 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{
                          width: `${enrollment.progress || 0}%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Button */}

                  <button
                    onClick={() => {
                      navigate(`/course/${course._id}`);

                      window.scrollTo(0, 0);
                    }}
                    className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
                  >
                    {enrollment.progress === 100
                      ? "Review Course"
                      : "Continue Learning"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default MyLearning;
