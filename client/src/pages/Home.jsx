import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100 text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
        Leah Wanjiru Gitau
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-xl">
        Full-Stack Software Developer | Building scalable, secure, and modern web & backend solutions.
      </p>
      <div className="flex space-x-4">
        <Link
          to="/projects"
          className="px-6 py-3 bg-primary text-white rounded-lg font-medium shadow-lg hover:bg-secondary transition"
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition"
        >
          Contact Me
        </Link>
      </div>
      <div className="mt-12">
        <img
          src="https://via.placeholder.com/200"
          alt="Leah Gitau"
          className="rounded-full w-48 h-48 shadow-xl mx-auto"
        />
      </div>
    </section>
  );
};

export default Home;
