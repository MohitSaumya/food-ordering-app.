import React from 'react'
import './Footer.css'
import logo from '../../Images/logo.png'
import facebook_icon from '../../Images/facebook_icon.png'
import twitter_icon from '../../Images/twitter_icon.png'
import linkedin_icon from '../../Images/linkedin_icon.png'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
      <div className='footer-content-left'>
      <img src={logo} alt='' />
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting Industry.</p>
      <div className='footer-social-icons'>
      <img src={facebook_icon} alt='' />
      <img src={twitter_icon} alt='' />
      <img src={linkedin_icon} alt='' />
      </div>
      </div>
      <div className='footer-content-center'>
      <h2>COMPANY</h2>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Delivery</li>
        <li>Privacy policy</li>
      </ul>

      </div>
      <div className='footer-content-right'>
      <h2>GET IN TOUCH</h2>
      <ul>
        <li>7905420356</li>
        <li>mohitsingh2124@gmail.com</li>
      </ul>
      </div>
      
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 @ Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
