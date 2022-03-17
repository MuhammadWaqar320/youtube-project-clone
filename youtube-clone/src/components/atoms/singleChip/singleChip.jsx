import React from 'react'
import './singleChip.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
const SingleChip = ({title,title_param}) => {

  console.log()
  return (
    <div className={`single-chip`}>
    
    <Link to={`/category/${title}`} className={`chip ${title==title_param?"chip-active":""}`}>
        {title}
    </Link>
    </div>
  )
}

export default SingleChip