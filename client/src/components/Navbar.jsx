import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-8 bg-white shadow-md fixed w-full z-50">
      <div className="text-2xl font-bold text-primary">Leah Gitau</div>
      <ul className="flex space-x-8 text-gray-700 font-medium">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/resume">Resume</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;
