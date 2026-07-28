import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { AdminContext } from "../../context/AdminContext";

const AdminInstructors = () => {
  const { backendURL, adminToken } = useContext(AdminContext);

  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadInstructors = async () => {
    if (!adminToken) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);

      const { data } = await axios.get(`${backendURL}/api/admin/instructors`, {
        headers: {
          atoken: adminToken,
        },
      });

      if (data.success) {
        setInstructors(data.instructors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Failed to load instructors",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInstructors();
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
        <h1 className="text-3xl font-bold">All Instructors</h1>

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
          Total Instructors : {instructors.length}
        </span>
      </div>

      {instructors.length === 0 ? (
        <div className="text-center py-20 text-gray-500 text-lg">
          No Instructors Found
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-xl">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left">Image</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Specialization</th>
                <th className="px-4 py-3 text-left">Experience</th>
                <th className="px-4 py-3 text-center">Rating</th>
              </tr>
            </thead>

            <tbody>
              {instructors.map((instructor) => (
                <tr key={instructor._id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <img
                      src={instructor.image || "https://via.placeholder.com/50"}
                      alt={instructor.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </td>

                  <td className="px-4 py-3 font-medium">{instructor.name}</td>

                  <td className="px-4 py-3">{instructor.email}</td>

                  <td className="px-4 py-3">
                    {instructor.specialization || "-"}
                  </td>

                  <td className="px-4 py-3">{instructor.experience || "-"}</td>

                  <td className="px-4 py-3 text-center">
                    {instructor.rating || 0}
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

export default AdminInstructors;
