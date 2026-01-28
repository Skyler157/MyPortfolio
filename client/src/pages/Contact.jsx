import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate an API or email service later
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-gray-100 px-6 py-16 md:px-20 flex justify-center items-center">
      <div className="max-w-lg w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">Contact Me</h2>
        {submitted && (
          <p className="text-green-600 font-medium mb-4 text-center">
            Message sent successfully!
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            rows="5"
            required
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-secondary transition"
          >
            Send Message
          </button>
        </form>
        <div className="mt-6 text-center text-gray-700">
          <p>Email: <a href="mailto:leahgitau007@gmail.com" className="text-primary">leahgitau007@gmail.com</a></p>
          <p>Phone: <a href="tel:+254796886037" className="text-primary">+254 796 886037</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/leahgitau" target="_blank" className="text-primary">linkedin.com/in/leahgitau</a></p>
          <p>GitHub: <a href="https://github.com/Skyler157" target="_blank" className="text-primary">github.com/Skyler157</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
