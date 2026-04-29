import { useState } from "react";

function StudentRow({ student, index, updateScore }) {
  const [newScore, setNewScore] = useState(student.score);

  const handleSave = () => {
    if (newScore < 0 || newScore > 100) return;
    updateScore(index, newScore);
  };

  const isPass = student.score >= 40;

  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.score}</td>

      <td>
        {isPass ? (
          <span className="pass-badge">● PASS</span>
        ) : (
          <span className="fail">FAIL</span>
        )}
      </td>

      <td>
        <input
          value={newScore}
          onChange={(e) => setNewScore(e.target.value)}
        />
        <button onClick={handleSave}>SAVE</button>
      </td>
    </tr>
  );
}

export default StudentRow;