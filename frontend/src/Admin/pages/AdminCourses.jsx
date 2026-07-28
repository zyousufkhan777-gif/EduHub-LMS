import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { AdminContext } from "../../context/AdminContext";

const AdminCourses = () => {
  const { backendURL, adminToken } = useContext(AdminContext);

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadCourses = async () => {
    if (!adminToken) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);

      const { data } = await axios.get(`${backendURL}/api/admin/courses`, {
        headers: {
          atoken: adminToken,
        },
      });

      if (data.success) {
        setCourses(data.courses);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Failed to load courses",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCourses();
  }, [adminToken]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <h2 className="text-2xl font-semibold">Loading...</h2>
      </div>
    );
  }

  return (
    <section className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">All Courses</h1>

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
          Total Courses : {courses.length}
        </span>
      </div>

      {courses.length === 0 ? (
        <div className="text-center py-20 text-gray-500 text-lg">
          No Courses Found
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left">Thumbnail</th>
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Instructor</th>
                <th className="px-4 py-3 text-center">Price</th>
                <th className="px-4 py-3 text-center">Students</th>
                <th className="px-4 py-3 text-center">Published</th>
              </tr>
            </thead>

            <tbody>
              {courses.map((course) => (
                <tr key={course._id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <img
                      src={course.thumbnail || "https://via.placeholder.com/70"}
                      alt={course.title}
                      className="w-20 h-12 rounded object-cover"
                    />
                  </td>

                  <td className="px-4 py-3 font-medium">{course.title}</td>

                  <td className="px-4 py-3">{course.category}</td>

                  <td className="px-4 py-3">
                    {course.instructor?.name || "-"}
                  </td>

                  <td className="px-4 py-3 text-center">${course.price}</td>

                  <td className="px-4 py-3 text-center">
                    {course.totalStudents || 0}
                  </td>

                  <td className="px-4 py-3 text-center">
                    {course.isPublished ? (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                        Published
                      </span>
                    ) : (
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">
                        Draft
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default AdminCourses;
