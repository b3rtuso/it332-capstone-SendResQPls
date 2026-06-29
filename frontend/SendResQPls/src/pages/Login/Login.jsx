import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../assets/logo.png";
import Swal from "sweetalert2";

import {
  FiUser,
  FiLock,
  FiAlertCircle,
  FiArrowRight,
} from "react-icons/fi";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      username === "mdrmo" &&
      password === "sendresqpls2026"
    ) {
      setShowError(false);

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome to SendResQPls!",
        timer: 1500,
        showConfirmButton: false,
      });

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);

    } else {
      setShowError(true);

      Swal.fire({
        icon: "error",
        title: "Access Denied",
        text: "Invalid username or password.",
        confirmButtonColor: "#2563eb",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <div className="logo-wrapper">
          <img
            src={logo}
            alt="SendResQPls Logo"
            className="logo"
          />
        </div>

        <h1>SendResQPls</h1>

        <p className="subtitle">
          Admin Operations Dashboard
        </p>

        {showError && (
          <div className="error-banner">
            <FiAlertCircle className="error-icon" />
            <span>Invalid username or password</span>
          </div>
        )}

        <div className="input-group">
          <label>Username</label>

          <div className="input-wrapper">
            <FiUser className="input-icon" />

            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setShowError(false);
              }}
              required
            />
          </div>
        </div>

        <div className="input-group">
          <label>Password</label>

          <div className="input-wrapper">
            <FiLock className="input-icon" />

            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setShowError(false);
              }}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="login-btn"
        >
          Access Dashboard
          <FiArrowRight />
        </button>

        <div className="demo-box">
          <strong>Demo Credentials:</strong>

          <p>Username: mdrmo</p>
          <p>Password: sendresqpls2026</p>
        </div>
      </form>

      <p className="footer-text">
        Secure Access Portal • MDRRMO
      </p>
    </div>
  );
}