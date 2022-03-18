import React from 'react'
import './card.css';
import {HiOutlineDotsVertical} from 'react-icons/hi';
import {FiPlay} from 'react-icons/fi';
import {BsDot} from 'react-icons/bs';
import Image_component from '../../atoms/imgComponent/image_component';

import { AiFillCheckCircle} from "react-icons/ai";


const Card = ({title,timestamp,image,author}) => {
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
                  <Image_component source={authorImag} Alt="author" Class='author-img' /><span>{author}</span><span className='check'><AiFillCheckCircle/></span>
               </div>
               <div class="title">
                  <h3>
                      {title}
                   </h3>
                
                  <span className='views'>3K views<BsDot/></span>  <span> {timestamp} </span><HiOutlineDotsVertical className='timestamp'/>
               </div>
             </div>
  
           </div>
  )
}

export default Card