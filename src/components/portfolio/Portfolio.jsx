import React from 'react'
import './portfolio.css'
import IMG2 from '../../assets/portfolio2.png'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      <article className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={IMG2} alt="img1" />
          </div>
          <h3>Current Portfolio</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/mere1313/Portfolio" className='btn'>Github</a>
          <a href="home" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={IMG2} alt="img1" />
          </div>
          <h3>Simple Portfolio</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/mere1313/Portfolio-Simple-Website" className='btn'>Github</a>
          <a href="https://portofolio-simple.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={IMG2} alt="img1" />
          </div>
          <h3>Simple BirdGame</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/mere1313/BirdGame" className='btn'>Github</a>
          <a href="https://birdgame-mered.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={IMG2} alt="img1" />
          </div>
          <h3>Simple SaladBar</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/mere1313/SaladBar-MereD" className='btn'>Github</a>
          <a href="https://salad-bar-mered.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
