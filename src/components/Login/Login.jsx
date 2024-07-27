import React, { useState } from 'react';
import { CInput } from '../CInput/CInput';
import { loginUser } from '../../services/apiCalls';
import jwtDecode from 'jwt-decode';  // Corrected import syntax
import { useNavigate } from 'react-router-dom';
import banner from "/images/banner.png";
import "../../index.css"

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
        navigate('/profile');
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen"> {/* Centering within a full viewport height container */}
      <h1>Login</h1>
      <div>
        <CInput
          type="email"
          name="email"
          placeholder="Email"
          emitFunction={handleChange}
        />
      </div>
      <div>
        <CInput
          type="password"
          name="password_hash"
          placeholder="Password"
          emitFunction={handleChange}
        />
      </div>
      <CInput
        type="button"
        value="Login"
        clickFunction={login}
      />
      <img src={banner} alt="Banner" />
    </div>
  );
};