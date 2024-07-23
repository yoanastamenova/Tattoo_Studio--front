import React from 'react'
import { CSurfer } from '../CSurfer/CSurfer'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="flex justify-space-between">
         <CSurfer path="/" content="Home"/>
         <CSurfer path="/Services" content="Services"/>
         <CSurfer path="/Appointments" content="Appointments"/>
         <CSurfer path="/Register" content="Register"/>
         <CSurfer path="/Login" content="Login"/>
    </div>
    </>
  )
}
