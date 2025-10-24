import React from 'react'
import arrow from "/images/arrow.png"
import "./CTile.css"


export const CTile = ({title, subtitle, address, time, phone, email }) => {
  return (
    <div className='tile-container'>
        <p className='tile-title'>
          {title}
          <img src={arrow} className='arrow' alt="Arrow" />
        </p>
        <p className='tile-subtitle'>{subtitle}</p>
        <p className='tile-info'>{address}</p>
        <p className='tile-info'>{time}</p>
        <p className='tile-info'>{phone}</p>
        <p className='tile-info'>{email}</p>
    </div>
  )
}
