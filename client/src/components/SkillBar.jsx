import React from "react";

const SkillBar = ({ skill, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium">{skill}</span>
        <span className="text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-300 h-4 rounded-full">
        <div
          className="bg-primary h-4 rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
