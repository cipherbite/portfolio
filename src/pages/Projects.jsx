import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import {
  TrendingUp,
  CreditCard,
  ShoppingCart,
  ExternalLink,
  Github,
  Book,
  Instagram,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ProjectCard = ({ project, isSelected, onSelect }) => {
  const handleClick = () => {
    if (project.status === "Completed" && project.liveLink) {
      window.open(project.liveLink, "_blank", "noopener,noreferrer");
    } else {
      onSelect(project.id);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 cursor-pointer ${
        isSelected ? "col-span-2 row-span-2" : ""
      }`}
      onClick={handleClick}
    >
      <div className="flex items-center mb-4">
        <project.icon
          className="text-primary dark:text-primary-light mr-3"
          size={24}
        />
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          {project.title}
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {project.description}
      </p>
      {project.status === "Completed" && (
        <div className="flex items-center mt-4 text-sm text-primary dark:text-primary-light">
          <ExternalLink size={16} className="mr-2" />
          Visit Live Project
        </div>
      )}
      {project.status === "In Progress" && (
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Status: In Progress
        </p>
      )}
    </motion.div>
  );
};

const ProjectVisualization = ({ project }) => (
  <Canvas>
    <OrbitControls enableZoom={false} />
    <Stars />
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={project.color} />
    </mesh>
  </Canvas>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 4;

  const projects = [
    {
      id: 1,
      title: "Data Analysis Basics",
      description: "Comprehensive platform for learning data analysis fundamentals.",
      icon: Book,
      color: "#2196F3",
      features: [
        "Interactive tutorials on data analysis",
        "Practical exercises with real-world datasets",
        "Community forums for collaboration and support",
      ],
      liveLink: "https://data-analysis-basics.netlify.app/",
      githubLink: "#",
      status: "Completed",
    },
    {
      id: 2,
      title: "Bitcoin Whale Tracker",
      description: "Real-time tracking system for large Bitcoin transactions.",
      icon: CreditCard,
      color: "#F7931A",
      features: [
        "Real-time monitoring of large BTC transactions",
        "Data visualization of whale activity trends",
        "Alerting system for significant market movements",
      ],
      liveLink: "#",
      githubLink: "#",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Crypto Price Forecasting",
      description: "ML model for predicting cryptocurrency prices.",
      icon: TrendingUp,
      color: "#627EEA",
      features: [
        "Time series analysis of crypto prices",
        "Integration of sentiment data from social media",
        "Backtesting and model performance evaluation",
      ],
      liveLink: "#",
      githubLink: "#",
      status: "In Progress",
    },
    {
      id: 4,
      title: "E-commerce Analysis Dashboard",
      description: "Comprehensive dashboard for e-commerce data analysis.",
      icon: ShoppingCart,
      color: "#FF9900",
      features: [
        "Sales funnel analysis and optimization",
        "Customer segmentation and lifetime value calculation",
        "Inventory turnover and restocking recommendations",
      ],
      liveLink: "#",
      githubLink: "#",
      status: "In Progress",
    },
    {
      id: 5,
      title: "Instagram Trend Analyzer",
      description: "AI-powered tool for analyzing Instagram trends.",
      icon: Instagram,
      color: "#E1306C",
      features: [
        "Real-time hashtag trend analysis",
        "Influencer engagement predictions",
        "Content performance optimization suggestions",
      ],
      liveLink: "#",
      githubLink: "#",
      status: "In Progress",
    },
  ];

  const pageCount = Math.ceil(projects.length / projectsPerPage);

  const visibleProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200"
        >
          Innovative Projects
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence>
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isSelected={selectedProject === project.id}
                onSelect={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </div>
        <div className="flex justify-center space-x-4 mb-12">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            className="btn btn-secondary"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-gray-700 dark:text-gray-300">
            Page {currentPage + 1} of {pageCount}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(pageCount - 1, prev + 1))
            }
            disabled={currentPage === pageCount - 1}
            className="btn btn-secondary"
          >
            <ChevronRight size={18} />
          </button>
        </div>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                {projects.find((p) => p.id === selectedProject).title}
              </h2>
              <div className="h-64 mb-4">
                <ProjectVisualization
                  project={projects.find((p) => p.id === selectedProject)}
                />
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {projects.find((p) => p.id === selectedProject).description}
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
                {projects.find((p) => p.id === selectedProject).features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Status: {projects.find((p) => p.id === selectedProject).status}
              </p>
              <button
                className="btn btn-primary"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;