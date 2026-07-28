import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import {
  FaVideo,
  FaBookOpen,
  FaProjectDiagram,
  FaCertificate,
  FaInfinity,
} from "react-icons/fa";

const CourseIncludes = () => {
  const { course } = useContext(AppContext);

  if (!course) {
    return <h1 className="text-center text-3xl py-20">Loading...</h1>;
  }

  const icons = [
    <FaVideo />,
    <FaBookOpen />,
    <FaProjectDiagram />,
    <FaCertificate />,
    <FaInfinity />,
  ];

  const includes = [
    `${course.duration} Hours Video Content`,
    "Course Materials",
    "Real World Projects",
    "Certificate of Completion",
    "Lifetime Access",
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">
          This Course Includes
        </h1>

        <div className="space-y-5">
          {includes.map((item, index) => (
            <div
              key={index}
              className="
                flex
                items-center
                gap-4
                border-b
                pb-4
              "
            >
              <span className="text-blue-600 text-2xl">{icons[index]}</span>

              <p className="text-gray-700 text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseIncludes;
