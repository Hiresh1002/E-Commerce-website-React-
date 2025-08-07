import React from 'react'

function Nav() {
  return (
      <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <div class="text-xl font-bold text-black-600">PW Skill</div>
        <div class="space-x-4 hidden md:flex">
          <a href="/home" class="text-gray-700 hover:text-blue-600">Home</a>
          <a href="/movie" class="text-gray-700 hover:text-blue-600">Courses</a>
          <a href="#" class="text-gray-700 hover:text-blue-600"> Resources</a>
          <a href="#" class="text-gray-700 hover:text-blue-600">Quizzes</a>
          <a href="#" class="text-gray-700 hover:text-blue-600">Assignments</a>
           <a href="/userLogin" class="text-gray-700 hover:text-blue-600">Login</a>

        </div>
      </div>
    </div>
  </nav>
     )
}

export default Nav