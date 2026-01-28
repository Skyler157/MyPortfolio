import React from "react";

const Resume = () => {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16 md:px-20 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-primary mb-12 text-center">Resume / CV</h2>

      <div className="max-w-3xl bg-white p-8 rounded-xl shadow-lg w-full">
        {/* Personal Details */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-primary mb-2">Leah Wanjiru Gitau</h3>
          <p>Email: <a href="mailto:leahgitau007@gmail.com" className="text-primary">leahgitau007@gmail.com</a></p>
          <p>Phone: <a href="tel:+254796886037" className="text-primary">+254 796 886037</a></p>
          <p>Address: P.O. Box 00618-00100, Nairobi</p>
        </div>

        {/* Profile */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-gray-700 mb-2">Profile</h4>
          <p>
            I am a versatile and ambitious software developer with a strong foundation in full-stack development, microservices architecture, and API development. My expertise spans from front-end technologies to back-end systems with a focus on creating scalable, secure, and efficient solutions.
          </p>
        </div>

        {/* Education */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-gray-700 mb-2">Education</h4>
          <ul className="list-disc list-inside text-gray-700">
            <li>Chuka University – BSc Computer Science, 2nd Class Honors (Upper) (2021–2025)</li>
            <li>Njonjo Girls High School – KCSE B+ (2017–2021)</li>
            <li>New Highlight School – K.C.P.E 391 marks (2006–2016)</li>
          </ul>
        </div>

        {/* Work Experience */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-gray-700 mb-2">Work Experience</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Craft Silicon Limited – Software Developer</strong> (Sep 2025 – Present) <br />
              USSD applications, backend integrations, API development, CI/CD.
            </li>
            <li><strong>Tilil Technologies – Software Developer Intern</strong> (May – Aug 2025) <br />
              Bulk SMS, USSD systems, monitoring systems, full-stack solutions.
            </li>
            <li><strong>KTDA – Intern</strong> (May – Aug 2024) <br />
              Web development, debugging, IT support, version control.
            </li>
          </ul>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-gray-700 mb-2">Skills</h4>
          <p>React.js, Node.js, Express.js, Python, Laravel, Tailwind CSS, TypeScript, MySQL, MongoDB, AWS, Docker, Kubernetes, CI/CD</p>
        </div>

        {/* Projects / Links */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-gray-700 mb-2">Projects & Links</h4>
          <p>GitHub: <a href="https://github.com/Skyler157" target="_blank" className="text-primary">github.com/Skyler157</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/leahgitau" target="_blank" className="text-primary">linkedin.com/in/leahgitau</a></p>
        </div>

        {/* Download CV */}
        <div className="text-center mt-8">
          <a
            href="/Leah_Wanjiru_Gitau_CV.pdf"  // replace with your actual PDF in public folder
            download
            className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-secondary transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
