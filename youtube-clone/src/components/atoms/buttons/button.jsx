import React from 'react'
import './buttons.css'
const Button = ({label,type}) => {
  return (
    <div>
        <button type={type} className='btn'>{label}</button>
    </div>
  )
}

export default Button