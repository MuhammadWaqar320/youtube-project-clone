import React from 'react'
import './sideBarList.css';
import { Link } from 'react-router-dom';
const  SideBarList = ({title,icon,active,toNavigate}) => {
  return (
    <>
        <Link to={toNavigate} className={`nav-link ${active}`}>
            {icon} <span>{title}</span>
        </Link>
    </>
  )
}

export default SideBarList