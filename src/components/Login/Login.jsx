import React, { useState } from 'react';
import { loginUser } from '../../services/apiCalls';
import { useNavigate } from 'react-router-dom';
import banner from "/images/banner.png"
import { jwtDecode } from 'jwt-decode';
import './Login.css';

export const Login = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password_hash: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(credentials);
      if (response.success) {
        const decodedToken = jwtDecode(response.token);
        const passport = {
          token: response.token,
          tokenData: decodedToken,
        };
        localStorage.setItem("passport", JSON.stringify(passport));

        navigate('/profile');
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className='login-container'>
        <div className='login-card'>
          <h1 className='login-title'>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="login-form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="login-input"
                required
              />
            </div>
            <div className="login-form-group">
              <input
                type="password"
                name="password_hash"
                placeholder="Password"
                onChange={handleChange}
                className="login-input"
                required
              />
            </div>
            <button className="login-button" type="submit">Sign In</button>
          </form>
          <div className="login-link">
            Don&apos;t have an account? <a href="/register">Register here</a>
          </div>
        </div>
      </div>
      <div className="login-banner">
        <img src={banner} alt="Noble Art Studios" />
      </div>
    </>
  )
}