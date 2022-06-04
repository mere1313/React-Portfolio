import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://gr.linkedin.com/in/dimitrios-merentitis-software-engineer" target="_blank"><BsLinkedin/></a>
        <a href="https://www.instagram.com/mere.d" target="_blank" ><BsFacebook/></a>
        <a href="https://www.facebook.com/mere13/" target="_blank" ><FaInstagram/></a>      
    </div>
  )
}

export default HeaderSocials
