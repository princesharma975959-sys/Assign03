import { useState } from "react";
import Header from "./components/Header";
import AddStudentForm from "./components/AddStudentForm";
import StudentTable from "./components/StudentTable";

function App() {
  const [students, setStudents] = useState([
    { name: "Aman", score: 78 },
    { name: "Riya", score: 45 },
    { name: "Rahul", score: 30 },
    { name: "Simran", score: 90 },
  ]);

  const addStudent = (name, score) => {
    setStudents([...students, { name, score: Number(score) }]);
  };

  const updateScore = (index, score) => {
    const updated = [...students];
    updated[index].score = Number(score);
    setStudents(updated);
  };

  const total = students.length;
  const passed = students.filter((s) => s.score >= 40).length;
  const avg =
    students.reduce((sum, s) => sum + s.score, 0) / total || 0;

  return (
    <div className="app">
      <Header />
      <AddStudentForm addStudent={addStudent} />

      <div className="stats">
        <div className="card">
          <span>TOTAL</span>
          <h2>{total}</h2>
        </div>
        <div className="card">
          <span>PASSED</span>
          <h2>{passed}</h2>
        </div>
        <div className="card">
          <span>AVG SCORE</span>
          <h2>{avg.toFixed(0)}</h2>
        </div>
      </div>

      <StudentTable students={students} updateScore={updateScore} />
    </div>
  );
}

export default App;