import React from "react";
import slider2 from "../assets/slider1.jpg";
import "./css/whatWeOffer.css";
import { GiCheckMark } from "react-icons/gi";

const WhatWeOffer = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mb-3">
            <div style={{height:"77vh"}} className="whRight border">
              <img src={slider2} className="d-block w-100" alt="" />
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div style={{height:"77vh"}} className="whLeft border py-5 px-5 bg-white">
              <h3 className="mb-5 fw-bolder">
                What <span>We Offer</span>{" "}
              </h3>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="list-unstyled">
                <li>
                  <span className="whIcon">
                    <GiCheckMark />
                  </span>
                  Web Expertise
                </li>
                <li>
                  <span className="whIcon">
                    <GiCheckMark />
                  </span>
                  Branding
                </li>
                <li>
                  <span className="whIcon">
                    <GiCheckMark />
                  </span>
                  Design Illustration
                </li>
                <li>
                  <span className="whIcon">
                    <GiCheckMark />
                  </span>
                  Data Analysis
                </li>
              </ul>
              <button className="whButton">contact us</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeOffer;
