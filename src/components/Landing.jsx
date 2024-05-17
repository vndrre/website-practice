import React from 'react'

import screens from '../assets/screens.png'


const Landing = () => {
  return (
    <div className='pt-28 pb-5 px-10 text-white bg-gradient-to-b from-[#181818] to-[#131313] font-main'>

        <div className='text-center grid grid-cols-1 gap-5 pb-10 md:pt-20'>
            <h1 className='font-medium md:font-semibold text-4xl md:text-7xl'>Work at the <br className='md:hidden flex'/> speed <br className='hidden md:flex'/> of thought.</h1>
            <div className='md:flex md:justify-center mt-3'>
                <p className='font-light text-xl md:text-2xl md:w-[40%]'>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
            </div>
        </div>

        <div className='grid grid-cols-1 md:flex md:justify-center gap-5 px-16 md:px-96 pb-14'>
            <button className='btn bg-[#4452FE] hover:bg-[#4452ea] md:w-[20%] text-white py-3 px-5 font-medium duration-500'>Try For Free</button>
            <button className='btn border-[1px] py-3 px-5 hover:bg-white md:w-[20%] hover:text-black font-medium duration-500'>Learn More</button>
        </div>

        <img src={screens} alt="" className='scale-125 md:scale-100 opacity-75 hover:opacity-100 duration-500' />
    </div>
  )
}

export default Landing