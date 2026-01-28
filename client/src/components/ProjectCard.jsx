import React from "react";

const ProjectCard = ({ title, description, github, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex space-x-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition"
          >
            GitHub
          </a>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
