import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
export default function AppDownload() {

  return (
    <div id='appDownload' className='max-w-full mt-24 px-3 md:px-28 flex flex-col justify-center items-center'>
      <div className='text-4xl  text-center font-bold mb-6'>
        <h1  >For Better Experience Download</h1>  
        <h1>Tomato App</h1> 
      </div>
      <div className='flex space-x-4 '>
        <img className='cursor-pointer hover:scale-105 w-40' src={assets.app_store} alt="" />
        <img className='cursor-pointer hover:scale-105 w-40' src={assets.play_store} alt="" />
      </div>
    </div>
  )
}
