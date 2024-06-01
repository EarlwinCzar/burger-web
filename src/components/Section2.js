import React from 'react'
import '../styles/section2.css'
import cbag from '../assets/cbag.png'
import cburger1 from '../assets/cburger1.png'
import cburger2 from '../assets/cburger2.png'
import cburger3 from '../assets/cburger3.png'
import cburger4 from '../assets/cburger4.png'
import ccard from '../assets/ccard.png'
import clike from '../assets/clike.png'
import carrow from '../assets/carrow.png'
import carrow2 from '../assets/carrow2.png'
import carrow3 from '../assets/carrow3.png'
import ccircle from '../assets/ccircle.png'




function Section2() {
  return (
    <section className='section2'>
      
      <article className='section2-article'>
        <div className='section2-article-container'>
          <div className='section2-article-container-header'>
            <p className='section2-article-container-header-head'>&#8208; Hot Items &#8208;</p>
            <p className='section2-article-container-header-desc'>Locally sourced, organic ingredients for a fresh and eco-friendly experience</p>
          </div>
          <div className='section2-article-container-cards'>

          <div className='section2-arrows'>
            <img src={carrow2}/>
          </div>

            <div className='section2-article-container-card'>
                <img src={ccard}/>
              <div className='section2-article-container-card-details'>
                <div className='section2-article-container-card-details-head'>
                  <img className='section2-article-container-burger-image special' src={cburger1}/>
                  <img className='section2-article-container-burger-like' src={clike}/>
                </div>
                <div className='section2-article-container-card-details-details'>
                  <p className='section2-article-container-card-details-details-title'>Veg Cheezy Burger</p>
                  <div className='section2-article-container-card-burger-details'>
                    <p className='section2-article-container-card-burger-price' >2.50</p>
                    <img src={cbag}/>
                  </div>
                </div>
                <img className='section2-article-container-card-burger-arrow' src={carrow}/>
              </div>
                
            </div>
            
            <div className='section2-article-container-card'>
                <img src={ccard}/>
              <div className='section2-article-container-card-details'>
                <div className='section2-article-container-card-details-head'>
                  <img className='section2-article-container-burger-image' src={cburger2}/>
                  <img className='section2-article-container-burger-like' src={clike}/>
                </div>
                <div className='section2-article-container-card-details-details'>
                  <p className='section2-article-container-card-details-details-title'>Veg Cheezy Burger</p>
                  <div className='section2-article-container-card-burger-details'>
                    <p className='section2-article-container-card-burger-price'>2.50</p>
                    <img src={cbag}/>
                  </div>
                </div>
                <img className='section2-article-container-card-burger-arrow' src={carrow}/>
              </div>

            </div>

            <div className='section2-article-container-card'>
                <img src={ccard}/>
              <div className='section2-article-container-card-details'>
                <div className='section2-article-container-card-details-head'>
                  <img className='section2-article-container-burger-image' src={cburger3}/>
                  <img className='section2-article-container-burger-like' src={clike}/>
                </div>
                <div className='section2-article-container-card-details-details'>
                  <p className='section2-article-container-card-details-details-title'>Veg Cheezy Burger</p>
                  <div className='section2-article-container-card-burger-details'>
                    <p className='section2-article-container-card-burger-price'>2.50</p>
                    <img src={cbag}/>
                  </div>
                </div>
                <img className='section2-article-container-card-burger-arrow' src={carrow}/>
              </div>

            </div>

            <div className='section2-article-container-card'>
                <img src={ccard}/>
              <div className='section2-article-container-card-details'>
                <div className='section2-article-container-card-details-head'>
                  <img className='section2-article-container-burger-image' src={cburger4}/>
                  <img className='section2-article-container-burger-like' src={clike}/>
                </div>
                <div className='section2-article-container-card-details-details'>
                  <p className='section2-article-container-card-details-details-title'>Veg Cheezy Burger</p>
                  <div className='section2-article-container-card-burger-details'>
                    <p className='section2-article-container-card-burger-price'>2.50</p>
                    <img src={cbag}/>
                  </div>
                </div>
                <img className='section2-article-container-card-burger-arrow' src={carrow}/>
              </div>

            </div>

            <div className='section2-arrows'>
              <img src={carrow3}/>
            </div>

          </div>
          <div className='section2-article-container-radio'>
            <form action="#">
              <ul>
                <li><input className="radio" type="radio" id="#" name="#" value="#"/></li>
                <li><input className="radio" type="radio" id="#" name="#" value="#"/></li>
                <li><input className="radio" type="radio" id="#" name="#" value="#"/></li>
                <li><input className="radio" type="radio" id="#" name="#" value="#"/></li>
              </ul>
            </form>
          </div>
        </div>
      </article>

    </section>
  )
}

export default Section2
