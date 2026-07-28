import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Who can become an instructor?",
    answer:
      "Anyone with expertise in a subject and a passion for teaching can apply to become an instructor.",
  },
  {
    question: "Do I need teaching experience?",
    answer:
      "No. Teaching experience is helpful, but creating high-quality and engaging courses is what matters most.",
  },
  {
    question: "How do I get paid?",
    answer:
      "You earn money whenever students enroll in your courses. Payments are processed according to EduHub's payment schedule.",
  },
  {
    question: "Can I update my courses later?",
    answer:
      "Yes. You can edit, improve, and update your courses whenever you want.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-blue-600">
          Frequently Asked Questions
        </h2>

        <p className="mt-4 text-gray-600">
          Find answers to the most common questions about becoming an EduHub
          instructor.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {faq.question}
              </h3>

              {activeIndex === index ? (
                <FaChevronUp className="text-blue-600" />
              ) : (
                <FaChevronDown className="text-blue-600" />
              )}
            </button>

            {activeIndex === index && (
              <p className="mt-4 text-gray-600 leading-7">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;