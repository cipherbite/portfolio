import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Activity,
} from "lucide-react";

const Contact = () => {
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
      className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-5xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200"
          variants={itemVariants}
        >
          Let's Collaborate on Data
        </motion.h1>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Connect with Me
          </h2>
          <div className="space-y-6">
            <div className="flex items-center">
              <Mail className="text-primary mr-4 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  david.dylag.pro@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="text-primary mr-4 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                  Location
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Krakow, Poland
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-4">
              Follow Me
            </h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/cipherbite"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/david-dylag"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;