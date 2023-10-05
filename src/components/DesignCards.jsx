import React from "react";
import "./css/designCards.css";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const DesignCards = () => {
  return (
    <>
      <div className="container mt-5 border p-4 bg-white">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="dCard">
              <img className="d-block w-100" src={slider2} alt="" />
              <h5 className="mt-4 fw-bolder">Hello world!</h5>
              <span className="dDate">April 29, 2019 . Ferdinand Davidson</span>
              <p className="mt-2 dPTag">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                dolor reiciendis accusa eaneque, vel laudantium rerum vitae iste
                perspiciatis?
              </p>
              <div className="d-link">
                <Link className="text-decoration-none">
                  Read more{" "}
                  <span>
                    <MdOutlineKeyboardArrowRight
                      className="dArrow"
                      style={{ color: "#000", fontSize: "1.2rem" }}
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="dCard">
              <img className="d-block w-100" src={slider1} alt="" />
              <h5 className="mt-4 fw-bolder">The Blue Night</h5>
              <span className="dDate">April 29, 2019 . Ferdinand Davidson</span>
              <p className="mt-2 dPTag">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                dolor reiciendis accusa eaneque, vel laudantium rerum vitae iste
                perspiciatis?
              </p>
              <div className="d-link">
                <Link className="text-decoration-none">
                  Read more{" "}
                  <span>
                    <MdOutlineKeyboardArrowRight
                      className="dArrow"
                      style={{ color: "#000", fontSize: "1.2rem" }}
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="dCard">
              <img className="d-block w-100" src={slider3} alt="" />
              <h5 className="mt-4 fw-bolder">Image</h5>
              <span className="dDate">April 29, 2019 . Ferdinand Davidson</span>
              <p className="mt-2 dPTag">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                dolor reiciendis accusa eaneque, vel laudantium rerum vitae iste
                perspiciatis?
              </p>
              <div className="d-link">
                <Link className="text-decoration-none">
                  Read more{" "}
                  <span>
                    <MdOutlineKeyboardArrowRight
                      className="dArrow"
                      style={{ color: "#000", fontSize: "1.2rem" }}
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignCards;
