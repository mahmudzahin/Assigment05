import React from "react";
import heroImage from "../../assets/banner-stack.png";

const MainSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-80px)] flex items-center px-6 py-16"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-black">
            Build Your Ideal{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FA502E 0%, #9B64D0 50%, #9631CE 100%)",
              }}
            >
              Development Stack
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-500 max-w-xl leading-relaxed">
            Explore frontend, backend, database and tooling options, compare
            them side by side, and put together the stack that fits your <br />next
            project.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-[#FA502E] hover:bg-[#e74325] text-white rounded-full font-semibold transition"
            >
              Explore Technologies 
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-gray-700 hover:border-[#9631CE] text-gray-700 hover:text-black rounded-full transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">

            {/* Gradient Glow */}
            <div
              className="absolute inset-0 blur-3xl rounded-full opacity-30"
            //   style={{
            //     background:
            //       "linear-gradient(90deg, #FA502E, #9B64D0, #9631CE)",
            //   }}
            />

            <img
              src={heroImage}
              alt="Development stack illustration"
              className="relative w-full max-w-lg object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default MainSection;