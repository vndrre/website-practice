import React from 'react'

import chatbot from '../assets/Chat Bot.png'

const Features = () => {
  return (
    <div className='bg-[#181818] text-white pt-10 md:pt-28 pb-10 px-10 font-main'>
        <div className='text-center grid grid-cols-1 gap-5'>
            <h1 className='text-4xl md:text-7xl font-medium'>Features</h1>
            <p className='font-light text-xl md:text-2xl'>Most calendars are designed for teams.<br/> Slate is designed for freelancers who want a simple way to plan their schedule.</p>
        </div>

        <div className='grid grid-cols-1 gap-14 md:flex md:justify-center items-center md:gap-20 px-7 pt-10 md:pt-24 pb-20'>
            <div className='pt-5 pb-10'>
                <img src={chatbot} alt="" className='md:scale-110 md:mt-3'/>
            </div>

            <div className='grid gap-10 md:gap-7 md:mb-36'>
                <div className='grid grid-cols-1 gap-3'>
                    <div className='flex gap-3 items-center text-[#02E4C0] text-2xl'>
                        <ion-icon name="hammer"></ion-icon>
                        <h1 className='text-white font-medium'>A single source of truth</h1>
                    </div>
                    <p className='font-light'>When you add work to your Slate calendar we automatically calculate useful insights </p>
                </div>

                <div className='grid grid-cols-1 gap-3'>
                    <div className='flex gap-3 items-center text-[#02E4C0] text-2xl'>
                        <ion-icon name="infinite"></ion-icon>
                        <h1 className='text-white font-medium'>Or with rules</h1>
                    </div>
                    <p className='font-light'>When you add work to your Slate calendar we automatically calculate useful insights </p>
                </div>

                <div className='grid grid-cols-1 gap-3'>
                    <div className='flex gap-3 items-center text-[#02E4C0] text-2xl'>
                        <ion-icon name="infinite"></ion-icon>
                        <h1 className='text-white font-medium'>Or with rules</h1>
                    </div>
                    <p className='font-light'>When you add work to your Slate calendar we automatically calculate useful insights </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features