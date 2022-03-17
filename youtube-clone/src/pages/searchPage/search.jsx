import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../../components/organisms/navbar/navbar';
import SideBar from '../../components/organisms/sidebar/sideBar';
import SearchComponent from '../../components/organisms/searchResult/searchComponent';
import './search.css';
const Search = () => {
  const {keyword}=useParams()
  return (
    <>
    <Navbar/>
   <div className='search-page-class'>
     <div className='side-bar-class'>

        <SideBar/>
     </div>
     <div className='content-class'>
          <div className='content-sub-class'>
              <SearchComponent title={keyword.toLowerCase()} />
          </div>          
           
     </div>


   </div>
 
  </>
  )
}

export default Search