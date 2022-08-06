import React from 'react'
import ButtonCv from './buttons/ButtonCv'

import 'animate.css';

export default function TextAbout() {
  return (
    <div className=''>
    <div className='leading-8 font-title sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl text-colorparagraph pt-10 px-10'>
        <p className='animate__animated animate__fadeInRight text-center'>I'm passionate about coding and problem solving through code, and I'm excited to work alongside other amazing programmers and learn so much more!</p>
    </div>
    <ButtonCv />

    </div>
  )
}
