import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projectList = [
    {
      title: "USSD Banking Applications",
      description: "Designed, developed, and maintained USSD applications for banking and financial services, integrating with core banking systems and third-party APIs.",
      github: "https://github.com/Skyler157",
    },
    {
      title: "Bulk SMS & USSD Monitoring System",
      description: "Developed a monitoring system to track downtime and trigger email alerts for clients. Covered backend, integrations, and frontend experience.",
      github: "https://github.com/Skyler157",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16 md:px-20">
      <h2 className="text-4xl font-bold text-primary mb-12 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
