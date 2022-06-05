import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'


const Contact = () => {

    return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>jim_mere@yahoo.gr</h5>
            <a href="mailto:jim_mere@yahoo.gr">Send a Message</a>
          </article>
          <article className="contact__option">
          <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Dimitrios Merentitis</h5>
            <a href="https://m.me/mere13">Send a Message</a>
          </article>
          <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+6978128646</h5>
            <a href="https://api.whatsapp.com/send?phone+6978128646">Send a Message</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact
