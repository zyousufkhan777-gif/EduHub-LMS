import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  // ================= USER =================

  const [token, setToken] = useState(localStorage.getItem("token") || false);

  const [userData, setUserData] = useState(null);

  // ================= COURSES =================

  const [courses, setCourses] = useState([]);

  const [filteredCourses, setFilteredCourses] = useState([]);

  const [course, setCourse] = useState(null);

  // ================= LESSONS =================

  const [lessons, setLessons] = useState([]);

  // ================= NOTIFICATIONS =================

  const [notifications, setNotifications] = useState([]);

  // ===========================================================
  // Get Published Courses
  // ===========================================================

  const getCourses = async () => {
    try {
      const { data } = await axios.get(
        backendURL + "/api/course/publish-courses"
      );

      if (data.success) {
        setCourses(data.courses);
        setFilteredCourses(data.courses);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // ===========================================================
  // Get Single Course
  // ===========================================================

  const getCourseDetails = async (courseId) => {
    try {
      const { data } = await axios.get(
        backendURL + `/api/course/${courseId}`
      );

      if (data.success) {
        setCourse(data.course);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // ===========================================================
  // Get Lessons
  // ===========================================================

  const getLessons = async (courseId) => {
    try {
      const { data } = await axios.get(
        backendURL + `/api/lesson/lessons-list/${courseId}`
      );

      if (data.success) {
        setLessons(data.lessons);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // ===========================================================
  // Search / Filter Courses
  // ===========================================================

  const filterCourses = async (filters) => {
    try {
      const { data } = await axios.get(
        backendURL + "/api/course/filter",
        {
          params: filters,
        }
      );

      if (data.success) {
        setFilteredCourses(data.courses);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // ===========================================================
  // User Profile
  // ===========================================================

  const loadUserProfileData = async () => {
    try {
      const { data } = await axios.get(
        backendURL + "/api/user/profile",
        {
          headers: {
            token,
          },
        }
      );

      if (data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // ===========================================================
  // Notifications
  // ===========================================================

  const getNotifications = async () => {
    try {
      const { data } = await axios.get(
        backendURL + "/api/notification/list",
        {
          headers: {
            token,
          },
        }
      );

      if (data.success) {
        setNotifications(data.notifications);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // ===========================================================
  // Mark Notification As Read
  // ===========================================================

  const markNotificationAsRead = async (notificationId) => {
    try {
      const { data } = await axios.post(
        backendURL + `/api/notification/read/${notificationId}`,
        {},
        {
          headers: {
            token,
          },
        }
      );

      if (data.success) {
        getNotifications();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // ===========================================================
  // Effects
  // ===========================================================

  useEffect(() => {
    getCourses();
  }, []);

  useEffect(() => {
    if (token) {
      loadUserProfileData();
      getNotifications();
    } else {
      setUserData(null);
      setNotifications([]);
    }
  }, [token]);

  // ===========================================================
  // Context Value
  // ===========================================================

  const value = {
    backendURL,

    // User
    token,
    setToken,
    userData,
    setUserData,
    loadUserProfileData,

    // Courses
    courses,
    setCourses,
    filteredCourses,
    setFilteredCourses,
    getCourses,
    filterCourses,

    // Single Course
    course,
    setCourse,
    getCourseDetails,

    // Lessons
    lessons,
    setLessons,
    getLessons,

    // Notifications
    notifications,
    setNotifications,
    getNotifications,
    markNotificationAsRead,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;