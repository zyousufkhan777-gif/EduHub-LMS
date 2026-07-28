import React, { useState } from "react";

const NewsletterCTA = () => {
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(email);

    setEmail("");
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-2xl p-8 md:p-14 text-white">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            📧 Stay Updated With EduHub
          </h2>

          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive the latest courses,
            exclusive discounts, and learning tips directly in your inbox.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={submitHandler}
          className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-3xl mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full flex-1 px-5 py-4 rounded-xl bg-white text-gray-700 outline-none focus:ring-4 focus:ring-blue-300"
          />

          <button
            type="submit"
            className="w-full md:w-auto bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Subscribe
          </button>
        </form>

      </div>
    </section>
  );
};

export default NewsletterCTA;