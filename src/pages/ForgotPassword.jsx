import { useState } from "react";
import "../App.css";

const ForgotPassword = () => {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple gmail validation
    const emailRegex = /^[a-z0-9._%+-]+@gmail\.com$/;

    if (!emailRegex.test(email)) {
      setMessage("Enter valid Gmail address");
      return;
    }

    // demo message (no backend)
    setMessage("Password reset link sent to your Gmail ✅");
  };

  return (
    <div className="login-container">
      <h2>Forgot Password</h2>

      <form onSubmit={handleSubmit} className="login-form">

        <input
          type="email"
          placeholder="Enter Gmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Send Reset Link</button>

      </form>

      {message && <p className="success">{message}</p>}
    </div>
  );
};

export default ForgotPassword;