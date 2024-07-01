import React from "react";
import "../styles/section3.css";
import dburgers from "../assets/dburgers.png";

function Section3() {
  return (
    <section className="section3 container">
      <article className="section3-article">
        <div className="section3-article-left">
          <p className="section3-article-left-desc">Get Up To</p>
          <p className="section3-article-left-esp">
            <span className="section3-article-left-50">50&#37; </span>OFF
          </p>
          <p className="section3-article-left-desc">On Your 2 Orders</p>
          <button>Order Now</button>
        </div>
        <div className="section3-article-right">
          <img src={dburgers} />
        </div>
      </article>
    </section>
  );
}

export default Section3;
