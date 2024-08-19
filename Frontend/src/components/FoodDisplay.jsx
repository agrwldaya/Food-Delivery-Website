import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem';

export default function FoodDisplay({category}) {
   const {food_list} = useContext(StoreContext);
   const filtered_Food_list = food_list.filter((item)=>(item.category === category));
   
  return (
    <div className='max-w-full mt-7 px-3  md:px-28'>
        <hr className='mb-10' />
        <h2 className='text-4xl font-bold mb-10'>Top dishes near  you</h2>
        <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2  mx-auto  space-x-2 justify-center'>
         {(category==="All"?food_list:filtered_Food_list).map((item,index)=>{
            return <FoodItem key={index} id={item._id} index={index} name={item.name} image={item.image} price={item.price} desc={item.description} />
         })}
        </div> 
        
    </div>
  )
}
