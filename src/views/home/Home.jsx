import React from 'react'
import studio from "../../../public/images/studio.jpg"
import "./Home.css"

export const Home = () => {
  return (
    <>
    <h1> Welcome to Noble Art! (◕‿◕✿) </h1>
    <img src={studio} className="imgHome"/>
    </>
  )
}
