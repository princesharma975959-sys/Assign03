import { useState } from "react";

function AddStudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || score === "") return;

    addStudent(name, score);
    setName("");
    setScore("");
  };

  return (
    <div className="form-box">
      <div className="form-top">
        <span>● REGISTER STUDENT</span>
        <span>NEW ENTRY</span>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="Student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Score (0-100)"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />

        <button type="submit">+ ADD</button>
      </form>
    </div>
  );
}

export default AddStudentForm;