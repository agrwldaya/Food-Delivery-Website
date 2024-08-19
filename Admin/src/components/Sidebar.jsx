import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (

    <div className='w-full md:w-[18%] space-y-4 md:border-r-2 md:h-screen   py-14'>
      <Link to="/add" className='border-2 flex gap-3 hover:bg-orange-100 ml-[10%] md:ml-[10%] px-5 py-3'>
        <img src={assets.add_icon} alt="Add" />
        <span className='hidden md:block'>Add Items</span>
      </Link>
      <Link to="/list" className='border-2 flex gap-3 hover:bg-orange-100 ml-[10%] md:ml-[10%] px-5 py-3'>
        <img src={assets.order_icon} alt="List" />
        <span className='hidden md:block'>List Items</span>
      </Link>
      <Link to="/orders" className='border-2 flex gap-3 hover:bg-orange-100 ml-[10%] md:ml-[10%] px-5 py-3'>
        <img src={assets.order_icon} alt="Orders" />
        <span className='hidden md:block'>Orders</span>
      </Link>
    </div>
  );
}
