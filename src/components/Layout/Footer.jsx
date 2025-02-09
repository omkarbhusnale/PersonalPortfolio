import { Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      {/* Contact Section */}
      <div
        id="contact"
        className={`${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        } shadow-sm py-16`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Get In Touch
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              I&apos;m always open to discussing new projects, opportunities,
              and collaborations.
            </p>
            <div className="mt-8 flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
