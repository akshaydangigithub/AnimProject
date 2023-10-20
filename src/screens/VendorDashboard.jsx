import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const VendorDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setactive] = useState(false);

  const RedirectTOTrack = () => {
    navigate("/vendor/dashboard/track");
    setactive(false);
  };

  const RedirectTOUploadLeads = () => {
    navigate("/vendor/dashboard/uploadLeads");
    setactive(true);
  };

  const RedirectTOOngoing = () => {
    navigate("/vendor/dashboard/ongoing");
    setactive(false);
  };

  const RedirectTOClosed = () => {
    navigate("/vendor/dashboard/closed");
    setactive(false);
  };

  const RedirectTOReports = () => {
    navigate("/vendor/dashboard/reports");
    setactive(false);
  };

  return (
    <>
      <Navbar />

      <div className="vendor_dashboard_main">
        <div className="vendor_dashboard_main_inner">
          <div className="row">
            <div
              style={{ backgroundColor: "#D9E6F2" }}
              className="col-md-4 mb-md-0 mb-3 ps-4 pe-5 pt-3"
            >
              <div
                style={{ borderBottom: "1px solid gray" }}
                className="row  pb-3 mb-3"
              >
                <div className="company_logo"></div>
                <h4 className="mt-3">Softseeker Infotech PVT LTD</h4>
              </div>
              <div
                className="row pb-3 mb-3"
                style={{ borderBottom: "1px solid gray" }}
              >
                <h5>Contact No:- +91 1234567890</h5>
              </div>
              <div
                className="row pb-3 mb-3"
                style={{ borderBottom: "1px solid gray" }}
              >
                <p>
                  <b>Contact Details</b> :- Lorem ipsum dolor sit amet
                  consectetur
                </p>
              </div>
              <div
                className="row pb-3 mb-3"
                style={{ borderBottom: "1px solid gray" }}
              >
                <p>
                  <b>Address</b> :- Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Qui, dignissimos!
                </p>
              </div>
              <div className="row pb-3 mt-4">
                <p>
                  <b>Website</b> :- <u>www.lorem.com</u>
                </p>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#ECF2F9" }}
              className="col-md-8 p-0 m-0"
            >
              <div className="header_main">
                <div
                  className={`header_div ${
                    location.pathname === "/vendor/dashboard/uploadLeads" &&
                    "active"
                  }`}
                  onClick={RedirectTOUploadLeads}
                >
                  <h6 className="m-0 p-0">Upload Leads</h6>
                </div>
                <div
                  className={`header_div ${
                    location.pathname === "/vendor/dashboard/track" && "active"
                  }`}
                  onClick={RedirectTOTrack}
                >
                  <h6 className="m-0 p-0">Track</h6>
                </div>
                <div
                  className={`header_div ${
                    location.pathname === "/vendor/dashboard/ongoing" && "active"
                  }`}
                  onClick={RedirectTOOngoing}
                >
                  <h6 className="m-0 p-0">OnGoing</h6>
                </div>
                <div
                  className={`header_div ${
                    location.pathname === "/vendor/dashboard/closed" && "active"
                  }`}
                  onClick={RedirectTOClosed}
                >
                  <h6 className="m-0 p-0">Closed</h6>
                </div>
                <div
                  className={`header_div ${
                    location.pathname === "/vendor/dashboard/reports" && "active"
                  }`}
                  onClick={RedirectTOReports}
                >
                  <h6 className="m-0 p-0">Reports</h6>
                </div>
              </div>
              <div className="header_bottom p-4">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorDashboard;
