import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentManagement.css';

function StudentManagement() {
  const [students, setStudents] = useState([
    { id: 1, name: "Asma Sharif", email: "asma@example.com", status: "Active" },
    { id: 2, name: "Maryam Mehreen", email: "maryam@example.com", status: "Inactive" },
    { id: 3, name: "Bushra Nawaz", email: "Bushra@uni.edu", status: "Active" },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({ id: '', name: '', email: '', status: 'Active' });
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const filteredStudents = students.filter(s =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAdd = () => {
    setModalOpen(true);
    setNewStudent({ id: '', name: '', email: '', status: 'Active' });
    setIsEditing(false);
  };

  const handleEdit = (student) => {
    setModalOpen(true);
    setNewStudent(student);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };
const handleDetail = (student) => {
  navigate('/exam-management', { state: { student } }); // 👈 only pass that student
};


  const handleSubmit = () => {
    if (isEditing) {
      setStudents(students.map(s => (s.id === newStudent.id ? newStudent : s)));
    } else {
      setStudents([...students, { ...newStudent, id: Date.now() }]);
    }
    setModalOpen(false);
  };

  return (
    <div className="student-container">
      <h2>Student Management Panel</h2>

      <div className="top-bar">
        <input
          type="text"
          placeholder="🔍 Search by name or email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="add-btn" onClick={handleAdd}>➕ Add Student</button>
      </div>

      <table className="student-table">
        <thead>
          <tr>
            <th>🆔 ID</th>
            <th>👤 Name</th>
            <th>📧 Email</th>
            <th>📌 Status</th>
            <th>⚙️ Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map(s => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>
                <span className={`status-tag ${s.status === 'Active' ? 'active' : 'inactive'}`}>
                  {s.status}
                </span>
              </td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(s)}>✏️ Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(s.id)}>🗑️ Delete</button>
                <button className="detail-btn" onClick={() => handleDetail(s)}>📄 Detail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>{isEditing ? "Edit Student" : "Add New Student"}</h3>
            <input
              type="text"
              placeholder="Full Name"
              value={newStudent.name}
              onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email Address"
              value={newStudent.email}
              onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
            />
            <select
              value={newStudent.status}
              onChange={(e) => setNewStudent({ ...newStudent, status: e.target.value })}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <div className="modal-actions">
              <button onClick={handleSubmit}>{isEditing ? "✅ Update" : "➕ Add"}</button>
              <button onClick={() => setModalOpen(false)}>❌ Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentManagement;
