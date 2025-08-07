import React from 'react'

function UserLogin() {
  return (



<div className="w-full max-w-md mx-auto p-8 mt-10 bg-white/30 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 animate-softBounce">
  <h2 className="text-3xl font-bold text-center text-black mb-6">Login</h2>

  <form id="loginForm" onSubmit={() => validateForm()} className="space-y-5">
    
    {/* Username */}
    <div>
      <label htmlFor="username" className="block text-black font-medium mb-1 " >Username</label>
      <input
        type="text"
        id="username"
        name="username"
        className="w-full px-4 py-3 rounded-lg bg-white/70 text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        placeholder="Enter your username"
      />
      <div id="usernameError" className="text-red-500 text-sm mt-1 hidden">
        Username is required
      </div>
    </div>

    {/* Password */}
    <div>
      <label htmlFor="password" className="block text-black font-medium mb-1 ">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        className="w-full px-4 py-3 rounded-lg bg-white/70 text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        placeholder="Enter your password"
      />
      <div id="passwordError" className="text-red-500 text-sm mt-1 hidden">
        Password is required
      </div>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      Login
    </button>
  </form>
</div>

  )
}

export default UserLogin