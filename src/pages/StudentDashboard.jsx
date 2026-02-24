import { Link } from "react-router-dom";
import student from "../assets/student.jpeg";

const StudentDashboard = () => {
  return (
    <div className="dashboard">
      <h1>Student Dashboard</h1>

      <img src={student} className="dashboard-img" />

      <div className="dashboard-cards">

        <Link to="/courses" className="card">
          <h3>📚 Courses</h3>
          <p>View assigned courses</p>
        </Link>

        <Link to="/upload" className="card">
          <h3>📤 Assignment Submission</h3>
          <p>Upload assignments</p>
        </Link>

        <Link to="/marks" className="card">
          <h3>📊 Marks</h3>
          <p>Check your marks</p>
        </Link>

        <Link to="/feedback" className="card">
          <h3>💬 Feedback</h3>
          <p>Teacher feedback</p>
        </Link>

      </div>
    </div>
  );
};

export default StudentDashboard;