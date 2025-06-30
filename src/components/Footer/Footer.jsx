import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <footer className="text-white py-10 px-4 sm:px-6 md:px-10 lg:px-[15vw] bg-[#050414] overflow-hidden">
        <div className="text-center max-w-screen-xl mx-auto">

          {/* Name / Logo */}
          <h2 className="text-2xl font-semibold text-purple-500 mb-4">Kheta Ram Kumawat</h2>

          {/* Navigation Links - Responsive */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
            {[
              { name: "About", id: "about" },
              { name: "Skills", id: "skills" },
              { name: "Experience", id: "experience" },
              { name: "Projects", id: "projects" },
              { name: "Education", id: "education" },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => handleScroll(item.id)}
                className="hover:text-purple-500 text-sm sm:text-base"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Social Media Icons - Responsive */}
          <div className="flex justify-center gap-6 sm:gap-8 mb-6">
            {[
              { icon: <FaFacebook />, link: "https://www.facebook.com/kheta.ram.kumawat.465453/" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/khetaram-kumawat-4aa128319/" },
              { icon: <FaInstagram />, link: "https://www.instagram.com/khetaramkumawat01/" },
              { icon: <FaYoutube />, link: "https://www.youtube.com/@CodeWithKhetesh" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-purple-500 transition-transform hover:scale-110"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © 2025 Kheta Ram Kumawat. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
