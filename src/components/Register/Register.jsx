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
    <h1>Register</h1>
    <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
    </div>
    <div>
        <input
          type="password"
          name="password_hash"
          placeholder="Password"
          onChange={handleChange}
        />
    </div>
    <input type="button" value="Register" onClick={register} />
    <img src={banner} />
    </>
  )
}
