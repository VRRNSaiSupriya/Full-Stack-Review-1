import { Link } from "react-router-dom";
import teacher from "../assets/teacher.jpg";

const TeacherDashboard = () => {
  return (
    <div className="dashboard">
      <h1>Teacher Dashboard</h1>

      <img src={teacher} className="dashboard-img" />

      <div className="dashboard-cards">

        <Link to="/courses" className="card">
          <h3>📘 Attach Courses</h3>
          <p>Assign courses to students</p>
        </Link>

        <Link to="/marks" className="card">
          <h3>📝 Assign Marks</h3>
          <p>Add student marks</p>
        </Link>

        <Link to="/feedback" className="card">
          <h3>💬 Give Feedback</h3>
          <p>Provide feedback</p>
        </Link>

      </div>
    </div>
  );
};

export default TeacherDashboard;