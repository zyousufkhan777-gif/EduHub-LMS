import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../../context/AppContext";

const CoursesContent = () => {
  const { courseId } = useParams();

  const navigate = useNavigate();

  const { backendURL, course, getCourseDetails } = useContext(AppContext);

  const [lessons, setLessons] = useState([]);

  // Get Course Details
  useEffect(() => {
    getCourseDetails(courseId);
  }, [courseId]);

  // Get Course Lessons
  const getLessons = async () => {
    try {
      const { data } = await axios.get(
        `${backendURL}/api/lesson/lessons-list/${courseId}`,
      );

      if (data.success) {
        setLessons(data.lessons);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLessons();
  }, [courseId]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-blue-600">Loading...</h1>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Title */}

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">Course Content</h1>

        <p className="mt-3 text-gray-600">
          Learn step by step with practical lessons
        </p>
      </div>

      {/* Course Information */}

      <div className="flex flex-wrap justify-center gap-5 mb-12">
        <div className="bg-yellow-200 px-5 py-2 rounded-full">
          📚 {lessons.length} Lessons
        </div>

        <div className="bg-green-200 px-5 py-2 rounded-full">
          🎬 {course.language}
        </div>

        <div className="bg-blue-200 px-5 py-2 rounded-full">
          ⏱ {course.duration} Hours
        </div>
      </div>

      {/* Lessons */}

      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Lessons</h2>

        <div className="flex flex-col gap-4">
          {lessons.map((lesson, index) => (
            <div
              key={lesson._id}
              className="
              flex
              justify-between
              items-center
              border-b
              pb-4
              "
            >
              <div className="flex items-center gap-3">
                <span className="text-blue-600">▶</span>

                <p
                  onClick={() => {
                    navigate(`/course/${courseId}/lesson/${lesson._id}`);

                    window.scrollTo(0, 0);
                  }}
                  className="
                        cursor-pointer
                        text-gray-700
                        hover:text-blue-600
                        transition
                        "
                >
                  {index + 1}. {lesson.title}
                </p>
              </div>

              <span className="text-gray-500 text-sm">
                {lesson.duration} min
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesContent;
