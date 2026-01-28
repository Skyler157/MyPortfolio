import React from "react";

const TimelineCard = ({ role, company, period, description, tech }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-semibold text-primary">{role}</h3>
      <p className="text-gray-500">{company} | {period}</p>
      <p className="text-gray-700 mt-2">{description}</p>
      {tech && <p className="mt-2 text-gray-600 font-medium">Tech: {tech}</p>}
    </div>
  );
};

export default TimelineCard;
