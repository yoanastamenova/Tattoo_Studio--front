import React from 'react'
import { CSurfer } from '../CSurfer/CSurfer'
import { useNavigate } from 'react-router-dom'
import logo from "/images/logo_inside.png"
import "./Header.css"

export const Header = () => {
  const navigate = useNavigate();

  const passport = JSON.parse(localStorage.getItem("passport"))
  let token;
  if(passport) {
    token = passport.token
  }

    // Logout function
    const handleLogout = () => {
      localStorage.removeItem("passport");  // Remove token
      navigate("/");  // Navigate to home page
    }

  return (
    <>
    <div className="flex justify-space-between">
    <img src={logo} className='logo_inside' />
         <CSurfer path="/" content="Home"/>
         <CSurfer path="/services" content="Services"/>
         { token ? (
         <>
         <CSurfer path="/profile" content="Profile"/>
         <CSurfer path="/appointments" content="Appointments"/>
         <div onClick={handleLogout}> LOGOUT </div>
         </>
         ) : (
         <>
         <CSurfer path="/register" content="Register"/>
         <div onClick={() => navigate("/login")}> Login </div>
         </>
         )}
    </div>
    </>
  )
}
