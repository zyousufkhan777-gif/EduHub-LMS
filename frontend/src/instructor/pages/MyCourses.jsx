import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { InstructorContext } from "../../context/instructorContext";

const MyCourses = () => {
  const { backendURL, instructorToken } = useContext(InstructorContext);

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadCourses = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get(`${backendURL}/api/course/my-courses`, {
        headers: {
          itoken: instructorToken,
        },
      });

      if (data.success) {
        setCourses(data.courses || data.myCourses || []);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteCourse = async (courseId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?",
    );

    if (!confirmDelete) return;

    try {
      const { data } = await axios.post(
        `${backendURL}/api/course/delete-course/${courseId}`,
        {},
        {
          headers: {
            itoken: instructorToken,
          },
        },
      );

      if (data.success) {
        toast.success(data.message);
        loadCourses();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    if (instructorToken) {
      loadCourses();
    }
  }, [instructorToken]);

  if (loading) {
    return (
      <div className="p-10 text-center text-lg font-semibold">Loading...</div>
    );
  }

  return (
    <section className="p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
        My Courses
      </h1>

      {courses.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-10 text-center text-gray-500">
          No courses found.
        </div>
      ) : (
        <>
          {/* Card view: mobile + tablet */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {courses.map((course) => (
              <div
                key={course._id}
                className="bg-white rounded-xl shadow p-4 flex flex-col"
              >
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-40 sm:h-44 object-cover rounded-lg"
                />

                <h2 className="text-lg sm:text-xl font-bold mt-4 line-clamp-2">
                  {course.title}
                </h2>

                <p className="mt-2 text-sm sm:text-base">
                  <span className="font-semibold">Category:</span>{" "}
                  {course.category}
                </p>

                <p className="text-sm sm:text-base">
                  <span className="font-semibold">Price:</span> $
                  {course.price}
                </p>

                <p className="text-sm sm:text-base">
                  <span className="font-semibold">Students:</span>{" "}
                  {course.totalStudents}
                </p>

                <p
                  className={`font-semibold mt-2 text-sm sm:text-base ${
                    course.isPublished ? "text-green-600" : "text-orange-500"
                  }`}
                >
                  {course.isPublished ? "Published" : "Draft"}
                </p>

                <button
                  onClick={() => deleteCourse(course._id)}
                  className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white py-2.5 sm:py-3 rounded-lg mt-auto"
                >
                  Delete Course
                </button>
              </div>
            ))}
          </div>

          {/* Table view: large screens (desktop) */}
          <div className="hidden lg:block overflow-x-auto bg-white rounded-xl shadow">
            <table className="w-full min-w-[800px]">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-4 text-left">Thumbnail</th>
                  <th className="p-4 text-left">Title</th>
                  <th className="p-4 text-left">Category</th>
                  <th className="p-4 text-left">Price</th>
                  <th className="p-4 text-left">Students</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {courses.map((course) => (
                  <tr key={course._id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-24 h-16 object-cover rounded-lg"
                      />
                    </td>

                    <td className="p-4 font-semibold">{course.title}</td>

                    <td className="p-4">{course.category}</td>

                    <td className="p-4">${course.price}</td>

                    <td className="p-4">{course.totalStudents}</td>

                    <td className="p-4">
                      {course.isPublished ? (
                        <span className="text-green-600 font-semibold">
                          Published
                        </span>
                      ) : (
                        <span className="text-orange-500 font-semibold">
                          Draft
                        </span>
                      )}
                    </td>

                    <td className="p-4 text-center">
                      <button
                        onClick={() => deleteCourse(course._id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </section>
  );
};

export default MyCourses;