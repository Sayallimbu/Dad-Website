import React, { useEffect, useState } from "react";
import "./hero.css";
import Video1 from "../../assets/video1.mp4";
// import Video2 from "../../assets/video2.mp4";
function navbar() {
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
        <video src={Video1 } autoPlay loop></video>
      </div>
    </>
  );
}

export default navbar;
