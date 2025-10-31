import React from 'react'

const Page3 = () => {
  return (
    <>
    <div className='h-screen w-full p-4 bg-white mt-10'>
            <div className='relative h-[45vw] overflow-hidden '>
                <video autoPlay loop muted className='absolute top-0 left-0 w-full h-full object-cover rounded-[30px]' src="/vids/file.mp4"></video>

                <div className='relative h-full w-1/2 p-4 flex flex-col justify-center'>
                    <h1 className='text-center font-[A] text-[12vw] uppercase text-white leading-[15vw]'>About me</h1>
                    <div className='h-40 w-full text-center'>
                        <h2 className='font-[B] text-[22px] leading-[1.5vw]'>ENGINEERED INTUITION | DIGITAL PRECISION</h2> 
                        <h2 className='font-[B] text-[20px]'>CODE THAT THINKS | DESIGN THAT PERFORMS</h2>
                        <div className='h-30 w-[80%] mt-3 mx-auto '>
                            <h3 className='font-[B] text-[20px] text-[#9A9A9A] leading-tight'>I’m Debayan — a full-stack architect turning complexity into clarity.From backend logic to pixel-perfect UI, I craft scalable, human-centered systems that move fast, feel right, and endure.Future-focused. Relentlessly precise. Built to last.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Page3