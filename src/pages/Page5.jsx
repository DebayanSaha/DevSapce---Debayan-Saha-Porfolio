import {motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'

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
            title:" Tech Head",
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
  return (
    <>
        <div className='h-screen p-4'>
            <div className='relative h-full w-full overflow-hidden bg-black rounded-[30px]'>
                <video autoPlay loop muted className='absolute object-cover z-4' src="/vids/expi.mp4"></video>
                <div className='relative h-full w-full p-4 z-5'>
                    <div className='absolute h-full w-3/7 p-5 flex items-center justify-center'>
                        <i onClick={handlePrev} className="absolute text-4xl text-[#d5d5d5] top-0 ri-arrow-up-s-line z-100 cursor-pointer "></i>
                        <i onClick={handleNext} className="absolute text-4xl text-[#d5d5d5] bottom-5 ri-arrow-down-s-line z-100 cursor-pointer"></i>
                        <AnimatePresence mode='wait'>
                            <motion.div  key={card} 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.4 }} className='bg-white/5 backdrop-blur-md h-[36vw] w-[30vw] border-2 rounded-[30px] border-[#3937373d] py-10 px-4 text-center'>
                                                      
                                    <h1 className='font-[E] text-5xl uppercase'>{achievement[card].title}</h1>
                                    <h2 className='font-[C] text-2xl mt-4 text-[#9A9A9A]'>{achievement[card].event}</h2>
                                    <div className='h-30 w-full flex flex-col mt-14 leading-tight'>
                                        <h1 className='font-[B] text-[1.8vw] text-[#cdcbcb] uppercase'>{achievement[card].highlights[0]}</h1>
                                        <h1 className='font-[B] text-[1.8vw] text-[#cdcbcb] uppercase'>{achievement[card].highlights[1]}</h1>
                                        <h1 className='font-[B] text-[1.8vw] text-[#cdcbcb] uppercase'>{achievement[card].highlights[2]}</h1>
                                    </div>
                                    <button onClick={()=>window.open(achievement[card].certificate,"_blank")} className='absolute left-1/2 -translate-x-1/2 translate-y-8 shadow-2xl shadow-zinc-700 font-[B] bg-black px-13 py-2 rounded-full border-4 border-white uppercase hover:bg-zinc-500 cursor-pointer'>Certificate</button>
                                
                            </motion.div>
                        </AnimatePresence>
                        
                    </div>
                    
                    <div className='absolute h-full right-0 w-2/5 flex items-center justify-center '>
                        <div className='h-full w-full p-20 text-center'>
                            <h1 className='shadow mt-[14vw] font-[A] uppercase text-[20vw] leading-[50px] '>My</h1>
                            <h1 className='shadow font-[A] uppercase text-[18vw]'>Impact</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)}

export default Page5