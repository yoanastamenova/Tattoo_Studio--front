import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../../services/apiCalls';
import banner from "/images/banner.png"


export const Register = () => {
    const navigate = useNavigate();    //importing the hook needed for navigating around

    const [credentials, setCredentials] = useState({        //declaring credentials of the user needed 
        email: "",
        password_hash: "",
    })

    const handleChange = (e) => {
        console.log("HandleChange");
        setCredentials((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };

    const register = async () => {
        try {
            console.log(credentials);
            const response = await registerUser(credentials);

            if(response.success){
                navigate('/login')
            } else {
                alert(response.message)
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
      <>
        <div className='d-flex align-items-center justify-content-center'>
          <div className='mb-3' style={{ width: '100%', maxWidth: '400px' }}>
            <h1 className='text-center'>Register</h1>
            <br />
            <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
            </div>
            <br />
            <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="password_hash"
                  placeholder="Password"
                  onChange={handleChange}
                />
            </div>
            <br />
            <div className="d-grid">
                <button className="btn btn-primary" type="button" onClick={register}>Register</button>
            </div>
          </div>
        </div>
        <div className="mt-3">
              <img src={banner} alt="Register Banner" className="img-fluid" />
            </div>
      </>
    )
  }