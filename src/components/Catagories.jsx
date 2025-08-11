import React from 'react'
import { assets } from '../assets/assets'

const Catagories = () => {
  return (
    <div className='mt-4 px-6'>
        
        <h1 className='text-xl'>Categories to explore</h1>

        <div className='cards flex items-center justify-center gap-10 py-2 px-8'>

            <div className="card text-center">
                <img src={assets.cat_electronics} className='w-50 h-50 rounded-full object-cover cursor-pointer hover:scale-105 duration-500' alt="" />
                <p>Electronics</p>
            </div>

            <div className="card text-center">
                <img src={assets.cat_fashion} className='w-50 h-50 rounded-full object-cover cursor-pointer hover:scale-105 duration-500' alt="" />
                <p>Fashion</p>
            </div>

            <div className="card text-center">
                <img src={assets.cat_home} className='w-50 h-50 rounded-full object-cover cursor-pointer hover:scale-105 duration-500' alt="" />
                <p>Home & Garden</p>
            </div>

            <div className="card text-center">
                <img src={assets.cat_toys} className='w-50 h-50 rounded-full object-cover cursor-pointer hover:scale-105 duration-500' alt="" />
                <p>Toys</p>
            </div>

            <div className="card text-center">
                <img src={assets.cat_soprts} className='w-50 h-50 rounded-full object-cover cursor-pointer hover:scale-105 duration-500' alt="" />
                <p>Sports</p>
            </div>                                        

        </div>   
    </div>
  )
}

export default Catagories
