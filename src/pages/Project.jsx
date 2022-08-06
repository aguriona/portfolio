import React from 'react'
import ImageProject from '../components/ImageProject'
import TextProject from '../components/TextProject'



export default function Project() {
  return (
    <div className='min-h-screen bg-bglight p-8 grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-flow-col auto-cols-max gap-2'>
      <TextProject />
      <ImageProject />
    </div>
  )
}
