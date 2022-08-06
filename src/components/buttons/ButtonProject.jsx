import React from 'react'
import { FaGithub} from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';

export default function ButtonProject() {
  return (
    <div>
        <div className="flex gap-4 lg:pl-4 md:pl-4 pt-2">
        <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 bg-red gap-2 text-white font-fontFamily-paragraph  font-semibold py-2 px-4  rounded-lg inline-flex items-center">
         <span>Website</span> <BiWorld className="fill-current w-4 h-4 mr-2"/>
        </button>


          <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 gap-2 bg-transparent hover:bg-red text-red font-semibold font-fontFamily-paragraph inline-flex items-center hover:text-white py-2 px-4 border border-red hover:border-transparent rounded-lg">
          <span>Repository</span> <FaGithub className="fill-current w-4 h-4 mr-2"/>
          </button>
        </div>
      </div>
    
  )
}
