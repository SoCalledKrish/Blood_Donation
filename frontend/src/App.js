import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Authentication/Home";
import AdminLogin from "./Authentication/AdminLogin";
import DonorLogin from "./Authentication/DonorLogin";
import PatientLogin from "./Authentication/PatientLogin";
import PatientSignup from './Authentication/PatientSignup';
import DonorSignup from './Authentication/DonorSignup';
import AdminLayout from './Dashboards/Admindashboard/AdminLayout';
import Adminhome from './Dashboards/Admindashboard/Adminhome';
import BloodRequest from './Dashboards/Admindashboard/BloodRequest';
import BloodStock from './Dashboards/Admindashboard/BloodStock';
import Donation from './Dashboards/Admindashboard/Donation';
import Donor from './Dashboards/Admindashboard/Donor';
import Patient from './Dashboards/Admindashboard/Patient';
import RequestHistory from './Dashboards/Admindashboard/RequestHistory';
import "./App.css";

const Mainnavbar = () => (
  <nav>
    <ul className="navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
      <li>
        <Link to="/donor">Donor</Link>
      </li>
      <li>
        <Link to="/patient">Patient</Link>
      </li>
    </ul>
  </nav>
);

const App = () => {
  return (
    <BrowserRouter>
      <Mainnavbar />
      <Routes>
        {/* General routes */}
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<AdminLogin />} />
        <Route path="donor" element={<DonorLogin />} />
        <Route path="patient" element={<PatientLogin />} />
        <Route path="donorsignup" element={<DonorSignup />} />
        <Route path="patientsignup" element={<PatientSignup />} />

        {/* Admin routes */}
        <Route path="/admindashboard/*" element={<AdminLayout />}>
          <Route path="home" element={<Adminhome />} />
          <Route path="bloodrequest" element={<BloodRequest />} />
          <Route path="bloodstock" element={<BloodStock />} />
          <Route path="donation" element={<Donation />} />
          <Route path="donor" element={<Donor />} />
          <Route path="patient" element={<Patient />} />
          <Route path="requesthistory" element={<RequestHistory />} />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
export default App;
