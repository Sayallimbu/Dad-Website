import React from "react";
import "./work.css";
import Banner from "../../assets/banner.avif";
import Banner1 from "../../assets/banner1.avif"
import Banner2 from "../../assets/banner2.avif"
function workcard() {
  return (
    <>
      <div className="card">
        <div className="cardtxt">
          <p>2023</p>
          <h1>Bloo</h1>
        </div>

        <div className="cardim">
          <img className="img1" src={Banner2} alt="" />
          <img className="img2" src={Banner1} alt="" />
          <img className="img3" src={Banner} alt="" />
        </div>
      </div>
    </>
  );
}

export default workcard;
