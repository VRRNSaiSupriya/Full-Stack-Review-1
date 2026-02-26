import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();   // ✅ get logout
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();            // remove user
    navigate("/login");  // go to login page
  };

  return (
    <div className="navbar">
      <h2>PORTFOLIO-HUB</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        {/* NOT LOGGED IN */}
        {!user && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}

        {/* STUDENT MENU */}
        {user?.role === "student" && (
          <>
            <Link to="/student">Dashboard</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/marks">Marks</Link>
            <Link to="/feedback">Feedback</Link>

            {/* ✅ LOGOUT BUTTON */}
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}

        {/* TEACHER MENU */}
        {user?.role === "teacher" && (
          <>
            <Link to="/teacher">Dashboard</Link>
            <Link to="/upload">Assign Marks</Link>
            <Link to="/courses">Courses</Link>

            {/* ✅ LOGOUT BUTTON */}
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;