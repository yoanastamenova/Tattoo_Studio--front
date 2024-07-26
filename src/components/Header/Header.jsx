import React from "react";
import { useNavigate } from "react-router-dom";
import { CSurfer } from "../CSurfer/CSurfer";
import pic_logo from "/images/pic_logo.png"; // Update path as necessary
import "./Header.css";
import logo_svg from "/images/logo-svg.svg"

export const Header = () => {
  const navigate = useNavigate();
  const passport = JSON.parse(localStorage.getItem("passport"));
  let token = passport?.token;

  const handleLogout = () => {
    localStorage.removeItem("passport");
    navigate("/");
  };

  return (
    <div className="header">
      <a onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <img src={logo_svg} className="logo_inside" alt="Logo" />
      </a>
      <div className="nav-items">
        <CSurfer className="nav-item" path="/" content="Home" />
        <CSurfer className="nav-item" path="/services" content="Services" />
        <CSurfer className="nav-item" path="/artists" content="Artists" />
        {token ? (
          <>
            <CSurfer className="nav-item" path="/profile" content="Profile" />
            <CSurfer
              className="nav-item"
              path="/appointments"
              content="Appointments"
            />
            <div className="nav-item" onClick={handleLogout}>
              {" "}
              Logout
            </div>
          </>
        ) : (
          <>
            <CSurfer className="nav-item" path="/register" content="Register" />
            <CSurfer className="nav-item" path="/login" content="Login" />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
