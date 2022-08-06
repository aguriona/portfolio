import React from 'react'
import AnimationOne from '../components/AnimationOne'
import HomeView from './HomeView'
import TextAbout from "../components/TextAbout";


export default function Home() {

  return (
    <div className='mt-5 min-h-screen flex flex-row justify-evenly'>
        <div className='mt-6'>
        <AnimationOne />
        </div>

        <div className='pt-20'>
        <HomeView />
        <TextAbout />
        </div>


 


    </div>
  )
}
