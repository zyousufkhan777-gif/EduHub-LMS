import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { InstructorContext } from "../../context/instructorContext";

const AddLesson = () => {
  const { backendURL, instructorToken } = useContext(InstructorContext);

  const [courses, setCourses] = useState([]);

  const [loading, setLoading] = useState(false);

  const [lessonData, setLessonData] = useState({
    courseId: "",
    title: "",
    video: "",
    duration: "",
    isPreview: false,
  });

  // Get Instructor Courses

  const loadCourses = async () => {
    try {
      const { data } = await axios.get(
        `${backendURL}/api/course/my-courses`,

        {
          headers: {
            itoken: instructorToken,
          },
        },
      );

      if (data.success) {
        setCourses(data.myCourses || []);
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setLessonData((prev) => ({
      ...prev,

      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !lessonData.courseId ||
      !lessonData.title ||
      !lessonData.video ||
      !lessonData.duration
    ) {
      return toast.error("Please fill all required fields");
    }

    try {
      setLoading(true);

      const { data } = await axios.post(
        `${backendURL}/api/lesson/add-lesson`,

        lessonData,

        {
          headers: {
            itoken: instructorToken,
          },
        },
      );

      if (data.success) {
        toast.success(data.message);

        setLessonData({
          courseId: "",
          title: "",
          video: "",
          duration: "",
          isPreview: false,
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      <h1 className="text-3xl font-bold mb-8">Add New Lesson</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="font-medium">Select Course</label>

          <select
            name="courseId"
            value={lessonData.courseId}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          >
            <option value="">Choose Course</option>

            {courses.length === 0 ? (
              <option disabled>No courses available</option>
            ) : (
              courses.map((course) => (
                <option key={course._id} value={course._id}>
                  {course.title}
                </option>
              ))
            )}
          </select>
        </div>

        <div>
          <label className="font-medium">Lesson Title</label>

          <input
            type="text"
            name="title"
            value={lessonData.title}
            onChange={handleChange}
            placeholder="Introduction"
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-medium">YouTube Video URL</label>

          <input
            type="text"
            name="video"
            value={lessonData.video}
            onChange={handleChange}
            placeholder="https://youtu.be/example"
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-medium">Duration</label>

          <input
            type="text"
            name="duration"
            value={lessonData.duration}
            onChange={handleChange}
            placeholder="10 Minutes"
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="isPreview"
            checked={lessonData.isPreview}
            onChange={handleChange}
          />

          <label>Free Preview Lesson</label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
        >
          {loading ? "Adding..." : "Add Lesson"}
        </button>
      </form>
    </section>
  );
};

export default AddLesson;
