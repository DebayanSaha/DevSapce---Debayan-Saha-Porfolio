import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'

const Page4 = () => {
    const [index, setIndex] = useState(0);
    const handleNext=()=>{
        setIndex((prev)=>(prev+1) % project.length)
    }
    const handlePrev=()=>{
        setIndex((prev)=>prev===0?project.length-1:prev-1)
    }

    const project=[
        {
            path:"/vids/k72vid.mp4",
            name:"K72 Clone",
            link:"https://k72-5oux.onrender.com",
        },
        {
            path:"/vids/MagmaVid.mp4",
            name:"MAGMA",
            link:"https://magma-lake.vercel.app/",
        },
        {
            path:"/vids/intern4.mp4",
            name:"Kickload",
            link:"https://github.com/DebayanSaha/ViteKickloadProduction",
        }
    ]

  return (
    <>
        <div className='h-screen*2 w-full p-4 bg-black mt-10'>
            <div className='relative h-[40vw] rounded-4xl bg-white p-3.5'>
                <div className='relative h-full w-full rounded-[20px] overflow-hidden'>
                    <video autoPlay loop muted className=' absolute object-cover' src="/vids/work.mp4"></video>
                    <div className='relative mt-[12vw] '>
                        <h1 className='text-center font-[A] text-[20vw] uppercase text-white leading-2.5 '>My</h1>
                        <h1 className='text-center font-[A] text-[20vw] uppercase text-white'>Works</h1>
                    </div>
                </div>               
            </div>
            <div className='relative h-[45vw] p-3.5 mt-5 rounded-[20px] flex items-center justify-center'>
                <i onClick={handleNext} className="absolute z-12 right-0 text-3xl ri-arrow-right-s-line cursor-pointer"></i>
                <i onClick={handlePrev} className="absolute z-12 left-0 text-3xl ri-arrow-left-s-line cursor-pointer"></i>
                <div className='absolute top-40 right-40 h-50 w-50 border-2 border-[#9a9a9a38] shadow-2xl shadow-[#9a9a9a38] rounded-4xl z-11 flex items-center justify-center'>
                    <i onClick={()=>window.open(project[index].link,"_blank")} className="cursor-pointer text-[30vh] ri-arrow-right-up-line"></i>
                </div>
                <img className='absolute h-[93vh] z-10' src="/background/astro.png" alt="" />
                <h1 className='absolute font-[E] bottom-25 leading-0 text-[14vw] uppercase z-11'>{project[index].name}</h1>
                <div className='absolute top-20 h-96 w-96 rounded-full overflow-hidden'>
                    <video className='h-full w-full object-cover' autoPlay muted loop src={project[index].path}></video>
                </div>
            </div>
        </div>
    </>     
  )
}

export default Page4