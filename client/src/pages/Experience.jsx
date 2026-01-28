import React from "react";
import TimelineCard from "../components/TimelineCard";

const Experience = () => {
  const experienceList = [
    {
      role: "Software Developer",
      company: "Craft Silicon Limited",
      period: "Sep 2025 – Present",
      description: "Designed, developed, and maintained USSD applications for banking. Integrated USSD menus with core banking systems and third-party APIs. Analyzed logs, monitored transactions, and ensured system reliability.",
      tech: "NodeJS, Express, REST APIs, CI/CD",
    },
    {
      role: "Software Developer Intern",
      company: "Tilil Technologies, Nairobi",
      period: "May – Aug 2025",
      description: "Developed Bulk SMS, USSD systems, monitoring systems, and full-stack solutions. Participated in design, testing, and deployment. Learned server management and automated tests.",
      tech: "NodeJS, USSD, Backend, Frontend, Monitoring",
    },
    {
      role: "Intern",
      company: "Kenya Tea Development Agency (KTDA)",
      period: "May – Aug 2024",
      description: "Assisted in web development, debugging, and IT support. Gained experience in networking, troubleshooting, and version control with Git/GitLab/GitHub.",
      tech: "Web Development, Git, IT Operations",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 px-6 py-16 md:px-20">
      <h2 className="text-4xl font-bold text-primary mb-12 text-center">Experience</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {experienceList.map((exp, index) => (
          <TimelineCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
