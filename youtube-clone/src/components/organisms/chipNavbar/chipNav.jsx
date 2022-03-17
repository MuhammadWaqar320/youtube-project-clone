import React from 'react'
import SingleChip from '../../atoms/singleChip/singleChip';
import './chipNav.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
const ChipNav = ({title}) => {
  const endpoint="http://localhost:5000/video/get";
  const [chiplist,setChiplist]=useState([]);
  const getVideosFromDb=async()=>
  {
   try {
      const {data}=await axios.get(endpoint)
      let chipListArray=[]
      for(let i in data)
      {
        chipListArray.push(data[i].title)

      }
      const uniqueChipList= Array.from(new Set(chipListArray))
      const _chiplistData=uniqueChipList.unshift("All")
      setChiplist(uniqueChipList)

   } catch (error) {
       console.log(error.message)
   }
  }

  useEffect(()=>
  {
      getVideosFromDb()
  })
  return (
    <div className='chip-nav'>
      {
        chiplist.map((item)=>
        {
          return(
            <SingleChip title={item} title_param={title?title:"All"}  />
          )
        
        })
      }
      
      
    </div>
  )
}

export default ChipNav