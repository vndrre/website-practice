import React from 'react'

import appstore from '../assets/partners/logos_apple-app-store.png'
import apiary from '../assets/partners/logos_apiary.png'
import android from '../assets/partners/logos_android-icon.png'
import basecamp from '../assets/partners/logos_basecamp.png'
import airbnb from '../assets/partners/logos_airbnb.png'
import ibm from '../assets/partners/logos_ibm.png'
import OutlineBtn from './buttons/OutlineBtn'

const Partners = () => {
  return (
    <div className='bg-[#181818] text-white pt-16 md:pt-20 pb-10 px-10 font-main'>
        <div className='text-center grid grid-cols-1 gap-5 pb-10'>
            <h1 className='font-medium text-4xl md:text-7xl'>Partners</h1>
            <p className='font-light text-xl md:text-2xl'>We focus on ergonomics and meeting you where you work.<br/> It's only a keystroke away.</p>

            <div className='flex justify-center gap-5 pt-10'>
                <div className='grid grid-cols-3 md:grid-cols-6 gap-5 items-center'>
                    <img src={appstore} alt="" />
                    <img src={apiary} alt="" />
                    <img src={android} alt="" />
                    <img src={basecamp} alt="" />
                    <img src={airbnb} alt="" />
                    <img src={ibm} alt="" />
                </div>
            </div>

            <div className='pt-5 pb-10'>
                <div>
                    <OutlineBtn>All Partners</OutlineBtn>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Partners