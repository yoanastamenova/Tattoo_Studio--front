import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { profile, updateProfile } from '../../../services/apiCalls';
import { CInput } from "../../../components/CInput/CInput";
import "./Profile.css"
import banner from "/images/banner.png"


export const Profile = () => {
  const [profileData, setProfileData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    created_at: "",
    updated_at: ""
  })

  const [editData, setEditData] = useState({
    first_name: "",
    last_name: "",
    email: ""
  })
  const [editing, setEditing] = useState(false); 

  const passport = JSON.parse(localStorage.getItem("passport"));

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    return new Date(dateString)
    .toLocaleDateString("en-GB", options);
  };
  
  let token;
  const navigate = useNavigate();

  useEffect(() => {
    if (!passport) {
      navigate("/login");
    } else {
      const bringProfile = async () => {
        const response = await profile(passport.token);
        setProfileData(response.data);
        console.log(response);
      }
      bringProfile();
    }
  }, [])

  const editButtonHandler = () => {
    setEditData({
      first_name: profileData.first_name,
      last_name: profileData.last_name,
      email: profileData.email
    })
    setEditing(!editing)
  }

  const editInputHandler = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    })
    console.log("Editing the input", editData)
  }

  const confirmButtonHandler = async () => {
    try {
      const response = await updateProfile(editData, passport.token)
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
    navigate(0); 
  }
}

  return (
    <>
    <h2>Profile info: </h2>
    <p className={editing ? "hidden" : ""}>
      First name: {profileData.first_name ? profileData.first_name : "N/A"}
    </p>
    <CInput
      type="text"
      name="first_name"
      placeholder="First name: "
      className={editing ? "" : "hidden"}
      emitFunction={editInputHandler}
    />
     <p className={editing ? "hidden" : ""}>
      Last name: {profileData.last_name ? profileData.last_name : "N/A"}
    </p>
    <CInput
      type="text"
      name="last_name"
      placeholder="Last name: "
      className={editing ? "" : "hidden"}
      emitFunction={editInputHandler}
    />
    <p className={editing ? "hidden" : ""}>Email: {profileData.email}</p>
    <CInput
      type="email"
      name="email"
      placeholder={editData.email}
      className={editing ? "" : "hidden"}
      emitFunction={editInputHandler}
    />
    <p>Created At: {formatDate(profileData.created_at)}</p>
    <p>Updated At: {formatDate(profileData.updated_at)}</p>
    <CInput
      type="button"
      name="Edit"
      value={editing ? "Cancel" : "Edit"}
      clickFunction={editButtonHandler}
    />
    <CInput
      type="button"
      name="send"
      value="Save changes"
      className={editing ? "" : "hidden"}
      clickFunction={confirmButtonHandler}
    />
      <img src={banner} />
  </>
);
};