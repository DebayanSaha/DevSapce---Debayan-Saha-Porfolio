import React, { useRef, useState } from 'react'
import BottomText from '../components/BottomText'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import TiltText from '../components/TiltText'

const Page1 = () => {

  const tiltRef = useRef(null)
  const [xVal,setXVal]=useState(0)
  const [yVal,setYVal]=useState(0) 

  useGSAP(function(){
    gsap.to(tiltRef.current,{
      transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration: 3,
      ease:'power4.out'
    })
  },[xVal,yVal])

  const mouseMoving=(e)=>{
    setXVal((e.clientX - (tiltRef.current.getBoundingClientRect().x) - (tiltRef.current.getBoundingClientRect().width)/2)/70)
    setYVal((e.clientY - (tiltRef.current.getBoundingClientRect().y) - (tiltRef.current.getBoundingClientRect().height)/2)/10)
  }

  return (
    <div onMouseMove={(e)=>{
      mouseMoving(e)
    }} className='h-screen p-4 bg-white relative'>
        <div id='page1-in' className='shadow-xl shadow-zinc-500 relative py-6 px-20 h-full w-full bg-cover  bg-[url(./assets/background/bg1.png)] rounded-[30px]'>
            <img className='h-28 ' src="./src/assets/logo/MyLogo.png" alt="" />
            
            <TiltText abc={tiltRef}/>
            <BottomText/>
        </div>
    </div>
  )
}

export default Page1