import React from 'react'
import Img from '../assets/images/hero-graphic.png' // Ensure you have an image at this path

function Hero() {
  return (
    <div className='flex flex-row p-8'>
        <div className='mt-30 max-w-5xl ml-20'>
            <p className='text-custom-blue font-extrabold text-[50px] font-main-bold'>
                From Wiggles to Zen Giggles—
            </p>
            <p className='text-custom-blue text-[40px] font-main max-w-4xl'>
                Calm young minds today, 
                and they'll conquer the storms of tomorrow.
            </p>
        </div>
        <div>
            <img 
                src='./src/assets/images/hero-graphic.png' 
                alt='Hero Image' 
                className='w-[500px] h-[500px] object-cover mx-20 mt-30'
            />
        </div>
    </div>
  )
}

export default Hero