import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} className='logo'/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam dolor consectetur laudantium reiciendis quaerat sint ea, illo architecto nihil odit ducimus, placeat ipsa nam dolorum!</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
         <div className="footer-content-center">
           <h2>Office</h2>
           <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
           </ul>
         </div>
         <div className="footer-content-right">
            <h2>For Conversation</h2>
            <ul>
              <li>+91-9896946822</li>
              <li>உணவு@gmail.com</li>
            </ul>
         </div>
      </div>
      <hr/>
      <p className="footer-copyrights">
        Copyright 2021 &copy; All Rights Reserved
      </p>
    </div>
  )
}

export default Footer
