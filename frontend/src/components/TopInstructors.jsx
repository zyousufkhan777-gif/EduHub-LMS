import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";

const TopInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  const navigate = useNavigate();

  const { backendURL } = useContext(AppContext);

  const getInstructors = async () => {
    try {
      const { data } = await axios.get(backendURL + "/api/instructor/list");

      if (data.success) {
        setInstructors(data.instructors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getInstructors();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-blue-600">
          Meet Our Expert Instructors
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Learn from experienced professionals who have helped thousands of
          students achieve their goals.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {instructors.map((instructor) => (
          <div
            key={instructor._id}
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >
            {/* Image */}
            <div className="flex justify-center">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
              />
            </div>

            {/* Name */}
            <h2 className="text-2xl font-bold mt-5">{instructor.name}</h2>

            {/* Specialization */}
            <p className="text-gray-500 mt-2">{instructor.specialization}</p>

            {/* Stats */}
            <div className="flex justify-center flex-wrap gap-2 mt-6">
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                ⭐ {instructor.rating || 0}
              </span>

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                👨‍🎓 {instructor.students || 0}
              </span>

              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                📚 {instructor.courses || 0}
              </span>
            </div>

            {/* Button */}
            <button
              onClick={() => {
                navigate(`/instructor/${instructor._id}`);
                scrollTo(0, 0);
              }}
              className="mt-8 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition cursor-pointer"
            >
              View Profile
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopInstructors;
