import React from 'react'
import studio from "/images/studio.jpg"
import "./Home.css"
import fine_line from "/images/fine_line.jpeg"
import removal from "/images/removal.jpg"
import piercing from "/images/piercing.jpg"
import artists from "/images/artists.jpg"

export const Home = () => {
  return (
    <>
      <h1> Noble Art Studios </h1>
      <img src={studio} className="imgHome" alt="Studio"/>
      <h2> Much more than a tattoo studio </h2>
      
      <div className="main-wrapper">
        
        <div className='left'>
        <img src={fine_line} className='featured' alt="Fine Line"/>
        <img src={piercing} className='featured' alt="Piercing"/>
        </div>
        
        <div className='right'>
        <img src={removal} className='featured' alt="Removal"/>
          <img src={artists} className='featured' alt="Artists"/>
        </div>

      </div>

      <h2>It's not a tattoo, it's art on your skin</h2>
    </>
  )
}