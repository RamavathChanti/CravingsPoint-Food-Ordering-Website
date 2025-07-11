import React from 'react'
import "./Footer.css"
import { assets }  from "../../assets"
const Footer = () => {
  return (
    <div className='footer' id="footer">
      <div className='footer-content'>
        <div className='footer-content-left'>
                <img  className="foodimg" src={assets.logo} alt=""/>
                <p>(WTF) WHAT THE FAMILY PACK</p>
                <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt=""/>
                <img src={assets.twitter_icon} alt=""/>
                <img src={assets.linkedin_icon} alt=""/>
                </div>  
        </div>

        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>Personal Details:</li>
                <li>+91 7569567472</li>
                <li>chantib017@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>Copyright 2024 @ Food.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
