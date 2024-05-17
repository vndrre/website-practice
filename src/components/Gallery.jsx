import React from 'react'

import card1 from '../assets/gallery/Card.png'
import card2 from '../assets/gallery/Card (1).png'
import card3 from '../assets/gallery/Card (2).png'
import card4 from '../assets/gallery/Card (3).png'

import card5 from '../assets/gallery/Card (4).png'
import card6 from '../assets/gallery/Card (5).png'

import OutlineBtn from './buttons/OutlineBtn'

const Gallery = () => {
  return (
    <div className='bg-[#181818] text-white pt-10 pb-10 px-10 font-main'>
        <div className='text-center grid grid-cols-1 gap-5 pt-10 pb-10'>
            <h1 className='text-4xl md:text-7xl font-medium'>Gallery</h1>
            <p className='text-xl md:text-2xl font-light'>We focus on ergonomics and meeting you where you work.<br/> It's only a keystroke away.</p>
        </div>

        <div className='md:hidden grid grid-cols-1 content-center'>
            <img src={card1} alt="" />
            <img src={card2} alt="" className='lg:flex md:hidden hidden' />
            <img src={card3} alt="" />
            <img src={card4} alt="" />
        </div>

        <div className='hidden md:flex flex-col justify-center'>
            <div className='flex justify-center'>
                <img src={card1} alt="" />
                <img src={card3} alt="" />
            </div>

            <div className='flex justify-center'>
                <img src={card5} alt="" />
                <img src={card6} alt="" />
            </div>
        </div>

        <div className='flex justify-center'>
            <OutlineBtn>See More</OutlineBtn>
        </div>
    </div>
  )
}

export default Gallery