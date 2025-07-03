"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { BsStars } from "react-icons/bs";

export default function HeroSection() {
  const phrases = [
    "💖 Greater Peace in Your Heart",
    "💫 Greater Purpose in Your Life Direction",
    "Greater Love in Your Relationships",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-b.79c9c9cd.jpg&w=2048&q=75"
        alt="heroimage"
        layout="fill"
        objectFit="cover"
        quality={75}
        className="z-0"
        priority
      />

      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-20 z-10">
        <p className="text-white text-sm sm:text-base mb-2">
          Christian Counseling Services in Richmond & Central Virginia
        </p>

        <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
          Professional Counseling for Christian Healing and Growth
        </h1>

        <p className="text-white text-base sm:text-lg md:text-xl max-w-2xl mb-4">
          Begin your journey today towards spiritual growth, deeper
          relationships, and lasting inner peace.
        </p>

        <p className="text-white font-semibold text-lg sm:text-xl mb-2">
          I want to work with you for..
        </p>

        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-[#b5dbdf] font-semibold text-lg sm:text-xl mb-6"
          >
            {phrases[index]}
          </motion.p>
        </AnimatePresence>

        <div className=" font-medium text-sm  space-x-3 mb-6">
          <span>⭐ </span>
          <span className="text-white">
            • <u>Top Rated</u>{" "}
          </span>
          <span className="text-white">
            • <u>40+ Years Experience</u>
          </span>
          <span className="text-white">
            • <u>Testimonials</u>
          </span>
          <span className="text-white">
            • <u>Media Mentions</u>
          </span>
        </div>

        <button className="bg-white text-[#1e3b8a] flex items-center space-x-4 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 duration-300 cursor-pointer transition-all">
          <BsStars color="#1e3b8a" size={24} />
          <h1>Start Healing Today</h1>
        </button>
      </div>
    </section>
  );
}
