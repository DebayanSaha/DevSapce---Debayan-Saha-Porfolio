import React from 'react'

const TiltText = (props) => {
  
  return (
    <div id='tiltDiv' ref={props.abc} className='mt-35'>
        <h1 className='text-[4.2vw] font-[F] uppercase leading-[4vw]'>I am a </h1>
        <h1 className='text-[8vw] font-[F] uppercase leading-[7vw]'>Full <span className='text-black'>Stack</span> </h1>
        <h1 className='text-[4.2vw] font-[F] uppercase leading-[4vw]'>Web Developer</h1>
    </div>
  )
}

export default TiltText