"use client";

import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

const Faq = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "No, but a superbill is provided for self-submission.",
    },
    {
      question: "Are online sessions available?",
      answer: "Yes—all virtual sessions via Zoom.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "24-hour notice required.",
    },
  ];

  return (
    <div className="bg-[#b5dbdf] min-h-screen py-16 px-4 ">
      <div className="max-w-6xl mx-auto pt-28">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-800 mb-10 text-center lg:text-left">
          Frequently Asked Questions
        </h1>

        <div className="space-y-7">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-teal-700">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 flex justify-between items-center text-left"
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-teal-800 pr-4 cursor-pointer">
                  {faq.question}
                </h3>
                <FaAngleDown
                  className={`w-5 cursor-pointer h-5 sm:w-6 sm:h-6 text-teal-800 transition-transform duration-300 flex-shrink-0 ${
                    openFAQ === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFAQ === index ? "max-h-40 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-teal-700 text-base sm:text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
