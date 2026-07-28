import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";

const Instructorprofile = () => {
  const [instructor, setInstructor] = useState(null);
  const [following, setFollowing] = useState(false);
  const [followers, setFollowers] = useState(0);

  const { instructorid } = useParams();

  const navigate = useNavigate();

  const { backendURL } = useContext(AppContext);

  const getInstructor = async () => {
    try {
      const { data } = await axios.get(
        `${backendURL}/api/instructor/${instructorid}`,
      );

      if (data.success) {
        setInstructor(data.instructor);
        setFollowers(data.instructor.followers || 0);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getInstructor();
  }, [instructorid]);

  if (!instructor) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-gray-500">
          Loading Instructor...
        </h1>
      </div>
    );
  }

  const handleFollow = () => {
    if (following) {
      setFollowers((prev) => Math.max(prev - 1, 0));
    } else {
      setFollowers((prev) => prev + 1);
    }

    setFollowing(!following);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-white shadow-2xl rounded-2xl p-8">
        <div className="text-center">
          <img
            src={instructor.image}
            alt={instructor.name}
            className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-600"
          />

          <h1 className="text-4xl font-bold text-blue-600 mt-5">
            {instructor.name}
          </h1>

          <p className="text-gray-600 mt-2">{instructor.specialization}</p>
        </div>

        <div className="flex justify-center flex-wrap gap-5 mt-8">
          <span className="bg-yellow-100 px-4 py-2 rounded-full">
            ⭐ {instructor.rating || 0}
          </span>

          <span className="bg-blue-100 px-4 py-2 rounded-full">
            📚 {instructor.courses || 0}
          </span>

          <span className="bg-green-100 px-4 py-2 rounded-full">
            👨‍🎓 {instructor.students || 0}
          </span>

          <span className="bg-purple-100 px-4 py-2 rounded-full">
            ⏳ {instructor.experience || 0}
          </span>
        </div>

        <div className="flex justify-center gap-5 mt-8">
          <button
            onClick={handleFollow}
            className={`px-6 py-3 rounded-xl text-white ${
              following ? "bg-pink-600" : "bg-blue-600"
            }`}
          >
            {following ? "Unfollow" : "Follow"}
          </button>

          <button
            onClick={() => {
              navigate(`/courses/instructor/${instructor._id}`);

              window.scrollTo(0, 0);
            }}
            className="bg-gray-600 text-white px-6 py-3 rounded-xl hover:bg-gray-700"
          >
            View Courses
          </button>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-bold">About Instructor</h2>

          <p className="text-gray-600 mt-3">{instructor.description}</p>
        </div>

        <div className="flex flex-wrap gap-3 mt-8">
          {instructor.skills?.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructorprofile;
