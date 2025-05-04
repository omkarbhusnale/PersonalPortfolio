import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${theme === "dark" ? "bg-gray-900" : "bg-gray-200"} py-12`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3
              className={`text-xl font-bold ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Omkar Bhusnale
            </h3>
            <p
              className={`${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              } max-w-xs`}
            >
              A passionate full-stack developer focused on building beautiful
              interfaces & experiences
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3
              className={`text-xl font-bold ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2">
              <a
                href="/"
                className={`${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors duration-200`}
              >
                Home
              </a>
              <a
                href="/about"
                className={`${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors duration-200`}
              >
                About
              </a>
              <a
                href="/projects"
                className={`${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors duration-200`}
              >
                Projects
              </a>
              <a
                href="/contact"
                className={`${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors duration-200`}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3
              className={`text-xl font-bold ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/omkarbhusnale"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transform hover:scale-110 transition-all duration-200`}
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/omkarbhusnale/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transform hover:scale-110 transition-all duration-200`}
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:omkarbhusnale@gmail.com"
                className={`${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transform hover:scale-110 transition-all duration-200`}
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p
            className={`text-center ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Made with{" "}
            <Heart className="inline-block h-4 w-4 text-red-500 mx-1" /> by
            Omkar Bhusnale © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
