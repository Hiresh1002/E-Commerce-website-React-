import React from 'react'
import  { useState } from "react";

const categories = ["All",  "Online Courses", "E-books", "video Class Notes"];

const resources = [
  {
    title: "Effective Teaching Strategies",
    category: "Books",
    description: "A guide to innovative methods for effective classroom teaching.",
    link: "#",
  },
  {
    title: "Introduction to AI in Education",
    category: "Online Courses",
    description: "Learn how AI can enhance personalized learning experiences.",
    link: "#",
  },
  {
    title: "Education Reform Research 2025",
    category: "Research Papers",
    description: "An in-depth look at policy changes and their impact on schools.",
    link: "#",
  },
  {
    title: "Khan Academy",
    category: "Tools",
    description: "Free online lessons and practice in math, science, and more.",
    link: "https://khanacademy.org",
  },
  {
    title: "Digital Literacy for Teachers",
    category: "Books",
    description: "A comprehensive book on technology integration in classrooms.",
    link: "#",
  },
];
function music() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResources =
    selectedCategory === "All"
      ? resources
      : resources.filter((r) => r.category === selectedCategory); 
  return (
<div className="min-h-screen bg-gray-50 p-8 animate-fadeIn">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-3">Educational Resources</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore curated resources for students, teachers, and lifelong learners.
          Discover books, research papers, online courses, and tools to enhance learning.
        </p>
      </header>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((res, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 animate-fadeUp"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{res.title}</h3>
            <span className="text-sm text-blue-500 font-medium">{res.category}</span>
            <p className="text-gray-600 mt-2">{res.description}</p>
            <a
              href={res.link}
              className="inline-block mt-4 text-blue-500 hover:underline font-medium"
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fadeIn {
            animation: fadeIn 0.6s ease-in-out;
          }

          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeUp {
            animation: fadeUp 0.6s ease-in-out;
          }
        `}
      </style>
    </div>  )
}

export default music