import React from "react";
import { useNavigate } from "react-router-dom";

const RecentCourses = ({ courses }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Recent Courses</h2>

        <button
          onClick={() => navigate("/instructor-panel/my-courses")}
          className="text-blue-600 hover:underline"
        >
          View All
        </button>
      </div>

      {courses.length === 0 ? (
        <div className="text-center py-10 text-gray-500">No courses found.</div>
      ) : (
        <div className="space-y-5">
          {courses.map((course) => (
            <div
              key={course._id}
              className="flex items-center justify-between border rounded-xl p-4 hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-20 h-20 rounded-lg object-cover"
                />

                <div>
                  <h3 className="font-semibold text-lg">{course.title}</h3>

                  <p className="text-gray-500 text-sm">{course.category}</p>

                  <p className="text-gray-500 text-sm">
                    {course.totalStudents || 0} Students
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-xl font-bold text-blue-600">
                  ${course.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentCourses;
