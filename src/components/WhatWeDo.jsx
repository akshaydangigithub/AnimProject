import React, { useEffect, useState } from "react";
import "./css/whatWeDo.css";
import slider2 from "../assets/slider2.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const WhatWeDo = () => {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".after-effect1", { width: 0 });
    gsap.set(".after-effect2", { width: 0 });
    gsap.set(".after-effect3", { width: 0 });

    const tl = gsap.timeline();

    tl.to(".after-effect1", {
      width: "90%",
      duration: 2,
      ease: "Expo.ease",
      scrollTrigger: {
        trigger: ".after-effect1",
        start: "top 80%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
      },
    });
    tl.to(".after-effect2", {
      width: "80%",
      duration: 2,
      ease: "Expo.ease",
      scrollTrigger: {
        trigger: ".after-effect2",
        start: "top 80%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
      },
    });
    tl.to(".after-effect3", {
      width: "70%",
      duration: 2,
      ease: "Expo.ease",
      scrollTrigger: {
        trigger: ".after-effect3",
        start: "top 80%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <>
      <div className="container mt-4  ">
        <div className="row">
          <div className="col-md-6 mb-3">
            <div
              style={{ height: "75vh" }}
              className="wLeft border p-5 bg-white"
            >
              <h3 className="mb-5 fw-bolder">
                What <span>We Do</span>{" "}
              </h3>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="progress-main mt-4">
                <div className="progress-inner">
                  <div className="progress-inner-top d-flex align-items-center justify-content-between">
                    <h6 className="fw-bolder">Development</h6>
                    <h6 className="fw-bolder">90%</h6>
                  </div>
                  <div className="progress-inner-bottom mt-1">
                    <div className="after-effect1"></div>
                  </div>
                </div>
                <div className="progress-inner mt-4">
                  <div className="progress-inner-top d-flex align-items-center justify-content-between">
                    <h6 className="fw-bolder">Design</h6>
                    <h6 className="fw-bolder">80%</h6>
                  </div>
                  <div className="progress-inner-bottom mt-1">
                    <div className="after-effect2"></div>
                  </div>
                </div>
                <div className="progress-inner mt-4">
                  <div className="progress-inner-top d-flex align-items-center justify-content-between">
                    <h6 className="fw-bolder">Marketing</h6>
                    <h6 className="fw-bolder">70%</h6>
                  </div>
                  <div className="progress-inner-bottom mt-1">
                    <div className="after-effect3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div style={{ height: "75vh" }} className="wRight border">
              <img src={slider2} className="d-block w-100" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
