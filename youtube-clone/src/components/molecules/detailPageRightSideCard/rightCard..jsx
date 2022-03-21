import React from 'react'
import './rightCard.css';
import moment from 'moment';
import Image_component from './../../atoms/imgComponent/image_component';
import RightCardContent from './rightCardContent';
import { Link } from 'react-router-dom';
const RightCard = ({item}) => {
  return (
    <Link to={`/videoDetail/${item._id}`} className='right-card-class'>
        <div className='card-image-class'>
          <Image_component source={item.image} Class="right-side-img" />
        </div>
        <div className='card-content-class'>
          <RightCardContent item={item} />
      
        </div>
    </Link>
  )
}

export default RightCard