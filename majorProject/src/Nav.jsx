import React, { useState } from 'react'

function Nav() {

  return (
      <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <div class="text-xl font-bold text-black-600">PW Skill</div>
        <div class="space-x-4 hidden md:flex">
        
   

          <a href="/home" class="text-gray-700 hover:text-blue-600">Home</a>
{/* 
<select  class="text-gray-700 hover:text-blue-600  -mt-4">
  <option value="online"><a href="/Course">Online Courses</a></option>
  <option value="offline">Offline Courses</option>
</select> */}

<a href="/Course" class="text-gray-700 hover:text-blue-600">Course</a>

<a href="/music" class="text-gray-700 hover:text-blue-600">Resources</a>
<a href="/serial" class="text-gray-700 hover:text-blue-600">Quizzes</a>
<a href="/sports" class="text-gray-700 hover:text-blue-600">Assignments</a>

           <div class="search-container">
    <input
  type="text"
  id="searchInput"
  placeholder="Search items..."
  class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
  {/* Search bar */}
    <ul id="resultsList"></ul></div>
<a href="/Signup" className="text-blue-700   border border-blue-500 rounded px-4 py-2 transition-colors duration-200">
  Login
</a>

        </div>
      </div>
    </div>
  </nav>
     )
}

export default Nav