import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import NavBar from '../Navigation/NavBar'

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  console.log(showNavbar)

  return (
    <div className='head fixed z-18'>
        <div className='fixed w-full lg:px-10 py-4 px-2 lg:py-16 flex items-center justify-end '>
            <button onClick={()=>{
              const link = document.createElement('a');
              link.href='/resume/resume_DebayanSaha.pdf';
              link.download='resume.pdf';
              link.click();
            }} className='shadow-2xl shadow-zinc-700 font-[B] bg-black lg:px-9 px-4 lg:py-3 rounded-full border-4 border-white uppercase hover:bg-zinc-500 cursor-pointer '>resume</button>
            <i onClick={()=>setShowNavbar(true)} className="ri-more-2-fill lg:text-4xl text-2xl text-white ml-3 hover:rotate-90 transition-transform duration-400 cursor-pointer "></i>
        </div>
        {showNavbar && (
          <NavBar onClose={()=>setShowNavbar(false)} />
        )}
    </div>
  )
}

export default Header