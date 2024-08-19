import React from 'react';
import { menu_list } from '../assets/frontend_assets/assets';
import  '../app.css'

export default function ExploreMenu({category,setCategory}) {
  return (
    <div id='explore-menu' className='max-w-full mt-7 px-3 md:px-28 space-y-10 mb-10'>
      <h1 className='mt-10 text-3xl'>Explore our menu</h1>
      <p className='md:w-3/4 '>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, odit! Dignissimos, blanditiis reiciendis. Nulla earum vero dolorem iure consectetur, maiores, hic minus, quia quod blanditiis nisi aliquid cumque consequatur quos.
      </p>
      <div className='mt-20 space-x-6 mb-20 overflow-x-auto whitespace-nowrap scrollbar-hide'>

        {menu_list.map((item, index) => (
          <div key={index} className='inline-block text-center' 
          onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}>
            <img  className={`block ${category === item.menu_name ? "active" : ""}`}src={item.menu_image} alt={item.menu_name}  />
            <p className='mt-4'>{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
