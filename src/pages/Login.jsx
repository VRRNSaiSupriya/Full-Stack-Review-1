import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../App.css";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ Validation Function
  const validateForm = () => {

    // gmail only (lowercase)
    const emailRegex = /^[a-z0-9._%+-]+@gmail\.com$/;

    // password rules
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!emailRegex.test(formData.username)) {
      setError("Enter valid Gmail (example@gmail.com)");
      return false;
    }

    if (!passwordRegex.test(formData.password)) {
      setError(
        "Password must contain 1 uppercase, 1 number, 1 symbol & minimum 8 characters"
      );
      return false;
    }

    setError("");
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ check validation first
    if (!validateForm()) return;

    // DEMO AUTHENTICATION
    if (formData.username === "student@gmail.com") {
      navigate("/student");
    } 
    else if (formData.username === "teacher@gmail.com") {
      navigate("/teacher");
    } 
    else {
      setError("Invalid Login Credentials");
    }
  };

  return (
    <div className="login-container">

      <h2>Login to PORTFOLIO-HUB</h2>

      <form onSubmit={handleLogin} className="login-form">

        <input
          type="text"
          name="username"
          placeholder="Username or Email"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {/* ✅ Error Message */}
        {error && <p className="error">{error}</p>}

        <button type="submit">Login</button>

      </form>

      <p>
        Don't have an account? <a href="/register">Register</a>
      </p>

    </div>
  );
};

export default Login;