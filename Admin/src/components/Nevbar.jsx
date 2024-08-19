import assert from 'assert'
import React from 'react'
import { assets } from '../assets/assets'

export default function Nevbar() {
  return (
    <div className='flex justify-between mx-10 mt-3'>
      <div>
      <img src={assets.logo} alt="" />
      </div>
      <div>
      <img className='w-12 h-12 rounded-full cursor-pointer' src={assets.profile_image} alt=""/>
      </div>
    </div>
  )
}
