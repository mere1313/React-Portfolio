import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
            <div>
                <h4>HTML</h4>
                  <small className='text-align'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon' />
            <div>
                <h4>CSS</h4>
                  <small className='text-align'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
            <div>
                <h4>.NET</h4>
                  <small className='text-align'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon' />
            <div>
                <h4>JAVA</h4>
                  <small className='text-align'>Good</small>
            </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
            <div>
                <h4>REACT</h4>
                  <small className='text-align'>Experienced</small>
            </div>
            </article>
          </div>
        </div>
        <div className="experience__Backend">
        <h3>BackEnd Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
            <div>
                <h4>HTML</h4>
                  <small className='text-align'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon' />
            <div>
                <h4>CSS</h4>
                  <small className='text-align'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
            <div>
                <h4>JavaScript</h4>
                  <small className='text-align'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
            <div>
                <h4>MySqlServer</h4>
                  <small className='text-align'>Good</small>
            </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
            <div>
                <h4>Python</h4>
                  <small className='text-align'>Experienced</small>
            </div>
            </article>
          </div>
       </div>
      </div>
    </section>
  )
}

export default Experience
