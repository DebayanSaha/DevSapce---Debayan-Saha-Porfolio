import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'

const Loader = ({onComplete}) => {

  const [progress, setProgress] = useState(0);
  const loaderRef = useRef(null)

  useEffect(()=>{
      gsap.to({val:0},{
        val:100,
        duration:5.8,
        ease: "power2.inOut",
        onUpdate: function(){
          setProgress(Math.floor(this.targets()[0].val))
        },
        onComplete: function(){
          gsap.to(loaderRef.current,{
            opacity:0,
            duration:1,
            onComplete: onComplete
          })
        }
      })
  },[onComplete])

  window.addEventListener("load",()=>{
     onComplete;
  })

  return (
    <>
      <div ref={loaderRef} className=' h-screen w-full bg-black flex lg:items-end items-center lg:justify-end justify-center px-20'>
        <h1 className='loading font-[A] lg:text-[15vw] text-[25vw] text-white '>{progress}%</h1>
      </div>
    </>
  )
}

export default Loader