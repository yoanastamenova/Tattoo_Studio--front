import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Register } from '../../components/Register/Register'
import { Home } from '../home/Home'
import { NotFound } from '../not found/NotFound'
import { Login } from '../../components/Login/Login'
import { Profile } from '../Profile/Profile'

export const Body = () => {
  return (
    <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}
