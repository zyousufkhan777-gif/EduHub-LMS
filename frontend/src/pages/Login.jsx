import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const { backendURL,token , setToken} = useContext(AppContext)

  const submitHandler = async (e) => {




    e.preventDefault();

    try {
      
      const {data} = await axios.post(backendURL + '/api/user/login', {email,password})
      
      if(data.success){
        localStorage.setItem("token" , data.token)
        setToken(data.token)

        console.log(data.token)

        toast.success(data.message)

        setEmail("")
        setPassword("")

        navigate('/my-learning')

      } else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }


  };

  return (
    <section className="min-h-screen flex items-center justify-center  px-4">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8"
      >
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Login
        </h1>

        {/* Email */}
        <div className="flex flex-col mb-5">
          <label className="mb-2 text-gray-700 font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="flex flex-col mb-6">
          <label className="mb-2 text-gray-700 font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end mb-6">
          <button
            type="button"
            onClick={() => navigate("/forgot-password")}
            className="text-blue-600 hover:underline text-sm"
          >
            Forgot Password?
          </button>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition duration-300 font-semibold"
        >
          Login
        </button>

        {/* Register */}
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-600 font-semibold cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>
      </form>
    </section>
  );
};

export default Login;