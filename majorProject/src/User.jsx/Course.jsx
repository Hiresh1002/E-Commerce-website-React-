import React from "react";

const categories = [
  "Data Science & Analytics",
  "Software Development Courses",
  "Digital Marketing With AI",
  "Banking & Finance",
  "Programming Courses",
  "Cybersecurity Courses",
  "Product Management with AI",
];

const courses = [
  { title: "Data Science With Generative AI Course", duration: "6 months", tag: "Bestseller" },
  { title: "Data Analytics Course - Hinglish", duration: "8 months" },
  { title: "Data Analytics Course", duration: "6 months", tag: "Popular" },
  { title: "Data Analytics with Gen AI (Offline Batch)", duration: "6 months", tag: "Offline" },
  { title: "Data Science With Generative AI - Hinglish", duration: "8 months" },
];

const masterclasses = [
  { title: "Introduction to Machine Learning for Data Science", date: "Saturday, 16 Aug, 2025" },
  { title: "Data Analysis with Python: A Beginner’s Guide", date: "Sunday, 17 Aug, 2025" },
];

function Course() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 flex gap-4 animate-fadeIn">
      
      {/* Left Sidebar */}
      <aside className="w-64 bg-white p-4 rounded-lg shadow-lg animate-slideLeft">
        <ul className="space-y-2">
          {categories.map((cat, idx) => (
            <li
              key={idx}
              className={`p-2 rounded cursor-pointer transition-all duration-300 ${
                idx === 0
                  ? "bg-red-100 text-red-600 font-semibold shadow-inner"
                  : "hover:bg-gray-100 hover:translate-x-1"
              }`}
            >
              {cat} <span className="float-right">{">"}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Middle Section */}
      <main className="flex-1 grid grid-cols-2 gap-4 animate-fadeUp">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-lg shadow-md relative transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            {course.tag && (
              <span
                className={`absolute top-2 right-2 text-xs font-semibold text-white px-2 py-1 rounded ${
                  course.tag === "Bestseller"
                    ? "bg-gradient-to-r from-purple-500 to-blue-500"
                    : course.tag === "Popular"
                    ? "bg-gradient-to-r from-pink-400 to-purple-500"
                    : "bg-gradient-to-r from-purple-300 to-indigo-500"
                }`}
              >
                {course.tag}
              </span>
            )}
            <h3 className="font-semibold text-gray-800">{course.title}</h3>
            <p className="text-gray-500 text-sm mt-1">{course.duration}</p>
          </div>
        ))}
      </main>

      {/* Right Sidebar */}
      <aside className="w-80 bg-white p-4 rounded-lg shadow-lg animate-slideRight">
        <h2 className="text-blue-600 font-bold mb-4">Masterclass</h2>
        <ul className="space-y-4">
          {masterclasses.map((m, idx) => (
            <li
              key={idx}
              className="border-b pb-2 hover:bg-gray-50 rounded transition duration-200 p-2"
            >
              <h3 className="font-semibold text-gray-800">{m.title}</h3>
              <p className="text-gray-500 text-sm">{m.date}</p>
            </li>
          ))}
        </ul>
      </aside>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-in-out;
          }

          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeUp {
            animation: fadeUp 0.8s ease-in-out;
          }

          @keyframes slideLeft {
            0% { opacity: 0; transform: translateX(-30px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .animate-slideLeft {
            animation: slideLeft 0.7s ease-in-out;
          }

          @keyframes slideRight {
            0% { opacity: 0; transform: translateX(30px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .animate-slideRight {
            animation: slideRight 0.7s ease-in-out;
          }
        `}
      </style>
    </div>
  );
}

export default Course;
