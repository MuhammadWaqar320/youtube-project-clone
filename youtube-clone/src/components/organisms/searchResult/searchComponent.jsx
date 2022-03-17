import React from 'react'
import './searchComponent.css';
import Card from './../../molecules/thumbnailCard/card';
import axios from 'axios';
import { useEffect } from 'react';
import moment from 'moment';
import NoResult from '../../atoms/notFound/noResult';
import { useState } from 'react';
const SearchComponent = ({title}) => {
    const endpoint="http://localhost:5000/video/get";
    const [videos,setVideos]=useState([])
    const [isDisplayed,setIsDisplayed]=useState(false)
    const first3Char=title.substring(0,3)
    const getVideosFromDb=async()=>
    {
     try {
        const {data}=await axios.get(endpoint)
        let searchedResult=data.filter(item=>item.title.startsWith(first3Char))
        setVideos(searchedResult)
        console.log(first3Char)
     } catch (error) {
         console.log(error.message)
     }      
    }
    useEffect(()=>
    {
        getVideosFromDb()
        setTimeout(()=>
        {
            setIsDisplayed(true)
        },1200)
    })
        return (
            
            <div className="video-section">
                {
                 videos.length?
                    videos.map((item)=>
                    {
                        return(<>
                   
                         <Card timestamp={moment(parseInt(item.timestamps)).fromNow()} title={item.title} image={item.image} />
        
                        </>)
                    }):
                    isDisplayed?
                    <NoResult content="sorry " /> :
                    <span></span>  
                    }
                    
                </div>
          )
    
  
        
 
 
}

export default SearchComponent