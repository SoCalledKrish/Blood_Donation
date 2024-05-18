import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLogin from './Authentication/AdminLogin';
import DonorLogin from './Authentication/DonorLogin';
import PatientLogin from './Authentication/PatientLogin';
import PatientSignup from './Authentication/PatientSignup';
import DonorSignup from './Authentication/DonorSignup';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/donor" element={<DonorLogin />} />
        <Route path="/patient" element={<PatientLogin />} />
        <Route path="/PatientSignup" element={<PatientSignup />} />
        <Route path="/DonorSignup" element={<DonorSignup />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
