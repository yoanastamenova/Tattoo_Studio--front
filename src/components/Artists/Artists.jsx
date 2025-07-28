import React, { useEffect, useState } from "react";
import { CCard } from "../CCard/CCard";
import "./Artists.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export const Artists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/artists")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        setArtists(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
    <div className="container" style={{ marginTop: '20px' }}>
        <div className="row">
         {artists.map((artist, index) => (
        <CCard
          key={artist.id}
          imageIndex={index} 
          name={artist.first_name}
          surname={artist.last_name}
          specialization={artist.specialization}
          bio={artist.bio}
          style={artist.style}
        />
      ))}
      </div>
      </div>
    </>
  );
};
