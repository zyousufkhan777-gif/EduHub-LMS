import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";

const ResetPassword = () => {
  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const { backendURL } = useContext(AppContext);

  const navigate = useNavigate();

  const { token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");

      return;
    }

    try {
      const { data } = await axios.post(
        backendURL + "/api/user/reset-password",

        {
          token,
          password,
        },
      );

      if (data.success) {
        toast.success(data.message);

        navigate("/login");
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
          <h1 className="text-3xl font-bold text-blue-600">Reset Password</h1>

          <p className="text-gray-600 mt-2">Create your new password.</p>
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <label className="font-medium text-gray-700">New Password</label>

          <input
            type="password"
            placeholder="Enter new password"
            className="border border-gray-300 rounded-xl px-4 py-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-2 mb-6">
          <label className="font-medium text-gray-700">Confirm Password</label>

          <input
            type="password"
            placeholder="Confirm password"
            className="border border-gray-300 rounded-xl px-4 py-3"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
