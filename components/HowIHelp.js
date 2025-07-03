import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Anxiety & Stress Management",
    description:
      "If you're feeling overwhelmed, anxious, or burned out, we’ll work together to build calming routines, challenge unhelpful thought patterns, and develop healthier coping mechanisms.",
    image: "https://images.pexels.com/photos/6003566/pexels-photo-6003566.jpeg",
    price: "$200 / Individual Session",
    type: "individual",
  },
  {
    title: "Relationship Counseling",
    description:
      "Whether you're navigating conflict or simply seeking deeper connection, I offer a safe space to build better communication, mutual understanding, and emotional intimacy.",
    image: "https://images.pexels.com/photos/4098159/pexels-photo-4098159.jpeg",
    price: "$240 / Couples Session",
    type: "couples",
  },
  {
    title: "Trauma Recovery",
    description:
      "Trauma can affect your sense of safety, identity, and connection. Through trauma-informed care, I help you reclaim your story and build lasting resilience at your pace.",
    image: "https://images.pexels.com/photos/3752834/pexels-photo-3752834.jpeg",
    price: "$200 / Individual Session",
    type: "individual",
  },
];

const HowIHelp = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Flower */}
      <div className="absolute bottom-16   right-16  w-32 h-32">
        <Image
          src={
            "https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2Fassets%2Fflower_green.webp&w=640&q=75"
          }
          width={300}
          height={300}
          className="hidden md:block"
          alt="decorative flower"
        />
      </div>

      <div className="w-[90vw] mx-auto md:mb-44">
        <div className="mb-12 ">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">
            How I Help
          </h2>
        </div>

        <div className="flex justify-around gap-5 items-center flex-col md:flex-row">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-teal-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer ${
                service.type === "individual" && index === services.length - 1
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              <div className="hover:translate-x-2 ease-in-out duration-300">
                <div className="mb-6">
                  <div className="relative w-full h-80 rounded-xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-4 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-semibold text-teal-800">
                    {service.title}
                  </h3>
                  <p className="text-teal-700 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <button className="w-full bg-transparent border-2 border-teal-700 text-teal-700 py-3 px-6 rounded-lg my-3 font-medium hover:bg-teal-700 hover:text-white transition-colors duration-300">
                {service.price}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowIHelp;
