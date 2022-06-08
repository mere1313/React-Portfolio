import React from 'react';
import './about.css';
import ME from '../../assets/me5.png';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';


const About = () => {
  return (
    <section id="about">

      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About_Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Teamwork</h5>
              <small>Experienced</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>See Portfolio</small>
            </article>
          </div>
          <p>
          I'm looking to set some long term goals now. I realised 
          i'm being sidetracked by all the different technologies coming out 
          and I really want to settle down and focus on one thing. I believe 
          setting a definite goal will help me 
          achieve that. I know goals are personal and unique, 
          but I'm sure I can get some inspiration from someone.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>


    </section>
  )
}

export default About