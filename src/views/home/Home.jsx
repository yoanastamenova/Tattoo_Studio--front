import React from 'react'
import studio from "/images/studio.jpg"
import "./Home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import fine_line from "/images/fine_line.jpeg"
import removal from "/images/removal.jpg"
import piercing from "/images/piercing.jpg"
import artists from "/images/artists.jpg"

export const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-4">Noble Art Studios</h1>
      <img src={studio} className="imgHome img-fluid" alt="Studio"/>
      <h2 className="text-secondary text-center mt-3">Much more than a tattoo studio</h2>
      
      <div className="row mt-4">
        <div className='col-md-6'>
          <img src={fine_line} className='img-fluid mb-3' alt="Fine Line"/>
          <img src={piercing} className='img-fluid' alt="Piercing"/>
        </div>
        <div className='col-md-6'>
          <img src={removal} className='img-fluid mb-3' alt="Removal"/>
          <img src={artists} className='img-fluid' alt="Artists"/>
        </div>
      </div>

      <h2 className="text-center text-info mt-4">It's not a tattoo, it's art on your skin</h2>
    </div>
  );
}