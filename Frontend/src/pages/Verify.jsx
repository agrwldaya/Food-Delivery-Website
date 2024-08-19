import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function Verify() {
    const url = "http://localhost:4000/api/cart/order/verify"
    const [searchPharams,setSearchParams] = useSearchParams();
      const nevigate = useNavigate()
    const success=  searchPharams.get("success");
    const orderId = searchPharams.get("orderId");
    console.log(success,orderId)
    const verifyPayment = async()=>{
        const response = await axios.post(url,{success,orderId});
        if(response.data.success){
            nevigate('/myorders')
        }else{
            nevigate('/')
        }
    }
    useEffect(()=>{
           verifyPayment()
    },[])
  return (
    <div className='h-52 items-center text-center'>
     <span className="loading loading-spinner text-success"></span>
    </div>
  )
}
