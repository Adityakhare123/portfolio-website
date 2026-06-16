import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          {portfolioData.experience.map((exp, index) => (
            <div
              key={exp.id}
              className="relative pl-8 pb-8 border-l-2 border-primary"
            >
              <div className="absolute -left-3.5 top-0 w-6 h-6 bg-primary rounded-full border-4 border-white"></div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-primary">{exp.position}</h3>
                <p className="text-lg text-gray-600 mb-2">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-4">{exp.duration}</p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
