import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../../context/ThemeContext";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Navbar />
      <main className="mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
