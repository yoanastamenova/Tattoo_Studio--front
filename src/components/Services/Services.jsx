import React, { useEffect, useState } from 'react'
import { CCard } from "../CCard/CCard"

export const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/api/services')
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((res)=> {
      setServices(res.data)
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])
  
  return (
    <>
    {services.map((service, index) => (
        <CCard key={index} name={service.service_name} description={service.description}/>
			))}
		</>
  )
}
