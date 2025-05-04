import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const HeroSection = ({ theme, Profile }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = [
    "Software Engineer",
    "Web Designer",
    "Full Stack Developer",
    "Mobile App Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-center space-y-8 mt-0 md:mt-22">
      <div className="space-y-8 text-center">
        <div
          className="
            flex flex-col md:flex-row items-center justify-center
            md:justify-between max-w-4xl mx-auto"
        >
          <div className="space-y-4 md:max-w-2xl">
            <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl text-left">
              <span
                className={`block ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Hello, I&apos;m Omkar Bhusnale
              </span>
              <span className="block mt-2 pb-2 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-transparent bg-clip-text">
                {titles[titleIndex]}
              </span>
            </h1>
            <p
              className={`text-xl ${
                theme === "dark" ? "text-gray-300" : "text-gray-500"
              } text-left`}
            >
              I build exceptional and accessible digital experiences for the web
              and Desktop.
            </p>
          </div>

          <div className="mt-6 md:mt-0 md:ml-8">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500  transform scale-121"></div>
              <div
                className={`
                    absolute inset-0 rounded-full blur-xs
                    ${theme === "dark" ? "bg-black" : "bg-white"}
                 transform scale-120`}
              ></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 blur-xs transform scale-105"></div>

              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-transparent">
                <img
                  src={Profile}
                  alt="Omkar Bhusnale"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4 mt-32">
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 rounded-md bg-blue-600 
                    text-white hover:bg-blue-700 transition-colors"
        >
          <Mail className="mr-2 h-5 w-5" />
          Contact Me
        </Link>
        <a
          href="/Resume.pdf"
          download="OmkarBhunale_FullStack_Dev.pdf"
          className={`inline-flex items-center px-6 py-3 rounded-md border  ${
            theme === "dark"
              ? "border-gray-700 hover:border-gray-600"
              : "border-gray-300 hover:border-gray-400"
          } transition-colors`}
        >
          <Download className="mr-2 h-5 w-5" />
          Resume
        </a>
      </div>

      <div className="flex justify-center space-x-6 mt-10">
        <a
          href="https://github.com/omkarbhusnale"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-500 transition-colors"
        >
          <Github className="h-6 w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/omkarbhusnale/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-500 transition-colors"
        >
          <Linkedin className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
