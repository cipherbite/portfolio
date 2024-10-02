import React from "react";
import { Database, TrendingUp, BarChart2, BrainCircuit } from "lucide-react";

const SkillCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <Icon size={32} className="text-primary mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Skills = () => {
  const skills = [
    {
      icon: Database,
      title: "Data Management",
      description:
        "Proficient in SQL, NoSQL databases, and big data technologies.",
    },
    {
      icon: TrendingUp,
      title: "Statistical Analysis",
      description:
        "Expert in descriptive and inferential statistics, hypothesis testing.",
    },
    {
      icon: BarChart2,
      title: "Data Visualization",
      description:
        "Skilled in creating insightful visualizations using tools like Tableau and D3.js.",
    },
    {
      icon: BrainCircuit,
      title: "Machine Learning",
      description:
        "Experienced in developing and deploying ML models for predictive analytics.",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
