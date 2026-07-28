import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { AdminContext } from "../../context/AdminContext";

const AdminUsers = () => {
  const { backendURL, adminToken } = useContext(AdminContext);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadUsers = async () => {
    if (!adminToken) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);

      console.log("Backend:", backendURL);
      console.log("Admin Token:", adminToken);

      const { data } = await axios.get(`${backendURL}/api/admin/users`, {
        headers: {
          atoken: adminToken,
        },
      });

      console.log(data);

      if (data.success) {
        setUsers(data.users);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Failed to load users",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
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
        <h1 className="text-3xl font-bold">All Users</h1>

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
          Total Users : {users.length}
        </span>
      </div>

      {users.length === 0 ? (
        <div className="text-center py-20 text-gray-500 text-lg">
          No Users Found
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-xl">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left">Image</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Country</th>
                <th className="px-4 py-3 text-center">Enrolled Courses</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <img
                      src={user.image || "https://via.placeholder.com/50"}
                      alt={user.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </td>

                  <td className="px-4 py-3 font-medium">{user.name}</td>

                  <td className="px-4 py-3">{user.email}</td>

                  <td className="px-4 py-3">{user.country || "-"}</td>

                  <td className="px-4 py-3 text-center">
                    {Array.isArray(user.enrolledCourses)
                      ? user.enrolledCourses.length
                      : 0}
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

export default AdminUsers;
