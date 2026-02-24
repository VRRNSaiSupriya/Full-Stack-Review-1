import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

/* Pages */
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import Courses from "./pages/Courses";
import Marks from "./pages/Marks";
import Feedback from "./pages/Feedback";
import Upload from "./pages/Upload";

/* Navbar Component */
const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">LMS</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/feedback">Feedback</Link>
      </div>
    </nav>
  );
};

/* Main App */
function App() {
  return (
    <Router>

      {/* Navbar visible on all pages */}
      <Navbar />

      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboards */}
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />

        {/* Features */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/marks" element={<Marks />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/upload" element={<Upload />} />

      </Routes>

    </Router>
  );
}

export default App;