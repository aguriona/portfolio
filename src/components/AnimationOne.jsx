import React from 'react'
import imgone from '../assets/illustration1.png'
export default function AnimationOne() {
  return (
    <div className='flex justify-center'>
        <div className='w-[400px]'>
          <div className='bottom-0 right-0'>
          <img className='rounded-full' src={imgone} alt="img1" />
          </div>
        </div>
    </div>
  )
}
