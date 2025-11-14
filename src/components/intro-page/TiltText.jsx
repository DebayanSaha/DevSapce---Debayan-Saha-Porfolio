import React from 'react'

const TiltText = (props) => {
  
  return (
    <div id='tiltDiv' ref={props.abc} className='lg:mt-35 mt-35 w-full'>
        <h1 className='lg:text-[4.2vw] text-[15vw] font-[F] uppercase lg:leading-[4vw] leading-[8vw]'>I am a </h1>
        <h1 className='lg:text-[8vw] text-[16vw] font-[F] uppercase lg:leading-[7vw] leading-[20vw] whitespace-nowrap'>Full <span className='lg:text-black'>Stack</span> </h1>
        <h1 className='lg:text-[4.2vw] text-[8vw] font-[F] uppercase lg:leading-[4vw] leading-[4vw] whitespace-nowrap'>Web Developer</h1>
    </div>
  )
}

export default TiltText