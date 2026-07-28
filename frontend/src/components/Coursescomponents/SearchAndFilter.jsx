import React, { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { AppContext } from "../../context/AppContext";


const SearchAndFilter = () => {

  const [inputText, setInputText] = useState("");
  const [category, setCategory] = useState("all");
  const [level, setLevel] = useState("all");
  const [price, setPrice] = useState("all");
  const [sortBy, setSortBy] = useState("newest");


  const { filterCourses } = useContext(AppContext);



  const submitHandler = async (e) => {

    e.preventDefault();


    await filterCourses({

      search: inputText,

      category: category === "all" ? "" : category,

      level: level === "all" ? "" : level,

      price: price === "all" ? "" : price,

      sortBy,

    });


  };



  return (
    <section className="mx-auto px-6 py-10">

      <form
        onSubmit={submitHandler}
        className="bg-white shadow-lg rounded-2xl p-6"
      >

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">


          {/* Search */}
          <div className="flex items-center gap-2">

            <input
              type="text"
              placeholder="Search courses..."
              value={inputText}
              onChange={(e)=>setInputText(e.target.value)}
              className="w-full rounded-lg border border-blue-500 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />


            <button
              type="submit"
              className="rounded-lg bg-blue-600 p-3 text-white hover:bg-blue-700"
            >

              <CiSearch className="text-2xl"/>

            </button>

          </div>



          {/* Category */}
          <select
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
            className="rounded-lg border border-blue-500 px-4 py-3"
          >

            <option value="all">All Categories</option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile Development">Mobile Development</option>
            <option value="AI & Machine Learning">AI & Machine Learning</option>
            <option value="Data Science">Data Science</option>
            <option value="Cloud Computing">Cloud Computing</option>
            <option value="Cyber Security">Cyber Security</option>

          </select>




          {/* Level */}
          <select
            value={level}
            onChange={(e)=>setLevel(e.target.value)}
            className="rounded-lg border border-blue-500 px-4 px-4 py-3"
          >

            <option value="all">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>

          </select>




          {/* Price */}
          <select
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            className="rounded-lg border border-blue-500 px-4 py-3"
          >

            <option value="all">All Prices</option>
            <option value="free">Free</option>
            <option value="paid">Paid</option>

          </select>




          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e)=>setSortBy(e.target.value)}
            className="rounded-lg border border-blue-500 px-4 py-3"
          >

            <option value="newest">Newest</option>
            <option value="popular">Most Popular</option>
            <option value="rated">Highest Rated</option>
            <option value="low-high">Price Low to High</option>
            <option value="high-low">Price High to Low</option>

          </select>



          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700"
          >
            Apply Filters
          </button>


        </div>

      </form>

    </section>
  );
};


export default SearchAndFilter;