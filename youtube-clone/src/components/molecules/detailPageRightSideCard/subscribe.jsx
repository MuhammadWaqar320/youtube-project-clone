import React from 'react'
import Image_component from '../../atoms/imgComponent/image_component';
import Button from '../../atoms/buttons/button';
import './rightCard.css'
const Subscribe = ({title}) => {
    const img="https://blog.photoadking.com/wp-content/uploads/2021/06/1622523069009.jpg";
  return (
    <div className='subscribe-class'>
        <div className='subscribe-img-row'>
            <div><Image_component source={img} Alt="image" Class="subscribe-img"  /> </div>
            <div className='subscribe-img-content'>
               <div className='title-class'>{title} </div> 
               <div>45.6k subscribers</div>

            </div>
            <div className='subscribe-img-button'><Button Class="btn-class" type="submit" label="Subscribe" /> </div>
        </div>
        <Button Class="showmore-btn-class" type="submit" label="SHOW MORE" />
        <div>

        </div>
    </div>
  )
}

export default Subscribe