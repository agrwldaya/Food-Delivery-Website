import React, { useContext, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { loginAction } from "../Store/loginSlice";
import axios from "axios";
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { StoreContext } from "../context/StoreContext";
export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const {setToken} = useContext(StoreContext)
  const url = "http://localhost:4000/api/user/register";

  const handlesignup = () => {
    dispatch(loginAction.toggleSignup());
  }
  
  const handleLogin = () => {
    dispatch(loginAction.toggleSignup());
    dispatch(loginAction.toggleLogin());
  }

  const nameInput = useRef();
  const emailInput = useRef();
  const passInput = useRef();

  const signupDetails = async (e) => {
    e.preventDefault();  // Prevent default form submission behavior
    
    const formData = {
      name: nameInput.current.value,
      email: emailInput.current.value,
      password: passInput.current.value
    };

    try {
      const response = await axios.post(url, formData);
      if (response.data.success) {
        toast.success(response.data.message)  
        setToken(response.data.token)
        localStorage.setItem("token",response.data.token)
        // dispatch(loginAction.toggleLogout())
        dispatch(loginAction.toggleSignup())
         navigate("/")
      } else {
        toast.error(response.data.message)
        
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
    
  }

  return (
    <div className="z-50 absolute flex justify-center items-center min-h-screen min-w-full">
      <div className="bg-white text-black shadow-slate-600 shadow-md p-6 rounded-l rounded-md">
        <form onSubmit={signupDetails} className="relative">
          <span onClick={handlesignup} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 cursor-pointer">✕</span>
          <h3 className="font-bold text-lg mb-4 text-center">Signup</h3>
          {/* name */}
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input
              type="text"
              ref={nameInput}
              placeholder="Enter your Name here"
              className="outline-none border rounded-md w-80 px-3 py-1 dark:bg-white dark:text-black"
            />
          </div>
          {/* email */}
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              ref={emailInput}
              placeholder="Enter your email here"
              className="outline-none border rounded-md w-80 px-3 py-1 dark:bg-white dark:text-black"
            />
          </div>
          {/* password */}
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="password"
              ref={passInput}
              placeholder="Enter your password here"
              className="outline-none border rounded-md w-80 px-3 py-1 dark:bg-white dark:text-black"
            />
          </div>
          <div className="mt-6 items-center text-center space-y-2">
            <button 
              type="submit"
              className="bg-orange-500 px-3 py-1 rounded-md hover:bg-orange-600 duration-200">
              Create Account
            </button>
            <div>
              Already have an account? 
              <span onClick={handleLogin} className="underline text-blue-500 cursor-pointer ml-1">
                Login
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
