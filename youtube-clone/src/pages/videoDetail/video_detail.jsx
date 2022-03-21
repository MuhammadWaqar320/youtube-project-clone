import React from 'react'
import './video_detail.css';
import { useParams } from 'react-router-dom';
import Navbar from './../../components/organisms/navbar/navbar';
import DetailLeftSide from '../../components/organisms/detailLeftSide/detailLeftSide';
import DetailRightSide from '../../components/organisms/detailRightSide/detailRightSide';
const VideoDetail = () => {
     const {id}=useParams();
  return(
    <>
    <Navbar/>      
    <div className='detail-clas'>
      <div className='play-video-class'>
          <DetailLeftSide id={id} />
      </div>
      <div className='right-videos-list'>
          <DetailRightSide />
      </div>

    </div>
    </>
 
  )
}
export default VideoDetail