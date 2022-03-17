import React from 'react'
import  './uploadVideoComponent.css';
import Button from '../../atoms/buttons/button';
import Input from '../../atoms/inputfield/input';
import { useState } from 'react';
import Uploadlogo from '../../atoms/uploadlogo/uploadlogo';
import {useNavigate } from 'react-router-dom'
import axios from 'axios';
const UploadvideoComponent = () => {
  const [title,setTitle]=useState("")
  const [image,setImage]=useState("")
  let navigate =useNavigate ();
  let timestamp=Date.now();
  const logo="https://cdn1.iconfinder.com/data/icons/online-video-creation/64/upload_video_content_to_youtube_website-512.png";
  const SaveVideoIntoDb=async(e)=>
  {
        e.preventDefault()
        const form_data=new FormData()
        form_data.append('title',title);
        form_data.append('image',image);
        form_data.append('timestamps',timestamp);
       await axios.post('http://localhost:5000/video/insert',form_data,{headers:{'content-type': 'multipart/form-data' }}).then(()=>
       {
         window.alert("Video uploaded successfully")
         navigate("/")
       })
      
  }
  return (
    <div className='upload-form'>
      <form className='form-class' onSubmit={SaveVideoIntoDb}>
          <Uploadlogo _img={logo} />
          <Input type="text" value={title} placeholder="Enter video title" onchange={(e)=>setTitle(e.target.value)}  label="Title"  /><br></br>
          <Input type="file"  placeholder="" label="Image" onchange={(e)=>setImage(e.target.files[0])}   />
     
          <Button label="Upload" type="submit"/>
      </form>
    </div>
  )
}

export default UploadvideoComponent