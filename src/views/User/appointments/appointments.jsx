import React, { useEffect, useState } from "react";
import { deleteAppointment, getAppointments } from "../../../services/apiCalls";
import banner from "/images/banner.png";
import { CInput } from "../../../components/CInput/CInput";
import { useNavigate } from "react-router-dom";

export const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const userData = JSON.parse(localStorage.getItem("passport"));
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const result = await getAppointments(userData.token);
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
  }, [userData.token]);

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  const handleNewAppointment = () => {
    navigate("/appointments/new");
  };
  
  const handleDeleteAppointment = async (id, index) => {
    try {
      // Assuming `deleteAppointment` uses `(token, id)` as its parameters
      const result = await deleteAppointment(userData.token, id);
      if (result.success) {
        const updatedAppointments = [...appointments];
        updatedAppointments.splice(index, 1); // Properly use `index` to delete from state
        setAppointments(updatedAppointments);
        alert("Appointment successfully deleted.");
      } else {
        console.error("Failed to delete appointment:", result.message);
        alert("Failed to delete appointment.");
      }
    } catch (error) {
      console.error("Error deleting appointment:", error);
      alert("Error deleting appointment.");
    }
  };

  return (
    <>
      <div>
        {appointments.length > 0 ? (
          appointments.map((appointment, index) => (
            <div key={appointment.id}>
              <p>
                Appointment Date: {formatDate(appointment.appointment_date)}
              </p>
              <p>Service: {appointment.service.service_name}</p>
              <p>
                Artist: {appointment.artist.first_name}{" "}
                {appointment.artist.last_name}
              </p>
              <button >
                Edit
              </button>{" "}
              <button
                onClick={() => handleDeleteAppointment(appointment.id, index)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No appointments found.</p>
        )}
        <br></br>
        <CInput
          type="button"
          name="newAppointment"
          value="Create new appointment"
          clickFunction={handleNewAppointment}
        />
      </div>
      <img src={banner} />
    </>
  );
};
