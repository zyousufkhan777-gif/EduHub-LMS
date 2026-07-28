import React, { useState, useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Searchbox = ({ showSearchBox, setShowSearchBox }) => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate()

  const { backendURL, setFilteredCourses } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!search.trim()) return;

      console.log("Searching:", search);

    try {
      const { data } = await axios.get(backendURL + "/api/course/search", {
        params: {
          keyword: search,
        },
      });

      if (data.success) {
        setFilteredCourses(data.courses);
        console.log(data.courses)
        setShowSearchBox(false);
        setSearch('')
        navigate('/courses')
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ${
        showSearchBox ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center justify-center gap-5 mt-10 pb-4 shadow-lg">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
            placeholder="Search courses..."
            className="
            w-72
            md:w-[500px]
            h-12
            rounded
            border
            bg-gray-100
            px-3
            outline-none
            focus:border-blue-500
            "
          />

          <button type="submit">
            <CiSearch
              className="
              text-3xl
              text-gray-500
              cursor-pointer
              "
            />
          </button>
        </div>

        <MdOutlineClose
          onClick={() => {
            setShowSearchBox(false);
            setSearch("");
          }}
          className="
          text-3xl
          cursor-pointer
          hover:text-red-500
          transition
          "
        />
      </div>
    </form>
  );
};

export default Searchbox;
