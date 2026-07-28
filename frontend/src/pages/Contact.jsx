import axios from "axios";
import React, { useState, useContext } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const { backendURL, token } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        backendURL + "/api/contact/send",
        {
          name,
          email,
          subject,
          message,
        },
        {
          headers: {
            token,
          },
        },
      );

      if (data.success) {
        toast.success(data.message);

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Contact <span className="text-blue-600">EduHub</span>
        </h1>

        <p className="text-gray-600 mt-4">
          Have questions about courses or learning? Our team is ready to help
          you.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <div className="w-14 h-14 mx-auto flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-xl">
            <FaEnvelope />
          </div>

          <h3 className="font-bold text-xl mt-4">Email</h3>

          <p className="text-gray-500 mt-2">support@eduhub.com</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <div className="w-14 h-14 mx-auto flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-xl">
            <FaPhoneAlt />
          </div>

          <h3 className="font-bold text-xl mt-4">Phone</h3>

          <p className="text-gray-500 mt-2">+55 11 99999-9999</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <div className="w-14 h-14 mx-auto flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-xl">
            <FaMapMarkerAlt />
          </div>

          <h3 className="font-bold text-xl mt-4">Location</h3>

          <p className="text-gray-500 mt-2">São Paulo, Brazil</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12 bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Send Us A Message
        </h2>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your Name"
            required
            className="border rounded-xl p-4"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your Email"
            required
            className="border rounded-xl p-4"
          />

          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            type="text"
            placeholder="Subject"
            required
            className="border rounded-xl p-4 md:col-span-2"
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            placeholder="Your Message"
            required
            className="border rounded-xl p-4 md:col-span-2"
          />

          <button
            type="submit"
            className="md:col-span-2 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
