import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ReportPage.css';
import { FaBook, FaUser, FaArrowLeft } from 'react-icons/fa';

function ReportPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const exam = state?.exam;
  const student = state?.student;

  if (!exam || !student) return <p className="error-msg">⚠️ Missing data for report.</p>;

  return (
    <div className="report-container">
      <h2 className="report-title">📄 Result Detail</h2>

      <div className="card-container">
        <div className="report-card exam-card">
          <h3><FaBook /> Exam Information</h3>
          <p><strong>ID:</strong> {exam.id}</p>
          <p><strong>Title:</strong> {exam.title}</p>
          <p><strong>Date:</strong> {exam.date}</p>
          <p><strong>Duration:</strong> {exam.duration}</p>
        </div>

        <div className="report-card student-card">
          <h3><FaUser /> Student Information</h3>
          <p><strong>ID:</strong> {student.id}</p>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p>
            <strong>Status:</strong>{" "}
            <span className={`status-tag ${student.status === "Active" ? "active" : "inactive"}`}>
              {student.status}
            </span>
          </p>
        </div>
      </div>

      <button className="back-btn" onClick={() => navigate(-1)}>
        <FaArrowLeft /> Go Back
      </button>
    </div>
  );
}

export default ReportPage;
