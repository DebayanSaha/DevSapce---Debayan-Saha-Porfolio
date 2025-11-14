import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Page3 = () => {
    const page3Ref = useRef(null)
    const h1Ref = useRef(null)
    const h2Ref = useRef(null)
    const img1Ref = useRef(null)

    useGSAP(function(){
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: page3Ref.current,
                start: "top 80%",
                end: "bottom 60%",
                scrub: false,
            }
        })
        tl.from(page3Ref.current, {
            opacity: 0,
            y: 150,
            scale: 0.95,
            duration: 1.3,
            ease: "power2.out",
        })
        tl.fromTo(h1Ref.current,
            {x:-100, opacity: 0 },
            {x: 0, opacity: 1, duration: 0.8, ease: "power2.out"}
        )
        tl.fromTo(img1Ref.current,
            {x:100, opacity: 0 },
            {x: 0, opacity: 1, duration: 0.8, ease: "power2.out"},"-=1"
        )
        tl.fromTo(h2Ref.current.children, 
            {x:-100, opacity: 0 },
            {x: 0, opacity: 1, duration: 0.8, stagger:0.2, ease: "power2.out"},"-=1"
        )
    })
  return (
    <>
    <div ref={page3Ref} id='about' className='h-screen w-full p-4 bg-white mt-10'>
            <div className='relative h-[45vw] overflow-hidden'>
                <video autoPlay loop muted className='absolute top-0 left-0 w-full h-full object-cover rounded-[30px]' src="/vids/file.mp4"></video>
                <div className='absolute h-[45vw] right-0'>
                    <img ref={img1Ref} className='h-full rounded-[30px]' src="/background/astro3.png" alt="" />
                    
                </div>
                <div className='relative h-full w-1/2 p-4 flex flex-col justify-center'>
                    <h1 ref={h1Ref} className='text-center font-[A] text-[15vw] uppercase text-white leading-[16vw]'>About me</h1>
                    <div ref={h2Ref} className='h-40 w-full text-center'>
                        <h2 className='font-[B] text-[22px] leading-[1.5vw]'>ENGINEERED INTUITION | DIGITAL PRECISION</h2> 
                        <h2 className='font-[B] text-[20px]'>CODE THAT THINKS | DESIGN THAT PERFORMS</h2>
                        <div className='h-30 w-[80%] mt-3 mx-auto '>
                            <h3 className='font-[B] text-[20px] text-[#9A9A9A] leading-tight'>" I’m Debayan — a full-stack architect turning complexity into clarity.From backend logic to pixel-perfect UI, I craft scalable, human-centered systems that move fast, feel right, and endure.Future-focused. Relentlessly precise. Built to last. "</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Page3