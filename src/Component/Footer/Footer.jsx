import React from 'react'
import { asset } from '../../assets/assets'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
      <div className="left">
        <img src={asset.logo} alt="" className='footer-logo' />
        <p>Build strength and confidence at our gym with state-of-the-art equipment, personalized training, and a motivating community</p>
      </div>
      <div className="Middle">
        <h2 className='middle-heading'>Address</h2>
        <p>Republic of Belarus
Minsk city
Dzerzhinsky Avenue 15</p>
      </div>
      <div className="right">
        <h2 className='contact-footer'>Contact</h2>
        <div className="right-phone">
            <img src={asset.call} alt="" />
            <p>+375(44)-777-24-12</p>
        </div>
        <div className="right-email">
            <img src={asset.email} alt="" />
            <p>gym24@gmail.com</p>
        </div>
        <div className="footer-socail-icon">
            <a href="/"><img className='cursor-pointer' src={asset.face} alt="" /></a>
            <a href="/"><img className='cursor-pointer' src={asset.insta} alt="" /></a>
            <a href="/"><img className='cursor-pointer' src={asset.twitter} alt="" /></a>
            <a href="/"><img className='cursor-pointer' src={asset.youtube} alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
