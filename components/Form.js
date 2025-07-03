"use client";

import Image from "next/image";
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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Simply fill out the brief fields below and Dr. Norman will be in
            touch with you soon, usually within one business day. This form is
            safe, private, and completely free.
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Contact Method
            </label>
            <select
              name="preferredMethod"
              value={formData.preferredMethod}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-700 bg-white"
            >
              <option value="">Select preferred method</option>
              <option value="phone">Phone Call</option>
              <option value="email">Email</option>
              <option value="text">Text Message</option>
              <option value="either">Either Phone or Email</option>
            </select>
          </div>

          <div className="flex items-center space-x-3 py-2">
            <input
              type="checkbox"
              name="robotCheck"
              checked={formData.robotCheck}
              onChange={handleInputChange}
              className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
            />
            <div className="flex-1">
              <label className="text-sm text-gray-700">I'm not a robot</label>
              <div className="text-xs text-gray-500 mt-1"></div>
            </div>
            <div className="w-12 h-12 bg-gray-100  rounded flex items-center justify-center">
              <img
                src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                width={50}
                height={50}
                alt="logo"
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-teal-700 text-white py-3 px-4 rounded-md font-medium hover:bg-teal-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Submit
          </button>

          <div className="text-xs text-gray-500 text-center mt-4 leading-relaxed flex items-center space-x-5">
            <input type="checkbox" />
            <p>
              By clicking submit you consent to receive texts and emails from
              Dr. Marcia T. Norman
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

// absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20 px-4 py-3
