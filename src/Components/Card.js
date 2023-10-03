import React from 'react'
import {BsHeart,BsPeople,BsSpeedometer2} from 'react-icons/bs'
import {GiSteeringWheel} from 'react-icons/gi'
import {LuFuel} from 'react-icons/lu'

const Card = ({Product}) => {
    
  return (
    <div className='bg-white p-4 rounded-xl shadow-sm text-[#393b41]'>
        <div>
      
            <img src={Product.image} alt='car image' className='rounded-lg w-[300px] h-[200px]'/>
           
        </div>
        <div className='flex justify-between p-2'>
            <h3 className='text-xl font-semibold'>{Product.Name}</h3>
            <span className='border-2 border-[#4899ed] border-dashed rounded-lg px-2'>{Product.LaunchYear}</span>
        </div>
        <div className='grid grid-cols-2 p-2'>
           <span className='flex items-center gap-1 '><BsPeople className='text-[#4899ed]'/>  { Product.SitCapacity} people</span>
           <span className='flex items-center gap-1 '><LuFuel className='text-[#4899ed]'/>{Product.fuel}</span>
           <span className='flex items-center gap-1 '><BsSpeedometer2 className='text-[#4899ed]'/>{Product.average} </span>
           <span className='flex items-center gap-1 '><GiSteeringWheel className='text-[#4899ed]'/>{Product.Type} </span>
        </div>
        <hr />

        <div className='flex justify-between p-2 items-center mt-1'>
            <div>
            <span className='text-xl font-semibold'>${Product.Price} </span>
            <span>/ month</span>

            </div>
            <div className='flex gap-2 items-center justify-center'>
                <span className='text-[#4899ed] bg-[#daeafa] p-2 rounded-lg cursor-pointer'>
                    <BsHeart/>
                </span>
                <button className='bg-[#4899ed] text-white font-semibold rounded-xl py-1 px-2'>Rent Now</button>
            </div>
        </div>
    </div>
  )
}

export default Card