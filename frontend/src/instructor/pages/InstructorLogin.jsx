import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../../context/AppContext";
import { InstructorContext } from "../../context/instructorContext";

const InstructorLogin = () => {
  const navigate = useNavigate();

  const { backendURL } = useContext(AppContext);

  const { setInstructorToken } = useContext(InstructorContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(backendURL + "/api/instructor/login", {
        email,
        password,
      });

      if (data.success) {
        setInstructorToken(data.Itoken);

        toast.success(data.message || "Login Successful");

        navigate("/instructor-panel/dashboard");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <section className="max-w-md mx-auto py-20 px-6">
      <div className="bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Instructor Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg p-3 outline-none focus:border-blue-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg p-3 outline-none focus:border-blue-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default InstructorLogin;
