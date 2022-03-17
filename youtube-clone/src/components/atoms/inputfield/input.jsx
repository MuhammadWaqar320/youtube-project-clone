import React from 'react'
import './input.css'
const Input = ({type,placeholder,value,label,onchange}) => {
  return (
    <>
    <label className='label'>{label}:</label><br></br>
    <input type={type} value={value} placeholder={placeholder} onChange={onchange} className='input-field' required></input>
    </>
  )
}

export default Input