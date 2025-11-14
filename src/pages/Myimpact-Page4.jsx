import { useGSAP } from '@gsap/react'
import {motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef, useState } from 'react'
import 'remixicon/fonts/remixicon.css'

gsap.registerPlugin(ScrollTrigger)

const Page5 = () => {
    const [card, setCard] = useState(0)
    const achievement =[
        {
            title:"Creative Director Intern",
            event:"@NeeyatAI",
            highlights:[ "DESIGN LEADERSHIP","PERFORMANCE INSIGHT","UX-LED TRANSFORMATION" ],
            certificate:"https://github.com/DebayanSaha/Achievements-and-Certifications/blob/main/Debayan-exp-letter.pdf",
        },
        {
            title:" Internal hackathon winner",
            event:"@SIH 24",
            highlights:[ " Pitch delivery", " Solution architecture", " healthcare innovation"  ],
            certificate:"https://github.com/DebayanSaha/Achievements-and-Certifications/blob/main/SIH_Internal_Certificate-16%5B1%5D.pdf",
        },
        {
            title:"tech / Technical Head",
            event:"@UNiTRON 25",
            highlights:[ " team mentorship"," Technical leadership", " Robotics development",  ],
            certificate:"https://github.com/DebayanSaha/Achievements-and-Certifications/blob/main/TechHead.jpg",
        },
    ]
    const handleNext=()=>{
        setCard((prev)=>(prev+1) % achievement.length);
    }
    const handlePrev=()=>{
        setCard((prev)=>prev===0? achievement.length-1 : prev-1);
    }

    const page5Ref = useRef(null)
    const achievementRef = useRef(null)
    const titleRef = useRef(null)

    useGSAP(function(){
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: page5Ref.current,
                start: "top 80%",
                end: "bottom 60%",
                scrub: false,
            }
        })
        tl.from(page5Ref.current, {
            opacity: 0,
            y: 150,
            scale: 0.95,
            duration: 1.3,
            ease: "power2.out",
        })
        tl.fromTo(titleRef.current,
            {x:100, opacity: 0 },
            {x: 0, opacity: 1, duration: 0.8, ease: "power2.out"}
        )
        tl.fromTo(achievementRef.current,
            {x:-100, opacity: 0 },
            {x: 0, opacity: 1, duration: 1.3, ease: "power2.out"},"-=1"
        )
    })

  return (
    <>
        <div id='impact' ref={page5Ref} className='h-screen lg:p-4 p-2'>
            <div className='relative h-full w-full overflow-hidden bg-black rounded-[30px]'>
                <video autoPlay loop muted className='absolute object-cover z-4' src="/vids/expi.mp4"></video>
                <div className='relative h-full w-full p-4 z-5'>
                    <div ref={achievementRef} className='absolute lg:top-3 bottom-5  lg:h-[97%] h-1/2 lg:w-3/7 w-[90%] p-5  flex items-center justify-center '>
                        <i onClick={handlePrev} className="absolute lg:text-4xl text-2xl text-[#d5d5d5] top-0 ri-arrow-up-s-line z-100 cursor-pointer "></i>
                        <i onClick={handleNext} className="absolute lg:text-4xl text-2xl text-[#d5d5d5] bottom-0 ri-arrow-down-s-line z-100 cursor-pointer"></i>
                        <AnimatePresence mode='wait'>
                            <motion.div  key={card} 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.4 }} className='bg-white/5 backdrop-blur-md lg:h-[36vw] h-[95%] lg:w-[30vw] border-2 rounded-[30px] border-[#3937373d] lg:py-10 py-3 px-4 text-center'>
                                                      
                                    <h1 className='font-[E] lg:text-5xl text-4xl uppercase'>{achievement[card].title}</h1>
                                    <h2 className='font-[C] lg:text-2xl lg:mt-4 text-[#9A9A9A]'>{achievement[card].event}</h2>
                                    <div className='h-30 w-full flex flex-col lg:mt-14 mt-5 leading-tight'>
                                        <h1 className='font-[B] lg:text-[1.8vw] text-[#cdcbcb] uppercase'>{achievement[card].highlights[0]}</h1>
                                        <h1 className='font-[B] lg:text-[1.8vw] text-[#cdcbcb] uppercase'>{achievement[card].highlights[1]}</h1>
                                        <h1 className='font-[B] lg:text-[1.8vw] text-[#cdcbcb] uppercase'>{achievement[card].highlights[2]}</h1>
                                    </div>
                                    <button onClick={()=>window.open(achievement[card].certificate,"_blank")} className='absolute left-1/2 -translate-x-1/2 lg:translate-y-8 -translate-y-12 shadow-2xl shadow-zinc-700 font-[B] bg-black lg:px-13 px-4 lg:py-2 rounded-full border-4 border-white uppercase hover:bg-zinc-500 cursor-pointer'>Certificate</button>
                                
                            </motion.div>
                        </AnimatePresence>
                        
                    </div>
                    
                    <div ref={titleRef} className='lg:absolute h-full lg:right-0 lg:w-2/5 flex items-center lg:justify-center justify-start'>
                        <div className='h-full w-full p-20 text-center'>
                            <h1 className='shadow mt-[14vw] font-[A] uppercase lg:text-[20vw] text-[30vw] lg:leading-[50px] leading-5 '>My</h1>
                            <h1 className='shadow font-[A] uppercase lg:text-[18vw] text-[30vw]'>Impact</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)}

export default Page5