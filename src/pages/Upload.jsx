const Upload = () => {
  return (
    <div className="dashboard">
      <h1>Assignment Submission</h1>

      <div className="card" style={{ margin: "auto", width: "300px" }}>
        <input type="file" />
        <br /><br />
        <button className="btn">Submit Assignment</button>
      </div>
    </div>
  );
};

export default Upload;