import React from "react";
import { testimonials } from "../assets/data";

const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-blue-600">
          What Our Students Say
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Hear from our students who transformed their careers with EduHub.
        </p>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-full">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 hover:scale-110 transition-all duration-300"
              />
            </div>

            {/* Name */}
            <h2 className="text-2xl font-bold mt-5">
              {testimonial.name}
            </h2>

            {/* Profession */}
            <p className="text-gray-500 mt-2">
              {testimonial.profession}
            </p>

            {/* Rating */}
            <span className="mt-4 bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-medium">
              ⭐ {testimonial.rating}
            </span>

            {/* Review */}
            <p className="mt-5 text-gray-600 leading-7">
              "{testimonial.review}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;