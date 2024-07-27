import { useState } from "react";
import { createAppointment } from "../../../services/apiCalls";
import { CInput } from "../../../components/CInput/CInput";
import "./NewApp.css"
import { useNavigate } from "react-router-dom";

export const NewApp = () => {
    const navigate = useNavigate();

    const [newAppointment, setNewAppointment] = useState({
      appDate: "",
      serviceID: "",
      artistID: ""
    });

  const passport = JSON.parse(localStorage.getItem("passport"));

  const inputHandler = (e) => {
    setNewAppointment({
      ...newAppointment,
      [e.target.name]: e.target.value,
    });
  };

  const services = [
    { id: 1, name: "Tattoo" },
    { id: 2, name: "Piercing" },
    { id: 3, name: "Tattoo removal" },
    { id: 4, name: "Piercing removal" },
    { id: 5, name: "Personalized tattoo design" },
  ];

  const artists = [
    { id: 1, name: "Monika Sanchez" },
    { id: 2, name: "Leonardo Perez" },
    { id: 3, name: "Elena Velazques" },
    { id: 4, name: "Patrik Ovedo" },
    { id: 5, name: "Ian Parker" },
  ];

  const handleSendAppointment = async () => {
    try {
      const result = await createAppointment(newAppointment, passport.token);
      if (result.success) {
        console.log(result);
        navigate('/appointments')
      }
    } catch (error) {
      console.log(error);
    }
  };

  const todayFullTimeString = new Date()
    .toISOString()
    .slice(0, new Date().toISOString().lastIndexOf(":"));

    return (
        <div className="appointment-section">
            <h2>Create New Appointment</h2>
            
            <div className="labin">
                <label className="label">
                    Appointment Date:
                    <input 
                        type="datetime-local" 
                        name="appDate"
                        value={newAppointment.appDate}
                        min={todayFullTimeString}
                        onChange={inputHandler} 
                        style={{ display: "block", marginTop: "5px", width: "100%" }}
                    />
                </label>
            </div>
    
            <div className="labin">
                <label className="label">
                    Service:
                    <select 
                        name="serviceID" 
                        value={newAppointment.serviceID}
                        onChange={inputHandler}
                        style={{ display: "block", marginTop: "5px", width: "100%" }}
                    >
                        <option value="">Select a service</option>
                        {services.map(service => (
                            <option key={service.id} value={service.id}>{service.name}</option>
                        ))}
                    </select>
                </label>
            </div>
    
            <div className="labin">
                <label className="label">
                    Artist:
                    <select 
                        name="artistID"
                        value={newAppointment.artistID}
                        onChange={inputHandler}
                        style={{ display: "block", marginTop: "5px", width: "100%" }}
                    >
                        <option value="">Select an artist</option>
                        {artists.map(artist => (
                            <option key={artist.id} value={artist.id}>{artist.name}</option>
                        ))}
                    </select>
                </label>
            </div>
    
            <div className="button-div">
                <CInput
                    type="button"
                    value="Create Appointment"
                    clickFunction={handleSendAppointment}
                    className="button-style"
                />
            </div>
        </div>
    );
}