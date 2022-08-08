import React from "react";
import { FaReact} from 'react-icons/fa';
import { SiTailwindcss} from 'react-icons/si';
import { FaLaravel } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import imgone from '../../assets/mock1.png'



import 'animate.css';


export default function CardWork() {

   return (
   
    <div>

    <div className="flex justify-center  p-10  animate__animated animate__bounceInDown">
      

      <div className="transform transition duration-500 hover:scale-105 max-w-md">
        <img
          src={imgone}
          alt="project photo"
          className="w-full object-cover object-center rounded-lg shadow-md"
        />
        <div className="relative px-4 -mt-16  ">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-baseline">
              <span className="text-red inline-block scale-110">
                <FaLaravel />
              </span>
              <div>
              <span className="text-red px-4 inline-block scale-125">
                <SiTailwindcss/>
              </span>
              <span className="text-red px-2 inline-block scale-125">
                <SiMysql/>
              </span>
              </div>
            </div>

            <h4 className="mt-1 text-lg font-title font-normal  leading-tight truncate">
             API CRUD
            </h4>

            <div className="mt-1 text-sm">
            Design and development of an API for Disney users. 
            </div>
            <div className="mt-2 flex items-baseline gap-6">
              <a href="https://alkemy-disney-crud.herokuapp.com/swagger-ui/" target="_blank">
              <button  className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 text-red text-sm font-title font-semibold">
                View demo
              </button>
              </a>
              
              <a href="https://github.com/aguriona/alkemy" target="_blank"> <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 text-red text-sm font-title font-semibold">
                View repo </button>
              </a>
              
            </div>
          </div>
        </div>
      </div>





      <div className="transform transition duration-500 hover:scale-105 max-w-md">
        <img
          src={imgone}
          alt="project photo"
          className="w-full object-cover object-center rounded-lg shadow-md"
        />
        <div className="relative px-4 -mt-16  ">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-baseline">
              <span className="text-red inline-block scale-110">
                <FaReact />
              </span>
              <div>
              <span className="text-red px-4 inline-block scale-125">
                <SiTailwindcss/>
              </span>
              </div>
            </div>

            <h4 className="mt-1 text-lg font-title font-normal  leading-tight truncate">
              Inmobiliaria Mi Casa
            </h4>

            <div className="mt-1 text-sm">
            Landing page for a real estate agency.
            </div>
            <div className="mt-2 flex items-baseline gap-6">
              <a href="https://inmobiliaria-react.herokuapp.com/" target="_blank">
              <button  className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 text-red text-sm font-title font-semibold">
                View demo
              </button>
              </a>
              
              <a href="https://github.com/aguriona/inmobiliaria-mc" target="_blank"> <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 text-red text-sm font-title font-semibold">
                View repo </button>
              </a>
              
            </div>
          </div>
        </div>
      </div>





    </div>

    </div>
  );
}
