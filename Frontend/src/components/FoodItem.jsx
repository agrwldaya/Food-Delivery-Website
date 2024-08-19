import React, { useContext, useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { StoreContext } from '../context/StoreContext';

export default function FoodItem({id,name,image,price,desc,index}) {
  const url = `http://localhost:4000/image/`
   
    
    const {cardItems,addToCard,removeFromCard} =  useContext(StoreContext);
  return (
  <div className="card sm:w-auto   shadow-xl mt-4 flex flex-col space-x-4 relative">
       <figure><img src={url+image} alt="fooditem" /></figure>
  {
    !cardItems[id] ?<div className='rounded-full absolute md:top-14 top-1/4  '> <img className='w-8 h-8 rounded-full'   onClick={()=>addToCard(index,id)} src={assets.add_icon_white} alt="" /> </div>:
    <div className='absolute  md:top-14 top-1/4 flex gap-4 pb-2 px-2 m-auto bg-white rounded-full items-center'> 
        <img onClick={()=>removeFromCard(index,id)}  className='w-8 pt-3 rounded-full' src={assets.remove_icon_red} alt="" />
        <p className='text-black font-semibold text-xl'>{cardItems[id]}</p>
        <img onClick={()=>addToCard(index,id)} className='w-8 pt-3 rounded-full'  src={assets.add_icon_green} alt=""/>
    </div>
  }
  <div className="flex mt-5 justify-between">
    <h2 className='font-bold text-lg '>{name}</h2>
    <img  className='md:w-16 h-4 mx-4' src={assets.rating_starts} alt="rating" />    
    </div>
      <p>{desc}</p>
     <p className='text-orange-500'>${price}</p>

</div>
  )
}
