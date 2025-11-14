import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Page0 = () => {
    const textRef = useRef(null);
    const paraRef =useRef(null);
    const semiTextRef =useRef(null);

    useGSAP(function(){
        const tl = gsap.timeline();

        tl.fromTo(textRef.current,
            {opacity:0}, {opacity:1, delay:2.8, duration:2, ease:"power3.out"}
        )
        .fromTo(semiTextRef.current,
            {x:-100, opacity:0},
            {x:0, opacity:1, duration:1.5, ease:"power3.out",},"-=1"
        )
        .fromTo(paraRef.current,
            {x:100, opacity:0},
            {x:0, opacity:1, duration:1.5, ease:"power3.out"},"-=1"
        )
    })
  return (
    <div id='home'>
        <div className='bg-[#DCDCDC] h-screen w-full flex items-center justify-center p-10'>
            <h1 ref={textRef} className='absolute font-[E] text-black text-[20vw] z-11 '>DEV <span className='text-stroke-white'>SP</span>ACE</h1>
            <div className='absolute h-[45vw] w-1/2 left-1/2 -translate-x-1/2 top-13 z-10'>
                <img className='h-full object-contain object-center' src="/landingPage/DEBAYAN SAHA.png" alt="" />
            </div>
            <div ref={paraRef} className='absolute h-60 w-[35vw] z-12 right-0 top-[32vw] p-8 '>
                <p className='font-[B] text-[#505050] text-[18px] '>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" Welcome to <span className='text-[#F15039] font-[E]'>Dev Space</span>, a portfolio built for tomorrow.  An idea featuring space and future.
                    <span className='text-[#F15039] '>Every element here reflects my obsession with design, motion, and futuristic storytelling.</span>"
                </p>
            </div>
            <h1 ref={semiTextRef} className='absolute font-[C] text-[#767676] text-[1.8vw] left-10 top-[33vw]'>@By Debayan Saha</h1>
            
        </div>
    </div>
  )
}

export default Page0