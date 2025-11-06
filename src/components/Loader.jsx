import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'

const Loader = ({onComplete}) => {

  const [progress, setProgress] = useState(0);
  const loaderRef = useRef(null)

  useEffect(()=>{
      gsap.to({val:0},{
        val:100,
        duration:5,
        ease: "power1.out",
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
      <div ref={loaderRef} className=' h-screen w-full bg-black flex items-end justify-end px-20'>
        <h1 className='loading font-[A] text-[15vw] text-white '>{progress}%</h1>
      </div>
    </>
  )
}

export default Loader