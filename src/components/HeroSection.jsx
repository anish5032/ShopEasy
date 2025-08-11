import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex border border-gray-400'>
        {/* {Left Side} */}
        <div className='w-full flex items-center justify-center py-10'>
            <div className='text-[#414141]'>

                <div className="flex items-center gap-2">
                    <p className='w-8 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm '>DISCOVER</p>
                </div>

                <div>
                    <p className='font-medium prata-regular text-4xl'>AMAZING DEALS</p>
                </div>

                <div className='flex items-center gap-2'>
                    <p>Shop Now</p>
                    <p className='w-8 h-[2px] bg-[#414141]'></p>
                </div>
            </div>
        </div>

        <img src={assets.hero_img} alt="hero-img" className='w-2xl h-[500px]' />
        
    </div>
  )
}

export default Hero
