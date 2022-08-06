import React from 'react'
import { RiReactjsLine } from 'react-icons/ri';
import { IoLogoJavascript } from 'react-icons/io';
import { DiMongodb } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { SiDocker, SiExpress, SiJava, SiKubernetes, SiSpring } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { DiGit } from 'react-icons/di';
import { AiFillGithub } from 'react-icons/ai';

import 'animate.css';


const Skills = () => {
  return (
    <div className='bg-bglight min-h-screen sm:pt-10 md:pt-28 lg:pt-28 xl:pt-28 sm:pr-9 py-4 lg:pl-9 md:pl-9 gap-2'>
      <div className='max-w-screen-2xl mx-auto'>
        <div className="font-paragraph text-colortitle font-bold pt-4 text-3xl">
          <div className='sm:pl-9 lg:p-0 md:pl-0 sm:pt-4 text-center'>
            <h1 className='animate__animated animate__fadeInLeft'>My Skills</h1>
          </div>

        </div>

        <div className='animate__animated animate__bounceInDown wrapper grid md:pb-10 sm:pb-10 lg:pb-10 sm:grid-cols-4 lg:grid-cols-7 md:grid-cols-7 sm:pl-6 grid-cols-7 grid-rows-7 gap-8 pt-20 text-red'>


          <div className="icon program animation">
            <span className="tooltip">Java</span>
            <span><i><SiJava className="text-2xl" /> </i></span>
          </div>

          <div className="icon program animation">
            <span className="tooltip">Spring</span>
            <span><i><SiSpring className="text-2xl" /> </i></span>
          </div>

          <div className="icon program animation">
            <span className="tooltip">JavaScript</span>
            <span><i><IoLogoJavascript className="text-2xl" /> </i></span>
          </div>


          <div className="icon program animation">
            <span className="tooltip">NodeJS</span>
            <span><i><FaNodeJs className="text-2xl" /> </i></span>
          </div>


          <div className="icon program animation">
            <span className="tooltip">Express</span>
            <span><i><SiExpress className="text-2xl" /> </i></span>
          </div>


          <div className="icon program animation">
            <span className="tooltip">Docker</span>
            <span><i><SiDocker className="text-2xl" /> </i></span>
          </div>


          <div className="icon program animation">
            <span className="tooltip">Kubernetes</span>
            <span><i><SiKubernetes className="text-2xl" /> </i></span>
          </div>


          <div className="icon program animation">
            <span className="tooltip">MongoDB</span>
            <span><i><DiMongodb className="text-2xl" /> </i></span>
          </div>


          <div className="icon program animation">
            <span className="tooltip">Mysql</span>
            <span><i><SiMysql className="text-2xl" /> </i></span>
          </div>


          <div className="icon program animation">
            <span className="tooltip">HTML</span>
            <span><i><AiFillHtml5 className="text-2xl" /> </i></span>
          </div>

          <div className="icon program animation">
            <span className="tooltip">CSS</span>
            <span><i><DiCss3 className="text-2xl" /> </i></span>
          </div>

          <div className="icon program animation">
            <span className="tooltip font-paragraph">ReactJs</span>
            <span><i><RiReactjsLine className="text-2xl" /> </i></span>
          </div>



          <div className="icon program animation">
            <span className="tooltip">Git</span>
            <span><i><DiGit className="text-2xl" /> </i></span>
          </div>

          <div className="icon program animation">
            <span className="tooltip">GitHub</span>
            <span><i><AiFillGithub className="text-2xl" /> </i></span>
          </div>


        </div>



      </div>


    </div>
  )
}

export default Skills