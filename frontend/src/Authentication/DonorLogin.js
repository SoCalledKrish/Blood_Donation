import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function DonorLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/login', { email, password });
            // Redirect to another page or show success message
        } catch (error) {
            setError('Invalid credentials');
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100' style={{ backgroundColor: '#FF6347' }}>
            <div className='p-4 rounded w-25' style={{ backgroundColor: '#f0f0f0', color: '#333' }}>
                <h2 className='text-center mb-4' style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: '#FF6347' }}>Donor Login</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label"><strong>Email</strong></label>
                        <input 
                            type="email" 
                            id="email" 
                            placeholder='Enter Email'
                            className='form-control rounded-0'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label"><strong>Password</strong></label>
                        <input 
                            type="password" 
                            id="password" 
                            placeholder='Enter Password' 
                            className='form-control rounded-0'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className='btn btn-success w-100 mb-3'>Log In</button>
                    <p className='text-center'>You agree to our terms and conditions</p>
                    <Link to='/DonorSignup' className='btn btn-success w-100 mb-3 text-decoration-none'>Create Account</Link>
                </form>
            </div>
        </div>
    );
}

export default DonorLogin;
