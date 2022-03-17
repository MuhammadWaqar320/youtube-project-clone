import React from 'react'
import './navbar.css';
import { RiVideoUploadLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { MdApps } from "react-icons/md";
import profile from "../../../assets/images/gerard.png";

const NavBarRight = () => {
  return (
    <div>
    <div className="user-options">
      <MdApps className="user-icon" />

      <RiVideoUploadLine className="user-icon" />
      <BsBell className="user-icon" />
      <div className="user-profile-pic">
        <img src={profile} className="logo" alt="logo"></img>
      </div>
    </div>
  </div>
  )
}

export default NavBarRight