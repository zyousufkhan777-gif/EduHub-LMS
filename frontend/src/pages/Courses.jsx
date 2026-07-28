import React, { useContext } from "react";
import CoursesHeader from "../components/Coursescomponents/CoursesHeader";
import SearchAndFilter from "../components/Coursescomponents/SearchAndFilter";
import GridCourses from "../components/Coursescomponents/GridCourses";
import NewsletterCTA from "../components/Coursescomponents/NewsletterCTA";
import { AppContext } from "../context/AppContext";

const Courses = () => {
  const { filteredCourses, setFilteredCourses } = useContext(AppContext);

  return (
    <main className="min-h-screen">
      <CoursesHeader />

      <SearchAndFilter />

      <GridCourses courses={filteredCourses} />

      <NewsletterCTA />
    </main>
  );
};

export default Courses;
