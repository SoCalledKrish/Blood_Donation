import React from 'react';
import { Outlet } from 'react-router-dom';
import Adminnavbar from './Adminnavbar';
import './AdminLayout.css'; // Include any additional styling

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <Adminnavbar />
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
