import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { profile, updateProfile } from '../../../services/apiCalls';
import { CInput } from "../../../components/CInput/CInput";
import "./Profile.css";
import banner from "/images/banner.png";

export const Profile = () => {
  const [profileData, setProfileData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    created_at: "",
    updated_at: ""
  });

  const [editData, setEditData] = useState({
    first_name: "",
    last_name: "",
    email: ""
  });
  const [editing, setEditing] = useState(false);
  const passport = JSON.parse(localStorage.getItem("passport"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!passport) {
      navigate("/login");
    } else {
      const bringProfile = async () => {
        const response = await profile(passport.token);
        setProfileData(response.data);
      }
      bringProfile();
    }
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  const editButtonHandler = () => {
    setEditData({
      first_name: profileData.first_name,
      last_name: profileData.last_name,
      email: profileData.email
    });
    setEditing(!editing);
  };

  const editInputHandler = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const confirmButtonHandler = async () => {
    try {
      const response = await updateProfile(editData, passport.token);
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      navigate(0);
    }
  };

  return (
    <div className="container text-center mt-4">
      <h2>Profile Info</h2>
      {editing ? (
        <>
          <CInput type="text" name="first_name" placeholder="First Name" value={editData.first_name} emitFunction={editInputHandler} />
          <CInput type="text" name="last_name" placeholder="Last Name" value={editData.last_name} emitFunction={editInputHandler} />
          <CInput type="email" name="email" placeholder="Email" value={editData.email} emitFunction={editInputHandler} />
          <button className="btn btn-primary mt-2" onClick={confirmButtonHandler}>Save Changes</button>
        </>
      ) : (
        <>
          <p>First Name: {profileData.first_name || "N/A"}</p>
          <p>Last Name: {profileData.last_name || "N/A"}</p>
          <p>Email: {profileData.email}</p>
          <p>Created At: {formatDate(profileData.created_at)}</p>
          <p>Updated At: {formatDate(profileData.updated_at)}</p>
          <button className="btn btn-secondary" onClick={editButtonHandler}>Edit</button>
        </>
      )}
      <img src={banner} className="img-fluid mt-3" alt="Profile Banner" />
    </div>
  );
};