import React from 'react'
import { Link } from 'react-router-dom'


export default function ButtonBack() {
  return (
    <div className='pl-4'> 
        <Link to="/">
         <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 bg-red gap-2 text-white font-fontFamily-paragraph  font-semibold py-2 px-4  rounded-lg inline-flex items-center">
         👈 Go to back
        </button>
        </Link>
    </div>
  )
}
