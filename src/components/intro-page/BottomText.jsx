// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
// import React from 'react'

// const BottomText = () => { 
//     useGSAP(function(){
//         gsap.to('#banner img',{
//             rotate:360,
//             duration:5,
//             repeat:-1,
//             ease:'linear'
//         })
//     })
//     useGSAP(function(){
//         const tl =  gsap.timeline();
//         tl.fromTo('#botomText h2',
//             {x:-100, opacity:0},
//             {x:0, opacity:1, delay:1, duration:1.5, ease:"power3.out"}
//         )
//         .fromTo('#botomText h3',
//             {x:-100, opacity:0},
//             {x:0, opacity:1, delay:1, duration:1.5, ease:"power3.out"},"-=1"
//         )
//     })
//   return (
//     <div className='absolute left-0 bottom-0 py-15 px-16 h-40 w-full flex items-end justify-between'>
//         <div id='botomText'>
//             <h2 className='text-[20px] font-[B] '>debayans682@gmail.com | 8617262208</h2>
//             <h3 className='text-[18px] font-[D] text-gray-400 uppercase'>Website Design & Development</h3>
//         </div>
//         <div  id='banner'>
//             <img className='h-25 mb-5' src="/logo/10+.png" alt="" />
//             <img className='h-25' src="/logo/5+.png" alt="" />
//         </div>
//     </div>
//   )
// }

// export default BottomText