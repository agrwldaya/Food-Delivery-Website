import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { assets } from '../assets/frontend_assets/assets';
import { CartActions } from '../Store/cartSlice';
import { StoreContext } from '../context/StoreContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const url = `http://localhost:4000/image/`

   
  const { items,subtotal } = useSelector((store) => store.CartItem);  
 
  const {deleteCartData} =  useContext(StoreContext);
   
  const dispatch = useDispatch();
  const removeItem =(itemId)=>{
    console.log(itemId)
    deleteCartData(itemId)
      // dispatch(CartActions.removeItem(itemId))
  }
   
  return (
    <div className=' max-w-full md:px-28 mt-3 px-2'>
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td><img className="w-14 rounded" src={url+item.item} alt="" /></td>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${item.total}</td>
              <td onClick={()=>removeItem(item.id)}><img src={assets.cross_icon} alt="" /></td>
               
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      {items.length>0?
        <div className='mt-14 md:flex max-w-full   justify-between'>
        <div className=' md:w-1/2 space-y-3  px-2  order-2 md:order-1'>
          <h1 className='text-xl font-bold'>Cart Totals</h1>

          <div className='space-y-2 mb-5'>
            <div className='flex justify-between'>
              <p>Subtotal</p>
              <p>${subtotal}</p>
            </div>
            <hr />
            <div className='flex justify-between'>
            <p>Delivery Fee</p>
            <p>$2</p>
            </div>
  
            <hr />
            <div className='flex justify-between'>
            <p className='font-bold'>Total</p>
            <p>${subtotal+2}</p>
            </div>
          </div>

          <Link to='/cart/order'   className='bg-orange-500   px-4 py-2 rounded-md  text-lg font-medium hover:bg-orange-600 '>Proceed to Checkout</Link>
  
        </div>
        <div className='md:w-1/2  items-center order-1  mt-10   md:px-14 space-y-2'>
        <p>If you have a promo code,Enter it here</p>
        <div>
          <input className=' py-3 w-1/2 px-2 rounded-s-md outline-none' type="text" placeholder='code' />
          <button className='py-3 w-auto px-1 rounded-e-md font-bold text-black bg-slate-300'>Submit</button>
        </div>
        </div>
      </div>:
      <div className='mt-40 items-center text-center  max-w-full   '>
        <h1 className='text-2xl mb-5'>Add Your favourite item from menu</h1>
         <Link to="/"   className='bg-orange-500   px-4 py-2 rounded-md  text-lg font-medium hover:bg-orange-600 '>Explore menu</Link>
      </div>
      }
    </div>
  );
}
