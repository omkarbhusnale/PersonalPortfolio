import { Link, useLocation } from "react-router-dom";
import { Terminal, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/projects", text: "Projects" },
    { to: "/contact", text: "Contact" },
  ];

  const isActive = (path) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`${
        theme === "dark" ? "bg-gray-950" : "bg-white"
      } shadow-sm sticky top-0 z-50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex-shrink-0">
            <Terminal
              className={`h-8 w-8 ${
                theme === "dark" ? "text-blue-400" : "text-blue-600"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-1.5 text-center inline-block cursor-pointer uppercase text-sm
                            transition duration-500 ease-in-out rounded-md focus-visible:outline-none 
                            focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 active:scale-95
                            ${
                              isActive(link.to)
                                ? theme === "dark"
                                  ? "bg-gray-800 text-blue-400"
                                  : "bg-gray-100 text-blue-600"
                                : "hover:bg-gray-100 hover:text-white dark:hover:bg-gray-700"
                            }`}
                >
                  {link.text}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                className="hover:bg-gray-100 hover:text-white dark:hover:bg-gray-700 
                          p-2 text-center inline-block cursor-pointer uppercase 
                          transition duration-500 ease-in-out rounded-full focus-visible:outline-none 
                          focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 active:scale-95"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="hover:bg-gray-100 hover:text-white dark:hover:bg-gray-700 
                        p-2 text-center inline-block cursor-pointer uppercase 
                        transition duration-500 ease-in-out rounded-full focus-visible:outline-none 
                        focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 active:scale-95"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 
                        dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div
            className={`px-2 pt-2 pb-3 space-y-1 ${
              theme === "dark" ? "bg-gray-950" : "bg-white"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 font-medium uppercase text-sm
                          transition duration-500 ease-in-out rounded-md focus-visible:outline-none 
                          focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2
                          ${
                            isActive(link.to)
                              ? theme === "dark"
                                ? "bg-gray-800 text-blue-400"
                                : "bg-gray-100 text-blue-600"
                              : "hover:bg-gray-100 hover:text-white dark:hover:bg-gray-700"
                          }`}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
