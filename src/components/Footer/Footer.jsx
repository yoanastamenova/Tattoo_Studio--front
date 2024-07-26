import React from 'react'
import "./Footer.css"
import { CTile } from '../CTile/CTile'
import logo from "/images/logo.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faInstagram, faFacebook, faXbox, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <>
    <hr />
    <img src={logo} />
    <hr />
    <div className='tiles'>
      <CTile 
      title="Valencia"
      subtitle="NOBLE ART VALENCIA | Tattoo & Piercing Studio"
      address="Av. del Regne de València, 8, 46005 València, Valencia"
      time="Tuesday - Saturday | 12:00 - 20:00"
      phone="+34 674 05 21 78"
      email="hellobeauty@nobleart.com"
       />
       <CTile 
      title="Madrid"
      subtitle="NOBLE ART MADRID | Tattoo & Piercing Studio"
      address="C. de Orense, 69, 28020 Madrid"
      time="Tuesday - Saturday | 12:00 - 20:00"
      phone="+34 641 12 93 40 "
      email="hellomadrid@nobleart.com"
       />
       <CTile 
      title="Zaragoza"
      subtitle="NOBLE ART ZARAGOZA | Tattoo & Piercing Studio"
      address="C. de Contamina, 16, 50003 Zaragoza"
      time="Tuesday - Saturday | 12:00 - 20:00"
      phone="+34 689 23 72 30 "
      email="hellozaragoza@nobleart.com"
       />
    </div>
    <hr />
    <div className='margin_top'>
      <div className='text'>
      <p>Cookies policy</p>
      <p>Privacy policy</p>
      <p>Terms and conditions</p>
      <p>Set cookies</p>
      </div>
      <div className='icons'>
      <div className='space-evenly'>
        <FontAwesomeIcon icon={faTiktok} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faXTwitter}/>
      </div>
      </div>
    </div>
    </>
  )
}
