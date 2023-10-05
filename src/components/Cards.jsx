import React, { useEffect } from "react";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./css/card.css"

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Cards = () => {

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".cCard", { opacity: 0, y: -100 });

    gsap.to(".cCard", {
      opacity: 1,
      y: 0,
      duration: .9,
      ease: "Expo.ease",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".cCard",
        start: "top 80%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  return (
    <div style={{ zIndex: "999" }} className="mt-5 container">
      <div className="row">
        <div className="col-md-4 mb-3 cCard">
          <div className="border px-5 py-5 rounded bg-white">
            <img className="mb-4" src={card1} alt="" />
            <h4 className="mb-4 fw-bolder">Data Protection</h4>
            <p className="mb-5 pTag">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <span className="d-flex align-items-center cLink">
              <Link
                style={{ color: "#6272C7", fontSize: ".8rem" }}
                className="text-decoration-none me-2 fw-bolder"
              >
                LEARN MORE
              </Link>
              <MdOutlineKeyboardArrowRight
              className="arrow fw-bolder"
                style={{ color: "#6272C7", fontSize: "1.2rem" }}
              />
            </span>
          </div>
        </div>
        <div className="col-md-4 mb-3 cCard">
          <div className="border px-5 py-5 rounded bg-white">
            <img className="mb-4" src={card2} alt="" />
            <h4 className="mb-4 fw-bolder">Market Analysis</h4>
            <p className="mb-5 pTag">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <span className="d-flex align-items-center cLink">
              <Link
                style={{ color: "#6272C7", fontSize: ".8rem" }}
                className="text-decoration-none me-2 fw-bolder"
              >
                LEARN MORE
              </Link>
              <MdOutlineKeyboardArrowRight
              className="arrow fw-bolder"
                style={{ color: "#6272C7", fontSize: "1.2rem" }}
              />
            </span>
          </div>
        </div>
        <div className="col-md-4 mb-3 cCard">
          <div className="border px-5 py-5 rounded bg-white">
            <img className="mb-4" src={card3} alt="" />
            <h4 className="mb-4 fw-bolder">App Development</h4>
            <p className="mb-5 pTag">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <span className="d-flex align-items-center cLink">
              <Link
                style={{ color: "#6272C7", fontSize: ".8rem" }}
                className="text-decoration-none me-2 fw-bolder"
              >
                LEARN MORE
              </Link>
              <MdOutlineKeyboardArrowRight
              className="arrow fw-bolder"
                style={{ color: "#6272C7", fontSize: "1.2rem" }}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
