import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { AppContext } from "./context/AppContext";
import { InstructorContext } from "./context/instructorContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ================= USER PAGES =================

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Course from "./pages/Course";
import Lessons from "./pages/Lessons";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Forget from "./pages/Forget";
import ResetPassword from "./pages/ResetPassword";
import MyLearning from "./pages/MyLearning";
import Profile from "./pages/Profile";
import BecomeAInstructor from "./pages/BecomeAInstructor";
import InstructorApply from "./pages/InstructoeApply";
import Instructorprofile from "./pages/Instructorprofile";
import NotFound from "./pages/NotFound";

// ================= INSTRUCTOR PAGES =================

import InstructorLogin from "./instructor/pages/InstructorLogin";
import InstructorDashboard from "./instructor/pages/InstructorDashboard";
import InstructorLayout from "./instructor/pages/InstructorLayout";
import AddCourse from "./instructor/pages/AddCourse";
import AddLesson from "./instructor/pages/AddLesson";
import MyCourses from "./instructor/pages/MyCourses";
import InstructorProfile from "./instructor/pages/Instructorprofile";

// ================= ADMIN PAGES =================

import AdminLogin from "./Admin/components/AdminLogin";
import AdminLayout from "./Admin/pages/AdminLayout";
import AdminDashboard from "./Admin/pages/AdminDashboard";
import AdminCourses from "./Admin/pages/AdminCourses";
import AdminInstructor from "./Admin/pages/AdminInstructors";
import AdminUsers from "./Admin/pages/AdminUsers";

const App = () => {
  const { token } = useContext(AppContext);

  const { instructorToken } = useContext(InstructorContext);

  const location = useLocation();

  const hideLayout =
    location.pathname.includes("/lesson/") ||
    location.pathname.startsWith("/instructor-panel") ||
    location.pathname.startsWith("/admin-panel");

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      {!hideLayout && <Navbar />}

      <main className={!hideLayout ? "mx-2 sm:mx-[5%]" : ""}>
        <Routes>
          {/* ================= USER ROUTES ================= */}

          <Route path="/" element={<Home />} />

          <Route path="/courses" element={<Courses />} />

          <Route path="/courses/:category" element={<Courses />} />

          <Route path="/courses/instructor/:instructor" element={<Courses />} />

          <Route path="/course/:courseId" element={<Course />} />

          <Route
            path="/course/:courseId/lesson/:lessonId"
            element={<Lessons />}
          />

          <Route path="/register" element={<Register />} />

          <Route path="/login" element={<Login />} />

          <Route path="/forgot-password" element={<Forget />} />

          <Route path="/reset-password/:token" element={<ResetPassword />} />

          <Route
            path="/instructor/:instructorid"
            element={<Instructorprofile />}
          />

          {/* USER PROTECTED */}

          <Route
            path="/my-learning"
            element={token ? <MyLearning /> : <Login />}
          />

          <Route path="/profile" element={token ? <Profile /> : <Login />} />

          <Route path="/contact" element={token ? <Contact /> : <Login />} />

          <Route
            path="/become-instructor"
            element={token ? <BecomeAInstructor /> : <Login />}
          />

          <Route
            path="/instructor/apply"
            element={token ? <InstructorApply /> : <Login />}
          />

          {/* ================= INSTRUCTOR PANEL ================= */}

          <Route path="/instructor/login" element={<InstructorLogin />} />

          <Route
            path="/instructor-panel"
            element={
              instructorToken ? <InstructorLayout /> : <InstructorLogin />
            }
          >
            <Route index element={<InstructorDashboard />} />

            <Route path="dashboard" element={<InstructorDashboard />} />

            <Route path="add-course" element={<AddCourse />} />

            <Route path="add-lesson" element={<AddLesson />} />

            <Route path="my-courses" element={<MyCourses />} />

            <Route path="profile" element={<InstructorProfile />} />
          </Route>

          {/* ================= ADMIN PANEL ================= */}

          <Route path="/admin-login" element={<AdminLogin />} />

          <Route path="/admin-panel" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />

            <Route path="dashboard" element={<AdminDashboard />} />

            <Route path="courses" element={<AdminCourses />} />

            <Route path="instructors" element={<AdminInstructor />} />

            <Route path="users" element={<AdminUsers />} />
          </Route>

          {/* ================= 404 ================= */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </>
  );
};

export default App;
