import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
    
    const innerRef = useRef(null);
    
    useGSAP(function(){
        gsap.from('.rotateText',{
            transform:'rotateX(-80deg)',
            opacity:0,
            duration:2,
            stagger:4,
            scrollTrigger:{
                trigger:'.rotateText',
                start:'top 60%',
                end:'top -200%',
                scrub: 3
            }
        })
    },[])

    useGSAP(function(){

        const totalWidth = innerRef.current.scrollWidth / 2;

        gsap.to(innerRef.current,{
            x:-totalWidth,
            duration:15,
            ease:"none",
            repeat:-1
        })
    },[])

  return (
    <div id='section2' className=' bg-white text-black p-5 text-center overflow-hidden'>
        <h3 className='text-gray-500 font-[D] text-xl'>© DevSpace | Debayan Saha Portfolio 2025</h3>
        <div className='rotateText mt-10'>
            <h1 className='font-[A] text-[42vw] leading-[35vw]'>IMPACTFUL</h1>
        </div>
        <div className='rotateText'>
            <h1 className='font-[A] text-[42vw] leading-[35vw]'>DESIGN</h1>
        </div>
        <div className='rotateText'>
            <h1 className='font-[A] text-[42vw] leading-[35vw]'>IS THE</h1>
        </div>
        <div className='rotateText'>
            <h1 className='font-[A] text-[42vw] leading-[35vw]'>DESIGN</h1>
        </div>
        <div className='rotateText'>
            <h1 className='font-[A] text-[42vw] leading-[35vw]'>THAT</h1>
        </div>
        <div className='rotateText'>
            <h1 className='font-[A] text-[42vw] leading-[35vw]'>WORKS!</h1>
        </div>

        <div className='mt-8 h-45 w-full overflow-hidden'>
            <div ref={innerRef} className='h-full w-full flex flex-row no-wrap'>
                <img src="/logo/MERN.png" alt="" />
                <img src="/logo/js.png" alt="" />
                <img src="/logo/java.png" alt="" />
                <img src="/logo/tailwind.png" alt="" />
                <img src="/logo/framer.png" alt="" />
                <img src="/logo/gsap.png" alt="" />
                <img src="/logo/html.png" alt="" />
                <img src="/logo/css.png" alt="" />

                <img src="/logo/MERN.png" alt="" />
                <img src="/logo/js.png" alt="" />
                <img src="/logo/java.png" alt="" />
                <img src="/logo/tailwind.png" alt="" />
                <img src="/logo/framer.png" alt="" />
                <img src="/logo/gsap.png" alt="" />
                <img src="/logo/html.png" alt="" />
                <img src="/logo/css.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Page2