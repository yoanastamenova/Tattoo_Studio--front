import React, { useState } from 'react';
import { loginUser } from '../../services/apiCalls';
import { useNavigate } from 'react-router-dom';
import banner from "/images/banner.png"
import { jwtDecode } from 'jwt-decode';


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

  const login = async () => {
    try {
      const response = await loginUser(credentials);
      if (response.success) {
        const decodedToken = jwtDecode(response.token);
        const passport = {
          token: response.token,
          tokenData: decodedToken,
        };
        localStorage.setItem("passport", JSON.stringify(passport));
        
        navigate('/profile'); // Navigate to profile page upon successful login
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className='d-flex align-items-center justify-content-center'>
        <div className='mb-3' style={{ width: '100%', maxWidth: '400px' }}>
          <h1 className='text-center'>Login</h1>
          <div className="form-group">
            <CInput
              type="email"
              name="email"
              placeholder="Email"
              emitFunction={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <CInput
              type="password"
              name="password_hash"
              placeholder="Password"
              emitFunction={handleChange}
              className="form-control"
            />
          </div>
          <div className="d-grid">
            <CInput
              type="button"
              name="button"
              value="Login"
              placeholder="Login"
              clickFunction={login}
              className="btn btn-primary"
            />
          </div>
        </div>
      </div>
      <div className="mt-3 text-center">
        <img src={banner} alt="Login Banner" className="img-fluid" />
      </div>
    </>
  )
}