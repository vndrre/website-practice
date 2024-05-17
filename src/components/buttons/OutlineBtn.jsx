import React from 'react'

const OutlineBtn = ({children}) => {
  return (
    <button className='btn border-[1px] py-2 px-7 hover:bg-white hover:text-black font-medium duration-500'> {children} </button>
  )
}

export default OutlineBtn