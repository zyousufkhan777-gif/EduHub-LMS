import React from "react";
import {
  FaChalkboardTeacher,
  FaBookOpen,
  FaCertificate,
  FaBriefcase,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Expert Instructors",
    description:
      "Learn from experienced professionals with real industry knowledge.",
    icon: FaChalkboardTeacher,
  },
  {
    id: 2,
    title: "High Quality Courses",
    description:
      "Access well-structured courses with updated content.",
    icon: FaBookOpen,
  },
  {
    id: 3,
    title: "Certificate",
    description:
      "Receive a certificate after successfully completing your course.",
    icon: FaCertificate,
  },
  {
    id: 4,
    title: "Career Support",
    description:
      "Get career guidance and build skills for your dream job.",
    icon: FaBriefcase,
  },
];

const Choose = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-blue-600">
          Why Choose EduHub
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Discover why thousands of students trust EduHub to achieve
          their learning goals.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.id}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <Icon className="text-4xl text-blue-600" />
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold mb-4">
                {feature.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 leading-7">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Choose;