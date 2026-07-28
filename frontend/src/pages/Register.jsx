import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios'
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const {backendURL,token,setToken} = useContext(AppContext)

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      toast.error("Passwords do not match");
      return;
    }
    


    try {
    
      const {data} = await axios.post(backendURL + "/api/user/register", {name , email, password});

      if(data.success){

        localStorage.setItem("token", data.token)
        setToken(data.token)

        console.log(data.token)

        toast.success(data.message)

        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");


        navigate("/")

      } else {
        toast.error(data.message)
      }



    } catch (error) {
      toast.error(error.message);
    }




   
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4 ">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 flex flex-col gap-5"
      >
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Create Account
        </h1>

        <div className="flex flex-col gap-2">
          <label className="text-gray-700">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-700">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
            value={confirm}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-300 cursor-pointer"
        >
          Create Account
        </button>

        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;