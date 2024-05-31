import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Authentication/Home";
import AdminLogin from "./Authentication/AdminLogin";
import DonorLogin from "./Authentication/DonorLogin";
import PatientLogin from "./Authentication/PatientLogin";
import PatientSignup from './Authentication/PatientSignup';
import DonorSignup from './Authentication/DonorSignup';
import "./App.css";
const Layout = () => (
  <BrowserRouter>
    <div>
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

      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/admin" Component={AdminLogin} />
        <Route path="/donor" Component={DonorLogin} />
        <Route path="/patient" Component={PatientLogin} />
        <Route path="/DonorSignup" Component={DonorSignup} />
        <Route path="/PatientSignup" Component={PatientSignup} />
      </Routes>
    </div>
  </BrowserRouter>
);
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Layout />);
export default Layout;
