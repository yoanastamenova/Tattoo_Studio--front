import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/apiCalls';
import banner from "/images/banner.png";
import './Register.css';

export const Register = () => {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        email: "",
        password_hash: "",
    });

    const handleChange = (e) => {
        setCredentials((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser(credentials);
            if (response.success) {
                navigate('/login');
            } else {
                alert(response.message);
            }
        } catch (error) {
            console.error('Registration failed:', error);
        }
    }

    return (
      <>
        <div className='register-container'>
          <div className='register-card'>
            <h1 className='register-title'>Register</h1>
            <form onSubmit={handleSubmit}>
              <div className="register-form-group">
                  <input
                    type="email"
                    className="register-input"
                    name="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                    required
                  />
              </div>
              <div className="register-form-group">
                  <input
                    type="password"
                    className="register-input"
                    name="password_hash"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                  />
              </div>
              <button className="register-button" type="submit">Create Account</button>
            </form>
          </div>
        </div>
        <div className="register-banner">
          <img src={banner} alt="Noble Art Studios" />
        </div>
      </>
    )
  }