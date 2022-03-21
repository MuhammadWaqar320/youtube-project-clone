import React from 'react'
import './searchComponent.css';
import Card from './../../molecules/thumbnailCard/card';
import axios from 'axios';
import { useEffect } from 'react';
import moment from 'moment';
import NoResult from '../../atoms/notFound/noResult';
import { useState } from 'react';
import { useSelector } from 'react-redux';
const SearchComponent = ({title}) => {
    const [videos,setVideos]=useState([])
    const videosData=useSelector((state)=>state.AllVideos.allVideos)
    const [isDisplayed,setIsDisplayed]=useState(false)
    const filteredData=async()=>
    {
        const first3Char=title.substring(0,3)
        let searchedResult=videosData.filter(item=>item.title.startsWith(first3Char))
        setVideos(searchedResult);
    }
    useEffect(()=>
    {
        filteredData();
    })
        return (
            
            <div className="video-section">
                {
                 videos.length?
                    videos.map((item)=>
                    {
                        return(<>
                   
                         <Card timestamp={moment(parseInt(item.timestamps)).fromNow()} title={item.title} id={item._id} image={item.image} author={item.author} />
        
                        </>)
                    }):
                    <NoResult content="Sorry dit not match try again with different keywords " />
                    }
                    
                </div>
          )
    
  
        
 
 
}

export default SearchComponent