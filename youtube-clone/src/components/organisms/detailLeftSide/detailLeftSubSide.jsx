import React from 'react'
import './detailLeftSide.css';
import HrLine from '../../atoms/horizontalLine/hrLine';
import {RiFullscreenLine,RiShareForwardLine} from 'react-icons/ri';
import {BsDot} from 'react-icons/bs';
import {MdAutorenew} from 'react-icons/md';

import {CgMiniPlayer} from 'react-icons/cg';
import {MdOutlineSubtitles,MdOutlineSaveAlt} from 'react-icons/md';
import {BiLike,BiDislike} from 'react-icons/bi';
import {HiOutlineScissors} from 'react-icons/hi';
const DetailLeftSubSide = ({exact_date}) => {
  return (
    <div className='share-row-class'>
    <div className='views-class'>
      <span>
      32324 views
      </span>
     <BsDot fontSize={12}/> {exact_date}
    </div>
    <div className='share-child-class'>
      <span>   3.4k </span>
        <BiLike/>
      </div>
      <div className='share-child-class'>
       <span>  DISLIKE </span>
        <BiDislike/>
      </div>
      <div className='share-child-class'>
       <span>  CLIP </span>
        <HiOutlineScissors />
      </div>

      <div className='share-child-class'>
       <span>  SHARE </span>
      <RiShareForwardLine fontSize={22}/>
      </div>
      <div className='share-child-class'>
     <span>    SAVE  </span>
        <MdOutlineSaveAlt fontSize={21} />
      </div>
  </div>
  )
}

export default DetailLeftSubSide