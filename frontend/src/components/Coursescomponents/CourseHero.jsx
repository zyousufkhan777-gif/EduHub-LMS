import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";
const CourseHero = () => {
  const { courseId } = useParams();

  const { backendURL, token } = useContext(AppContext);

  const [course, setCourse] = useState(null);

  const getCourseDetails = async () => {
    try {
      const { data } = await axios.get(backendURL + `/api/course/${courseId}`);

      console.log(data);

      if (data.success) {
        setCourse(data.course);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCourseDetails();
  }, [courseId]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-500">Loading...</h1>
      </div>
    );
  }

  const handleEnroll = async () => {
    try {
      if (!token) {
        toast.error("Please login first");

        return;
      }

      const { data } = await axios.post(
        backendURL + "/api/user/enroll-course",
        {
          courseId: course._id,
        },
        {
          headers: {
            token,
          },
        },
      );

      if (data.success) {
        toast.success("Course enrolled successfully");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Course Image */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-[400px] object-cover rounded-2xl hover:scale-105 transition duration-300"
          />
        </div>

        {/* Course Info */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-blue-600">{course.title}</h1>

          <p className="text-lg text-gray-600">{course.description}</p>

          <div className="flex gap-4 flex-wrap">
            <span className="bg-yellow-200 px-4 py-2 rounded-full">
              ⭐ {course.rating || 0}
            </span>

            <span className="bg-green-200 px-4 py-2 rounded-full">
              👨‍🎓 {course.enrolledStudents?.length || 0} Students
            </span>
          </div>

          <h2 className="text-xl font-semibold">
            Instructor: {course.instructor?.name}
          </h2>

          <div className="flex gap-4 flex-wrap">
            <span className="bg-blue-200 px-4 py-2 rounded-full">
              ⏱ {course.duration}
            </span>

            <span className="bg-orange-200 px-4 py-2 rounded-full">
              📚 {course.lessons?.length || 0} Lessons
            </span>
          </div>

          <div className="flex gap-4 flex-wrap">
            <span className="bg-gray-200 px-4 py-2 rounded-full">
              🌐 {course.language}
            </span>

            <span className="bg-purple-200 px-4 py-2 rounded-full">
              📈 {course.level}
            </span>
          </div>

          <h2 className="text-3xl font-bold text-red-500">${course.price}</h2>

          <button
            onClick={handleEnroll}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full transition"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
