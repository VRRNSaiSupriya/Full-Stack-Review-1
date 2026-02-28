import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../App.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "student",
  });

  const [error, setError] = useState("");

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Validation
  const validateForm = () => {
    const emailRegex = /^[a-z0-9._%+-]+@gmail\.com$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!emailRegex.test(formData.username)) {
      setError("Enter valid Gmail (example@gmail.com)");
      return false;
    }

    if (!passwordRegex.test(formData.password)) {
      setError(
        "Password must contain uppercase, lowercase, number, symbol & min 8 chars"
      );
      return false;
    }

    setError("");
    return true;
  };

  // ✅ Login handler
  const handleLogin = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const role = login(formData.username, formData.password);

    // ⭐ Safe role comparison
    if (role && role.toLowerCase() === formData.role.toLowerCase()) {
      if (role === "student") navigate("/student");
      else if (role === "teacher") navigate("/teacher");
      else if (role === "admin") navigate("/admin");
    } else {
      setError("Role mismatch or invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <h2>Login to PORTFOLIO-HUB</h2>

      <form onSubmit={handleLogin} className="login-form">
        {/* Email */}
        <input
          type="text"
          name="username"
          placeholder="Email"
          value={formData.username}
          onChange={handleChange}
          required
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {/* Role */}
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>

        {/* Error */}
        {error && <p className="error">{error}</p>}

        <button type="submit">Login</button>
      </form>

      <p>
        <Link to="/forgot-password">Forgot Password?</Link>
      </p>

      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;