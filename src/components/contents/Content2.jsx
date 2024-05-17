import React from 'react'
import ColorBtn from '../buttons/ColorBtn'

import board from '../contents/Boards Notifications.png'

const Content2 = () => {
  return (
    <div className='w-full bg-white text-black py-10 px-7 rounded-lg'>
        <div className='text-center grid grid-cols-1 gap-5'>
            <h1 className='text-xl font-medium'>Design with <br/> real data</h1>
            <p className=' text-[#5C5C5C]'>Ever wondered if you're too reliant on a client for work? Slate helps you identify.</p>
        </div>

        <div className='flex justify-center pt-10 pb-5'>
            <ColorBtn>Sign Up</ColorBtn>
        </div>

        <div className='pt-10 pb-5 flex justify-center'>
            <img src={board} alt="" className="scale-125"/>
        </div>
    </div>
  )
}

export default Content2