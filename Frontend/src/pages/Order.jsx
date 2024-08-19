import React, { useContext, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';
 

export default function Order() {
  const url = "http://localhost:4000/api/cart/order"
    
   const {cardItems,token,}  = useContext(StoreContext)
  //  console.log(token)
   const [address,setAddress] = useState("")
  
  const {items, subtotal } = useSelector((store) => store.CartItem);
  // console.log(items) 
  //console.log(cardItems)
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const zipRef = useRef();
  const countryRef = useRef();
  const phoneRef = useRef();

  const handleOrderDetail = async (e) => {
    e.preventDefault();
    const data = {
      firstName: firstnameRef.current.value,
      lastName: lastnameRef.current.value,
      email: emailRef.current.value,
      street: streetRef.current.value,
      city: cityRef.current.value,
      state: stateRef.current.value,
      zip: zipRef.current.value,
      country: countryRef.current.value,
      phone: phoneRef.current.value,
    };

    // console.log(data);
    const orderData = {
      items:items,
      address:data,
      amount:subtotal+2
     }
     console.log(orderData)
     const response = await axios.post(url,orderData,{headers:{token}})
     if(response.data.success){
      toast.success  ("Processing...")
      const {session_url} = response.data
      window.location.replace(session_url)
     }else{
      alert("Error");
     }
  };
   

  return (
    
    <div className="max-w-full md:px-28 mt-3 md:flex">
      <form className="md:w-1/2   p-2 w-full space-x-5 flex flex-col md:items-center md:text-center justify-center" onSubmit={handleOrderDetail}>
        <h1 className="items-center text-center mb-3 text-2xl font-bold">Delivery Information</h1>
        <div className="space-y-4">
          <div className="w-full flex gap-1 justify-between">
            <input ref={firstnameRef} className="px-2 outline-none py-2 w-1/2    bg-slate-600 rounded-md" type="text" placeholder="First name" required />
            <input ref={lastnameRef} className="px-2 outline-none w-1/2 py-2   bg-slate-600 rounded-md" type="text" placeholder="Last name" required />
          </div>
          <div>
            <input ref={emailRef} className="px-2 outline-none py-2 w-full   bg-slate-600 rounded-md" type="email" placeholder="Email" required />
          </div>
          <div>
            <input ref={streetRef} className="px-2 outline-none py-2 w-full   bg-slate-600 rounded-md" type="text" placeholder="Street" required />
          </div>
          <div className="flex gap-1 justify-between">
            <input ref={cityRef} className="px-2 outline-none py-2 w-1/2   bg-slate-600 rounded-md" type="text" placeholder="City" required />
            <input ref={stateRef} className="px-2 outline-none py-2 w-1/2   bg-slate-600 rounded-md" type="text" placeholder="State" required />
          </div>
          <div className="flex gap-1 justify-between">
            <input ref={countryRef} className="px-2 outline-none py-2 w-1/2   bg-slate-600 rounded-md" type="text" placeholder="Country" required />
            <input ref={zipRef} className="px-2 outline-none py-2 w-1/2   bg-slate-600 rounded-md" type="text" placeholder="Zip code" required />
          </div>
          <div>
            <input ref={phoneRef} className="px-2 outline-none py-2   w-full bg-slate-600 rounded-md" type="tel" placeholder="Phone" required />
          </div>
        </div>
        <button type="submit" className="bg-green-500 px-4 py-2 rounded-md text-gray-700 text-lg font-medium hover:bg-green-600 mt-5">
          Proceed to Payment
        </button>
      </form>
      <div className="md:w-1/2 flex flex-col mx-5 mt-10 md:mt-0">
        <h1 className="items-center text-center mb-3 text-2xl font-bold">Cart Total</h1>
        <div className="space-y-2 mb-5">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p>Delivery Fee</p>
            <p>$2.00</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p className="font-bold">Total</p>
            <p>${(subtotal + 2).toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
