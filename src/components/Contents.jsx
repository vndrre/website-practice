import React from 'react'
import Content1 from './contents/Content1'
import Content2 from './contents/Content2'

const Contents = () => {
  return (
    <div className='bg-[#181818] text-white pt-10 pb-10 px-10 font-main'>
        <div className='text-center grid grid-cols-1 gap-5'>
            <h1 className='font-medium text-4xl md:text-7xl'>Contents</h1>
            <p className='font-light text-xl md:text-2xl'>We focus on ergonomics and meeting you where you work. <br/> It's only a keystroke away.</p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10 md:pt-14 lg:px-72'>
            <Content1/>
            <div className='md:mt-0 lg:mt-0'>
              <Content2/>
            </div>
        </div>
    </div>
  )
}

export default Contents