import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-gray-800 rounded-lg overflow-hidden"
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative">
        <img 
          src={project.image || "/api/placeholder/400/250"}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isHovered ? 'opacity-50' : 'opacity-0'
        }`} />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const WorksSection = () => {
  const projects = [
    {
      title: "シフト作成アプリ",
      description: "Python と Excel を使用した自動シフト作成システム",
      technologies: ["Python", "Pandas", "Excel"],
      image: "/api/placeholder/400/250"
    },
    {
      title: "Discord Bot",
      description: "LangChain を活用した AI 搭載 Discord Bot",
      technologies: ["Python", "Discord.py", "LangChain"],
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <section id="works" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;