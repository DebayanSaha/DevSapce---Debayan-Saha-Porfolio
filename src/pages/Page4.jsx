import React from 'react'

const Page4 = () => {
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
                
                <img className='absolute h-[93vh]' src="/background/astro.png" alt="" />
                <h1 className='absolute font-[E] top-[25vw] text-[16vw] uppercase'>K72 clone</h1>
                <video className='h-[35vh]  mb-30 object-cover rounded-full' autoPlay muted loop src="/vids/k72vid.mp4"></video>
            </div>
        </div>
    </>     
  )
}

export default Page4