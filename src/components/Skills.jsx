import React from 'react';
import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const Skills = () => {
  const skillsData = [
    { subject: 'Python', A: 90 },
    { subject: 'Java', A: 85 },
    { subject: 'TensorFlow', A: 80 },
    { subject: 'streamlit', A: 75 },
    { subject: 'Docker', A: 70 },
    { subject: 'Langchain', A: 85 }
  ];

  const otherSkills = [
    { category: 'プログラミング言語', skills: ['Python','Java','C','C++','C#', 'JavaScript', 'HTML/CSS','Swift','SQL'] },
    { category: 'フレームワーク', skills: ['TensorFlow','pytorch','streamlit','Ollama','Langchain','React', 'Node.js'] },
    { category: 'ツール・技術', skills: ['Git', 'Docker', 'Unity', 'Linux'] }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-2 text-center mb-16"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* レーダーチャート */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[400px] bg-background-light rounded-lg p-4"
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart outerRadius="70%" data={skillsData}>
                <PolarGrid gridType="polygon" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: 'white' }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: 'white' }} />
                <Radar
                  name="Skills"
                  dataKey="A"
                  stroke="#3B82F6"
                  fill="#3B82F6"
                  fillOpacity={0.5}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* スキル一覧 */}
          <div className="space-y-8">
            {otherSkills.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4 text-primary">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-background-light rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;