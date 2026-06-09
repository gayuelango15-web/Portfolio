import React, { useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-scroll";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { darkMode, toggleTheme } = useTheme();
  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
    "Testimonials"
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-slate-700">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex justify-between items-center h-20">

          <h1 className="text-2xl md:text-4xl font-extrabold">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 bg-clip-text text-transparent">
              Gayathri
            </span>
          </h1>

          <ul className="hidden md:flex items-center gap-10 font-medium text-gray-700 dark:text-gray-200">
            {links.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-600 transition text-gray-700"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">

            <button
              onClick={toggleTheme}
              className="w-12 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shadow"
            >
              {darkMode ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-slate-700" />
              )}
            </button>

            <a
              href="/Gayathri_Resume.pdf"
              download
              className="hidden md:block bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 text-white px-4 py-2 rounded-lg text-center">
              Resume
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >

            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 ">

          <ul className="flex flex-col p-6 gap-4">

            {links.map((item) => (
              <li key={item}>
                <Link
                  onClick={() => setMenuOpen(false)}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="text-blue-600"
                  className="cursor-pointer hover:text-blue-600 transition"
                >
                  {item}
                </Link>
              </li>
            ))}

          </ul>

          <div className="px-6 pb-6">
            <a 
              href="/Gayathri_Resume.pdf"
              download
              className="block w-full text-center bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 text-white py-3 rounded-lg"
            >
              Download Resume
            </a>
          </div>

        </div>
      )}
    </nav>
  );

}

export default Navbar;