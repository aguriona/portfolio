import React from 'react'
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

const MenuItems = ({showMenu, active}) => {
  return (
    
        <ul className={active ? 'flex-col flex items-center fixed inset-0 left-1/4 bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden z-30' : 'hidden'}>
                <MdClose onClick={showMenu} className='text-red cursor-pointer scale-150'/>
                <Link to="/"><li className='font-fontFamily-paragraph text-bglight transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-red'>Home</li></Link> 
                <Link to="Work"><li className='font-fontFamily-paragraph text-bglight transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-red'>Projects</li></Link> 
                <Link to="Contact"><li className='font-fontFamily-paragraph text-bglight transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-red'>Contact</li></Link> 
        </ul>
        
  )
}

export default MenuItems