import React from 'react'

const Footer = () => {
  return (
    <div className='p-10 px-36 bg-[#131313] text-white font-main'>
        <div className='grid grid-cols-1 gap-10 md:flex md:justify-center md:gap-36'>
            <div className='text-left'>
                <h1 className='text-xl'>Fingertipe</h1>
                <ul className='grid grid-cols-1 gap-3 mt-5 font-light'>
                    <li>
                        <a href="/">Home</a>
                    </li>

                    <li>
                        <a href="/">Examples</a>
                    </li>

                    <li>
                        <a href="/">Pricing</a>
                    </li>

                    <li>
                        <a href="/">Updates</a>
                    </li>
                </ul>
            </div>
            
            <div className='text-left'>
                <h1 className='text-xl'>Resources</h1>
                <ul className='grid grid-cols-1 gap-3 mt-5 font-light'>
                    <li>
                        <a href="/">Home</a>
                    </li>

                    <li>
                        <a href="/">Examples</a>
                    </li>

                    <li>
                        <a href="/">Pricing</a>
                    </li>

                    <li>
                        <a href="/">Updates</a>
                    </li>
                </ul>
            </div>

            <div className='text-left'>
                <h1 className='text-xl'>About</h1>
                <ul className='grid grid-cols-1 gap-3 mt-5 font-light'>
                    <li>
                        <a href="/">Home</a>
                    </li>

                    <li>
                        <a href="/">Examples</a>
                    </li>

                    <li>
                        <a href="/">Pricing</a>
                    </li>

                    <li>
                        <a href="/">Updates</a>
                    </li>
                </ul>
            </div>

            <div className='grid font-light'>
                <div className='text-white md:flex gap-3 text-xl items-center'>
                    <ion-icon name="location"></ion-icon>
                    <p>7480 Mockingbird Hill undefined</p>
                </div>

                <div className='text-white md:flex gap-3 text-xl items-center'>
                    <ion-icon name="call"></ion-icon>
                    <p>(239) 555-0108</p>
                </div>

                <div className='text-white md:flex gap-3 text-xl items-center'>
                    <ion-icon name="location"></ion-icon>
                    <p>7480 Mockingbird Hill undefined </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer