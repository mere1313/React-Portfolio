import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Work on my own projects to develop UI design skills.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Develop a portfolio to showcase your UI design work.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Full Stack Web Development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>HTML5/CSS Development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Custom Web App Development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>CMS Design and Development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data Migration, Support and Maintenance.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Build future-proof web products</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Set clear goals</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Develop a design vision.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Analyze and iterate.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Measure and optimize.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services