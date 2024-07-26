import React from 'react'
import arrow from "/images/arrow.png"
import "./CTile.css"


export const CTile = ({title, img, subtitle, address, time, phone, email }) => {
  return (
    <div>
        <p className='title title-bold'> {title}   <img src={arrow} className='arrow'/></p>
        <p className='subtitle'> {subtitle} </p>
        <p className='address'>{address}</p>
        <p className='time'>{time}</p>
        <p className='phone'>{phone}</p>
        <p className='email'>{email}</p>
    </div>
  )
}
