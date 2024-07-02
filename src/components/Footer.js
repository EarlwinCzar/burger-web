import React from "react";
import "../styles/footer.css";
import aheadlogo from "../assets/aheadlogo.png";
import carrow3 from "../assets/carrow3.png";

function Footer() {
  return (
    <footer className="footer container section">
      <div className="footer-container ">
        <div className="footer-container-details ">
          <div className="footer-container-details-1">
            <div className="footer-container-details-1-head">
              <img src={aheadlogo} />
              <p>burger</p>
            </div>
            <div className="footer-container-details-1-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit, sed do eiusmod tempor
                <br /> incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div className="footer-container-details-1-foot">
              <ul>
                <li>
                  <p>+91 9876543210</p>
                </li>
                <li>
                  <p>mail@gmail.com</p>
                </li>
                <li>
                  <p>xyz, anyware rode, sectore 4</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-container-details-2">
            <div className="footer-container-details-2-head">
              <p>service</p>
            </div>
            <div className="footer-container-details-2-body">
              <ul>
                <li>burger</li>
                <li>menu</li>
                <li>hot items</li>
                <li>about</li>
                <li>services</li>
              </ul>
            </div>
          </div>

          <div className="footer-container-details-3">
            <div className="footer-container-details-3-head">
              <p>Follow Us</p>
            </div>
            <div className="footer-container-details-3-body">
              <ul>
                <li>facebook</li>
                <li>instagram</li>
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>Whatsapp</li>
              </ul>
            </div>
          </div>

          <div className="footer-container-details-4">
            <div className="footer-container-details-4-head">
              <p>Subscribe For New Update</p>
            </div>
            <div className="footer-container-details-4-body">
              <div className="footer-container-details-4-body-input">
                <input type="text" placeholder="Enter Email..." />
                <p className="footer-container-details-4-body-input-symbol">
                  &#124;
                </p>
                <button className="footer-container-details-4-body-input-arrow">
                  &rarr;
                </button>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-container-footer">
          <p>&#8212;&#8212;&#8212;</p>
          <p>burger.com&copy;all rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
