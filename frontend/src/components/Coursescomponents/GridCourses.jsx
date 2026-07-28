import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { useParams } from "react-router-dom";


const GridCourses = ({ courses }) => {

  const [filteredCourses, setFilteredCourses] = useState([]);

  const { category, instructor } = useParams();



  useEffect(() => {

    let filtered = [...courses];


    if(category){

      filtered = filtered.filter(
        (item)=> item.category === category
      );

    }



    if(instructor){

      filtered = filtered.filter(
        (item)=> 
          item.instructor?._id === instructor ||
          item.instructor === instructor
      );

    }



    setFilteredCourses(filtered);


  },[courses, category, instructor]);




  return (

    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="text-center mb-14">

        <h1 className="text-4xl font-bold text-blue-600">
          All Courses
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Explore our most popular courses and start learning today.
        </p>

      </div>



      {
        filteredCourses.length === 0 ? (

          <h2 className="text-center text-gray-500 text-xl">
            No courses found
          </h2>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {
              filteredCourses.map((course)=>(

                <CourseCard
                  key={course._id}
                  course={course}
                />

              ))
            }

          </div>

        )
      }


    </section>

  );

};


export default GridCourses;