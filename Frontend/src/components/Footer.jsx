import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
export default function Footer() {
  return (
<div  id='footer' className=' mt-20 max-w-full px-3 md:px-28 bg-base-200 pb-10 '>
   <footer className=" relative flex-colfooter  text-base-content   ">
  <div className='flex md:flex-row sm:flex-row flex-col sm:justify-between sm:items-center   md:items-center md:justify-between'>
    <div className='sm:w-1/2 mt-3 '>
     <img src={assets.logo} alt="" />
    <p className='mt-3 font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit facilis adipisci quidem, eos illum voluptatibus provident, placeat dicta velit itaque non iusto vitae obcaecati ullam. Nisi suscipit inventore facere ipsa?</p>
    <div className='flex gap-3 mt-3'>
    <img src={assets.facebook_icon } alt="" />
    <img src={assets.twitter_icon} alt="" />
    <img src={assets.linkedin_icon} alt="" />
    </div>
    
  </div> 
 <div className='md:w-1/2 sm:w-1/2 sm:flex md:space-x-4 sm:justify-around gap-6 md:gap-0 md:ml-6 sm:ml-6'>
  <div className='flex flex-col'>
    <h6 className="text-3xl font-bold mt-3">Company</h6> 
    <a className="link link-hover  text-base">Home</a>
    <a className="link link-hover  text-base">About us</a>
    <a className="link link-hover   text-base">Delivery</a>
    <a className="link link-hover  text-base">Privacy Policy</a>
  </div> 
  <div  className='flex flex-col'>
    <h1 className="text-3xl font-bold mt-3">GET IN TOUCH</h1>
    <p className='text-base'>+1-212-456-7890</p>
    <p className='text-base'>contact@tamato.com</p>
  </div>
  </div>
  
  </div>
  <hr className='mt-10' />
   <div className='text-center items-center flex justify-center mt-7'>
   <p className='absolute'>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
   </div>
   
  </footer>

    </div>
  )
}
