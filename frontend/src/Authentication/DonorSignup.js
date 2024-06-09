import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DonorSignUpValidation from './DonorSignUpValidation';

function DonorSignup() {
    const navigate = useNavigate(); // Hook for programmatic navigation
    const [values, setValues] = useState({
        Username: '',
        age: '',
        bloodGroup: '',
        address: '',
        phone: '',
        email: '',
        disease: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = DonorSignUpValidation(values);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).every((key) => validationErrors[key] === "")) {
            try {
                await axios.post('http://localhost:3000/api/donors', values);
                setSubmitted(true);

                // Redirect to the login page after successful signup
                navigate('/donor');
            } catch (error) {
                console.error("Error submitting form", error);
            }
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#FF6347' }}>
            <div className='p-4 rounded w-75' style={{ backgroundColor: '#f0f0f0', color: '#333' }}>
                <h2 className='text-center mb-4' style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: '#FF6347' }}>Donor Signup</h2>
                {submitted ? (
                    <div className="alert alert-success" role="alert">
                        Signup successful! <Link to='/donor'>Go to Log In</Link>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="Username" className="form-label"><strong>Username</strong></label>
                            <input
                                type="text"
                                id="Username"
                                name="Username"
                                placeholder='Enter Username'
                                value={values.Username}
                                onChange={handleInput}
                                className='form-control rounded-0'
                            />
                            {errors.Username && <span className='text-danger'>{errors.Username}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label"><strong>Email</strong></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder='Enter Email'
                                value={values.email}
                                onChange={handleInput}
                                className='form-control rounded-0'
                            />
                            {errors.email && <span className='text-danger'>{errors.email}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="age" className="form-label"><strong>Age</strong></label>
                            <input
                                type="number"
                                id="age"
                                name="age"
                                placeholder='Enter Age'
                                value={values.age}
                                onChange={handleInput}
                                className='form-control rounded-0'
                            />
                            {errors.age && <span className='text-danger'>{errors.age}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="bloodGroup" className="form-label"><strong>Blood Group</strong></label>
                            <select
                                id="bloodGroup"
                                name="bloodGroup"
                                value={values.bloodGroup}
                                onChange={handleInput}
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
                            {errors.bloodGroup && <span className='text-danger'>{errors.bloodGroup}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label"><strong>Address</strong></label>
                            <textarea
                                id="address"
                                name="address"
                                placeholder='Enter Address'
                                value={values.address}
                                onChange={handleInput}
                                className='form-control rounded-0'
                                rows="3"
                            />
                            {errors.address && <span className='text-danger'>{errors.address}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label"><strong>Phone Number</strong></label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder='Enter Phone Number'
                                value={values.phone}
                                onChange={handleInput}
                                className='form-control rounded-0'
                            />
                            {errors.phone && <span className='text-danger'>{errors.phone}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="disease" className="form-label"><strong>Any Diseases</strong></label>
                            <textarea
                                id="disease"
                                name="disease"
                                placeholder='Enter any diseases'
                                value={values.disease}
                                onChange={handleInput}
                                className='form-control rounded-0'
                                rows="3"
                            />
                            {errors.disease && <span className='text-danger'>{errors.disease}</span>}
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
                                className='form-control rounded-0'
                            />
                            {errors.password && <span className='text-danger'>{errors.password}</span>}
                        </div>
                        <button type="submit" className='btn btn-success w-100 mb-3'>Sign Up</button>
                        <p className='text-center'>You agree to our terms and conditions</p>
                        <Link to='/donor' className='btn btn-primary w-100 mb-3 text-decoration-none'>Go to Log In</Link>
                    </form>
                )}
            </div>
        </div>
    );
}

export default DonorSignup;
