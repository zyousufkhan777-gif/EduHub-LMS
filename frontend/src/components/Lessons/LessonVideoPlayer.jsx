import React, { useContext } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { IoHomeSharp } from "react-icons/io5";

const LessonVideoPlayer = () => {
  const { lessonId, courseId } = useParams();

  const navigate = useNavigate();

  const { lessons } = useContext(AppContext);

  const lesson = lessons.find((item) => item._id === lessonId);

  if (!lesson) {
    return (
      <div className="flex items-center justify-center h-[500px]">
        <h1 className="text-3xl font-bold text-blue-600">Lesson not found</h1>
      </div>
    );
  }

  return (
    <div className="w-full rounded-xl overflow-hidden bg-white shadow-lg">
      {/* Navigation */}

      <nav className="flex justify-between items-center p-5">
        <NavLink to="/">
          <IoHomeSharp className="text-3xl hover:text-blue-600" />
        </NavLink>

        <button
          onClick={() => {
            navigate(`/course/${courseId}`);
            window.scrollTo(0, 0);
          }}
          className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700"
        >
          Back To Course
        </button>
      </nav>

      {/* Video */}

      <iframe
        className="w-full aspect-video"
        src={lesson.video.replace("youtu.be/", "www.youtube.com/embed/")}
        title={lesson.title}
        allowFullScreen
      />

      {/* Lesson Info */}

      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">{lesson.title}</h1>

        <div className="mt-3 flex items-center gap-4 text-gray-500">
          <span>⏱ {lesson.duration} min</span>

          {lesson.isPreview && (
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              Preview
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonVideoPlayer;
