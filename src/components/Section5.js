import React from "react";
import "../styles/section5.css";
import fvector from "../assets/fvector.png";
import fdel from "../assets/fdel.png";
import fcollect from "../assets/fcollect.png";
import fbfast from "../assets/fbfast.png";
import carrow3 from "../assets/carrow3.png";

function Section5() {
  return (
    <section className="section5 container section">
      <article className="section5-article">
        <div className="section5-article-header">
          <p>&#8212; how does it work &#8212;</p>
          <img src={fvector} />
        </div>

        <div className="section5-article-cards">
          <div className="section5-article-card">
            <img className="section5-article-card-logo" src={fbfast} />
            <div className="section5-article-card-details">
              <p className="section5-article-card-details-header">
                Choose Your Meals
              </p>
              <p className="section5-article-card-details-desc">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit, sed
                <br /> do eiusmod tempor{" "}
              </p>
              <div>
                <img
                  className="section5-article-card-details-arrow"
                  src={carrow3}
                />
              </div>
            </div>
          </div>

          <div className="section5-article-card">
            <img className="section5-article-card-logo" src={fdel} />
            <div className="section5-article-card-details">
              <p className="section5-article-card-details-header">
                Track order
              </p>
              <p className="section5-article-card-details-desc">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit, sed
                <br /> do eiusmod tempor{" "}
              </p>
              <div>
                <img
                  className="section5-article-card-details-arrow"
                  src={carrow3}
                />
              </div>
            </div>
          </div>

          <div className="section5-article-card">
            <img className="section5-article-card-logo" src={fcollect} />
            <div className="section5-article-card-details">
              <p className="section5-article-card-details-header">
                Collect Order
              </p>
              <p className="section5-article-card-details-desc">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit, sed
                <br /> do eiusmod tempor{" "}
              </p>
              <div>
                <img
                  className="section5-article-card-details-arrow"
                  src={carrow3}
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Section5;
