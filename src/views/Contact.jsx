import React from 'react'
import ModalForm from '../components/ModalForm'

import Social from './Social'
import 'animate.css';

export default function Contact() {
  return (
    <div id='contact' className='bg-bglight min-h-screen sm:pt-20 md:pt-20 lg:pt-20 xl:pt-20 pb-4'>
    <div className='bg-bglight flex justify-center pt-28 max-w-screen-2xl mx-auto'>
    <div className='animate__animated animate__bounceInLeft font-paragraph text-2xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl text-colortitle font-bold'>
        <p className='text-center'>Let’s work together and</p>
        <p className='text-center'>make everything super cute <br/> and super useful. </p>
    </div>
    </div>
    <div className='max-w-screen-2xl mx-auto'>
    <ModalForm />
    <Social />
    
    </div>
    </div>
  )
}
