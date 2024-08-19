import React, { useContext, useRef } from "react";
import { useDispatch } from "react-redux";

import { loginAction } from "../Store/loginSlice";
import axios from "axios";
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { StoreContext } from "../context/StoreContext";



export default function Login() {
  const {setToken} = useContext(StoreContext)
  const url = "http://localhost:4000/api/user/login";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const  handleLogin = ()=>{
      dispatch(loginAction.toggleLogin());
  }
  const handleSignup =()=>{
    dispatch(loginAction.toggleLogin());
    dispatch(loginAction.toggleSignup());
  }
  const emailInput = useRef();
  const passInput = useRef();


  const loginDetails = async (e)=>{
 
    e.preventDefault();  
    
    const formData = {
      email: emailInput.current.value,
      password: passInput.current.value
    };

    try {
      const response = await axios.post(url, formData);
      if (response.data.success) {
         setToken(response.data.token)
         localStorage.setItem("token",response.data.token)
         toast.success(response.data.message)
         dispatch(loginAction.toggleLogin())
        //  dispatch(loginAction.toggleLogout())

         navigate("/")
         
      } else {
        toast.error(response.data.message)
        
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
    
  }
   
  return (
    <div className=" z-50  absolute flex justify-center items-center min-h-screen min-w-full ">
      <div className="bg-white text-black shadow-slate-600 shadow-md p-6 rounded-l rounded-md ">
        <form method="dialog" className="relative">
          <span onClick={handleLogin}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 cursor-pointer"
          >✕</span>
          <h3 className="font-bold text-lg mb-4 text-center">Login</h3>
          {/* email */}
          <div className='mt-4 space-y-2'>
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder='Enter your email here'
              ref={emailInput}
              className='outline-none border rounded-md w-80 px-3 py-1 dark:bg-white dark:text-black'
            />
          </div>
          {/* password */}
          <div className='mt-4 space-y-2'>
            <span>Password</span>
            <br />
            <input
              type="password"
              ref={passInput}
              placeholder='Enter your password here'
              className='outline-none border rounded-md w-80 px-3 py-1 dark:bg-white dark:text-black'
            />
          </div>
          <div className='flex justify-around mt-6'>
            <button onClick={loginDetails} className='bg-orange-500 px-3 py-1 rounded-md hover:bg-orange-600 duration-200'>Login</button>
            <div>Not registered?
              <a onClick={handleSignup}
                className='underline text-blue-500 cursor-pointer ml-1'>
                Signup
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
