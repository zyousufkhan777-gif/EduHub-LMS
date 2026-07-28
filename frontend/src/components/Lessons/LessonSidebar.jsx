import React, { useEffect, useContext, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { AppContext } from "../../context/AppContext";

const LessonSidebar = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();

  const [sidebar, setSidebar] = useState(false);

  const { lessons, getLessons } = useContext(AppContext);

  useEffect(() => {
    if (courseId) {
      getLessons(courseId);
    }
  }, [courseId]);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setSidebar(true)}
        className="p-4"
      >
        <AiOutlineMenu className="text-3xl cursor-pointer" />
      </button>

      {/* Sidebar */}
      <section
        className={`fixed top-0 left-0 h-screen w-80 bg-white shadow-xl z-50 overflow-y-auto transition-transform duration-300 ${
          sidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b">
          <h1 className="text-xl font-bold text-blue-600">
            Course Lessons
          </h1>

          <AiOutlineClose
            onClick={() => setSidebar(false)}
            className="text-3xl cursor-pointer"
          />
        </div>

       

        {/* Lessons */}
        <div className="p-4 space-y-3">
          {lessons.length > 0 ? (
            lessons.map((lesson, index) => (
              <div
                key={lesson._id}
                onClick={() => {
                  navigate(`/course/${courseId}/lesson/${lesson._id}`);
                  setSidebar(false);
                  window.scrollTo(0, 0);
                }}
                className="cursor-pointer rounded-lg border p-3 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-gray-800">
                  {index + 1}. {lesson.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  ⏱ {lesson.duration} min
                </p>

                {lesson.isPreview && (
                  <span className="inline-block mt-2 rounded bg-green-100 px-2 py-1 text-xs text-green-700">
                    Preview
                  </span>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No lessons available.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default LessonSidebar;