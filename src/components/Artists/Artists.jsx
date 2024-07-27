import React, { useEffect, useState } from "react";
import { CCard } from "../CCard/CCard";
import "./Artists.css"

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
      {artists.map((artist, index) => (
        <CCard
          key={index}
          name={artist.first_name}
          surname={artist.last_name}
          specialization={artist.specialization}
          bio={artist.bio}
          style={artist.style}
        />
      ))}
    </>
  );
};
