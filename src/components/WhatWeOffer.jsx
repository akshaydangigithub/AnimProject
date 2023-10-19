import React from "react";
import slider2 from "../assets/slider1.jpg";
import "./css/whatWeOffer.css";
import { FaUserSecret } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import {HiClipboardDocument} from "react-icons/hi2"
import { GiProgression } from "react-icons/gi";

const WhatWeOffer = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div  className="col-lg-6 mb-3">
            <div  style={{ backgroundColor: "#eef5ff" }} className="whRight image_div2 border">
              <img src={slider2} className="d-block w-100" alt="" />
            </div>
          </div>
          <div  className="col-lg-6 mb-3">
            <div
             
              className="whLeft border py-4 px-md-4 px-0 d-flex flex-column justify-content-center"
            >
              <h3 className="mb-4 fw-bolder">
                For <span>Users</span>{" "}
              </h3>

              <div className="row">
                <div className="col-6 card1">
                  <div className="wLine1">
                    <div className="gola1"></div>
                  </div>
                  <div className="py-4 px-md-3 px-2 rounded-4 shadow respCards2">
                    <div className="d-flex align-items-center ">
                      <span>
                        <FaUserSecret className="whIcon me-3" />
                      </span>
                      <h5 className="respH3">
                        Share Your <br /> Requirements
                      </h5>
                    </div>
                    <p className="mt-3">
                      Share your business needs with us, and our consultants
                      reach out to you within a day’s time.
                    </p>
                  </div>
                </div>
                <div className="col-6 card2">
                  <div className="wLine2">
                    <div className="gola2"></div>
                  </div>
                  <div className="py-4 px-md-3 px-2 rounded-4 shadow respCards2">
                    <div className="d-flex align-items-center">
                      <span>
                        <HiClipboardDocument className="whIcon me-3" />
                      </span>
                      <h5 className="respH3">
                        Partner <br /> Alignments
                      </h5>
                    </div>
                    <p className="mt-3">
                      We then align meetings with our partners and developers
                      for your project’s detailed discussion and scoping.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-6">
                  <div className="py-4 px-md-3 px-2 rounded-4 shadow respCards2">
                    <div className="d-flex align-items-center">
                      <span>
                        <GiProgression className="whIcon me-3" />
                      </span>
                      <h5 className="respH3">
                        Track <br /> Progress
                      </h5>
                    </div>
                    <p className="mt-3">
                      All you need to do then is simply track the progression
                      and approve milestones with our team until its delivery.
                    </p>
                  </div>
                </div>
                <div className="col-6 card3">
                  <div className="wLine3">
                    <div className="gola3"></div>
                  </div>
                  <div className="py-4 px-md-3 px-2 rounded-4 shadow respCards2">
                    <div className="d-flex align-items-center">
                      <span>
                        <AiFillCheckCircle className="whIcon me-3" />
                      </span>
                      <h5 className="respH3">
                        Sign <br /> Contracts
                      </h5>
                    </div>
                    <p className="mt-3">
                      Once you approve of our developers and scope of work, we
                      sign contracts and kickstart your project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeOffer;
