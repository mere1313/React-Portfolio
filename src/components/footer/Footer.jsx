import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>My Portfolio</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiance">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href=""><BsFacebook /></a>
      <a href="https://gr.linkedin.com/in/dimitrios-merentitis-software-engineer" target="_blank"><BsLinkedin/></a>
      <a href="https://www.instagram.com/mere.d" target="_blank" ><BsFacebook/></a>
      <a href="https://www.facebook.com/mere13/" target="_blank" ><FaInstagram/></a> 
      </div>

      <div className="footer__copyright">
        <small>&copy; Merentitis Dimitrios. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer