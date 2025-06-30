import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profileImage from '../../assets/34.jpeg';

export default function About() {
  return (
    <>
      <section
        id="about"
        className="py-16 px-4 sm:px-6 md:px-10 lg:px-[15vw] font-sans overflow-hidden"
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left Side */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
              Hi, I am
            </h1>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Kheta Ram Kumawat
            </h2>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
              <span className="text-white">I am a </span>
              <ReactTypingEffect
                text={[
                  'Full Stack Web Developer',
                  'MERN Stack Developer',
                  'Coder',
                ]}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <span className="text-[#8245ec]">{cursor}</span>
                )}
              />
            </h3>

            <p className="text-base sm:text-lg text-gray-400 mb-8 mt-6 leading-relaxed">
              A passionate and self-motivated full-stack web developer with proficiency
              in MERN stack. Looking for an opportunity to apply my skills in front-end
              and back-end development to build scalable web applications.
            </p>

            <a
              href="https://drive.google.com/file/d/1KkV54oMeHBYdmmlzjV7V_4RdZpslVwtV/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full mt-4 text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
              }}
            >
              DOWNLOAD CV
            </a>
          </div>

          {/* Right Side (No Tilt) */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="w-44 h-44 sm:w-64 sm:h-64 md:w-96 md:h-96 border-4 border-purple-700 rounded-full overflow-hidden drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]">
              <img
                src={profileImage}
                alt="Kheta Ram Kumawat"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
