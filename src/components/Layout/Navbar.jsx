import { Link } from "react-router-dom";
import { Terminal, Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className={`${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-sm`}
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

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link
                to="/"
                className="hover:bg-gray-100 hover:text-white dark:hover:bg-gray-700 
                            px-4 py-1.5 text-center inline-block cursor-pointer uppercase text-sm
                            transition duration-500 ease-in-out rounded-md focus-visible:outline-none 
                            focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 active:scale-95"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:bg-gray-100 hover:text-white dark:hover:bg-gray-700 
                            px-4 py-1.5 text-center inline-block cursor-pointer uppercase text-sm
                            transition duration-500 ease-in-out rounded-md focus-visible:outline-none 
                            focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 active:scale-95"
              >
                About
              </Link>
              <Link
                to="/projects"
                className="hover:bg-gray-100 hover:text-white dark:hover:bg-gray-700 
                            px-4 py-1.5 text-center inline-block cursor-pointer uppercase text-sm
                            transition duration-500 ease-in-out rounded-md focus-visible:outline-none 
                            focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 active:scale-95"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="hover:bg-gray-100 hover:text-white dark:hover:bg-gray-700 
                            px-4 py-1.5 text-center inline-block cursor-pointer uppercase text-sm
                            transition duration-500 ease-in-out rounded-md focus-visible:outline-none 
                            focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 active:scale-95"
              >
                Contact
              </Link>

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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
