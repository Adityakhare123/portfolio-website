import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {portfolioData.skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary to-secondary text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105"
            >
              <p className="font-semibold text-center text-lg">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
