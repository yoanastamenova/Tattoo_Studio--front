import React, { useEffect, useState } from "react";
import { getAppointments } from "../../../services/apiCalls";
import banner from "/images/banner.png";
import { CInput } from "../../../components/CInput/CInput";

export const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const datosUser = JSON.parse(localStorage.getItem("passport")); // Assuming the user's token is stored here

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const result = await getAppointments(datosUser.token);
        if (result.success) {
          setAppointments(result.data);
        } else {
          console.error("Failed to fetch appointments:", result.message);
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, [datosUser.token]);

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };
  return (
    <>
    <div>
      {appointments.length > 0 ? (
        appointments.map((appointment, index) => (
          <div key={index}>
            <p>Appointment Date: {formatDate(appointment.appointment_date)}</p>
            <p>Service: {appointment.service.service_name}</p>
            <p>
              Artist: {appointment.artist.first_name}{" "}
              {appointment.artist.last_name}
            </p>
          </div>
        ))
      ) : (
        <p>No appointments found.</p>
      )}
      <CInput
        type="button"
        name="newAppointment"
        value="Create"
      />
      <CInput
        type="button"
        name="editAppointment"
        value="Edit"
      />
    </div>
     <img src={banner} />
     </>
  );
};
