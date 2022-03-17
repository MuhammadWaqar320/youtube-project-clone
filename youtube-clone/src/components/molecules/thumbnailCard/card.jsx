import React from 'react'
import './card.css';
import {HiOutlineDotsVertical} from 'react-icons/hi';
const Card = ({title,timestamp,image}) => {
  return (
 
      <div class="video">
         <div className='container'>
         <div class="thumbnail">
            <img src={image} alt="" />
          </div>
            <div className='overlay'>

                  <p className='text'>Play</p>
            </div>
         </div>
      
            <div class="details">
               <div class="author">
                  <img src="https://yt3.ggpht.com/bpzY-S4DYlbTeOpY5hIA7qz_hcbMkgvLAugtwKBGTTImNnWAGudX0y53bo_fJZ0auypxrWkUiw=s88-c-k-c0x00ffffff-no-rj" alt="" />
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