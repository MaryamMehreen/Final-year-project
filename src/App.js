import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import StudentDetail from './pages/StudentDetail';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Selection from './pages/Selection';
import StartPage from './pages/startUp';
import ExamInstruction from './pages/ExamInstruction';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';
import StudentManagement from './pages/StudentManagement';
import ExamManagement from './pages/ExamManagment';
import AdminReport from './pages/AdminReport';
import EyeTrackingInfo from './pages/EyeTrackingInfo';
import StartTracking from './pages/StartTracking';
import CameraCheck from './pages/CameraCheck';
import TrackingReport from './pages/TrackingReport';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SubmitFeedback from './pages/SubmitFeedback';
import ViewFeedback from './pages/ViewFeedback';
import SignOut from './pages/Signout';
import Login from './pages/Login';
import UserProfileCard from './pages/UserProfile';
import ReportPage from './pages/ReportPage';
function AppContent() {
  const location = useLocation();

  const hideLayout =
    location.pathname === '/' ||
    location.pathname === '/selection' ||
    location.pathname === '/login' ||
    location.pathname === '/register';

  return (
    <>
      {hideLayout ? (
        <Routes>
          <Route path="/" element={<Selection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/selection" element={<Selection />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      ) : (
        <div className="app-container">
          <Sidebar />
          <div className="main-content">
            <Navbar />
            <div className="page-content">
              <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/UserProfileCard" element={<UserProfileCard />} />
                <Route path="/Report" element={<ReportPage />} />
                <Route path="/SignOut" element={<SignOut />} />
                <Route path="/instructions" element={<ExamInstruction />} />
                <Route path="/submit-feedback" element={<SubmitFeedback />} />
                <Route path="/AdminDashboard" element={<AdminDashboard />} />
                <Route path="/StudentManagement" element={<StudentManagement />} />
                <Route path="/view-feedback" element={<ViewFeedback />} />
                <Route path="/exam-management" element={<ExamManagement />} />
                <Route path="/EyeTrackingInfo" element={<EyeTrackingInfo />} />
                <Route path="/admin-report" element={<AdminReport />} />
                <Route path="/StartTracking" element={<StartTracking />} />
                <Route path="/camera-check" element={<CameraCheck />} />
                <Route path="/tracking-report" element={<TrackingReport />} />
                <Route path="/startUp" element={<StartPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/Dashboard" element={<Dashboard />} />
              </Routes>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
