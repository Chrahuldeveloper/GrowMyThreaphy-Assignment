"use client";

import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredTime: "",
    preferredMethod: "",
    robotCheck: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const closePopup = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xl mx-auto relative">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Simply fill out the brief fields below and Dr. Serena Blake will be
            in touch with you soon, usually within one business day. This form
            is safe, private, and completely free.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="you@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="(555) 234-5678"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="How can I help you?"
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-700 resize-none"
            />
          </div>

          <div className="my-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Contact Time
            </label>
            <input
              type="text"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleInputChange}
              placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-700"
            />
            <p className="text-xs text-gray-500 mt-1">
              Let us know when you're typically available for a call or
              consultation
            </p>
          </div>

          <div className="flex items-center space-x-5">
            <input
              type="checkbox"
              name="robotCheck"
              checked={formData.robotCheck}
              onChange={handleInputChange}
              className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
            />
            <label className="block text-sm font-medium text-gray-700">
              Let us know how you'd like to be contacted — if you're okay with
              us reaching out.
            </label>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-teal-700 text-white py-3 px-4 rounded-md font-medium hover:bg-teal-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>

        {isSubmitted && (
          <div className="fixed inset-0 z-50 flex items-center justify-center h-full  bg-opacity-60 backdrop-blur-md">
            <div className="bg-white rounded-lg shadow-lg px-6 py-10 max-w-xl w-full text-center space-y-3">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                Thank You!
              </h3>
              <p className="text-sm text-gray-600 mb-4 md:text-lg">
                Your message has been sent successfully. We’ll get back to you
                soon.
              </p>
              <button
                onClick={closePopup}
                className="bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-teal-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
