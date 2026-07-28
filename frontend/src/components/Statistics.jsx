import React from "react";
import { statistics } from "../assets/data";

const Statistics = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-blue-600">
          Our Achievements
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Numbers that speak for themselves. Thousands of students trust
          EduHub to achieve their learning goals.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {statistics.map((statistic) => {
          const Icon = statistic.icon;

          return (
            <div
              key={statistic.id}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                <Icon className="text-4xl text-blue-600" />
              </div>

              {/* Number */}
              <h2 className="mt-6 text-5xl font-bold text-blue-600">
                {statistic.number}
              </h2>

              {/* Title */}
              <p className="mt-2 text-lg text-gray-500">
                {statistic.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Statistics;