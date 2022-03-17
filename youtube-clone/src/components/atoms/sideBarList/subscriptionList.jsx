import React from 'react';
import './subscriptionList.css';
const  SubscriptionList = ({title,image,active}) => {
  return (
    <>
        <a className={`nav-link ${active}`}>
          <img src={image}></img>  <span>{title}</span>
        </a>
    </>
  )
}

export default SubscriptionList