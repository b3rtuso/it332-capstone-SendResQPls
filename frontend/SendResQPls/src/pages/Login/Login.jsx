import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      username,
      password,
    });

    alert("Login submitted!");
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <div className="logo-wrapper">
          {/* Replace with actual logo later */}
          <img 
            src={logo} 
            alt="SendResQPls Logo" 
            className="logo"
            />
        </div>

        <h1>SendResqPls</h1>

        <p className="subtitle">
          Admin Operations Dashboard
        </p>

        <div className="input-group">
          <label>Username</label>

          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
              required
            />
          </div>
        </div>

        <div className="input-group">
          <label>Password</label>

          <div className="input-wrapper">
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="login-btn"
        >
          Access Dashboard →
        </button>

        <div className="demo-box">
          <strong>Demo Credentials:</strong>

          <p>Username: mdrmo</p>
          <p>Password: sendresqpls2026</p>
        </div>
      </form>
    </div>
  );
}