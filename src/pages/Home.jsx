import lms from "../assets/lms.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1>LMS</h1>
      <p>Learning Management System</p>

      <img src={lms} alt="LMS" className="home-img" />

      <div style={{ marginTop: "20px" }}>
        <Link to="/login" className="btn">Login</Link>
        {" "}
        <Link to="/register" className="btn">Register</Link>
      </div>
    </div>
  );
};

export default Home;