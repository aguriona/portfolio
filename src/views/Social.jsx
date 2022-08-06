import React from 'react'
import { IoLogoLinkedin } from 'react-icons/io';
import { AiFillGithub} from 'react-icons/ai';

export default function Social() {
  return (
    <div className='flex justify-center gap-10 text-red'>
       <a href="https://www.linkedin.com/in/augusto-uriona-java/"  target="_blank" className='cursor-poniter transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-red'><IoLogoLinkedin className='scale-125'/></a> 
       <a href="https://github.com/aguriona"  target="_blank" className='cursor-poniter transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-red'><AiFillGithub  className='scale-125'/></a> 
    </div>
  )
}
