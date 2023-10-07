import React from "react";
import "./css/whatWeDo.css";
import slider2 from "../assets/slider2.jpg";

const WhatWeDo = () => {
  return (
    <>
      <div className="container mt-4  ">
        <div className="row">
          <div className="col-lg-6 mb-3">
            <div className="wLeft border p-5">
              <h3 className="mb-4 fw-bolder">
                For <span>Vendors</span>{" "}
              </h3>
              <div className="content">
                <h6 className="fw-bolder">Upload The wastage leads : </h6>
                <p>
                  {" "}
                  wastage leads, and the GrowYb team will make every effort to
                  seal the deals, sharing the resulting profits with you.
                </p>
              </div>
              <hr />
              <div className="content">
                <h6 className="fw-bolder">Track Progress : </h6>
                <p>
                  {" "}
                  Easily monitor the progress of your provided leads with our
                  user-friendly status tracking feature. Stay updated on lead
                  developments.
                </p>
              </div>
              <hr />
              <div className="content">
                <h6 className="fw-bolder">Get Closing Confirmation : </h6>
                <p>
                  {" "}
                  Rest assured, you will receive confirmation as soon as your
                  provided lead is successfully closed, keeping you updated
                  throughout.
                </p>
              </div>
              <hr />
              <div className="content">
                <h6 className="fw-bolder">Get profits and Reports : </h6>
                <p>
                  {" "}
                  Expect to receive profits from every deal, along with detailed
                  reports to provide transparency and insights into
                  your investments.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-3">
            <div className="wRight border">
              <img src={slider2} className="d-block w-100" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
