import React from 'react'
import "./CCard.css"

export const CCard = ({name, description, surname, 
  specialization, bio, style, appointment_date, service_id, artist_id}) => {
  return (
    <div className='card'>
        <h4>{name}</h4>
        <h4>{surname}</h4>
        <p>{description}</p>
        <p>{specialization}</p>
        <p>{bio}</p>
        <p>{style}</p>
        <h4>{appointment_date}</h4>
        <p>{service_id}</p>
        <p>{artist_id}</p>
    </div>
  )
}
