import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";

const Forget = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const { backendURL } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        backendURL + "/api/user/forget-password",
        {
          email,
        },
      );

      if (data.success) {
        toast.success(data.message);

        // ارسال token به صفحه reset
        navigate(`/reset-password/${data.token}`);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">
            Forgot Password
          </h1>

          <p className="text-gray-600">
            Enter your email to reset your password.
          </p>
        </div>

        <div className="flex flex-col gap-2 mb-6">
          <label className="font-medium text-gray-700">Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
        >
          Send Reset Link
        </button>

        <p className="text-center mt-6 text-gray-600">
          Back to{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 cursor-pointer"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Forget;
