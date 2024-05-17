import React from 'react'

import pfp from '../testimonials/Ellipse 2.png'

const Testm1 = () => {
  return (
    <div className='w-full border-[2px] border-[#565656] rounded-lg p-5 px-7'>
        <div className='flex gap-5 items-center'>
            <img src={pfp} alt="" />
            <div className='font-medium'>
                <h1>Philip Watson</h1>
                <p>Designer</p>
            </div>
        </div>

        <div className='pt-5'>
            <p>Slate helps you see how many more days you need to work to reach your financial goal for the
            month and year. Slate helps 
            you see how many more days 
            you need to work to reach your 
            financial goal for the month and 
            year.your financial 
            goal for the month and year.</p>
        </div>
    </div>
  )
}

export default Testm1