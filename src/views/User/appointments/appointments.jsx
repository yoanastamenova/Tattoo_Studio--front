import React, { useState } from 'react'

export const Appointments = () => {
  const [Appointments, setAppointments] = useState([])
  const [newAppoint, setNewAppoint] = useState({
    service_id: "",
    appointment_date: ""
  })
  return (
    <div>Appointments</div>
  )
}
