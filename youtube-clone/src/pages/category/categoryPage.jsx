import React from 'react'
import './categoryPage.css';
import { useParams } from 'react-router-dom';
import CategoryComponent from '../../components/organisms/categoryComponent/categoryComponent';
import Navbar from '../../components/organisms/navbar/navbar';
import SideBar from '../../components/organisms/sidebar/sideBar';
import ChipNav from '../../components/organisms/chipNavbar/chipNav';
const CategoryPage = () => {
    const {title}=useParams();
  return (
<>
<Navbar/>
<div className='category-page-class'>
 <div className='side-bar-class'>

    <SideBar/>
 </div>
 <div className='content-class'>
 <div className='chip-class'>
        <ChipNav title={title} />
        </div>
      <div className='content-sub-class'>
      <CategoryComponent title={title} />
      </div>

      
       
 </div>


</div>

</>
  )
}
export default CategoryPage

