import React, { useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const InstructorApply = () => {
  const { backendURL, token } = useContext(AppContext);

  const navigate = useNavigate();

  const [image, setImage] = useState(null);

  const [formData, setFormData] = useState({
    specialization: "",
    experience: "",
    description: "",
    skills: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.error("Please login first");
      navigate("/login");
      return;
    }

    try {
      const form = new FormData();

      form.append("specialization", formData.specialization);
      form.append("experience", formData.experience);
      form.append("description", formData.description);
      form.append("skills", formData.skills);
      form.append("country", formData.country);

      if (image) {
        form.append("image", image);
      }

      const { data } = await axios.post(
        `${backendURL}/api/instructor/become-instructor`,
        form,
        {
          headers: {
            token,
            "Content-Type": "multipart/form-data",
          },
        },
      );

      if (data.success) {
        toast.success(data.message);

        setTimeout(() => {
          navigate("/instructor/login");
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }, 1200);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <section className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-center mb-8">
        Become an Instructor
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="specialization"
          value={formData.specialization}
          onChange={handleChange}
          placeholder="Specialization"
          className="w-full border rounded-lg p-3"
          required
        />

        <input
          type="text"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          placeholder="Experience"
          className="w-full border rounded-lg p-3"
          required
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          rows={5}
          className="w-full border rounded-lg p-3"
          required
        />

        <input
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          placeholder="React, Node, JavaScript"
          className="w-full border rounded-lg p-3"
          required
        />

        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Country"
          className="w-full border rounded-lg p-3"
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Create Instructor Account
        </button>

        <p className="text-center text-gray-600">
          Already an instructor?{" "}
          <button
            type="button"
            onClick={() => {
              navigate("/instructor/login");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="text-blue-600 hover:underline font-semibold"
          >
            Login
          </button>
        </p>
      </form>
    </section>
  );
};

export default InstructorApply;
