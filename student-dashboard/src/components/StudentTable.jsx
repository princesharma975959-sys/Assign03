import StudentRow from "./StudentRow";

function StudentTable({ students, updateScore }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
          <th>Status</th>
          <th>Update</th>
        </tr>
      </thead>

      <tbody>
        {students.length === 0 ? (
          <tr>
            <td colSpan="4">No students yet</td>
          </tr>
        ) : (
          students.map((student, index) => (
            <StudentRow
              key={index}
              student={student}
              index={index}
              updateScore={updateScore}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

export default StudentTable;