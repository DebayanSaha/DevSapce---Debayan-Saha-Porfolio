import React, { useRef } from "react";
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";

const Stairs = ({children , trigger}) => {

  const stairParentRef = useRef(null) 
  const pageRef = useRef(null);

  useGSAP(function () {
    if (!trigger) return;

    const tl = gsap.timeline();

    tl.to(stairParentRef.current , { 
      display:"block" 
    })

    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: 1.2,
      },
    });
    
    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: 1.2,
      },
    });

    tl.to(stairParentRef.current , {
      display:"none",
    });

    tl.to(".stair", {
      y: "0%",
    });

    gsap.from(pageRef.current,{
      opacity:0,
      delay:2,
      scale:1.2
    })

  },[trigger]);

  return (
    <div>
      <div ref={stairParentRef} className="h-screen w-full top-0 fixed z-10 ">
        <div className="h-full w-full flex ">
          <div className="stair h-full w-1/10 bg-black "></div>
          <div className="stair h-full w-1/10 bg-black "></div>
          <div className="stair h-full w-1/10 bg-black "></div>
          <div className="stair h-full w-1/10 bg-black "></div>
          <div className="stair h-full w-1/10 bg-black "></div>
          <div className="stair h-full w-1/10 bg-black "></div>
          <div className="stair h-full w-1/10 bg-black "></div>
          <div className="stair h-full w-1/10 bg-black "></div>
          <div className="stair h-full w-1/10 bg-black "></div>
          <div className="stair h-full w-1/10 bg-black "></div>
        </div>
      </div>
      <div ref={pageRef}>
        {children}
      </div>
    </div>
  );
};

export default Stairs;
