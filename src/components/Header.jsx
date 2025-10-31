import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className='head'>
        <div className='fixed w-full z-10 px-10 py-16 flex items-center justify-end'>
            <button onClick={()=>{
              const link = document.createElement('a');
              link.href='/resume/DEBAYAN SAHA 25.pdf';
              link.download='DEBAYAN SAHA 25.pdf';
              link.click();
            }} className='shadow-2xl shadow-zinc-700 font-[B] bg-black px-9 py-3 rounded-full border-4 border-white uppercase hover:bg-zinc-500 cursor-pointer '>resume</button>
            <i className="ri-more-2-fill text-4xl text-zinc-300 ml-3"></i>
        </div>
    </div>
  )
}

export default Header