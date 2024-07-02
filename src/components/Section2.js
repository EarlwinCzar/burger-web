import React from "react";
import "../styles/section2.css";
import cbag from "../assets/cbag.png";
import cburger1 from "../assets/cburger1.png";
import cburger2 from "../assets/cburger2.png";
import cburger3 from "../assets/cburger3.png";
import cburger4 from "../assets/cburger4.png";
import ccard from "../assets/ccard.png";
import clike from "../assets/clike.png";
import carrow from "../assets/carrow.png";

function Section2() {
  return (
    <section className="section2 container section">
      <article className="section2-article">
        <div className="section2-article-container-header">
          <p className="section2-article-container-header-head">
            &#8208; Hot Items &#8208;
          </p>
          <p className="section2-article-container-header-desc">
            Locally sourced, organic ingredients for a fresh and eco-friendly
            experience
          </p>
        </div>
        <div className="section2-article-container-cards">
          <div className="section2-article-container-card">
            <div className="section2-article-container-card-details-head">
              <img src={cburger3} />
              <i class="fa-regular fa-heart"></i>
            </div>
            <div className="section2-article-container-card-details-details">
              <p className="section2-article-container-card-details-details-title">
                Veg Cheezy Burger
              </p>
              <div className="section2-article-container-card-burger-details">
                <p className="section2-article-container-card-burger-price">
                  2.50
                </p>
                <i class="fa-solid fa-bag-shopping"></i>
              </div>
            </div>
            <div className="section2-arrow">
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>

          <div className="section2-article-container-card">
            <div className="section2-article-container-card-details-head">
              <img src={cburger2} />
              <i class="fa-regular fa-heart"></i>
            </div>
            <div className="section2-article-container-card-details-details">
              <p className="section2-article-container-card-details-details-title">
                Veg Cheezy Burger
              </p>
              <div className="section2-article-container-card-burger-details">
                <p className="section2-article-container-card-burger-price">
                  2.50
                </p>
                <i class="fa-solid fa-bag-shopping"></i>
              </div>
            </div>
            <div className="section2-arrow">
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>

          <div className="section2-article-container-card">
            <div className="section2-article-container-card-details-head">
              <img src={cburger3} />
              <i class="fa-regular fa-heart"></i>
            </div>
            <div className="section2-article-container-card-details-details">
              <p className="section2-article-container-card-details-details-title">
                Veg Cheezy Burger
              </p>
              <div className="section2-article-container-card-burger-details">
                <p className="section2-article-container-card-burger-price">
                  2.50
                </p>
                <i class="fa-solid fa-bag-shopping"></i>
              </div>
            </div>
            <div className="section2-arrow">
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>

          <div className="section2-article-container-card">
            <div className="section2-article-container-card-details-head">
              <img src={cburger4} />
              <i class="fa-regular fa-heart"></i>
            </div>
            <div className="section2-article-container-card-details-details">
              <p className="section2-article-container-card-details-details-title">
                Veg Cheezy Burger
              </p>
              <div className="section2-article-container-card-burger-details">
                <p className="section2-article-container-card-burger-price">
                  2.50
                </p>
                <i class="fa-solid fa-bag-shopping"></i>
              </div>
            </div>
            <div className="section2-arrow">
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Section2;
