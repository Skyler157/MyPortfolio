import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16 md:px-20">
      <h2 className="text-4xl font-bold text-primary mb-8 text-center">About Me</h2>
      <div className="max-w-4xl mx-auto text-gray-700 text-lg space-y-6">
        <p>
          I am a versatile and ambitious software developer with a strong foundation in full-stack development, microservices architecture, and API development. My expertise spans from front-end technologies to back-end systems with a focus on creating scalable, secure, and efficient solutions.
        </p>
        <p>
          I am dedicated to continuous learning and applying industry best practices to drive innovation and deliver high-quality software products.
        </p>

        <h3 className="text-2xl font-semibold text-primary mt-10 mb-4">Education</h3>
        <ul className="space-y-2">
          <li>
            <strong>Chuka University</strong> – BSc Computer Science, 2nd Class Honors (Upper) (2021 – 2025)
          </li>
          <li>
            <strong>Njonjo Girls High School</strong> – KCSE B+ (2017 – 2021)
          </li>
          <li>
            <strong>New Highlight School</strong> – K.C.P.E 391 marks (2006 – 2016)
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-primary mt-10 mb-4">Skills</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="font-medium">Frontend:</p>
            <p>React.js, HTML, CSS, Tailwind, TypeScript</p>
          </div>
          <div>
            <p className="font-medium">Backend:</p>
            <p>NodeJS, Express.js, Python, Laravel, RESTful APIs</p>
          </div>
          <div>
            <p className="font-medium">Databases:</p>
            <p>MySQL, MongoDB, PostgreSQL, Microsoft SQL Server, Redis</p>
          </div>
          <div>
            <p className="font-medium">Cloud & DevOps:</p>
            <p>AWS, Azure, GCP, GitLab CI, Docker, Kubernetes, PM2</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
