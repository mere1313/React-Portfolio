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
          <h3>This is a portfolio item tittle</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/mere1313" className='btn'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={IMG2} alt="img1" />
          </div>
          <h3>This is a portfolio item tittle</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/mere1313" className='btn'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={IMG2} alt="img1" />
          </div>
          <h3>This is a portfolio item tittle</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/mere1313" className='btn'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={IMG2} alt="img1" />
          </div>
          <h3>This is a portfolio item tittle</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/mere1313" className='btn'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={IMG2} alt="img1" />
          </div>
          <h3>This is a portfolio item tittle</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/mere1313" className='btn'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={IMG2} alt="img1" />
          </div>
          <h3>This is a portfolio item tittle</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/mere1313" className='btn'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
