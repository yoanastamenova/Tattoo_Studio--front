import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Register } from '../../components/Register/Register'
import { Home } from '../home/Home'
import { NotFound } from '../not found/NotFound'
import { Login } from '../../components/Login/Login'
import { Profile } from '../User/Profile/Profile'
import { Services } from '../../components/Services/Services'
import { Appointments } from '../User/appointments/appointments'

export const Body = () => {
  return (
    <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}
