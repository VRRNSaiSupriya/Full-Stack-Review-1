import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const auth = useAuth();
  const user = auth?.user;

  return (
    <div className="navbar">
      <h2>LMS</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        {!user && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}

        {user?.role === "student" && (
          <>
            <Link to="/student">Dashboard</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/marks">Marks</Link>
            <Link to="/feedback">Feedback</Link>
          </>
        )}

        {user?.role === "teacher" && (
          <>
            <Link to="/teacher">Dashboard</Link>
            <Link to="/upload">Assign Marks</Link>
            <Link to="/courses">Courses</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;