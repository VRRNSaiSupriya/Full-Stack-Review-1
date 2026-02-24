const Courses = () => {
  return (
    <div className="dashboard">
      <h1>Courses</h1>

      <div className="dashboard-cards">

        <div className="card">
          <h3>Artificial Intelligence</h3>
          <p>Machine learning basics and algorithms.</p>
        </div>

        <div className="card">
          <h3>Cloud Computing</h3>
          <p>AWS, virtualization and deployment.</p>
        </div>

        <div className="card">
          <h3>Full Stack Development</h3>
          <p>React + Spring Boot applications.</p>
        </div>

      </div>
    </div>
  );
};

export default Courses;