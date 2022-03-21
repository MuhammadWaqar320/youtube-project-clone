import React from 'react'
import './buttons.css'
const Button = ({label,type,Class}) => {
  return (
    <div>
        <button type={type} className={Class?Class:'btn'} >{label}</button>
    </div>
  )
}

export default Button