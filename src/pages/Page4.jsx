import React from 'react'

const Page4 = () => {
  return (
    <>
        <div className='h-screen w-full p-4 bg-black mt-10'>
            <div className='relative h-[40vw] rounded-4xl bg-white p-3.5'>
                <div className='relative h-full w-full rounded-[20px] overflow-hidden'>
                    <video autoPlay loop muted className=' absolute object-cover' src="./assets/vids/work.mp4"></video>
                    <div className='relative mt-[12vw] '>
                        <h1 className='text-center font-[A] text-[20vw] uppercase text-white leading-2.5 '>My</h1>
                        <h1 className='text-center font-[A] text-[20vw] uppercase text-white'>Works</h1>
                    </div>
                </div>               
            </div>
        </div>
    </>     
  )
}

export default Page4