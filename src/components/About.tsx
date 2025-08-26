import React from "react";
import { User, MapPin, Calendar, SchoolIcon } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about my background, experience, and what drives my
            passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="../../working.png"
              alt="Working on code"
              className="rounded-lg shadow-2xl"
            />
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-3 text-gray-300">
              <User className="h-5 w-5 text-blue-400" />
              <span>Software Engineer with 2+ years of experience</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span>Based in Boston, MA (but proud Angeleno)</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <Calendar className="h-5 w-5 text-blue-400" />
              <span>Available for new opportunities</span>
            </div>
            <div className="flex flex-col gap-2 text-gray-300">
              <div className="flex items-center gap-2">
                <SchoolIcon className="h-5 w-5 text-blue-400" />
                <span>M.S. Statistics from Boston University</span>
              </div>
              <div className="flex items-center gap-2">
                <SchoolIcon className="h-5 w-5 text-blue-400" />
                <span>
                  B.S. Physics and Computer Science from Wheaton College, MA
                </span>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-gray-300 leading-relaxed mb-4">
                I’m a software and machine learning engineer with a strong
                foundation in computational physics, statistics, and scientific
                computing. With a B.S. in Physics and Computer Science and an
                M.S. in Statistical Practice from Boston University, I’ve
                contributed to projects spanning numerical methods, AI systems,
                and defense applications at organizations like Raytheon BBN and
                True Engineering.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Outside of formal roles, I explore probabilistic modeling,
                large-scale simulation, and applied ML for scientific domains,
                with projects in computational fluid dynamics, astrophysics, and
                power outage prediction. I’m particularly interested in applying
                my skills at the intersection of statistical sciences,
                computational methods, and national security challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
