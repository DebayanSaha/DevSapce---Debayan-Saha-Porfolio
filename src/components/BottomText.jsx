import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const BottomText = () => { 
    useGSAP(function(){
        gsap.to('#banner img',{
            rotate:360,
            duration:5,
            repeat:-1,
            ease:'linear'
        })
    })
  return (
    <div className='absolute left-0 bottom-0 py-15 px-16 h-40 w-full flex items-end justify-between'>
        <div>
            <h2 className='text-[20px] font-[B] '>debayans682@gmail.com | 8617262208</h2>
            <h3 className='text-[18px] font-[D] text-gray-400 uppercase'>Website Design & Develop</h3>
        </div>
        <div  id='banner'></div>
    </div>
  )
}

export default BottomText