import React from 'react';
import './rightCard.css';
import moment from 'moment';
import {BsDot} from 'react-icons/bs';
const RightCardContent = ({item}) => {
  return (
    <div>
        <div className='Title-class'>{item.title}</div>
        <div className='author-class'>{item.author} </div>
        <div className="views-rightside-class"><span>234 views <BsDot/></span> {moment(parseInt(item.timestamps)).fromNow()} </div>
    </div>
  )
}

export default RightCardContent