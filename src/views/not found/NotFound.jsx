import React from 'react'
import missing from '../../../public/images/404.jpg'

export const NotFound = () => {
  return (
    <>
    <h2> Error (404) Page Not Found ¯\_(ツ)_/¯</h2>
    <img src={missing} />
    </>
  )
}
