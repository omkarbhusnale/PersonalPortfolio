/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const SkillsCarousel = ({ technologies, theme }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === technologies.length - 1 ? 0 : current + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  return (
    <div className="py-12 relative">
      {/* Highlighted skill */}
      <div className="flex justify-center mb-12">
        <div
          className={`relative w-40 h-40 flex flex-col items-center justify-center rounded-2xl ${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          } shadow-xl transition-all duration-500`}
        >
          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 animate-gradient-x -z-10 blur-sm opacity-70"></div>

          <img
            src={technologies[activeIndex].icon}
            alt={technologies[activeIndex].name}
            className="h-16 w-16 mb-4 transform hover:scale-110 transition-transform duration-300"
          />
          <span className="font-bold text-lg">
            {technologies[activeIndex].name}
          </span>

          {/* Experience level (optional) */}
          {technologies[activeIndex].level && (
            <div className="mt-2 w-full px-4">
              <div className="h-1 w-full bg-gray-200 rounded-full">
                <div
                  className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                  style={{ width: `${technologies[activeIndex].level}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Skills slider */}
      <div className="max-w-3xl mx-auto overflow-hidden">
        <div className="flex justify-center space-x-4 pb-4 overflow-x-auto scrollbar-hide">
          {technologies.map((tech, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex flex-col items-center p-3 rounded-lg transition-all duration-300 ${
                activeIndex === index
                  ? "scale-110 shadow-md bg-gradient-to-r from-purple-500/10 to-blue-500/10"
                  : theme === "dark"
                  ? "hover:bg-gray-800"
                  : "hover:bg-gray-100"
              }`}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-8 w-8 mb-1 opacity-80"
              />
              <span
                className={`text-xs ${
                  activeIndex === index ? "font-bold" : ""
                }`}
              >
                {tech.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {technologies.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "bg-gradient-to-r from-purple-500 to-blue-500 w-4"
                : theme === "dark"
                ? "bg-gray-600"
                : "bg-gray-300"
            }`}
            aria-label={`Go to skill ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsCarousel;
