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
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex justify-between items-center px-12 py-5 max-w-full mx-auto">
        <a onClick={() => navigate("/")} className="cursor-pointer">
          <img src={logo_svg} className="h-10" alt="Noble Art Studios" />
        </a>
        <nav className="flex gap-10 items-center">
          <CSurfer
            className="text-black uppercase text-sm font-medium tracking-wide hover:text-green-500 transition-colors duration-300"
            path="/"
            content="Home"
          />
          <CSurfer
            className="text-black uppercase text-sm font-medium tracking-wide hover:text-green-500 transition-colors duration-300"
            path="/services"
            content="Services"
          />
          <CSurfer
            className="text-black uppercase text-sm font-medium tracking-wide hover:text-green-500 transition-colors duration-300"
            path="/artists"
            content="Artists"
          />
          {token ? (
            <>
              <CSurfer
                className="text-black uppercase text-sm font-medium tracking-wide hover:text-green-500 transition-colors duration-300"
                path="/profile"
                content="Profile"
              />
              <CSurfer
                className="text-black uppercase text-sm font-medium tracking-wide hover:text-green-500 transition-colors duration-300"
                path="/appointments"
                content="Appointments"
              />
              <button
                className="bg-red-600 text-white uppercase text-sm font-bold px-6 py-3 hover:bg-red-700 transition-colors duration-300"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <CSurfer
                className="bg-green-500 text-white uppercase text-sm font-bold px-6 py-3 hover:bg-green-600 transition-colors duration-300"
                path="/register"
                content="Register"
              />
              <CSurfer
                className="border-2 border-black text-black uppercase text-sm font-bold px-6 py-3 hover:bg-black hover:text-white transition-all duration-300"
                path="/login"
                content="Login"
              />
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;