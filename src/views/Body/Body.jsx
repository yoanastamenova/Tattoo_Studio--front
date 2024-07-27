import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Register } from '../../components/Register/Register'
import { Home } from '../home/Home'
import { NotFound } from '../not found/NotFound'
import { Login } from '../../components/Login/Login'
import { Profile } from '../User/Profile/Profile'
import { Services } from '../../components/Services/Services'
import { Appointments } from '../User/appointments/appointments'
import { Artists } from '../../components/Artists/Artists'
import { NewApp } from '../User/newAppointment/NewApp'
import { Users } from '../Admin/Users/Users'

export const Body = () => {

  const passport = JSON.parse(localStorage.getItem("passport"));
  let role_id = null
  if (passport) {
    role_id = passport.tokenData.role_id;
  }

  return (
    <>
    <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/appointments/new" element={<NewApp />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        { role_id === 2 && 
        <Route path='/admin' element={<Users />}/>
        }
        </Routes>
    </>
  )
}
