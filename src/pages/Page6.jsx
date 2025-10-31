import React from 'react'

const Page6 = () => {
  return (
    <>
        <div className='h-screen bg-white p-4'>
            <div className='relative h-full rounded-[30px] overflow-hidden flex items-center justify-center'>
                <video autoPlay loop muted className='absolute top-0 left-0 object-center' src="/vids/moon.mp4"></video>
                <h1 className='absolute font-[A] text-[18vw] leading-0 uppercase'>START A CONVERSATION.</h1>
                <div className='absolute h-10 w-[45%] translate-y-32'>
                    <h2 className='text-center font-[D] text-[1.3vw] text-[#cfcecef0] leading-tight'>"I design and develop modern and impactful full stack websites that seamlessly bridge your goals with needs."</h2>
                </div>
                
                <div className='absolute left-10 bottom-10 h-20 w-[60%] '>
                    <h1 className='font-[E]  text-[1.3vw] text-[#d3d3d3]'> debayansaha682@gmail.com</h1>
                    <h2 className='font-[C] text-[1.1vw] text-[#8d8d8d] leading-3.5'> +91 8617262208 </h2>
                    <h1 className='font-[B] text-[1vw] leading-8 text-[#d3d3d3]'> Kolkata, West Bengal, India</h1>
                </div>
                <div className='head absolute right-10 bottom-40 h-10 w-[20%] flex flex-row gap-6 '>
                    <img onClick={()=>window.open('https://www.linkedin.com/in/debayansaha04/', '_blank')} className='cursor-pointer' src="/logo/4.png" alt="" />
                    <img onClick={()=>window.open('https://github.com/DebayanSaha', '_blank')} className='cursor-pointer' src="/logo/3.png" alt="" />
                    <img onClick={()=>window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJqXPSJDGDfWpRvBvgVXfkNGPzDgMLcqRsfnVhcgPfWCGCsjppsdVpxrlzMnfkhrxbMNGxq', '_blank')} className='cursor-pointer' src="/logo/2.png" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Page6