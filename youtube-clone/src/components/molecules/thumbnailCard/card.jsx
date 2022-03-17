import React from 'react'
import './card.css';
import {HiOutlineDotsVertical} from 'react-icons/hi';
import {FiPlay} from 'react-icons/fi';
const Card = ({title,timestamp,image}) => {
   const authorImag="https://yt3.ggpht.com/bpzY-S4DYlbTeOpY5hIA7qz_hcbMkgvLAugtwKBGTTImNnWAGudX0y53bo_fJZ0auypxrWkUiw=s88-c-k-c0x00ffffff-no-rj"
  return (
 
      <div class="video">
         <div className='container'>
         <div class="thumbnail">
            <img src={image} alt="" />
          </div>
            <div className='overlay'>
               <div className='overlayChild'>
               <FiPlay fontSize="25px"/>
               <span >PLAY</span>
               </div>  
            </div>
         </div>
      
            <div class="details">
               <div class="author">
                  <img src={authorImag} alt="" />
               </div>
               <div class="title">
                  <h3>
                      {title}
                   </h3>
                
                    <span> {timestamp} </span><HiOutlineDotsVertical className='timestamp'/>
               </div>
             </div>
  
           </div>
  )
}

export default Card