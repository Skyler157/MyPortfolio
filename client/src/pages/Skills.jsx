import React from "react";
import SkillBar from "../components/SkillBar";

const Skills = () => {
  const skills = [
    { skill: "React.js", level: 90 },
    { skill: "Node.js", level: 85 },
    { skill: "Express.js", level: 85 },
    { skill: "Python", level: 80 },
    { skill: "Laravel", level: 75 },
    { skill: "Tailwind CSS", level: 90 },
    { skill: "MySQL", level: 80 },
    { skill: "MongoDB", level: 85 },
    { skill: "AWS / Cloud", level: 70 },
    { skill: "Docker & Kubernetes", level: 65 },
  ];

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16 md:px-20">
      <h2 className="text-4xl font-bold text-primary mb-12 text-center">Skills</h2>
      <div className="max-w-3xl mx-auto">
        {skills.map((s, index) => (
          <SkillBar key={index} {...s} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
