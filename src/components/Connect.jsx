import React, { useState } from "react";
import { motion } from "framer-motion";

const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields!");
      return;
    }

    // Open user's email client with pre-filled email
    window.location.href = `mailto:sahilvedwal54@gmail.com?subject=Message from ${formData.name}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0A%0A${formData.message}`;
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="connect"
      className="min-h-screen bg-gradient-to-r from-[#031025] via-[#374151] to-[#031025] flex flex-col justify-center items-center px-4"
    >
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 drop-shadow-lg"
      >
        Thank You
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-3xl text-white font-bold mt-8"
      >
        Let's Connect
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-gray-300 max-w-2xl mx-auto mt-4"
      >
        Feel free to reach out to me for collaborations, opportunities, or just a friendly hello!
      </motion.p>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-xl bg-[#111827]/70 backdrop-blur-md p-8 rounded-xl shadow-lg flex flex-col gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="p-3 rounded-md bg-[#031025] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded-md bg-[#031025] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="p-3 rounded-md bg-[#031025] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition resize-none"
        />
        <button
          type="submit"
          className="bg-cyan-400 text-black font-bold py-3 rounded-md hover:bg-cyan-500 transition transform hover:scale-105"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default Connect;
