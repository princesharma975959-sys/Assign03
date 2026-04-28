import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";

function App() {
  const [students, setStudents] = useState([
    { name: "Arman", score: 78 },
    { name: "Riya", score: 45 },
    { name: "Rahul", score: 30 },
    { name: "Simran", score: 90 },
  ]);

  const addStudent = (name, score) => {
    setStudents([...students, { name, score: Number(score) }]);
  };

  const updateScore = (index, newScore) => {
    const updated = [...students];
    updated[index].score = Number(newScore);
    setStudents(updated);
  };

  const total = students.length;
  const passed = students.filter((s) => s.score >= 40).length;
  const avg =
    students.reduce((sum, s) => sum + s.score, 0) / total || 0;

  return (
    <div className="container">
      <Header />

      <AddStudentForm addStudent={addStudent} />

      <div className="stats">
        <div>Total: {total}</div>
        <div>Passed: {passed}</div>
        <div>Avg: {avg.toFixed(1)}</div>
      </div>

      <StudentTable students={students} updateScore={updateScore} />
    </div>
  );
}

export default App;