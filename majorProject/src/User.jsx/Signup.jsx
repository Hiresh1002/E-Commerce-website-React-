import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  let api_url = "http://localhost:3000/user";

  const [userdata, setUserdata] = useState({
    Name: "",
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserdata((prev) => ({ ...prev, [name]: value }));
  };

  const SaveData = async (e) => {
    e.preventDefault();
    try {
      // Get existing users
      let res = await axios.get(api_url);
      let users = res.data;

      // Check if email already exists
      if (users.find((u) => u.Email === userdata.Email)) {
        alert("Email already registered. Please use a different email.");
        return;
      }

      // Save new user
      await axios.post(api_url, userdata);
      alert("Signup successful!");
      
      // Optionally clear form
      setUserdata({ Name: "", Email: "", Password: "" });
      
    } catch (err) {
      console.error("Error saving data:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-white-600 to-blue-800">
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 transform transition-all duration-500 ease-out animate-fadeIn">
          <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
            Create Your Account
          </h2>
          <form onSubmit={SaveData} className="space-y-5">
            {/* Name Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                name="Name"
                value={userdata.Name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="Email"
                value={userdata.Email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                type="password"
                name="Password"
                value={userdata.Password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r focus:ring-blue-500 text-white py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Sign Up
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/UserLogin" className="text-red-500 hover:underline font-medium">
              Login
            </Link>
          </p>
        </div>

        {/* Animation Style */}
        <style>
          {`
            @keyframes fadeIn {
              0% { opacity: 0; transform: scale(0.95); }
              100% { opacity: 1; transform: scale(1); }
            }
            .animate-fadeIn {
              animation: fadeIn 0.6s ease-out forwards;
            }
          `}
        </style>
      </div>
    </>
  );
}

export default Signup;
