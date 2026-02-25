import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {

  const auth = useAuth();
  const user = auth?.user;
  const logout = auth?.logout;   // get logout function
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();        // clear user from context
    navigate("/login");
  };

  return (
    <div className="navbar">
      <h2>LMS</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        {/* NOT LOGGED IN */}
        {!user && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}

        {/* STUDENT NAVBAR */}
        {user?.role === "student" && (
          <>
            <Link to="/student">Dashboard</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/marks">Marks</Link>
            <Link to="/feedback">Feedback</Link>
          </>
        )}

        {/* TEACHER NAVBAR */}
        {user?.role === "teacher" && (
          <>
            <Link to="/teacher">Dashboard</Link>
            <Link to="/upload">Assign Marks</Link>
            <Link to="/courses">Courses</Link>
          </>
        )}

        {/* LOGOUT BUTTON */}
        {user && (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;