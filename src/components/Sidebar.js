import React from 'react';
import { NavLink } from 'react-router-dom';
// import { FaHome, FaInfoCircle, FaEnvelope, FaEye } from 'react-icons/fa';
// import './Sidebar.css';

function Sidebar() {
  return (
    
    <div className="sidebar-glass">
      <div className="sidebar-logo">
        <img src="/download.jpeg" alt="Riphah Logo" />
        <h3>Riphah LMS</h3>
      </div>

      <div className="sidebar-footer">
        <small>_______________________________________</small>
      </div>
      {/* Navigation Links First */}
      <ul className="sidebar-nav">
        <li>
          <NavLink to="/home" activeclassname="active-link" title="Home">
            {/* <FaHome className="sidebar-icon" /> */}
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Dashboard" activeclassname="active-link" title="About">
            {/* <FaInfoCircle className="sidebar-icon" /> */}
            <span>Graphical Representation</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/eye-tracking-info" activeclassname="active-link" title="Eye Tracking">
            {/* <FaEye className="sidebar-icon" /> */}
            <span>Real-time Video</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/submit-feedback" activeclassname="active-link" title="Eye Tracking">
            {/* <FaEye className="sidebar-icon" /> */}
            <span>Submit Feedback</span>
          </NavLink>
        </li>
         <li>
          <NavLink to="/view-feedback" activeclassname="active-link" title="Eye Tracking">
            {/* <FaEye className="sidebar-icon" /> */}
            <span>View Feedback</span>
          </NavLink>
        </li>
      </ul>

      {/* ✅ Now Logo/Image Comes After Icons */}
      <div className="sidebar-logo1">
        <img src="/img2.jpeg" alt="Riphah Logo" />
        
      </div>

      <div className="sidebar-footer">
        <small>Powered by Moellium LMS</small>
      </div>
    </div>


//  <li><Link to="/submit-feedback">Submit Feedback</Link></li>
//   <li><Link to="/view-feedback">View Feedback</Link></li>
  );
}

export default Sidebar;
