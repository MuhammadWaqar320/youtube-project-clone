import React from 'react'
import './noResult.css';
const NoResult = ({content}) => {
  console.log(content)
  return (
    <div className='not-found'>{content}</div>
  )
}

export default NoResult