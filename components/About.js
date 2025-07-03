import React from "react";

const About = () => {
  return (
    <div className="bg-[#b5dbdf] min-h-screen px-4 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-5xl mx-auto  py-20">
        <div className="flex justify-center">
          <div className="relative">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg ">
              <div className="relative">
                <img
                  src="https://quilted-libra-91f.notion.site/image/attachment%3Afcdeffc3-7fce-4ca7-a4ea-a0888f182399%3Aimage.png?table=block&id=21f4db5d-d615-8076-8a1c-fd184ea4e5df&spaceId=e434db5d-d615-814a-b090-0003034cd63a&width=2000&userId=&cache=v2"
                  alt="Dr. Serena Blake, PsyD"
                  className="w-full h-[53vh] object-cover"
                />
              </div>

              <div className="absolute bottom-0 left-0 bg-white/50 backdrop-blur-md border-white/20 px-4 py-2 rounded-lg m-2">
                <h3 className="text-lg font-semibold mb-1 text-gray-800">
                  Dr. Serena Blake
                </h3>
                <p className="text-sm text-gray-600 mb-1">PsyD</p>

                <div className="flex flex-wrap items-center space-x-1 text-sm">
                  <svg className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-800 font-medium">
                    500+ Sessions
                  </span>
                  <span className="text-gray-600">| 8 Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6 w-full lg:pl-4 text-center lg:text-left">
          <div>
            <span className="bg-yellow-200 text-teal-800 px-4 py-2 rounded-full text-sm font-medium inline-block">
              About Dr. Serena Blake, PsyD — Clinical Psychologist in Los
              Angeles, CA
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-teal-800 leading-tight">
            Hi, I'm Dr. Serena Blake
          </h1>

          <div className="space-y-6 text-teal-700 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto lg:mx-0">
            <p>
              I’m a licensed clinical psychologist (
              <span className="font-bold text-teal-800">PsyD</span>) based in
              Los Angeles, CA. With{" "}
              <span className="font-bold text-teal-800">
                8 years of experience
              </span>{" "}
              and over{" "}
              <span className="font-bold text-teal-800">
                500 therapy sessions
              </span>{" "}
              completed, I specialize in helping individuals navigate anxiety,
              heal from trauma, and build stronger relationships.
            </p>

            <p>
              My approach blends{" "}
              <span className="font-bold text-teal-800">
                evidence-based therapies
              </span>{" "}
              like cognitive-behavioral therapy (CBT) and mindfulness with warm,
              personalized care. I work to create a safe space where you can
              explore your challenges and take empowered steps forward.
            </p>

            <p>
              Whether you prefer in-person sessions at my{" "}
              <span className="font-bold text-teal-800">
                Maplewood Drive office
              </span>{" "}
              or virtual therapy via Zoom, I’m committed to supporting your
              emotional growth and mental wellness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
