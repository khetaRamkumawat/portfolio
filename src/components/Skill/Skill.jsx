import React from 'react';
import { SkillsInfo } from "../../constants";

export default function Skill() {
  return (
    <>
      <section
        id="skills"
        className="py-20 px-4 sm:px-6 md:px-10 lg:px-[15vw] bg-skills-gradient clip-path-custom overflow-hidden"
      >
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
          <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
          <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold px-2 sm:px-12">
            A collection of my technical skills and expertise honed through various projects and experiences.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {SkillsInfo.map((category) => (
            <div
              key={category.title}
              className="bg-gray-900 backdrop-blur-md p-6 rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-6 text-center">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-center space-x-2 border-2 border-gray-700 rounded-3xl px-3 py-2 text-center"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                    <span className="text-xs sm:text-sm text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
