import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // SIMPLE DEMO AUTHENTICATION
    if (formData.username === "student") {
      navigate("/student");
    } 
    else if (formData.username === "teacher") {
      navigate("/teacher");
    } 
    else {
      alert("Invalid Login");
    }
  };

  return (
    <div className="login-container">

      <h2>Login to LMS</h2>

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

        <button type="submit">Login</button>

      </form>

      <p>
        Don't have an account? <a href="/register">Register</a>
      </p>

    </div>
  );
};

export default Login;