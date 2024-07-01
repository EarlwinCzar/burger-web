import React from "react";
import bsection1arrow from "../assets/bsection1arrow.png";
import aheadplay from "../assets/aheadplay.png";
import aheadstar from "../assets/aheadstar.png";
import aheadburger from "../assets/aheadburger.png";
import Polygon1 from "../assets/Polygon1.png";
import Polygon2 from "../assets/Polygon2.png";
import Polygon3 from "../assets/Polygon3.png";
import Polygon4 from "../assets/Polygon4.png";
import "../styles/section1.css";

function Section1() {
  return (
    <section className="section1 container">
      <article className="section1-article">
        <div className="section1-article-cards">
          <div className="section1-article-card1">
            <div className="section1-article-card1-container">
              <div className="section1-article-card1-header">
                <div className="section1-article-card1-header-left">
                  <p className="section1-article-card1-header-stars">
                    &#9733; &#9733; &#9733; &#9733; &#9733; &#124; 5.0
                  </p>
                  <p className="section1-article-card1-header-desc">
                    5K+ Happy Review
                  </p>
                </div>
                <div className="section1-article-card1-header-right">
                  <img src={bsection1arrow} />
                </div>
              </div>
              <div className="section1-article-card1-description">
                <p className="section1-article-card1-description-top">
                  Crispy, Crunchy, Veggie Deliciousness!
                </p>
                <p className="section1-article-card1-description-bottom">
                  Burgers That
                  <br /> Love the Earth!
                </p>
              </div>
              <div className="section1-article-card1-footer">
                <button>Explore</button>
                <img src={aheadplay} />
                <p>How to get order...</p>
              </div>
            </div>
          </div>

          <div className="section1-article-card2">
            <div className="section1-article-card2-container">
              <img className="section1-article-card2-star" src={aheadstar} />
              <p className="section1-article-card2-star-desc">
                75%
                <br /> OFF
              </p>
              <div className="section1-article-card2-container-burger">
                <img
                  className="section1-article-card2-burger"
                  src={aheadburger}
                />
                <img className="section1-article-card2-poly1" src={Polygon1} />
                <img className="section1-article-card2-poly2" src={Polygon2} />
                <img className="section1-article-card2-poly3" src={Polygon3} />
                <img className="section1-article-card2-poly4" src={Polygon4} />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Section1;
