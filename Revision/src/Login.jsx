import React, { useState } from 'react';
import "./App.css";
function Login() {
  const [signup, setSignup] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormFilled = signup
      ? name.trim() && email.trim() && password.trim()
      : email.trim() && password.trim();

    if (!isFormFilled) {
      alert("Please fill all fields.");
      return;
    }

    signup
      ? (
          localStorage.name = name,
          localStorage.email = email,
          localStorage.password = password,
          alert("Signup done"),
          setSignup(false)
        )
      : email === localStorage.email && password === localStorage.password
        ? alert("Login successful")
        : alert("Wrong info");

    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>{signup ? "Signup" : "Login"}</h2>

        {signup && (
          <>
            <input
                className="input"

              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            /><br />
          </>
        )}

        <input
            className="input"

          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />

        <input
            className="input"

          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />

        <button type="submit" className="submit-btn">{signup ? "Signup" : "Login"}</button>

        <p
          onClick={() => setSignup(!signup)}
          className="toggle-link"
        >
          {signup ? "Already have an account? Login" : "New user? Signup"}
        </p>
      </form>
    </>
  );
}

export default Login;
