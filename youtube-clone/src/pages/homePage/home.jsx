import React from 'react'
import Navbar from '../../components/organisms/navbar/navbar';
import SideBar from '../../components/organisms/sidebar/sideBar';
import ChipNav from '../../components/organisms/chipNavbar/chipNav';
import VideoCard from '../../components/organisms/videoCards/videoCard';
import './home.css'
const Home=()=>
{
  return (
  <>
    <Navbar/>
   <div className='home-page-class'>
     <div className='side-bar-class'>

        <SideBar/>
     </div>
     <div className='content-class'>
     <div className='chip-class'>
            <ChipNav/>
            </div>
          <div className='content-sub-class'>
            <VideoCard/>
          </div>

          
           
     </div>


   </div>
 
  </>
  

  )
}

export default Home