import React from 'react'
import './navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {  FiSearch } from "react-icons/fi";
import {  BsFillMicFill } from "react-icons/bs";
const NavBarMid = () => {
const [searchedWord,setSearchedWord]=useState("");
  return (
    <div>
    <form className="search-box">
      <input
        type="text"
        placeholder="Search"
        className="search-bar"
        value={searchedWord}
        onChange={(e)=>setSearchedWord(e.target.value)}
      ></input>
      <Link to={searchedWord?`/search/${searchedWord}`:`/`} className="search-btn">
        <FiSearch className="search-icon" />
      </Link>
      <div className="mic">
        <BsFillMicFill />
      </div>
    </form>
  </div>
  )
}

export default NavBarMid