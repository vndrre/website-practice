import React from 'react'
import Testm1 from './testimonials/Testm1'

const Testimonials = () => {
  return (
    <div className='bg-gradient-to-b from-[#181818] to-[#131313] text-white  pt-10 md:pt-28 pb-10 px-10 font-main'>
        <div className='text-center'>
            <h1 className='text-4xl font-medium md:text-7xl'>Testimonials</h1>
        </div>

        <div className='pt-10 pb-10 md:pb-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-center'>
            <Testm1/>
            <Testm1/>
            <Testm1/>
        </div>
    </div>
  )
}

export default Testimonials