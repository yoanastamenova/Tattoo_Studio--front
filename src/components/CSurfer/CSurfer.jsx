import React from 'react'
import { useNavigate } from 'react-router-dom'

export const CSurfer = ({ path, content, icon, className}) => {
   const navigate = useNavigate();
  return (
    <div className={className} onClick={() => navigate(path)}>
    {content} {icon}
  </div>
  )
}
