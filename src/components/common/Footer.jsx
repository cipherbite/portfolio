import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, url: "https://github.com/cipherbite", label: "GitHub" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/david-dylag", label: "LinkedIn" },
    { icon: Mail, url: "mailto:david.dylag.pro@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Data Analyst Portfolio
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-center md:text-left">
              Transforming complex data into actionable insights. Specializing
              in advanced analytics, machine learning, and data visualization.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Connect with Me
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
                  aria-label={link.label}
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Latest Insights
            </h3>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-2">AI in Data Analysis</li>
              <li className="mb-2">Big Data Trends 2025</li>
              <li>Quantum Computing Impact</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} David Dylag - Advanced Data Analysis Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;