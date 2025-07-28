import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

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
  
  const serviceImageMap = {
    1: "public/images/services/1.png",
    2: "public/images/services/2.png",
    3: "public/images/services/3.png",
    4: "public/images/services/4.png",
    5: "public/images/services/5.png",
  };

  return (
<div className="container" style={{ marginTop: '20px' }}>
          <div className="row">
            {services.map(service => (
                <div className="col-md-4" key={service.id}>
                    <div className="card">
                    <img src={serviceImageMap[service.id] || '/services/default.png'} className="card-img-top" />                        <div className="card-body">
                            <h5 className="card-title">{service.service_name}</h5>
                            <p className="card-text">{service.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
)
}