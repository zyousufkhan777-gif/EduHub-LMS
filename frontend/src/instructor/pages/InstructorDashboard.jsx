import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { InstructorContext } from "../../context/instructorContext";

import DashboardCard from "../components/DashboardCard";
import RecentCourses from "../components/RecentCourses";

import { FaBook, FaUsers, FaPlayCircle, FaDollarSign } from "react-icons/fa";

const InstructorDashboard = () => {
  const { backendURL, instructorToken } = useContext(InstructorContext);

  const [dashboardData, setDashboardData] = useState({
    totalCourses: 0,

    totalStudents: 0,

    totalLessons: 0,

    totalEarnings: 0,

    recentCourses: [],
  });

  const getDashboardData = async () => {
    try {
      const { data } = await axios.get(
        backendURL + "/api/instructor/dashboard",

        {
          headers: {
            itoken: instructorToken,
          },
        },
      );

      if (data.success) {
        setDashboardData(data.dashboardData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    if (instructorToken) {
      getDashboardData();
    }
  }, [instructorToken]);

  return (
    <section className="p-6">
      {/* Heading */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Instructor Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back! Here's an overview of your teaching activity.
        </p>
      </div>

      {/* Dashboard Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Courses"
          value={dashboardData.totalCourses}
          icon={<FaBook />}
          color="bg-blue-600"
        />

        <DashboardCard
          title="Total Students"
          value={dashboardData.totalStudents}
          icon={<FaUsers />}
          color="bg-green-600"
        />

        <DashboardCard
          title="Total Lessons"
          value={dashboardData.totalLessons}
          icon={<FaPlayCircle />}
          color="bg-orange-500"
        />

        <DashboardCard
          title="Revenue"
          value={`$${dashboardData.totalEarnings}`}
          icon={<FaDollarSign />}
          color="bg-purple-600"
        />
      </div>

      {/* Recent Courses */}

      <div className="mt-10">
        <RecentCourses courses={dashboardData.recentCourses} />
      </div>
    </section>
  );
};

export default InstructorDashboard;
