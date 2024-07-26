import React from 'react'
import "./CCard.css"

export const CCard = ({name, description}) => {
  return (
    <div className='card'>
        <h4>{name}</h4>
        <p>{description}</p>
    </div>
  )
}
