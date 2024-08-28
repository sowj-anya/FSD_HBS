import React from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import AdminPage from "./AdminPage";
const Admin = () => {
  return (
    <div>
        <AdminPage />
    <div className="box">
    <div className="dashboard">
      <h1 className="dashboard-title">Welcome to the Admin Panel</h1>
        <ul className="dashboard-menu">
          <li className="dashboard-menu-item">
            <Link to="/admin-profile" className="dashboard-menu-link">
              Admin Profile
            </Link>
          </li>
          <li className="dashboard-menu-item">
            <Link to="/edithall" className="dashboard-menu-link">
                Add and Edit Hall
            </Link>
          </li>
          <li className="dashboard-menu-item">
            <Link to="/userbooking" className="dashboard-menu-link">
               View user bookings
            </Link>
          </li>
          <li className="dashboard-menu-item">
            <Link to="/usermanage" className="dashboard-menu-link">
              User Management
            </Link>
          </li>
        </ul>
    </div>
    </div>
    </div>
  );
}

export default Admin;
