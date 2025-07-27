import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ExamManagment.css';

function ExamManagement() {
  const navigate = useNavigate();

  const [students] = useState([
    { id: 1, name: "Asma Sharif", email: "asma@example.com", status: "Active" },
    { id: 2, name: "Maryam Mehreen", email: "maryam@example.com", status: "Inactive" },
    { id: 3, name: "Bushra Nawaz", email: "Bushra@uni.edu", status: "Active" },
  ]);

  const [exams, setExams] = useState([
    { id: 1, title: 'Midterm 1', date: '2025-05-01', duration: '40 mins' },
    { id: 2, title: 'Final Quiz', date: '2025-04-15', duration: '90 mins' }
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [studentModalOpen, setStudentModalOpen] = useState(false);
  const [newExam, setNewExam] = useState({ id: '', title: '', date: '', duration: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [selectedExam, setSelectedExam] = useState(null);

  const handleAdd = () => {
    setNewExam({ id: '', title: '', date: '', duration: '' });
    setIsEditing(false);
    setModalOpen(true);
  };

  const handleEdit = (exam) => {
    setNewExam(exam);
    setIsEditing(true);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this exam?')) {
      setExams(exams.filter(e => e.id !== id));
    }
  };

  const handleReport = (exam) => {
    setSelectedExam(exam);
    setStudentModalOpen(true); // open student selector
  };

  const handleStudentSelect = (student) => {
    navigate('/report', { state: { exam: selectedExam, student } });
  };

  const handleSubmit = () => {
    if (!newExam.title || !newExam.date || !newExam.duration) {
      alert("Please fill all fields.");
      return;
    }
    if (isEditing) {
      setExams(exams.map(e => (e.id === newExam.id ? newExam : e)));
    } else {
      setExams([...exams, { ...newExam, id: Date.now() }]);
    }
    setModalOpen(false);
  };

  return (
    <div className="exam-container">
      <h2 className="exam">📚 Exam Management Panel</h2>
      <button className="add-btn" onClick={handleAdd}>➕ Add New Exam</button>

      <div className="table-wrapper">
        <table className="exam-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Date</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam, index) => (
              <tr key={exam.id}>
                <td>{index + 1}</td>
                <td>{exam.title}</td>
                <td>{exam.date}</td>
                <td>{exam.duration}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(exam)}>✏️</button>
                  <button className="delete-btn" onClick={() => handleDelete(exam.id)}>🗑️</button>
                  <button className="report-btn" onClick={() => handleReport(exam)}>📄</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>{isEditing ? '✏️ Edit Exam' : '➕ Add New Exam'}</h3>
            <input
              type="text"
              placeholder="Exam Title"
              value={newExam.title}
              onChange={(e) => setNewExam({ ...newExam, title: e.target.value })}
            />
            <input
              type="date"
              value={newExam.date}
              onChange={(e) => setNewExam({ ...newExam, date: e.target.value })}
            />
            <input
              type="text"
              placeholder="Duration (e.g. 60 mins)"
              value={newExam.duration}
              onChange={(e) => setNewExam({ ...newExam, duration: e.target.value })}
            />
            <div className="modal-actions">
              <button className="save-btn" onClick={handleSubmit}>{isEditing ? 'Update' : 'Add'}</button>
              <button className="cancel-btn" onClick={() => setModalOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {studentModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Select Student for Report</h3>
            {students.map((student) => (
              <div
                key={student.id}
                className="student-option"
                onClick={() => handleStudentSelect(student)}
              >
                👤 {student.name} - {student.email}
              </div>
            ))}
            <button onClick={() => setStudentModalOpen(false)}>❌ Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExamManagement;
