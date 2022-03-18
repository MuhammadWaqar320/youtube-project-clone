
import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Card from '../../molecules/thumbnailCard/card';
import moment from 'moment';
const CategoryComponent = ({title}) => {
    const endpoint="http://localhost:5000/video/get";
    const [videos,setVideos]=useState([])
   
    const getVideosFromDb=async()=>
    {
     try {
        const {data}=await axios.get(endpoint)
        let filterdData;
        if(title=="All"){
           filterdData=data;
        }else{
            filterdData=data.filter(item=>item.title==title)
        }
        setVideos(filterdData)
        console.log(videos)
     } catch (error) {
         console.log(error.message)
     }      
    }
    useEffect(()=>
    {
        getVideosFromDb()
    })
  return (
    <div className="video-section">
        {
            videos.map((item)=>
            {
                return(<>
              
                 <Card timestamp={moment(parseInt(item.timestamps)).fromNow()}  title={item.title} image={item.image} author={item.author} />

                </>)
            })
        }
    
        </div>
  )
}

export default CategoryComponent