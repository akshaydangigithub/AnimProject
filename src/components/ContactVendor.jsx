import React, { useState } from "react";
import "./css/vendor.css";
import gsap from "gsap";

const ContactVendor = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [technologies, setTechnologies] = useState([]);
  const [currentTech, setCurrentTech] = useState("");

  const handleFocus = (inputId) => {
    setFocusedInput(inputId);

    gsap.to(`#input_border_${inputId}`, {
      display: "block",
      width: "100%",
      duration: 1,
      ease: "expo.out",
    });
  };

  const handleBlur = (inputId) => {
    setFocusedInput(null);

    gsap.to(`#input_border_${inputId}`, {
      display: "none",
      width: "0%",
      duration: 1,
      ease: "expo.out",
    });
  };

  const handleInputChange = (e) => {
    setCurrentTech(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter" && currentTech.trim() !== "") {
      setTechnologies((prevTechs) => [...prevTechs, currentTech]);
      setCurrentTech("");
    }
  };

  const handleRemoveTech = (tech) => {
    setTechnologies((prevTechs) => prevTechs.filter((t) => t !== tech));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="vendor_contact_main">
      <div className="container vendor_contact_main_inner px-5 py-3">
        <h3>For Vendors</h3>

        <form className="mt-4" onSubmit={handleSubmit}>
          <div
            className={`name_div input_box mb-3 ${
              focusedInput === "companyName" ? "focused" : ""
            }`}
          >
            <label className="mb-2" htmlFor="name">
              Enter Company Name
            </label>
            <input
              type="text"
              onFocus={() => handleFocus("companyName")}
              onBlur={() => handleBlur("companyName")}
            />
            <div id="input_border_companyName" className="input_border"></div>
          </div>
          <div
            className={`name_div input_box mb-3 ${
              focusedInput === "companyAddress" ? "focused" : ""
            }`}
          >
            <label className="mb-2" htmlFor="name">
              Enter Company Address
            </label>
            <input
              type="text"
              onFocus={() => handleFocus("companyAddress")}
              onBlur={() => handleBlur("companyAddress")}
            />
            <div
              id="input_border_companyAddress"
              className="input_border"
            ></div>
          </div>
          <div
            className={`name_div input_box mb-3 ${
              focusedInput === "contactNo" ? "focused" : ""
            }`}
          >
            <label className="mb-2" htmlFor="name">
              Contact No.
            </label>
            <input
              type="text"
              onFocus={() => handleFocus("contactNo")}
              onBlur={() => handleBlur("contactNo")}
            />
            <div id="input_border_contactNo" className="input_border"></div>
          </div>
          <div
            className={`name_div input_box mb-3 ${
              focusedInput === "emailId" ? "focused" : ""
            }`}
          >
            <label className="mb-2" htmlFor="name">
              Enail Id
            </label>
            <input
              type="email"
              onFocus={() => handleFocus("emailId")}
              onBlur={() => handleBlur("emailId")}
            />
            <div id="input_border_emailId" className="input_border"></div>
          </div>
          <div
            className={`name_div input_box mb-3 ${
              focusedInput === "founderName" ? "focused" : ""
            }`}
          >
            <label className="mb-2" htmlFor="name">
              Founder Name
            </label>
            <input
              type="text"
              onFocus={() => handleFocus("founderName")}
              onBlur={() => handleBlur("founderName")}
            />
            <div id="input_border_founderName" className="input_border"></div>
          </div>
          <div
            className={`name_div input_box mb-3 ${
              focusedInput === "companyLogo" ? "focused" : ""
            }`}
          >
            <label className="mb-2" htmlFor="name">
              Upload Company Logo
            </label>
            <input
              className="pt-2"
              type="file"
              onFocus={() => handleFocus("companyLogo")}
              onBlur={() => handleBlur("companyLogo")}
            />
            <div id="input_border_companyLogo" className="input_border"></div>
          </div>
          <div className="checkBox mb-3">
            <label className="mb-2" htmlFor="name">
              Select Services
            </label>
            <div className="row">
              <div className="col-6">
                {" "}
                <div className="checkbox_div mb-3">
                  {" "}
                  <input type="checkbox" className="me-3 mt-1" />
                  <span className="respSpan">Website Developement</span>
                </div>
              </div>
              <div className="col-6 ">
                <div className="checkbox_div mb-3">
                  {" "}
                  <input type="checkbox" className="me-3 mt-1" />
                  <span className="respSpan">App/IOS Developement</span>
                </div>
              </div>
              <div className="col-6 ">
                <div className="checkbox_div mb-3">
                  {" "}
                  <input type="checkbox" className="me-3 mt-1" />
                  <span className="respSpan">Software Developement</span>
                </div>
              </div>
              <div className="col-6 ">
                <div className="checkbox_div mb-3">
                  {" "}
                  <input type="checkbox" className="me-3 mt-1" />
                  <span className="respSpan">Digital Marketing</span>
                </div>
              </div>
              <div className="col-6 ">
                <div className="checkbox_div mb-3">
                  {" "}
                  <input type="checkbox" className="me-3 mt-1" />
                  <span className="respSpan">Project Outsoursing</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`name_div input_box mb-3 ${
              focusedInput === "addTech" ? "focused" : ""
            }`}
          >
            <label className="mb-2" htmlFor="name">
              Add Technologies
            </label>
            <div className="technologies-list d-flex">
              {technologies.map((tech, index) => (
                <div
                  style={{ backgroundColor: "#FFC050", padding: "6px 10px" }}
                  key={index}
                  className="technology me-3 mb-2 fw-bold"
                >
                  {tech}
                  <span
                    className="remove-tech ms-2"
                    onClick={() => handleRemoveTech(tech)}
                    style={{ cursor: "pointer" }}
                  >
                    &#10005;
                  </span>
                </div>
              ))}
            </div>
            <input
              className="pt-2"
              type="text"
              value={currentTech}
              onChange={handleInputChange}
              onFocus={() => handleFocus("addTech")}
              onBlur={() => handleBlur("addTech")}
              onKeyPress={handleEnterPress}
            />
            <div id="input_border_addTech" className="input_border"></div>
          </div>
          <div
            className={`name_div input_box mb-3 ${
              focusedInput === "companyPort" ? "focused" : ""
            }`}
          >
            <label className="mb-2" htmlFor="name">
              Upload Company Broucher & Portfolio
            </label>
            <input
              className="pt-2"
              type="file"
              onFocus={() => handleFocus("companyPort")}
              onBlur={() => handleBlur("companyPort")}
            />
            <div id="input_border_companyPort" className="input_border"></div>
          </div>

          <button className="submit_btn ms-auto d-block">
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactVendor;
