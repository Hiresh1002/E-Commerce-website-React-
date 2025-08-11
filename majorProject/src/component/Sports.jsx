import React from 'react'
const assignments = [
  {
    title: "Essay on Climate Change",
    description: "Write a 1500-word essay discussing the effects of climate change and possible solutions.",
    dueDate: "2025-08-20",
    status: "Pending",
  },
  {
    title: "Mathematics Project",
    description: "Create a presentation on real-life applications of calculus in engineering.",
    dueDate: "2025-08-25",
    status: "Submitted",
  },
  {
    title: "Data Science Mini Project",
    description: "Build a basic data visualization dashboard using Python and Matplotlib.",
    dueDate: "2025-09-01",
    status: "Overdue",
  },
];
function Sports() {
  return (
<div className="bg-gray-50 p-8 min-h-screen animate-fadeIn">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-3">Practice Assignments</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Here you’ll find your current assignments, their due dates, and submission status.
        </p>
      </header>

      {/* Assignment Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {assignments.map((a, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 animate-fadeUp"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{a.title}</h2>
            <p className="text-gray-600 text-sm mb-3">{a.description}</p>

            {/* Status Badge */}
            <div className="flex justify-between items-center mb-4">
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  a.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : a.status === "Submitted"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {a.status}
              </span>
              <span className="text-sm text-gray-500">
                Due: {new Date(a.dueDate).toLocaleDateString()}
              </span>
            </div>

            {/* Submit Button */}
            {a.status !== "Submitted" && (
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition">
                Submit Assignment
              </button>
            )}
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
    </div>
  )
}

export default Sports