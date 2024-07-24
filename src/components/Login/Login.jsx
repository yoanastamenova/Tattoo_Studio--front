import React, { useState } from 'react'
import { CInput } from '../CInput/CInput';
import { loginUser } from '../../services/apiCalls';
import { jwtDecode } from 'jwt-decode';

export const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password_hash: "",
  });

  const handleChange = (e) => {
    console.log("HandleChange");
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

   const login = async () => {
    console.log("Login");
    console.log(credentials);
    try {
      const response = await loginUser(credentials)
      if (response.success) {
        const decodedToken = jwtDecode(response.token)
        console.log(decodedToken)
        const passport = {
          token: response.token,
          tokenData: decodedToken
        }
        localStorage.setItem("passport", JSON.stringify(passport))
      } else {
        alert(response.message)
      }
    } catch (error) {
      console.log(error)
    }
  };
  
  return (
    <>
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
        name="button"
        value="Login"
        placeholder="Login"
        clickFunction={login}
      />
    </>
  )
}
