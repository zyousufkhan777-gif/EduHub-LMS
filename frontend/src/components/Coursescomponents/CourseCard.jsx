import React from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/course/${course._id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-52 object-cover hover:scale-110 transition-all duration-500"
        />
      </div>

      {/* Body */}
      <div className="p-5">
        {/* Rating */}
        <div className="flex justify-between items-center text-sm mb-4">
          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
            ⭐ {course.rating || 0}
          </span>

          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
            👥 {course.totalStudents || 0}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold line-clamp-2">
          {course.title}
        </h2>

        {/* Instructor */}
        <p className="mt-2 text-gray-500">
          By {course.instructor?.name}
        </p>

        {/* Info */}
        <div className="flex justify-between mt-5 text-sm text-gray-500">
          <span>⏱ {course.duration}</span>

          <span>
            📚 {course.lessons || 0} Lessons
          </span>
        </div>

        {/* Price */}
        <div className="mt-6 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-blue-600">
            ${course?.price}
          </h3>

          <button
            onClick={handleClick}
            className="bg-blue-600 text-white px-2 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;