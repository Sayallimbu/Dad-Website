import React from "react";
import "./navbar.css";
import Image from "../../assets/leo-icon.avif";
function navbar() {
  return (
    <div className="navmain">
      <div className="navbar">
        <div className="navbarim">
          <img src={Image} id="#" />
        </div>
        <div className="navbarlnk">
          <a href="About.jsx">Work</a>
          <a href="About.jsx">Service</a>
          <a href="About.jsx">About Me</a>
          <a href="About.jsx" id="contact">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default navbar;
