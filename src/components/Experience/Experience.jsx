import React from 'react';
import { experiences } from "../../constants";

export default function Experience() {
  return (
    <>
      <section
        id="experience"
        className="py-20 px-4 sm:px-6 md:px-10 lg:px-[15vw] bg-skills-gradient clip-path-custom-2 overflow-hidden"
      >
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">EXPERIENCE</h2>
          <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold px-2 sm:px-12">
            A collection of my work experience and the roles I have taken in various organizations.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0"></div>

          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="relative flex flex-col sm:flex-row items-center justify-center sm:mb-20 mb-14"
            >
              {/* Circle on timeline */}
              <div className="absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 top-0 z-10">
                <div className="bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center shadow-lg">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Content Card */}
              <div
                className={`mt-16 sm:mt-0 sm:max-w-[500px] w-full bg-gray-900 border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] backdrop-blur-md rounded-2xl p-6 sm:p-8 z-20 ${
                  index % 2 === 0
                    ? "sm:ml-auto sm:mr-[calc(50%+2rem)]"
                    : "sm:mr-auto sm:ml-[calc(50%+2rem)]"
                }`}
              >
                {/* Header Info */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 bg-white rounded-md overflow-hidden">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-sm text-gray-300">{experience.company}</h4>
                    <p className="text-sm text-gray-500">{experience.date}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400">{experience.desc}</p>

                {/* Skills List */}
                <div className="mt-4">
                  <h5 className="font-medium text-white mb-1">Skills:</h5>
                  <ul className="flex flex-wrap">
                    {experience.skills.map((skill, index) => (
                      <li
                        key={index}
                        className="bg-[#8245ec] text-gray-300 px-3 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
