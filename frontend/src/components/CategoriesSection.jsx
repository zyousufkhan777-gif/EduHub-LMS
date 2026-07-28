import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaRobot,
  FaChartBar,
  FaCloud,
} from "react-icons/fa";
import {
  MdDesignServices,
  MdSecurity,
  MdCampaign,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "Web Development",
    icon: FaLaptopCode,
    courses: 120,
  },
  {
    id: 2,
    title: "Mobile Development",
    icon: FaMobileAlt,
    courses: 80,
  },
  {
    id: 3,
    title: "AI & Machine Learning",
    icon: FaRobot,
    courses: 45,
  },
  {
    id: 4,
    title: "UI / UX Design",
    icon: MdDesignServices,
    courses: 60,
  },
  {
    id: 5,
    title: "Data Science",
    icon: FaChartBar,
    courses: 90,
  },
  {
    id: 6,
    title: "Cloud Computing",
    icon: FaCloud,
    courses: 35,
  },
  {
    id: 7,
    title: "Cyber Security",
    icon: MdSecurity,
    courses: 25,
  },
  {
    id: 8,
    title: "Digital Marketing",
    icon: MdCampaign,
    courses: 70,
  },
];

const CategoriesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-blue-600">
          Browse Categories
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
          Find the perfect course from our most popular categories and
          start learning today.
        </p>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.id}
              onClick={() => navigate(`/courses/${category.title}`)}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:bg-blue-600 hover:text-white hover:shadow-2xl"
            >
              <Icon className="text-6xl mb-6" />

              <h2 className="text-xl font-semibold">
                {category.title}
              </h2>

              <p className="mt-2 text-gray-500 group-hover:text-white">
                {category.courses} Courses
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategoriesSection;