import React from 'react';
import './detailLeftSide.css';
import Image_component from '../../atoms/imgComponent/image_component';
import { useSelector } from 'react-redux';
import {FiPlay,FiVolume2} from 'react-icons/fi';
import {ImNext2,ImYoutube} from 'react-icons/im';
import {AiOutlineSetting} from 'react-icons/ai';
import HrLine from '../../atoms/horizontalLine/hrLine';
import {RiFullscreenLine,RiShareForwardLine} from 'react-icons/ri';
import {BsDot} from 'react-icons/bs';
import {MdAutorenew} from 'react-icons/md';

import {CgMiniPlayer} from 'react-icons/cg';
import {MdOutlineSubtitles,MdOutlineSaveAlt} from 'react-icons/md';
import {BiLike,BiDislike} from 'react-icons/bi';
import {HiOutlineScissors} from 'react-icons/hi';
import DetailLeftSubSide from './detailLeftSubSide';
import Subscribe from '../../molecules/detailPageRightSideCard/subscribe';
import Comment_card from '../../molecules/commentCard/comment_card';
const DetailLeftSide = ({id}) => {
const videoDetail=useSelector((state)=>state.AllVideos.allVideos.find(item=>item._id==id))
const date=new Date(parseInt(videoDetail.timestamps));
var options = {
  year: 'numeric', month: 'numeric', day: 'numeric',
};
const exact_date=date.toLocaleDateString('en',options)
  return (
    <>
        <div className='container'>
        <div>
            <Image_component source={videoDetail.image} Class="detail-img" Alt="Video" />
        </div>
        <div className='overlay'>
              
             
               <ImYoutube className="youtube-logo"/>
      
               <div className='bottom-options'>
                <div className='bottom-left'>
               
                 <FiPlay className='video-button'/>
                  <ImNext2 className='video-button' />
                  <FiVolume2 className='video-button' />
                </div>
                <div className='bottom-right'>
                  <MdAutorenew className='video-button' />
                  <MdOutlineSubtitles className='video-button' />
                  <AiOutlineSetting className='video-button'/>
                  <CgMiniPlayer className='video-button'/>
                  <RiFullscreenLine />
                </div>
               </div>
            </div>
    </div>
    <div className='video-bottom-deta
      il'>
      <div className='detail-info'>
      {videoDetail.title} | {videoDetail.author}
      </div>
        
  <DetailLeftSubSide exact_date={exact_date} />
    </div>
    <Subscribe title={videoDetail.title} />
    <div className='comments-section'>
      <span className='total-comments'>3 Comments</span>
     <Comment_card name="Ali ahmad" message="this is very nice movie" bgColor="brown" letter="A" />
     <Comment_card name="M. Asim" message="I like it" bgColor="grey" letter="M" />
     <Comment_card name="Hafiz ahmad" message="this is my best movie" bgColor="black" letter="H" />
    </div>
    </>
  
  )
}

export default DetailLeftSide
