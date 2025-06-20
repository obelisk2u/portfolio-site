import React from "react";
import { Github } from "lucide-react";
import { SiHuggingface } from "react-icons/si";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "PoissoNet",
      description:
        "A physics-constrained U-Net surrogate that learns to solve the 2D pressure Poisson equation on complex masks, with automated data generation and fast GPU inference.",
      image: "../../public/poissonet.png",
      technologies: [
        "PyTorch",
        "NumPy",
        "Matplotlib",
        "CUDA",
        "Deep Learning",
        "CFD",
        "Hugging Face",
      ],
      github: "https://github.com/obelisk2u/PoissoNet",
      huggingface: "https://huggingface.co/obelisk2u/PoissoNet",
    },
    {
      title: "JSkill",
      description:
        "A skill rating simulator that visualizes and compares TrueSkill and ELO rating systems in real time. Includes match simulation, expectation propegation visualization, and statistical convergence plots.",
      image: "../../public/JSkillPreview.png",
      technologies: [
        "Go",
        "Statistics",
        "React",
        "TypeScript",
        "Shadcn/UI",
        "TailwindCSS",
      ],
      github: "https://github.com/obelisk2u/JSkill",
    },
    {
      title: "SimuFlow",
      description:
        "A NumPy-based 2D CFD solver for incompressible flow and scalar transport around obstacles, featuring modular mesh generation, pressure–velocity coupling, and visualization through static and animated field diagnostics.",
      image: "../../public/simuflow.png",
      technologies: [
        "NumPy",
        "SciPy",
        "Matplotlib",
        "Python",
        "CFD",
        "Simulation",
      ],
      github: "https://github.com/obelisk2u/SimuFlow",
    },
    {
      title: "Dynamic Rhythms ML Challenge",
      description:
        "A machine learning pipeline for forecasting power outages from extreme weather events, integrating multi-year storm and outage datasets with predictive modeling, threshold tuning, and interactive performance diagnostics.",
      image: "../../public/dynamicrythms.png",
      technologies: ["PyTorch", "Python", "Jupyter", "Scikit-Learn", "XGBoost"],
      github: "https://github.com/obelisk2u/DynamicRythms",
    },
    {
      title: "Echos: AI Audio Intelligence",
      description:
        "A full-stack AI-powered platform that transcribes, summarizes, and analyzes audio content. Built with Remix, FastAPI, and AWS, it features real-time transcription, and document chat with RAG.",
      image: "../../EchosDocChat.png",
      technologies: [
        "Remix",
        "FastAPI",
        "AWS S3",
        "DynamoDB",
        "TypeScript",
        "Pinecone",
      ],
      github: "https://github.com/jordanstout/Echos-App",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate
            my technical skills and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#121212] rounded-lg overflow-hidden border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {/* GitHub link (shown if provided) */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0a0a0a] p-2 rounded-full hover:bg-gray-700 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}

                  {/* Hugging Face link (shown only for PoissoNet) */}
                  {project.huggingface && (
                    <a
                      href={project.huggingface}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0a0a0a] p-2 rounded-full hover:bg-gray-700 transition-colors"
                    >
                      <SiHuggingface className="h-5 w-5 text-yellow-400" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex items-center space-x-3 text-gray-400 text-sm"></div>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/obelisk2u"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <Github className="h-5 w-5" />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
