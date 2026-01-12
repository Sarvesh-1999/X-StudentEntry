import { useState } from "react";

export default function StudentEntryForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    grade: "",
  });

  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addStudent = () => {
    if (!formData.name || !formData.age || !formData.grade) return;

    setStudents([...students, formData]);
    // setFormData({ name: "", age: "", grade: "" });
  };

  const clearForm = () => {
    setFormData({ name: "", age: "", grade: "" });
  };

  const removeStudent = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Student Entry Form</h2>
        <p className="subtitle">Add students and review the list below.</p>

        <div className="form-row">
          <div>
            <label>Name</label>
            <input
              name="name"
              placeholder="e.g. MS Dhoni"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Age</label>
            <input
              name="age"
              placeholder="e.g. 14"
              value={formData.age}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Grade</label>
            <select name="grade" value={formData.grade} onChange={handleChange}>
              <option value="">Select grade</option>
              <option value="5">Class 5</option>
              <option value="6">Class 6</option>
              <option value="7">Class 7</option>
              <option value="8">Class 8</option>
              <option value="9">Class 9</option>
            </select>
          </div>
        </div>

        <div className="button-row">
          <button className="add-btn" onClick={addStudent}>
            Add Student
          </button>
          <button className="clear-btn" onClick={clearForm}>
            Clear
          </button>
        </div>

        {students.length === 0 ? (
          <div className="empty">No students added yet.</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Grade</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>Class {student.grade}</td>
                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => removeStudent(index)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
