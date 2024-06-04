import React from 'react';
import { Link } from 'react-router-dom';

function DonorSignup() {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#FF6347' }}>
      <div className='p-4 rounded w-75' style={{ backgroundColor: '#f0f0f0', color: '#333' }}>
        <h2 className='text-center mb-4' style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: '#FF6347' }}>Donor Signup</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label"><strong>Username</strong></label>
            <input 
              type="text" 
              id="name" 
              placeholder='Enter Username'
              className='form-control rounded-0'
            />
          </div>
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
            <label htmlFor="age" className="form-label"><strong>Age</strong></label>
            <input 
              type="number" 
              id="age" 
              placeholder='Enter Age'
              className='form-control rounded-0'
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="bloodGroup" className="form-label"><strong>Blood Group</strong></label>
            <select 
              id="bloodGroup" 
              className='form-control rounded-0'
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div className="mb-3">
          <label htmlFor="address" className="form-label"><strong>Address</strong></label>
          <textarea 
            id="address" 
            placeholder='Enter Address'
            className='form-control rounded-0'
            rows="3"
          ></textarea>
          </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label"><strong>Phone Number</strong></label>
          <input 
            type="tel" 
            id="phone" 
            placeholder='Enter Phone Number'
            className='form-control rounded-0'
          />
        </div>
        <div className="mb-3">
          <label htmlFor="diseases" className="form-label"><strong>Any Diseases</strong></label>
          <textarea 
            id="diseases" 
            placeholder='Enter any diseases'
            className='form-control rounded-0'
            rows="3"
          ></textarea>
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
          <button type="submit" className='btn btn-success w-100 mb-3'>Sign Up</button>
          <p className='text-center'>You agree to our terms and conditions</p>
          <Link to='/donor' type="submit" className='btn btn-success w-100 mb-3 text-decoration-none'>go to LogIn</Link>
        </form>
      </div>
    </div>
  );
}

export default DonorSignup;
