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
    <img src={studio} className="imgHome"/>
    <h2> Much more than a tattoo studio </h2>
    <div className='left'>
      <img src={fine_line} className='featured'/>
      <img src={removal} />
    </div>
    <div className='right'>
      <img src={piercing} />
      <img src={artists} />
    </div>
    </>
  )
}
