import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BarChart, Database, Server, Play, Pause } from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [data, setData] = useState([]);

  const generateData = useCallback(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      name: i,
      value: Math.floor(Math.random() * 100),
    }));
  }, []);

  useEffect(() => {
    setData(generateData());
    const interval = setInterval(() => {
      if (isPlaying) {
        setData(generateData());
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isPlaying, generateData]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const IconWrapper = ({ children }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="p-4 bg-white dark:bg-gray-700 rounded-full shadow-lg"
    >
      {children}
    </motion.div>
  );

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center" variants={itemVariants}>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-gray-800 dark:text-gray-100"
            variants={itemVariants}
          >
            IT to Data Analysis Journey
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-4xl text-gray-600 dark:text-gray-300 mb-8"
            variants={itemVariants}
          >
            Bridging IT Experience with Data-Driven Insights
          </motion.h2>
          <motion.div
            className="flex justify-center space-x-8 mb-12"
            variants={containerVariants}
          >
            <IconWrapper>
              <Server size={64} className="text-primary" />
            </IconWrapper>
            <IconWrapper>
              <Database size={64} className="text-secondary" />
            </IconWrapper>
            <IconWrapper>
              <BarChart size={64} className="text-accent" />
            </IconWrapper>
          </motion.div>
          <motion.div
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            <p className="mb-4">
              From 4 years in IT to the dynamic world of data analysis. It's not just a career change.
            </p>
            <p className="mb-4">
              My passion? The fascinating intersection of blockchain technology and data-driven decision making. It's a frontier where trust meets data, and I'm excited to be at the forefront of this revolution.
            </p>
            
           
          </motion.div>
          <motion.div className="mb-16" variants={itemVariants}>
            <Link
              to="/projects"
              className="btn btn-primary text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Explore My Projects
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 mb-16"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Data Trend Simulation
          </h3>
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors duration-200"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              <span>{isPlaying ? "Pause" : "Play"}</span>
            </button>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#4C51BF"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div className="text-center" variants={itemVariants}>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Ready to see how IT expertise enhances data analysis?
          </p>
          <Link
            to="/contact"
            className="inline-block mt-4 text-primary hover:text-primary-dark transition-colors duration-200"
          >
            Let's connect and explore the possibilities
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;