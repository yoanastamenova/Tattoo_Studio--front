import React from 'react'
import { useNavigate } from 'react-router-dom'
import missing from '/images/404.jpg'
import './NotFound.css'

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <h2 className="notfound-subtitle">Page Not Found</h2>
      <p className="notfound-message">
        Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
      </p>
      <img src={missing} alt="404 Error" className="notfound-image" />
      <button className="notfound-button" onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  )
}
