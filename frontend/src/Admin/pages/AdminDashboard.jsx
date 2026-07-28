import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { AdminContext } from "../../context/AdminContext";

import { FaUsers, FaBook, FaClipboardList } from "react-icons/fa";

const AdminDashboard = () => {
  const { backendURL, adminToken } = useContext(AdminContext);

  const [dashboardData, setDashboardData] = useState({
    users: 0,
    courses: 0,
    enrollments: 0,
  });

  const [loading, setLoading] = useState(true);

  const loadDashboard = async () => {
    if (!adminToken) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);

      const { data } = await axios.get(`${backendURL}/api/admin/dashboard`, {
        headers: {
          atoken: adminToken,
        },
      });

      if (data.success) {
        setDashboardData(data.dashboardData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Failed to load dashboard",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, [adminToken]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <h2 className="text-2xl font-semibold">Loading...</h2>
      </div>
    );
  }

  return (
    <section>
      {/* Heading */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>

        <p className="text-gray-500 mt-2">
          Welcome back! Here is an overview of your platform.
        </p>
      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Users */}

        <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500">Total Users</p>

            <h2 className="text-4xl font-bold mt-2">{dashboardData.users}</h2>
          </div>

          <div className="bg-blue-600 text-white p-5 rounded-full">
            <FaUsers size={28} />
          </div>
        </div>

        {/* Courses */}

        <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500">Total Courses</p>

            <h2 className="text-4xl font-bold mt-2">{dashboardData.courses}</h2>
          </div>

          <div className="bg-green-600 text-white p-5 rounded-full">
            <FaBook size={28} />
          </div>
        </div>

        {/* Enrollments */}

        <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500">Total Enrollments</p>

            <h2 className="text-4xl font-bold mt-2">
              {dashboardData.enrollments}
            </h2>
          </div>

          <div className="bg-purple-600 text-white p-5 rounded-full">
            <FaClipboardList size={28} />
          </div>
        </div>
      </div>

      {/* Summary */}

      <div className="mt-10 bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6">Platform Summary</h2>

        <div className="space-y-4">
          <div className="flex justify-between border-b pb-3">
            <span className="font-medium">Registered Users</span>

            <span className="font-bold">{dashboardData.users}</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span className="font-medium">Published Courses</span>

            <span className="font-bold">{dashboardData.courses}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Total Enrollments</span>

            <span className="font-bold">{dashboardData.enrollments}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
