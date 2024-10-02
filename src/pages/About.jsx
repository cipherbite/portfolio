import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Database,
  Server,
  BarChart,
  TrendingUp,
  Code,
  ChevronDown,
  ChevronUp,
  Link,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const About = () => {
  const [expandedSkill, setExpandedSkill] = useState(null);

  const goals = [
    {
      icon: Database,
      text: "Transition into a data analyst role, leveraging my IT background",
    },
    {
      icon: BarChart,
      text: "Apply data analysis techniques to blockchain and cryptocurrency projects",
    },
    {
      icon: TrendingUp,
      text: "Develop expertise in data visualization and statistical analysis",
    },
    {
      icon: Server,
      text: "Utilize my IT experience to enhance data infrastructure and processes",
    },
  ];

  const skills = [
    {
      category: "IT & System Administration",
      items: [
        "Network configuration and troubleshooting",
        "Server management (Windows, Linux)",
        "Cloud platforms (AWS, Azure)",
        "IT security and best practices",
      ],
      color: "#4C51BF", // Indigo
    },
    {
      category: "Data Analysis (In Progress)",
      items: [
        "SQL for data querying",
        "Python for data manipulation (Pandas, NumPy)",
        "Data visualization (Matplotlib, Seaborn)",
        "Basic statistical analysis",
      ],
      color: "#F6AD55", // Orange
    },
    {
      category: "Blockchain Knowledge",
      items: [
        "Understanding of blockchain fundamentals",
        "Familiarity with cryptocurrency ecosystems",
        "Interest in blockchain data analysis",
        "Basic smart contract concepts",
      ],
      color: "#38A169", // Green
    },
  ];

  const experienceData = [
    { year: 2019, value: 1 },
    { year: 2020, value: 2 },
    { year: 2021, value: 3 },
    { year: 2022, value: 4 },
    { year: 2023, value: 5 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <motion.div
      className="bg-gray-50 py-16 dark:bg-gray-900"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-5xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100"
          variants={itemVariants}
        >
          About Me
        </motion.h1>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12"
          variants={itemVariants}
        >
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
            With 4 years of experience in IT and system administration, I'm passionate about
            transitioning into the field of data analysis. My background in IT infrastructure
            and interest in blockchain technology drive my curiosity to uncover insights from complex datasets.
            I'm excited to apply my technical skills to solve data-driven challenges and contribute to
            innovative projects in the data analysis space.
          </p>
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
              My IT Experience
            </h2>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={experienceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#F6AD55"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
            My Career Goals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                className="flex items-start bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                whileHover={{ scale: 1.05 }}
                variants={itemVariants}
              >
                <goal.icon className="text-primary mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">{goal.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
            Skills & Knowledge
          </h2>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0"
              >
                <button
                  className="w-full text-left focus:outline-none"
                  onClick={() =>
                    setExpandedSkill(expandedSkill === index ? null : index)
                  }
                >
                  <div className="flex justify-between items-center">
                    <h3
                      className="text-xl font-semibold"
                      style={{ color: skill.color }}
                    >
                      {skill.category}
                    </h3>
                    {expandedSkill === index ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </button>
                <motion.ul
                  className="mt-2 space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300"
                  initial="collapsed"
                  animate={expandedSkill === index ? "open" : "collapsed"}
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {skill.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      variants={itemVariants}
                      className="mb-2"
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="mt-12 text-center" variants={itemVariants}>
          <a
            href="/projects"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            View My Projects
            <Link className="ml-2" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;