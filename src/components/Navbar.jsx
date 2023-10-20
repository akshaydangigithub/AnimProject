import React, { useEffect, useRef, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import "./css/navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const RedirectToDashboard = () => {
    navigate("/vendor/dashboard/uploadLeads");
  };

  const RedirectToContact = () => {
    navigate("/vendor/contact");
  };

  const sidebarRef = useRef(null);
  const menuIconRef = useRef(null);
  const [sidebarShow, setSidebarShow] = useState(false);
  const menuHandler = () => {
    setSidebarShow(!sidebarShow);
  };
  const handleClickOutside = (e) => {
    if (
      sidebarRef.current &&
      menuIconRef.current &&
      !sidebarRef.current.contains(e.target) &&
      !menuIconRef.current.contains(e.target)
    ) {
      setSidebarShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const Handleclose = () => {
    setSidebarShow(false);
  };
  return (
    <>
      <nav className="d-flex align-items-center justify-content-between">
        <div className="cNav px-4 py-2">
          <div className="left">
            <h1 className="fw-bold">G</h1>
          </div>
          <div className="right">
            <span ref={menuIconRef} onClick={menuHandler}>
              <IoIosMenu />
            </span>
          </div>
        </div>
      </nav>
      <div
        ref={sidebarRef}
        className={`sidebar shadow overflow-hidden ${
          sidebarShow ? "sidebar-active" : "sidebar-close"
        }`}
      >
        <span onClick={Handleclose} className="close">
          <AiOutlineClose />
        </span>

        <div>
          <ul>
            <li>Home</li>
            <li onClick={RedirectToDashboard}>Dashboard</li>
            <li onClick={RedirectToContact}>Contact</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Elements</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
