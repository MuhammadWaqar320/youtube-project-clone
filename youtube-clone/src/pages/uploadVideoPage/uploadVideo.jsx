import React from 'react'
import Upload from '../../components/organisms/uploadVideo/upload';
import Navbar from '../../components/organisms/navbar/navbar';
import './uploadVideo.css';
const UploadVideo = () => {
  return (
    <div>
      <Navbar/>
      <div >
        <Upload/>
      </div>
    
    </div>
  )
}

export default UploadVideo