import React, { useEffect, useState } from 'react'

export const NewApp = () => {
    const [newAppointment, setNewAppointment] = useState({
        appointment_date: "",
        service_id: "",
        artist_id: ""
    })

    useEffect(() => {
        console.log(newAppointment);
    }, [newAppointment])


  return (
    <div>
        <input type="datetime-local"
        min={todayString}
        value={newAppointment.date}
        name="date"
        onChange={(e) => inputHandler(e)} 
        />
        
    </div>
  )
}
