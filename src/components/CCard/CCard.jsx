import React from 'react'
import "./CCard.css"
import 'bootstrap/dist/css/bootstrap.min.css';


export const CCard = ({name, description, surname, 
  specialization, bio, style, appointment_date, service_id, artist_id, imageIndex }) => {
    const imagePath = `public/images/artists/${imageIndex + 1}.png`;
    console.log(imagePath);
    
    return (
    <>
    <div className="card">
      <div className="card-body">
      <img src={imagePath} className="card-img-top"  style={{ width: "400px", height: "auto" }}/>
        <h5 className="card-title">{name} {surname}</h5>
        <p className="card-text">{description}</p>
        <p>{specialization}</p>
        <p>{bio}</p>
        <p>{style}</p>
        <h4>{appointment_date}</h4>
        <p>{service_id}</p>
        <p>{artist_id}</p>
        </div>
    </div>
    </>
  )
}
