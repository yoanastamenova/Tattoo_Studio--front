import React from 'react'
import "./CCard.css"

export const CCard = ({name, description, surname, 
  specialization, bio, style}) => {
  return (
    <div className='card'>
        <h4>{name}</h4>
        <h4>{surname}</h4>
        <p>{description}</p>
        <p>{specialization}</p>
        <p>{bio}</p>
        <p>{style}</p>
    </div>
  )
}
