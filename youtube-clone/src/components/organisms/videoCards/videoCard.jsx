import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import './videoCard.css';
import Card from '../../molecules/thumbnailCard/card';
import moment from 'moment';
const VideoCard = () => {
    const endpoint="http://localhost:5000/video/get";
    const [videos,setVideos]=useState([])
    const getVideosFromDb=async()=>
    {
     try {
        const allVideos=await axios.get(endpoint)
        setVideos(allVideos.data)
        console.log(videos)
     } catch (error) {
         console.log(error.message)
     }      
    }
    useEffect(()=>
    {
        getVideosFromDb()
    },[])
  return (
    <div className="video-section">
        {
            videos.map((item)=>
            {
                return(<>
              
                 <Card timestamp={moment(parseInt(item.timestamps)).fromNow()} title={item.title} image={item.image} />

                </>)
            })
        }
    
        </div>
  )
}

export default VideoCard