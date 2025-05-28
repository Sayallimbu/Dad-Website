import React, { useEffect, useState } from "react";
import "./hero.css";
import Video1 from "../../assets/video1.mp4";
import Phidim from "../../assets/sandakphu.webp"
// import Video2 from "../../assets/video2.mp4";
function hero() {
  // const videos= [ Video1,Video2]
  // const[currentVdo, setCurrentVdo]=useState(0);
  // const [ fade, setFade] = usestate(true);
  // useEffect(()=>{
  // const timer = setTimeout(()=>{
  // setFade(false);
  // setTimeout(()=>{
  //     setCurrentVdo((prev)=>{
  // return (prev +1 ) % videos.length;
  //     })
  // })
  // })

  // })

  return (
    <>
      <div className="hero">
        <img src={Phidim} alt="" />
      </div>
    </>
  );
}

export default hero;
