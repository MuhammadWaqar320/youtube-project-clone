import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import './videoCard.css';
import Card from '../../molecules/thumbnailCard/card';
import {useSelector } from 'react-redux';
import moment from 'moment';
const VideoCard = () => {

    const videosData= useSelector((state)=>state.AllVideos.allVideos);
  return (
    <div className="video-section">
        {
            videosData.map((item)=>
            {
                return(<>
              
                 <Card timestamp={moment(parseInt(item.timestamps)).fromNow()} title={item.title} id={item._id} image={item.image} author={item.author} />

                </>)
            })
        }
    
        </div>
  )
}

export default VideoCard