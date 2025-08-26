import React from "react";
import { Github, Linkedin, Download, ArrowDown } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-[#121212] via-[#0a0a0a] to-black pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <img
            src="../../headshot.png"
            alt="Jordan Stout"
            className="w-40 h-auto rounded-full mx-auto mb-6 border-4 border-blue-400 shadow-2xl"
          />

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Jordan Stout
          </h1>
          <p className="text-xl md:text-2xl text-blue-400 font-medium mb-6">
            Software & ML Engineer
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Focused on advancing AI systems and computational methods with
            real-world impact, experienced in platforms across defense,
            research, and enterprise.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="../../public/Jordan Stout Resume.pdf" download>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl">
              <Download className="h-5 w-5" />
              <span>Download Resume</span>
            </button>
          </a>
        </div>

        <div className="flex justify-center space-x-6 mb-16">
          <a
            href="https://github.com/obelisk2u"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/jordan-s-088825ab/"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://discord.gg/users/obelisk2u"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <FaDiscord className="h-6 w-6" />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-blue-400 transition-colors animate-bounce"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
