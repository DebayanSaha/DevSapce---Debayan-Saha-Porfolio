import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className=''>
        <div className='fixed w-full z-10 px-10 py-16 flex items-center justify-end'>
            <button className='shadow-2xl shadow-zinc-700 font-[B] bg-black px-8 py-3 rounded-full border-4 border-white uppercase hover:bg-zinc-500 '>connect</button>
            <i className="ri-more-2-fill text-4xl text-zinc-300 ml-3"></i>
        </div>
    </div>
  )
}

export default Header