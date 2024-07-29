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
      const result = await deleteAppointment(userData.token, id);
      if (result.success) {
        const updatedAppointments = [...appointments];
        updatedAppointments.splice(index, 1);
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
    <div className="container mt-4">
    <div className="row">
      {appointments.length > 0 ? (
        appointments.map((appointment, index) => (
          <div key={appointment.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">Appointment Date: {formatDate(appointment.appointment_date)}</p>
                <p className="card-text">Service: {appointment.service.service_name}</p>
                <p className="card-text">Artist: {appointment.artist.first_name} {appointment.artist.last_name}</p>
                <button className="btn btn-primary me-2" onClick={() => navigate(`/appointments/edit/${appointment.id}`)}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDeleteAppointment(appointment.id, index)}>Delete</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="col-12">No appointments found.</p>
      )}
    </div>
    <CInput
      type="button"
      className="btn btn-success"
      value="Create new appointment"
      clickFunction={handleNewAppointment}
    />
    <img src={banner} className="img-fluid mt-3" />
  </div>
  );
};