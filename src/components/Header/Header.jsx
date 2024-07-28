import React from "react";
import { useNavigate } from "react-router-dom";
import { CSurfer } from "../CSurfer/CSurfer";
import logo_svg from "/images/logo-svg.svg";
import '../../styles/tailwind.css'

export const Header = () => {
  const navigate = useNavigate();
  const passport = JSON.parse(localStorage.getItem("passport"));
  let token = passport?.token;

  const handleLogout = () => {
    localStorage.removeItem("passport");
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center border-b-2 border-black p-10 m-10 w-full mx-auto">
      <a onClick={() => navigate("/")} className="cursor-pointer">
        <img src={logo_svg} className="h-5 cursor-default" alt="Logo" />
      </a>
      <div className="flex justify-between cursor-pointer gap-8 items-center">
        <CSurfer 
          className="py-1.25 px-3.75 transition-all duration-300 ease-in-out hover:border-b-2 hover:border-green-400" 
          path="/" 
          content="Home" 
        />
        <CSurfer 
          className="py-1.25 px-3.75 transition-all duration-300 ease-in-out hover:border-b-2 hover:border-green-400" 
          path="/services" 
          content="Services" 
        />
        <CSurfer 
          className="py-1.25 px-3.75 transition-all duration-300 ease-in-out hover:border-b-2 hover:border-green-400" 
          path="/artists" 
          content="Artists" 
        />
        {token ? (
          <>
            <CSurfer 
              className="py-1.25 px-3.75 transition-all duration-300 ease-in-out hover:border-b-2 hover:border-green-400" 
              path="/profile" 
              content="Profile" 
            />
            <CSurfer 
              className="py-1.25 px-3.75 transition-all duration-300 ease-in-out hover:border-b-2 hover:border-green-400" 
              path="/appointments" 
              content="Appointments" 
            />
            <div 
              className="py-1.25 px-3.75 cursor-pointer transition-all duration-300 ease-in-out hover:border-b-2 hover:border-green-400" 
              onClick={handleLogout}
            >
              Logout
            </div>
          </>
        ) : (
          <>
            <CSurfer 
              className="py-1.25 px-3.75 transition-all duration-300 ease-in-out hover:border-b-2 hover:border-green-400" 
              path="/register" 
              content="Register" 
            />
            <CSurfer 
              className="py-1.25 px-3.75 transition-all duration-300 ease-in-out hover:border-b-2 hover:border-green-400" 
              path="/login" 
              content="Login" 
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;