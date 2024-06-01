import React from 'react'
import '../styles/section4.css'
import eimage from '../assets/eimage.png'
import esend from '../assets/esend.png'

function Section4() {
  return (
    <section className='section4'>
      <article className='section4-article'>
        <p className='section4-article-header'>&#8212; who we are &#8212;</p>
        <div className='section4-article-container'>

          <div className='section4-article-left'>
            <div className='section4-article-left-container'>
              <p>Community-focused initiatives such as partnerships<br/> with local farms or environmental organizations.</p>
              <p>Social media integration for sharing photos, reviews, And<br/> engaging with the veggie burger community.</p>
              <p>&#8212;&#8212;&#8212;</p>
              <p>Nutritional information provided for each menu item,<br/> catering to health-conscious customers.</p>
              <p>Wide range of veggie burger options including classic,<br/> gourmet, and customizable choices.</p>
              <div className='section4-article-left-footer'>
                <ul>
                  <li><img src={esend}/></li>
                  <li><p>Sher</p></li>
                </ul>
            </div>
            </div>
          </div>

          <div className='section4-article-right'>
            <img src={eimage}/>
          </div>

        </div>
      </article>
    </section>
  )
}

export default Section4
