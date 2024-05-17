import React from 'react'

const ColorBtn = ({children}) => {
  return (
    <button className='btn bg-[#4452FE] hover:bg-[#4452ea] text-white py-2 px-7 font-medium duration-500'> {children} </button>
  )
}

export default ColorBtn