import { Link } from "react-router-dom";
import { Github, ArrowRight, ExternalLink } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import Profile from "../assets/profile.jpg";
import { projects, technologies } from "../data/config";
import HeroSection from "../components/Hero";

const Home = () => {
  const { theme } = useTheme();
  return (
    <div className="space-y-32 max-h-full py-14 mt-2 sm:mt-12">
      {/* Hero Section */}
      <HeroSection theme={theme} Profile={Profile} />

      {/* Featured Projects Preview */}
      <section className="container mx-auto py-16">
        <div className="flex justify-between items-center mb-10">
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold relative z-10">
              Featured Projects
            </h2>
          </div>

          <Link
            to="/projects"
            className="group inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:shadow-lg transition-all duration-300"
          >
            View All
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured Project Cards - Show only 2 Latest Projects on homepage */}
          {projects.slice(0, 2).map((project, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden group transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <div className={`relative h-60 overflow-hidden`}>
                {/* Project image or placeholder with gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 group-hover:opacity-70 transition-opacity duration-300"></div>
                <img
                  src={project.bgImage || "/projects/project-placeholder.jpg"}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 space-x-2">
                  <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-blue-600/90 text-white rounded-full backdrop-blur-sm">
                    {project.tech[0]}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-purple-600/90 text-white rounded-full backdrop-blur-sm">
                    {project.tech[1]}
                  </span>
                </div>
              </div>

              <div
                className={`p-6 ${
                  theme === "dark"
                    ? "bg-gray-800/90 backdrop-blur-md"
                    : "bg-white"
                } shadow-lg`}
              >
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p
                  className={`mb-4 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description.length > 120
                    ? `${project.description.substring(0, 120)}...`
                    : project.description}
                </p>

                <div className="flex space-x-4 mt-16">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium transition-transform hover:translate-y-[-2px]"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center px-4 py-2 rounded-lg ${
                      theme === "dark"
                        ? "bg-gray-700 text-white hover:bg-gray-600"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    } transition-transform hover:translate-y-[-2px]`}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="container mx-auto py-16 relative">
        {/* Background accent */}
        <div className="absolute -z-10 top-20 right-10 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -z-10 bottom-10 left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>

        <div className="relative mb-12">
          <h2 className="text-3xl md:text-4xl font-bold relative z-10">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {technologies.map((technology, i) => (
            <div
              key={i}
              className={`p-4 rounded-xl ${
                theme === "dark"
                  ? "bg-gray-800/80 hover:bg-gray-700/80 text-white"
                  : "bg-white hover:bg-gray-50 text-gray-800"
              } shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group`}
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-colors duration-300">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-8 w-8"
                  />
                </div>
                <span className="font-medium">{technology.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/about"
            className="group inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:shadow-lg transition-all duration-300"
          >
            View Full Skill Set
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
