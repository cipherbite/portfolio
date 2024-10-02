import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { Sun, Moon, BarChart, PieChart, TrendingUp, Menu, X } from "lucide-react";

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: BarChart },
    { path: "/about", label: "About", icon: PieChart },
    { path: "/projects", label: "Projects", icon: TrendingUp },
    { path: "/contact", label: "Contact", icon: TrendingUp },
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary dark:bg-primary-light rounded-full flex items-center justify-center">
              <BarChart className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-primary dark:text-primary-light">
              DataViz 2025
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-200 ${
                  location.pathname === item.path ? "text-primary dark:text-primary-light" : ""
                }`}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 transition-colors duration-200"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-200 ${
                  location.pathname === item.path ? "text-primary dark:text-primary-light" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className="mt-2 p-2 rounded-full bg-gray-200 dark:bg-gray-600 transition-colors duration-200"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;