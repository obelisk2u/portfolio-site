import React from "react";
import { Code, Database, Cpu } from "lucide-react";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Development",
      skills: ["Python", "Go", "C++", "Pinecone", "REST APIs", "AWS"],
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Tools & Technologies",
      skills: ["Git", "Linux", "Atlassian", "DoD Secret Clearance"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the
            technologies I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#0a0a0a] rounded-lg p-6 border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-blue-400">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
