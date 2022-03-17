import React from 'react'
import './uploadlogo.css'
const Uploadlogo = ({_img}) => {
  return (
    <div>
        <img src={_img} className='upload-logo'></img>
    </div>
  )
}

export default Uploadlogo