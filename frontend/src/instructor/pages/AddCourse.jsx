import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { InstructorContext } from "../../context/instructorContext";

const AddCourse = () => {
  const { backendURL, instructorToken } = useContext(InstructorContext);

  const [thumbnail, setThumbnail] = useState(null);

  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    level: "",
    duration: "",
    language: "",
  });

  const handleChange = (e) => {
    setCourseData({
      ...courseData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!thumbnail) {
      return toast.error("Please select a thumbnail");
    }

    try {
      const formData = new FormData();

      formData.append("title", courseData.title);
      formData.append("description", courseData.description);
      formData.append("category", courseData.category);
      formData.append("price", courseData.price);
      formData.append("level", courseData.level);
      formData.append("duration", courseData.duration);
      formData.append("language", courseData.language);
      formData.append("thumbnail", thumbnail);

      console.log("Instructor Token:", instructorToken);

      const { data } = await axios.post(
        `${backendURL}/api/course/add-course`,
        formData,
        {
          headers: {
            itoken: instructorToken,
            "Content-Type": "multipart/form-data",
          },
        },
      );

      if (data.success) {
        toast.success(data.message);

        setCourseData({
          title: "",
          description: "",
          category: "",
          price: "",
          level: "",
          duration: "",
          language: "",
        });

        setThumbnail(null);

        // پاک کردن input فایل
        document.querySelector('input[type="file"]').value = "";
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || "Failed to add course.");
    }
  };

  return (
    <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      <h1 className="text-3xl font-bold mb-8">Add New Course</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="font-medium">Course Thumbnail</label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setThumbnail(e.target.files[0])}
            className="mt-2 w-full"
          />
        </div>

        <div>
          <label className="font-medium">Course Title</label>

          <input
            type="text"
            name="title"
            value={courseData.title}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
            required
          />
        </div>

        <div>
          <label className="font-medium">Description</label>

          <textarea
            rows="5"
            name="description"
            value={courseData.description}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label>Category</label>

            <input
              type="text"
              name="category"
              value={courseData.category}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-2"
              required
            />
          </div>

          <div>
            <label>Language</label>

            <input
              type="text"
              name="language"
              value={courseData.language}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-2"
              required
            />
          </div>

          <div>
            <label>Level</label>

            <select
              name="level"
              value={courseData.level}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-2"
              required
            >
              <option value="">Select Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div>
            <label>Duration</label>

            <input
              type="text"
              name="duration"
              value={courseData.duration}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-2"
              placeholder="12 Hours"
              required
            />
          </div>

          <div>
            <label>Price</label>

            <input
              type="number"
              name="price"
              value={courseData.price}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-2"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl transition"
        >
          Create Course
        </button>
      </form>
    </section>
  );
};

export default AddCourse;
