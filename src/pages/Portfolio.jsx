import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "Student Management System",
      description: "Web application to manage student records and marks.",
    },
    {
      title: "AI Maze Solver",
      description: "Solved maze problems using BFS, DFS and A* algorithms.",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built using React and CSS.",
    },
  ];

  return (
    <div className="page-container">
      <h2>Review Projects</h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button className="review-btn">Review</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;