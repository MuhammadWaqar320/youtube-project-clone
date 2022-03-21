import React from 'react';
import './comment_card.css';
import { AiOutlineLike,AiOutlineDislike} from "react-icons/ai";

const Comment_card = ({name,message,letter,bgColor}) => {
  return (
    <div className='comment-sub-class'>
    <div className='subscribe-img-row'>
        <div className='single-letter' style={{background:`${bgColor}`}}><span>{letter}</span> </div>
        <div className='subscribe-img-content'>
           <div className='name-class'>{name} </div> 
           <div className='message-sec'>{message}</div>
        </div>
       
    </div>

    <div className='reply-section'>
            <div><span> <AiOutlineLike/></span> <span>4</span> <span> <AiOutlineDislike/> </span>   <span>REPLY </span> </div>
        </div>
     
</div>
  )
}

export default Comment_card