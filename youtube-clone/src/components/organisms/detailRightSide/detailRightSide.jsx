import React from 'react'
import './detailRightSide.css';
import { useSelector } from 'react-redux';
import RightCard from '../../molecules/detailPageRightSideCard/rightCard.';
const DetailRightSide = () => {
  const videoDetail=useSelector((state)=>state.AllVideos.allVideos)
  return (
    <div>
      {
        videoDetail.map((item)=>
        {
          return(<RightCard  item={item}  />)
        })
      }
    </div>
  )
}

export default DetailRightSide