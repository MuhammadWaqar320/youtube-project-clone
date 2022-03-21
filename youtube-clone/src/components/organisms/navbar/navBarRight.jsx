import React from 'react'
import './navbar.css';
import { RiVideoUploadLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { MdApps } from "react-icons/md";
import profile from "../../../assets/images/gerard.png";
import Image_component from '../../atoms/imgComponent/image_component';

const NavBarRight = () => {
  return (
    <div>
    <div className="user-options">
      <MdApps className="user-icon" />

      <RiVideoUploadLine className="user-icon" />
      <BsBell className="user-icon" />
      <div className="user-profile-pic">
        <Image_component source={profile} Alt="logo" Class="logo" />
      </div>
    </div>
  </div>
  )
}

export default NavBarRight