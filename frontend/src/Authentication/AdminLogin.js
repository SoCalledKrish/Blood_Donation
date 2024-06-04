import React, { useState } from 'react';
import AdminLoginValidation from './AdminLoginValidation';

function AdminLogin() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = AdminLoginValidation(values);
        setErrors(validationErrors);

        // Prevent form submission if there are errors
        if (Object.keys(validationErrors).length === 0) {
            console.log("Form submitted successfully");
            // Add logic for successful form submission
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100' style={{ backgroundColor: '#B22222' }}>
            <div className='p-4 rounded w-25' style={{ backgroundColor: '#f0f0f0', color: '#333' }}>
                <h2 className='text-center mb-4' style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: '#B22222' }}>Admin Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label"><strong>Email</strong></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='Enter Email'
                            value={values.email}
                            onChange={handleInput}
                            className='form-control rounded-0' />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label"><strong>Password</strong></label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder='Enter Password'
                            value={values.password}
                            onChange={handleInput}
                            className='form-control rounded-0' />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type="submit" className='btn btn-success w-100 mb-3'>Log In</button>
                    <p className='text-center'>You agree to our terms and conditions</p>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;
