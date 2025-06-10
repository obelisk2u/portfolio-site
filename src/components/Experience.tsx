import React from "react";
import { Briefcase, Calendar, MapPin, Award } from "lucide-react";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Founder",
      company: "Echos",
      location: "Boston, MA",
      period: "Feburary 2025 - Present",
      description:
        "Designed and built a full-stack AI-powered transcription and reporting platform. Integrated cloud services, vector search, and LLMs to deliver personalized summaries and chat experiences.",
      achievements: [
        "Engineered a modular web app with audio recording, transcription, and PDF report generation",
        "Integrated OpenAI and Pinecone to implement RAG-based document chat with user-specific context",
        "Optimized transcription latency and storage by streaming large audio files to AWS S3 with multipart uploads",
      ],
      technologies: [
        "React",
        "TypeScript",
        "FastAPI",
        "Python",
        "AWS S3",
        "DynamoDB",
        "Pinecone",
        "LangChain",
        "OpenAI",
      ],
    },
    {
      title: "Lead Data Science Intern",
      company: "Fidelity",
      location: "Boston, MA",
      period: "September 2024 - May 2025",
      description:
        "Led development and evaluation of Retrieval-Augmented Generation (RAG) systems for enterprise document QA. Built machine learning models to assess document quality, improve retrieval performance, and guide deployment decisions.",
      achievements: [
        "Developed an internal framework to predict document readiness for LLM-powered assistants with 79% test accuracy",
        "Engineered a topic clustering pipeline that grouped 2,400+ documents for more efficient retrieval",
        "Built a prototype RAG chatbot using LangChain, Pinecone, and OpenAI to demonstrate production workflows",
      ],
      technologies: [
        "Python",
        "LangChain",
        "Pinecone",
        "OpenAI",
        "Scikit-learn",
        "Git",
      ],
    },
    {
      title: "Software Engineer",
      company: "Raytheon Intelligence & Space",
      location: "Cambridge, MA",
      period: "June 2022 - June 2023",
      description:
        "Contributed to advanced acoustic research and development projects involving distributed systems and real-time data processing. Worked alongside senior engineers to prototype scalable backend systems for defense applications.",
      achievements: [
        "Built modular C++ components for high-performance message-passing systems",
        "Integrated encryption protocols into data transport layer for enhanced security",
        "Improved system diagnostics tools, reducing debugging time by 50%",
      ],
      technologies: [
        "C++",
        "C",
        "Python",
        "Embedded Linux",
        "Acoustic Data Processing",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Science in Statistical Practice",
      school: "Boston University",
      location: "Boston, MA",
      period: "2024 - 2025",
      description:
        "Specialized in Statistical Machine Learning and Distributed Systems",
    },
    {
      degree: "Bachelor of Science in Physics and Computer Science",
      school: "Wheaton College Massachusetts",
      location: "Norton, MA",
      period: "2017-2021",
      description:
        "Specialized in Computational Fluid Dynamics and Numerical Simulations",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and educational background in software
            engineering
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center space-x-2">
              <Briefcase className="h-6 w-6 text-blue-400" />
              <span>Work Experience</span>
            </h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-[#0a0a0a] rounded-lg p-6 border border-gray-700"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-blue-400">
                        {exp.title}
                      </h4>
                      <p className="text-lg text-gray-300">{exp.company}</p>
                    </div>
                    <div className="text-sm text-gray-400 mt-2 sm:mt-0">
                      <div className="flex items-center space-x-1 mb-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-gray-400 mb-2">
                      Key Achievements:
                    </h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="text-sm text-gray-300 flex items-start space-x-2"
                        >
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center space-x-2">
              <Award className="h-6 w-6 text-blue-400" />
              <span>Education</span>
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-[#0a0a0a] rounded-lg p-6 border border-gray-700"
                >
                  <h4 className="text-xl font-semibold text-blue-400 mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-lg text-gray-300 mb-2">{edu.school}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
