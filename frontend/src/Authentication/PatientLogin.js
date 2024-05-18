import React from 'react';
import { Link } from 'react-router-dom';

function PatientLogin() {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100' style={{ backgroundColor: '#8B0000' }}>
      <div className='p-4 rounded w-25' style={{ backgroundColor: '#f0f0f0', color: '#333' }}>
        <h2 className='text-center mb-4' style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: '#8B0000' }}>Patient Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label"><strong>Email</strong></label>
            <input 
              type="email" 
              id="email" 
              placeholder='Enter Email'
              className='form-control rounded-0'
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label"><strong>Password</strong></label>
            <input 
              type="password" 
              id="password" 
              placeholder='Enter Password' 
              className='form-control rounded-0'
            />
          </div>
          <button type="submit" className='btn btn-success w-100 mb-3'>Log In</button>
          <p className='text-center'>You agree to our terms and conditions</p>
          <Link to='/PatientSignup' type="submit" className='btn btn-success w-100 mb-3 text-decoration-none'>Create Account</Link>
        </form>
      </div>
    </div>
  );
}

export default PatientLogin;
