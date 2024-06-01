import React from 'react'
import '../styles/section6.css'
import gquote from '../assets/gquote.png'

function Section6() {
  return (
    <section className='section6'>
      <article className='section6-article'>
        <div className='section6-article-head'>
          <p>&#8212; what our customer says &#8212;</p>
        </div>
        <div className='section6-article-cards'>

          <div className='section6-article-card'>
              <div className='section6-article-card-head'>
                  <img src={gquote}/>
              </div>
              <div className='section6-article-card-desc'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit, sed do eiusmod tempor incididunt ut labore et<br/> dolore magna aliqua</p>
              </div>
              <div className='section6-article-card-foot'>
                <p className='section6-article-card-foot-stars'>&#9733; &#9733; &#9733; &#9733; &#9733;</p>
                <p>Mandy Oza</p>
                <p>Xyz Company Ceo</p>
              </div>
          </div>

          <div className='section6-article-card'>
              <div className='section6-article-card-head'>
                  <img src={gquote}/>
              </div>
              <div className='section6-article-card-desc'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit, sed do eiusmod tempor incididunt ut labore et<br/> dolore magna aliqua</p>
              </div>
              <div className='section6-article-card-foot'>
                <p className='section6-article-card-foot-stars'>&#9733; &#9733; &#9733; &#9733; &#9733;</p>
                <p>Mandy Oza</p>
                <p>Xyz Company Ceo</p>
              </div>
          </div>

          <div className='section6-article-card'>
              <div className='section6-article-card-head'>
                  <img src={gquote}/>
              </div>
              <div className='section6-article-card-desc'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit, sed do eiusmod tempor incididunt ut labore et<br/> dolore magna aliqua</p>
              </div>
              <div className='section6-article-card-foot'>
                <p className='section6-article-card-foot-stars'>&#9733; &#9733; &#9733; &#9733; &#9733;</p>
                <p>Mandy Oza</p>
                <p>Xyz Company Ceo</p>
              </div>
          </div>

        </div>
        <div className='section6-article-buttons'>
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
      </article>
    </section>
  )
}

export default Section6
