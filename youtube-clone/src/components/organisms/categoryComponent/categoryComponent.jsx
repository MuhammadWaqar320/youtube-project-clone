
import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Card from '../../molecules/thumbnailCard/card';
import moment from 'moment';
import { useSelector } from 'react-redux';
const CategoryComponent = ({title}) => {
    const AllVideos=useSelector((state)=>state.AllVideos.allVideos)
    const [videos,setVideos]=useState([])
    const Category=()=>
    {
        let filterdData;
        if(title=="All"){
           filterdData= AllVideos;
        }else{
            filterdData= AllVideos.filter(item=>item.title==title)
        }
        setVideos(filterdData)
    }
    useEffect(()=>
    {
        Category()
    })
  return (
    <div className="video-section">
        {
            videos.map((item)=>
            {
                return(<>
              
                 <Card timestamp={moment(parseInt(item.timestamps)).fromNow()} id={item._id} title={item.title} image={item.image} author={item.author} />
 
                </>)
            })
        }
    
        </div>
  )
}

export default CategoryComponent