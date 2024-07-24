import React from 'react'
import { CSurfer } from '../CSurfer/CSurfer'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="flex justify-space-between">
         <CSurfer path="/" content="Home"/>
         <CSurfer path="/services" content="Services"/>
         <CSurfer path="/appointments" content="Appointments"/>
         <CSurfer path="/register" content="Register"/>
         <CSurfer path="/login" content="Login"/>
         <CSurfer path="/profile" content="Profile"/>
    </div>
    </>
  )
}
