import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowRight,
  Code2,
  ExternalLink,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import Profile from "../assets/profile.jpg";

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className="space-y-32 max-h-full py-12 mt-12">
      <section className="text-center space-y-8">
        <div className="space-y-8 text-center">
          <div
            className="flex flex-col md:flex-row items-center justify-center 
                          md:justify-between max-w-4xl mx-auto"
          >
            <div className="space-y-4 md:max-w-2xl">
              <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl text-left">
                <span
                  className={`block ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Hi, I&apos;m Omkar Bhusnale
                </span>
                <span className="block text-blue-600 mt-2">
                  Full Stack Developer
                </span>
              </h1>
              <p
                className={`text-xl ${
                  theme === "dark" ? "text-gray-300" : "text-gray-500"
                } text-left`}
              >
                I build exceptional and accessible digital experiences for the
                web and Desktop.
              </p>
            </div>

            <div className="mt-6 md:mt-0 md:ml-8">
              <div className="relative">
                <div
                  className="w-50 h-60 rounded-full overflow-hidden border-4 
                          border-blue-600 shadow-lg transform transition-transform hover:scale-105"
                >
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
            className={`inline-flex items-center px-6 py-3 rounded-md border ${
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

      {/* Featured Projects Preview */}
      <section className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Link
            to="/projects"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            View All
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {/* Featured Project Cards - Show only 2 on homepage */}
          {[1, 2].map((index) => (
            <div
              key={index}
              className={`rounded-lg p-6 ${
                theme === "dark"
                  ? "bg-gray-800 hover:bg-gray-750"
                  : "bg-white hover:bg-gray-50"
              } shadow-lg transition-colors`}
            >
              <h3 className="text-xl font-semibold mb-2">Project {index}</h3>
              <p className="mb-4">
                Brief project description showcasing key features and
                technologies used.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                  React
                </span>
                <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                  Node.js
                </span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  View Demo
                </a>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 flex items-center"
                >
                  <Github className="h-4 w-4 mr-1" />
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Skills Overview */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Skills & Technologies</h2>
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {["React", "Node.js", "TypeScript", "AWS"].map((skill) => (
            <div
              key={skill}
              className={`p-4 rounded-lg ${
                theme === "dark"
                  ? "bg-gray-800 hover:bg-gray-750"
                  : "bg-white hover:bg-gray-50"
              } shadow flex items-center space-x-8`}
            >
              <Code2 className="h-5 w-5 text-blue-600 mx-4" />
              {skill}
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/about"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            View Full Skill Set
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
