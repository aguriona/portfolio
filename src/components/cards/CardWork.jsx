import React from "react";
import { IoLogoJavascript} from 'react-icons/io';
import { FaBootstrap} from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';
import { FaReact} from 'react-icons/fa';
import { SiTailwindcss} from 'react-icons/si';
import { SiMongodb} from 'react-icons/si';
import { FaNode} from 'react-icons/fa';
import { SiExpress} from 'react-icons/si';
import { SiPostman} from 'react-icons/si';
import { FaLaravel } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { FaPhp } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';


import 'animate.css';


export default function CardWork() {
  return (

    <div>

    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10  animate__animated animate__bounceInDown">
      
      
    <div className="transform transition duration-500 hover:scale-105">
        <img
          src="https://alkemy-disney-crud.herokuapp.com/swagger-ui/"
          alt="Alkemy"
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
              <span className="text-red px-2 inline-block scale-125">
                <FaNodeJs/>
              </span>
              <span className="text-red px-2 inline-block scale-125">
                <SiMongodb/>
              </span>
              <span className="text-red px-2 inline-block scale-125">
                <SiExpress/>
              </span>
              </div>
            </div>
            

            <h4 className="mt-1 text-lg font-title font-normal  leading-tight truncate">
              ONG CRUD
            </h4>

            <div className="mt-1 text-sm">
            Application created for the EducaMás foundation, in order to add, modify an delete users.
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






      <div className="transform transition duration-500 hover:scale-105">
        <img
          src="https://raw.githubusercontent.com/DanielaTob/img/main/meet.png"
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
              Meeting Academy
            </h4>

            <div className="mt-1 text-sm">
            Design and development of an on-line event management application. 
            </div>
            <div className="mt-2 flex items-baseline gap-6">
              <a href="http://meetingacademy.herokuapp.com/" target="_blank">
              <button  className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 text-red text-sm font-title font-semibold">
                View demo
              </button>
              </a>
              
              <a href="https://github.com/DanielaTob/Meeting-Academy" target="_blank"> <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 text-red text-sm font-title font-semibold">
                View repo </button>
              </a>
              
            </div>
          </div>
        </div>
      </div>





      <div className="transform transition duration-500 hover:scale-105">
        <img
          src="https://raw.githubusercontent.com/DanielaTob/img/main/petsclub.png"
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
              Pets Club 
            </h4>

            <div className="mt-1 text-sm">
            Web App where orders are received from the user and delivered to the business owner as a digital order through the WhatsApp application.
            </div>
            <div className="mt-2 flex items-baseline gap-6">
              <a href="https://pets-club.vercel.app/" target="_blank">
              <button  className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 text-red text-sm font-title font-semibold">
                View demo
              </button>
              </a>
              
              <a href="https://github.com/DanielaTob/Pets-Club" target="_blank"> <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 text-red text-sm font-title font-semibold">
                View repo </button>
              </a>
              
            </div>
          </div>
        </div>
      </div>





      <div className="transform transition duration-500 hover:scale-105">
        <img
          src="https://raw.githubusercontent.com/DanielaTob/img/main/smart.png"
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
              <span className="text-red px-2 inline-block scale-125">
              <SiMongodb/>
              </span>
              <span className="text-red px-2 inline-block scale-125">
              <FaNode/>
              </span>
              <span className="text-red px-2 inline-block scale-125">
              <SiExpress/>
              </span>
              <span className="text-red px-2 inline-block scale-125">
              <SiPostman/>
              </span>
              </div>
            </div>

            <h4 className="mt-1 text-lg font-title font-normal  leading-tight truncate">
              Smar Taks!
            </h4>

            <div className="mt-1 text-sm">
            Smart Task! is a web app to be able to manage the tasks of the team quickly.
            </div>
            <div className="mt-2 flex items-baseline gap-6">
              <a href="https://todo-list-mern-frontend.vercel.app/" target="_blank">
              <button  className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 text-red text-sm font-title font-semibold">
                View demo
              </button>
              </a>
              
              <a href="https://github.com/DanielaTob/TodoList-MERN-Frontend" target="_blank"> <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 text-red text-sm font-title font-semibold">
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
