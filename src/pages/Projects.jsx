import { useState, useEffect } from "react";
import { Github, ExternalLink, Search } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { projects } from "../data/config";

const Projects = () => {
  const { theme } = useTheme();
  const [selectedTech, setSelectedTech] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Get unique technologies from all projects
  const allTechnologies = [
    "All",
    ...new Set(projects.flatMap((project) => project.tech)),
  ];

  useEffect(() => {
    const filtered = projects.filter((project) => {
      const matchesTech =
        selectedTech === "All" || project.tech.includes(selectedTech);
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTech && matchesSearch;
    });
    setFilteredProjects(filtered);
  }, [selectedTech, searchQuery]);

  return (
    <div className="py-16 space-y-8 max-w-7xl mx-auto px-4">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1
          className={`text-4xl font-bold ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          My Projects
        </h1>
        <p
          className={`max-w-2xl mx-auto ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          A collection of my work, side projects, and open source contributions.
        </p>
      </div>

      {/* Filters */}
      <div className="space-y-4">
        {/* Search */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects..."
            className={`w-full pl-10 pr-4 py-2 rounded-lg ${
              theme === "dark"
                ? "bg-gray-800 text-white border-gray-700"
                : "bg-white text-gray-900 border-gray-200"
            } border focus:ring-2 focus:ring-blue-500 focus:outline-none`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Technology Filter */}
        <div className="flex flex-wrap justify-center gap-2">
          {allTechnologies.map((tech, i) => (
            <button
              key={i}
              onClick={() => setSelectedTech(tech)}
              className={`px-4 py-2 rounded-full transition-all transform hover:scale-105 ${
                selectedTech === tech
                  ? "bg-blue-600 text-white"
                  : theme === "dark"
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden transform transition-all hover:-translate-y-2 ${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            } shadow-lg`}
            style={{
              animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`,
            }}
          >
            {/* Project Image */}
            <img
              src={`/api/placeholder/400/200`}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Project Info */}
            <div className="p-6 space-y-4">
              <h3
                className={`text-xl font-bold ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {project.title}
              </h3>
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex space-x-4 pt-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-700"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-700"
                >
                  <Github className="h-4 w-4 mr-1" />
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p
            className={`text-xl ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            No projects found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default Projects;
